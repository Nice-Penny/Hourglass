(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function RT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _y={exports:{}},ru={},vy={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),CT=Symbol.for("react.portal"),kT=Symbol.for("react.fragment"),PT=Symbol.for("react.strict_mode"),NT=Symbol.for("react.profiler"),xT=Symbol.for("react.provider"),DT=Symbol.for("react.context"),VT=Symbol.for("react.forward_ref"),OT=Symbol.for("react.suspense"),LT=Symbol.for("react.memo"),MT=Symbol.for("react.lazy"),Op=Symbol.iterator;function bT(t){return t===null||typeof t!="object"?null:(t=Op&&t[Op]||t["@@iterator"],typeof t=="function"?t:null)}var Ey={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wy=Object.assign,Ty={};function es(t,e,n){this.props=t,this.context=e,this.refs=Ty,this.updater=n||Ey}es.prototype.isReactComponent={};es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Iy(){}Iy.prototype=es.prototype;function nd(t,e,n){this.props=t,this.context=e,this.refs=Ty,this.updater=n||Ey}var rd=nd.prototype=new Iy;rd.constructor=nd;wy(rd,es.prototype);rd.isPureReactComponent=!0;var Lp=Array.isArray,Sy=Object.prototype.hasOwnProperty,id={current:null},Ay={key:!0,ref:!0,__self:!0,__source:!0};function Ry(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Sy.call(e,r)&&!Ay.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Fo,type:t,key:s,ref:o,props:i,_owner:id.current}}function FT(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function UT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mp=/\/+/g;function ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UT(""+t.key):e.toString(36)}function za(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fo:case CT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ec(o,0):r,Lp(i)?(n="",t!=null&&(n=t.replace(Mp,"$&/")+"/"),za(i,e,n,"",function(h){return h})):i!=null&&(sd(i)&&(i=FT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Lp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ec(s,l);o+=za(s,e,n,u,i)}else if(u=bT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ec(s,l++),o+=za(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var r=[],i=0;return za(t,r,"","",function(s){return e.call(n,s,i++)}),r}function jT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},Ba={transition:null},zT={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Ba,ReactCurrentOwner:id};function Cy(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!sd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=es;ie.Fragment=kT;ie.Profiler=NT;ie.PureComponent=nd;ie.StrictMode=PT;ie.Suspense=OT;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zT;ie.act=Cy;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=wy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=id.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Sy.call(e,u)&&!Ay.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Fo,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:DT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xT,_context:t},t.Consumer=t};ie.createElement=Ry;ie.createFactory=function(t){var e=Ry.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:VT,render:t}};ie.isValidElement=sd;ie.lazy=function(t){return{$$typeof:MT,_payload:{_status:-1,_result:t},_init:jT}};ie.memo=function(t,e){return{$$typeof:LT,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Ba.transition;Ba.transition={};try{t()}finally{Ba.transition=e}};ie.unstable_act=Cy;ie.useCallback=function(t,e){return ct.current.useCallback(t,e)};ie.useContext=function(t){return ct.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};ie.useEffect=function(t,e){return ct.current.useEffect(t,e)};ie.useId=function(){return ct.current.useId()};ie.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return ct.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};ie.useRef=function(t){return ct.current.useRef(t)};ie.useState=function(t){return ct.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return ct.current.useTransition()};ie.version="18.3.1";vy.exports=ie;var H=vy.exports;const BT=RT(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $T=H,HT=Symbol.for("react.element"),WT=Symbol.for("react.fragment"),qT=Object.prototype.hasOwnProperty,KT=$T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GT={key:!0,ref:!0,__self:!0,__source:!0};function ky(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)qT.call(e,r)&&!GT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:HT,type:t,key:s,ref:o,props:i,_owner:KT.current}}ru.Fragment=WT;ru.jsx=ky;ru.jsxs=ky;_y.exports=ru;var E=_y.exports,Fc={},Py={exports:{}},Rt={},Ny={exports:{}},xy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var J=B.length;B.push(G);e:for(;0<J;){var ue=J-1>>>1,fe=B[ue];if(0<i(fe,G))B[ue]=G,B[J]=fe,J=ue;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],J=B.pop();if(J!==G){B[0]=J;e:for(var ue=0,fe=B.length,ae=fe>>>1;ue<ae;){var te=2*(ue+1)-1,ke=B[te],Et=te+1,Jt=B[Et];if(0>i(ke,J))Et<fe&&0>i(Jt,ke)?(B[ue]=Jt,B[Et]=J,ue=Et):(B[ue]=ke,B[te]=J,ue=te);else if(Et<fe&&0>i(Jt,J))B[ue]=Jt,B[Et]=J,ue=Et;else break e}}return G}function i(B,G){var J=B.sortIndex-G.sortIndex;return J!==0?J:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,y=3,I=!1,x=!1,D=!1,b=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(B){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=B)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function L(B){if(D=!1,C(B),!x)if(n(u)!==null)x=!0,Yt(P);else{var G=n(h);G!==null&&Ft(L,G.startTime-B)}}function P(B,G){x=!1,D&&(D=!1,R(m),m=-1),I=!0;var J=y;try{for(C(G),p=n(u);p!==null&&(!(p.expirationTime>G)||B&&!A());){var ue=p.callback;if(typeof ue=="function"){p.callback=null,y=p.priorityLevel;var fe=ue(p.expirationTime<=G);G=t.unstable_now(),typeof fe=="function"?p.callback=fe:p===n(u)&&r(u),C(G)}else r(u);p=n(u)}if(p!==null)var ae=!0;else{var te=n(h);te!==null&&Ft(L,te.startTime-G),ae=!1}return ae}finally{p=null,y=J,I=!1}}var O=!1,_=null,m=-1,v=5,S=-1;function A(){return!(t.unstable_now()-S<v)}function k(){if(_!==null){var B=t.unstable_now();S=B;var G=!0;try{G=_(!0,B)}finally{G?w():(O=!1,_=null)}}else O=!1}var w;if(typeof T=="function")w=function(){T(k)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,st=we.port2;we.port1.onmessage=k,w=function(){st.postMessage(null)}}else w=function(){b(k,0)};function Yt(B){_=B,O||(O=!0,w())}function Ft(B,G){m=b(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||I||(x=!0,Yt(P))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var J=y;y=G;try{return B()}finally{y=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=y;y=B;try{return G()}finally{y=J}},t.unstable_scheduleCallback=function(B,G,J){var ue=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ue+J:ue):J=ue,B){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=J+fe,B={id:f++,callback:G,priorityLevel:B,startTime:J,expirationTime:fe,sortIndex:-1},J>ue?(B.sortIndex=J,e(h,B),n(u)===null&&B===n(h)&&(D?(R(m),m=-1):D=!0,Ft(L,J-ue))):(B.sortIndex=fe,e(u,B),x||I||(x=!0,Yt(P))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var G=y;return function(){var J=y;y=G;try{return B.apply(this,arguments)}finally{y=J}}}})(xy);Ny.exports=xy;var QT=Ny.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XT=H,At=QT;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dy=new Set,lo={};function ei(t,e){Bi(t,e),Bi(t+"Capture",e)}function Bi(t,e){for(lo[t]=e,t=0;t<e.length;t++)Dy.add(e[t])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uc=Object.prototype.hasOwnProperty,YT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bp={},Fp={};function JT(t){return Uc.call(Fp,t)?!0:Uc.call(bp,t)?!1:YT.test(t)?Fp[t]=!0:(bp[t]=!0,!1)}function ZT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function eI(t,e,n,r){if(e===null||typeof e>"u"||ZT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function ad(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(od,ad);Ge[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(od,ad);Ge[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(od,ad);Ge[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function ld(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(eI(e,n,i,r)&&(n=null),r||i===null?JT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=XT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_a=Symbol.for("react.element"),gi=Symbol.for("react.portal"),yi=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),jc=Symbol.for("react.profiler"),Vy=Symbol.for("react.provider"),Oy=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),zc=Symbol.for("react.suspense"),Bc=Symbol.for("react.suspense_list"),hd=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),Ly=Symbol.for("react.offscreen"),Up=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=Up&&t[Up]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,tc;function Fs(t){if(tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tc=e&&e[1]||""}return`
`+tc+t}var nc=!1;function rc(t,e){if(!t||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fs(t):""}function tI(t){switch(t.tag){case 5:return Fs(t.type);case 16:return Fs("Lazy");case 13:return Fs("Suspense");case 19:return Fs("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function $c(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yi:return"Fragment";case gi:return"Portal";case jc:return"Profiler";case ud:return"StrictMode";case zc:return"Suspense";case Bc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Oy:return(t.displayName||"Context")+".Consumer";case Vy:return(t._context.displayName||"Context")+".Provider";case cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hd:return e=t.displayName||null,e!==null?e:$c(t.type)||"Memo";case Hn:e=t._payload,t=t._init;try{return $c(t(e))}catch{}}return null}function nI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $c(e);case 8:return e===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function My(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rI(t){var e=My(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function va(t){t._valueTracker||(t._valueTracker=rI(t))}function by(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=My(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hc(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fy(t,e){e=e.checked,e!=null&&ld(t,"checked",e,!1)}function Wc(t,e){Fy(t,e);var n=dr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&qc(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qc(t,e,n){(e!=="number"||cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Us=Array.isArray;function Pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Us(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function Uy(t,e){var n=dr(e.value),r=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $p(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ea,zy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ea=Ea||document.createElement("div"),Ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iI=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){iI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function By(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function $y(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=By(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var sI=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qc(t,e){if(e){if(sI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Xc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yc=null;function dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jc=null,Ni=null,xi=null;function Hp(t){if(t=zo(t)){if(typeof Jc!="function")throw Error(U(280));var e=t.stateNode;e&&(e=lu(e),Jc(t.stateNode,t.type,e))}}function Hy(t){Ni?xi?xi.push(t):xi=[t]:Ni=t}function Wy(){if(Ni){var t=Ni,e=xi;if(xi=Ni=null,Hp(t),e)for(t=0;t<e.length;t++)Hp(e[t])}}function qy(t,e){return t(e)}function Ky(){}var ic=!1;function Gy(t,e,n){if(ic)return t(e,n);ic=!0;try{return qy(t,e,n)}finally{ic=!1,(Ni!==null||xi!==null)&&(Ky(),Wy())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var r=lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Zc=!1;if(Rn)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Zc=!1}function oI(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Qs=!1,hl=null,dl=!1,eh=null,aI={onError:function(t){Qs=!0,hl=t}};function lI(t,e,n,r,i,s,o,l,u){Qs=!1,hl=null,oI.apply(aI,arguments)}function uI(t,e,n,r,i,s,o,l,u){if(lI.apply(this,arguments),Qs){if(Qs){var h=hl;Qs=!1,hl=null}else throw Error(U(198));dl||(dl=!0,eh=h)}}function ti(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wp(t){if(ti(t)!==t)throw Error(U(188))}function cI(t){var e=t.alternate;if(!e){if(e=ti(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wp(i),t;if(s===r)return Wp(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Xy(t){return t=cI(t),t!==null?Yy(t):null}function Yy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yy(t);if(e!==null)return e;t=t.sibling}return null}var Jy=At.unstable_scheduleCallback,qp=At.unstable_cancelCallback,hI=At.unstable_shouldYield,dI=At.unstable_requestPaint,Ne=At.unstable_now,fI=At.unstable_getCurrentPriorityLevel,fd=At.unstable_ImmediatePriority,Zy=At.unstable_UserBlockingPriority,fl=At.unstable_NormalPriority,pI=At.unstable_LowPriority,e_=At.unstable_IdlePriority,iu=null,on=null;function mI(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(iu,t,void 0,(t.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:_I,gI=Math.log,yI=Math.LN2;function _I(t){return t>>>=0,t===0?32:31-(gI(t)/yI|0)|0}var wa=64,Ta=4194304;function js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=js(l):(s&=o,s!==0&&(r=js(s)))}else o=n&~i,o!==0?r=js(o):s!==0&&(r=js(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qt(e),i=1<<n,r|=t[n],e&=~i;return r}function vI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function EI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=vI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function th(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function t_(){var t=wa;return wa<<=1,!(wa&4194240)&&(wa=64),t}function sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qt(e),t[e]=n}function wI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function pd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function n_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var r_,md,i_,s_,o_,nh=!1,Ia=[],er=null,tr=null,nr=null,ho=new Map,fo=new Map,qn=[],TI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kp(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function Ps(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zo(e),e!==null&&md(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function II(t,e,n,r,i){switch(e){case"focusin":return er=Ps(er,t,e,n,r,i),!0;case"dragenter":return tr=Ps(tr,t,e,n,r,i),!0;case"mouseover":return nr=Ps(nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ho.set(s,Ps(ho.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fo.set(s,Ps(fo.get(s)||null,t,e,n,r,i)),!0}return!1}function a_(t){var e=Or(t.target);if(e!==null){var n=ti(e);if(n!==null){if(e=n.tag,e===13){if(e=Qy(n),e!==null){t.blockedOn=e,o_(t.priority,function(){i_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $a(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yc=r,n.target.dispatchEvent(r),Yc=null}else return e=zo(n),e!==null&&md(e),t.blockedOn=n,!1;e.shift()}return!0}function Gp(t,e,n){$a(t)&&n.delete(e)}function SI(){nh=!1,er!==null&&$a(er)&&(er=null),tr!==null&&$a(tr)&&(tr=null),nr!==null&&$a(nr)&&(nr=null),ho.forEach(Gp),fo.forEach(Gp)}function Ns(t,e){t.blockedOn===e&&(t.blockedOn=null,nh||(nh=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,SI)))}function po(t){function e(i){return Ns(i,t)}if(0<Ia.length){Ns(Ia[0],t);for(var n=1;n<Ia.length;n++){var r=Ia[n];r.blockedOn===t&&(r.blockedOn=null)}}for(er!==null&&Ns(er,t),tr!==null&&Ns(tr,t),nr!==null&&Ns(nr,t),ho.forEach(e),fo.forEach(e),n=0;n<qn.length;n++)r=qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)a_(n),n.blockedOn===null&&qn.shift()}var Di=On.ReactCurrentBatchConfig,ml=!0;function AI(t,e,n,r){var i=he,s=Di.transition;Di.transition=null;try{he=1,gd(t,e,n,r)}finally{he=i,Di.transition=s}}function RI(t,e,n,r){var i=he,s=Di.transition;Di.transition=null;try{he=4,gd(t,e,n,r)}finally{he=i,Di.transition=s}}function gd(t,e,n,r){if(ml){var i=rh(t,e,n,r);if(i===null)mc(t,e,r,gl,n),Kp(t,r);else if(II(i,t,e,n,r))r.stopPropagation();else if(Kp(t,r),e&4&&-1<TI.indexOf(t)){for(;i!==null;){var s=zo(i);if(s!==null&&r_(s),s=rh(t,e,n,r),s===null&&mc(t,e,r,gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mc(t,e,r,null,n)}}var gl=null;function rh(t,e,n,r){if(gl=null,t=dd(r),t=Or(t),t!==null)if(e=ti(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gl=t,null}function l_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fI()){case fd:return 1;case Zy:return 4;case fl:case pI:return 16;case e_:return 536870912;default:return 16}default:return 16}}var Jn=null,yd=null,Ha=null;function u_(){if(Ha)return Ha;var t,e=yd,n=e.length,r,i="value"in Jn?Jn.value:Jn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ha=i.slice(t,1<r?1-r:void 0)}function Wa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sa(){return!0}function Qp(){return!1}function Ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Sa:Qp,this.isPropagationStopped=Qp,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sa)},persist:function(){},isPersistent:Sa}),e}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=Ct(ts),jo=Ae({},ts,{view:0,detail:0}),CI=Ct(jo),oc,ac,xs,su=Ae({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xs&&(xs&&t.type==="mousemove"?(oc=t.screenX-xs.screenX,ac=t.screenY-xs.screenY):ac=oc=0,xs=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),Xp=Ct(su),kI=Ae({},su,{dataTransfer:0}),PI=Ct(kI),NI=Ae({},jo,{relatedTarget:0}),lc=Ct(NI),xI=Ae({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),DI=Ct(xI),VI=Ae({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OI=Ct(VI),LI=Ae({},ts,{data:0}),Yp=Ct(LI),MI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FI[t])?!!e[t]:!1}function vd(){return UI}var jI=Ae({},jo,{key:function(t){if(t.key){var e=MI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vd,charCode:function(t){return t.type==="keypress"?Wa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zI=Ct(jI),BI=Ae({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=Ct(BI),$I=Ae({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vd}),HI=Ct($I),WI=Ae({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),qI=Ct(WI),KI=Ae({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),GI=Ct(KI),QI=[9,13,27,32],Ed=Rn&&"CompositionEvent"in window,Xs=null;Rn&&"documentMode"in document&&(Xs=document.documentMode);var XI=Rn&&"TextEvent"in window&&!Xs,c_=Rn&&(!Ed||Xs&&8<Xs&&11>=Xs),Zp=" ",em=!1;function h_(t,e){switch(t){case"keyup":return QI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _i=!1;function YI(t,e){switch(t){case"compositionend":return d_(e);case"keypress":return e.which!==32?null:(em=!0,Zp);case"textInput":return t=e.data,t===Zp&&em?null:t;default:return null}}function JI(t,e){if(_i)return t==="compositionend"||!Ed&&h_(t,e)?(t=u_(),Ha=yd=Jn=null,_i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c_&&e.locale!=="ko"?null:e.data;default:return null}}var ZI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZI[t.type]:e==="textarea"}function f_(t,e,n,r){Hy(r),e=yl(e,"onChange"),0<e.length&&(n=new _d("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ys=null,mo=null;function e0(t){S_(t,0)}function ou(t){var e=wi(t);if(by(e))return t}function t0(t,e){if(t==="change")return e}var p_=!1;if(Rn){var uc;if(Rn){var cc="oninput"in document;if(!cc){var nm=document.createElement("div");nm.setAttribute("oninput","return;"),cc=typeof nm.oninput=="function"}uc=cc}else uc=!1;p_=uc&&(!document.documentMode||9<document.documentMode)}function rm(){Ys&&(Ys.detachEvent("onpropertychange",m_),mo=Ys=null)}function m_(t){if(t.propertyName==="value"&&ou(mo)){var e=[];f_(e,mo,t,dd(t)),Gy(e0,e)}}function n0(t,e,n){t==="focusin"?(rm(),Ys=e,mo=n,Ys.attachEvent("onpropertychange",m_)):t==="focusout"&&rm()}function r0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(mo)}function i0(t,e){if(t==="click")return ou(e)}function s0(t,e){if(t==="input"||t==="change")return ou(e)}function o0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:o0;function go(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Uc.call(e,i)||!Qt(t[i],e[i]))return!1}return!0}function im(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sm(t,e){var n=im(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=im(n)}}function g_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?g_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function y_(){for(var t=window,e=cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cl(t.document)}return e}function wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function a0(t){var e=y_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&g_(n.ownerDocument.documentElement,n)){if(r!==null&&wd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sm(n,s);var o=sm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l0=Rn&&"documentMode"in document&&11>=document.documentMode,vi=null,ih=null,Js=null,sh=!1;function om(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sh||vi==null||vi!==cl(r)||(r=vi,"selectionStart"in r&&wd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Js&&go(Js,r)||(Js=r,r=yl(ih,"onSelect"),0<r.length&&(e=new _d("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vi)))}function Aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ei={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},hc={},__={};Rn&&(__=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);function au(t){if(hc[t])return hc[t];if(!Ei[t])return t;var e=Ei[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in __)return hc[t]=e[n];return t}var v_=au("animationend"),E_=au("animationiteration"),w_=au("animationstart"),T_=au("transitionend"),I_=new Map,am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){I_.set(t,e),ei(e,[t])}for(var dc=0;dc<am.length;dc++){var fc=am[dc],u0=fc.toLowerCase(),c0=fc[0].toUpperCase()+fc.slice(1);wr(u0,"on"+c0)}wr(v_,"onAnimationEnd");wr(E_,"onAnimationIteration");wr(w_,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(T_,"onTransitionEnd");Bi("onMouseEnter",["mouseout","mouseover"]);Bi("onMouseLeave",["mouseout","mouseover"]);Bi("onPointerEnter",["pointerout","pointerover"]);Bi("onPointerLeave",["pointerout","pointerover"]);ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h0=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function lm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,uI(r,e,void 0,t),t.currentTarget=null}function S_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;lm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;lm(i,l,h),s=u}}}if(dl)throw t=eh,dl=!1,eh=null,t}function ge(t,e){var n=e[ch];n===void 0&&(n=e[ch]=new Set);var r=t+"__bubble";n.has(r)||(A_(e,t,2,!1),n.add(r))}function pc(t,e,n){var r=0;e&&(r|=4),A_(n,t,r,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[Ra]){t[Ra]=!0,Dy.forEach(function(n){n!=="selectionchange"&&(h0.has(n)||pc(n,!1,t),pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,pc("selectionchange",!1,e))}}function A_(t,e,n,r){switch(l_(e)){case 1:var i=AI;break;case 4:i=RI;break;default:i=gd}n=i.bind(null,e,n,t),i=void 0,!Zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Or(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Gy(function(){var h=s,f=dd(n),p=[];e:{var y=I_.get(t);if(y!==void 0){var I=_d,x=t;switch(t){case"keypress":if(Wa(n)===0)break e;case"keydown":case"keyup":I=zI;break;case"focusin":x="focus",I=lc;break;case"focusout":x="blur",I=lc;break;case"beforeblur":case"afterblur":I=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=PI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=HI;break;case v_:case E_:case w_:I=DI;break;case T_:I=qI;break;case"scroll":I=CI;break;case"wheel":I=GI;break;case"copy":case"cut":case"paste":I=OI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Jp}var D=(e&4)!==0,b=!D&&t==="scroll",R=D?y!==null?y+"Capture":null:y;D=[];for(var T=h,C;T!==null;){C=T;var L=C.stateNode;if(C.tag===5&&L!==null&&(C=L,R!==null&&(L=co(T,R),L!=null&&D.push(_o(T,L,C)))),b)break;T=T.return}0<D.length&&(y=new I(y,x,null,n,f),p.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",y&&n!==Yc&&(x=n.relatedTarget||n.fromElement)&&(Or(x)||x[Cn]))break e;if((I||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,I?(x=n.relatedTarget||n.toElement,I=h,x=x?Or(x):null,x!==null&&(b=ti(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(I=null,x=h),I!==x)){if(D=Xp,L="onMouseLeave",R="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(D=Jp,L="onPointerLeave",R="onPointerEnter",T="pointer"),b=I==null?y:wi(I),C=x==null?y:wi(x),y=new D(L,T+"leave",I,n,f),y.target=b,y.relatedTarget=C,L=null,Or(f)===h&&(D=new D(R,T+"enter",x,n,f),D.target=C,D.relatedTarget=b,L=D),b=L,I&&x)t:{for(D=I,R=x,T=0,C=D;C;C=hi(C))T++;for(C=0,L=R;L;L=hi(L))C++;for(;0<T-C;)D=hi(D),T--;for(;0<C-T;)R=hi(R),C--;for(;T--;){if(D===R||R!==null&&D===R.alternate)break t;D=hi(D),R=hi(R)}D=null}else D=null;I!==null&&um(p,y,I,D,!1),x!==null&&b!==null&&um(p,b,x,D,!0)}}e:{if(y=h?wi(h):window,I=y.nodeName&&y.nodeName.toLowerCase(),I==="select"||I==="input"&&y.type==="file")var P=t0;else if(tm(y))if(p_)P=s0;else{P=r0;var O=n0}else(I=y.nodeName)&&I.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(P=i0);if(P&&(P=P(t,h))){f_(p,P,n,f);break e}O&&O(t,y,h),t==="focusout"&&(O=y._wrapperState)&&O.controlled&&y.type==="number"&&qc(y,"number",y.value)}switch(O=h?wi(h):window,t){case"focusin":(tm(O)||O.contentEditable==="true")&&(vi=O,ih=h,Js=null);break;case"focusout":Js=ih=vi=null;break;case"mousedown":sh=!0;break;case"contextmenu":case"mouseup":case"dragend":sh=!1,om(p,n,f);break;case"selectionchange":if(l0)break;case"keydown":case"keyup":om(p,n,f)}var _;if(Ed)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else _i?h_(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(c_&&n.locale!=="ko"&&(_i||m!=="onCompositionStart"?m==="onCompositionEnd"&&_i&&(_=u_()):(Jn=f,yd="value"in Jn?Jn.value:Jn.textContent,_i=!0)),O=yl(h,m),0<O.length&&(m=new Yp(m,t,null,n,f),p.push({event:m,listeners:O}),_?m.data=_:(_=d_(n),_!==null&&(m.data=_)))),(_=XI?YI(t,n):JI(t,n))&&(h=yl(h,"onBeforeInput"),0<h.length&&(f=new Yp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=_))}S_(p,e)})}function _o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=co(t,n),s!=null&&r.unshift(_o(t,s,i)),s=co(t,e),s!=null&&r.push(_o(t,s,i))),t=t.return}return r}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function um(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=co(n,s),u!=null&&o.unshift(_o(n,u,l))):i||(u=co(n,s),u!=null&&o.push(_o(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var d0=/\r\n?/g,f0=/\u0000|\uFFFD/g;function cm(t){return(typeof t=="string"?t:""+t).replace(d0,`
`).replace(f0,"")}function Ca(t,e,n){if(e=cm(e),cm(t)!==e&&n)throw Error(U(425))}function _l(){}var oh=null,ah=null;function lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uh=typeof setTimeout=="function"?setTimeout:void 0,p0=typeof clearTimeout=="function"?clearTimeout:void 0,hm=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof hm<"u"?function(t){return hm.resolve(null).then(t).catch(g0)}:uh;function g0(t){setTimeout(function(){throw t})}function gc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);po(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),sn="__reactFiber$"+ns,vo="__reactProps$"+ns,Cn="__reactContainer$"+ns,ch="__reactEvents$"+ns,y0="__reactListeners$"+ns,_0="__reactHandles$"+ns;function Or(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dm(t);t!==null;){if(n=t[sn])return n;t=dm(t)}return e}t=n,n=t.parentNode}return null}function zo(t){return t=t[sn]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function lu(t){return t[vo]||null}var hh=[],Ti=-1;function Tr(t){return{current:t}}function _e(t){0>Ti||(t.current=hh[Ti],hh[Ti]=null,Ti--)}function pe(t,e){Ti++,hh[Ti]=t.current,t.current=e}var fr={},rt=Tr(fr),gt=Tr(!1),$r=fr;function $i(t,e){var n=t.type.contextTypes;if(!n)return fr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function vl(){_e(gt),_e(rt)}function fm(t,e,n){if(rt.current!==fr)throw Error(U(168));pe(rt,e),pe(gt,n)}function R_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,nI(t)||"Unknown",i));return Ae({},n,r)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,$r=rt.current,pe(rt,t),pe(gt,gt.current),!0}function pm(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=R_(t,e,$r),r.__reactInternalMemoizedMergedChildContext=t,_e(gt),_e(rt),pe(rt,t)):_e(gt),pe(gt,n)}var yn=null,uu=!1,yc=!1;function C_(t){yn===null?yn=[t]:yn.push(t)}function v0(t){uu=!0,C_(t)}function Ir(){if(!yc&&yn!==null){yc=!0;var t=0,e=he;try{var n=yn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,uu=!1}catch(i){throw yn!==null&&(yn=yn.slice(t+1)),Jy(fd,Ir),i}finally{he=e,yc=!1}}return null}var Ii=[],Si=0,wl=null,Tl=0,Pt=[],Nt=0,Hr=null,_n=1,vn="";function xr(t,e){Ii[Si++]=Tl,Ii[Si++]=wl,wl=t,Tl=e}function k_(t,e,n){Pt[Nt++]=_n,Pt[Nt++]=vn,Pt[Nt++]=Hr,Hr=t;var r=_n;t=vn;var i=32-qt(r)-1;r&=~(1<<i),n+=1;var s=32-qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_n=1<<32-qt(e)+i|n<<i|r,vn=s+t}else _n=1<<s|n<<i|r,vn=t}function Td(t){t.return!==null&&(xr(t,1),k_(t,1,0))}function Id(t){for(;t===wl;)wl=Ii[--Si],Ii[Si]=null,Tl=Ii[--Si],Ii[Si]=null;for(;t===Hr;)Hr=Pt[--Nt],Pt[Nt]=null,vn=Pt[--Nt],Pt[Nt]=null,_n=Pt[--Nt],Pt[Nt]=null}var St=null,It=null,ve=!1,$t=null;function P_(t,e){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,It=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:_n,overflow:vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,It=null,!0):!1;default:return!1}}function dh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fh(t){if(ve){var e=It;if(e){var n=e;if(!mm(t,e)){if(dh(t))throw Error(U(418));e=rr(n.nextSibling);var r=St;e&&mm(t,e)?P_(r,n):(t.flags=t.flags&-4097|2,ve=!1,St=t)}}else{if(dh(t))throw Error(U(418));t.flags=t.flags&-4097|2,ve=!1,St=t}}}function gm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function ka(t){if(t!==St)return!1;if(!ve)return gm(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lh(t.type,t.memoizedProps)),e&&(e=It)){if(dh(t))throw N_(),Error(U(418));for(;e;)P_(t,e),e=rr(e.nextSibling)}if(gm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=St?rr(t.stateNode.nextSibling):null;return!0}function N_(){for(var t=It;t;)t=rr(t.nextSibling)}function Hi(){It=St=null,ve=!1}function Sd(t){$t===null?$t=[t]:$t.push(t)}var E0=On.ReactCurrentBatchConfig;function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Pa(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ym(t){var e=t._init;return e(t._payload)}function x_(t){function e(R,T){if(t){var C=R.deletions;C===null?(R.deletions=[T],R.flags|=16):C.push(T)}}function n(R,T){if(!t)return null;for(;T!==null;)e(R,T),T=T.sibling;return null}function r(R,T){for(R=new Map;T!==null;)T.key!==null?R.set(T.key,T):R.set(T.index,T),T=T.sibling;return R}function i(R,T){return R=ar(R,T),R.index=0,R.sibling=null,R}function s(R,T,C){return R.index=C,t?(C=R.alternate,C!==null?(C=C.index,C<T?(R.flags|=2,T):C):(R.flags|=2,T)):(R.flags|=1048576,T)}function o(R){return t&&R.alternate===null&&(R.flags|=2),R}function l(R,T,C,L){return T===null||T.tag!==6?(T=Sc(C,R.mode,L),T.return=R,T):(T=i(T,C),T.return=R,T)}function u(R,T,C,L){var P=C.type;return P===yi?f(R,T,C.props.children,L,C.key):T!==null&&(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Hn&&ym(P)===T.type)?(L=i(T,C.props),L.ref=Ds(R,T,C),L.return=R,L):(L=Ja(C.type,C.key,C.props,null,R.mode,L),L.ref=Ds(R,T,C),L.return=R,L)}function h(R,T,C,L){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=Ac(C,R.mode,L),T.return=R,T):(T=i(T,C.children||[]),T.return=R,T)}function f(R,T,C,L,P){return T===null||T.tag!==7?(T=Ur(C,R.mode,L,P),T.return=R,T):(T=i(T,C),T.return=R,T)}function p(R,T,C){if(typeof T=="string"&&T!==""||typeof T=="number")return T=Sc(""+T,R.mode,C),T.return=R,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case _a:return C=Ja(T.type,T.key,T.props,null,R.mode,C),C.ref=Ds(R,null,T),C.return=R,C;case gi:return T=Ac(T,R.mode,C),T.return=R,T;case Hn:var L=T._init;return p(R,L(T._payload),C)}if(Us(T)||Cs(T))return T=Ur(T,R.mode,C,null),T.return=R,T;Pa(R,T)}return null}function y(R,T,C,L){var P=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return P!==null?null:l(R,T,""+C,L);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case _a:return C.key===P?u(R,T,C,L):null;case gi:return C.key===P?h(R,T,C,L):null;case Hn:return P=C._init,y(R,T,P(C._payload),L)}if(Us(C)||Cs(C))return P!==null?null:f(R,T,C,L,null);Pa(R,C)}return null}function I(R,T,C,L,P){if(typeof L=="string"&&L!==""||typeof L=="number")return R=R.get(C)||null,l(T,R,""+L,P);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case _a:return R=R.get(L.key===null?C:L.key)||null,u(T,R,L,P);case gi:return R=R.get(L.key===null?C:L.key)||null,h(T,R,L,P);case Hn:var O=L._init;return I(R,T,C,O(L._payload),P)}if(Us(L)||Cs(L))return R=R.get(C)||null,f(T,R,L,P,null);Pa(T,L)}return null}function x(R,T,C,L){for(var P=null,O=null,_=T,m=T=0,v=null;_!==null&&m<C.length;m++){_.index>m?(v=_,_=null):v=_.sibling;var S=y(R,_,C[m],L);if(S===null){_===null&&(_=v);break}t&&_&&S.alternate===null&&e(R,_),T=s(S,T,m),O===null?P=S:O.sibling=S,O=S,_=v}if(m===C.length)return n(R,_),ve&&xr(R,m),P;if(_===null){for(;m<C.length;m++)_=p(R,C[m],L),_!==null&&(T=s(_,T,m),O===null?P=_:O.sibling=_,O=_);return ve&&xr(R,m),P}for(_=r(R,_);m<C.length;m++)v=I(_,R,m,C[m],L),v!==null&&(t&&v.alternate!==null&&_.delete(v.key===null?m:v.key),T=s(v,T,m),O===null?P=v:O.sibling=v,O=v);return t&&_.forEach(function(A){return e(R,A)}),ve&&xr(R,m),P}function D(R,T,C,L){var P=Cs(C);if(typeof P!="function")throw Error(U(150));if(C=P.call(C),C==null)throw Error(U(151));for(var O=P=null,_=T,m=T=0,v=null,S=C.next();_!==null&&!S.done;m++,S=C.next()){_.index>m?(v=_,_=null):v=_.sibling;var A=y(R,_,S.value,L);if(A===null){_===null&&(_=v);break}t&&_&&A.alternate===null&&e(R,_),T=s(A,T,m),O===null?P=A:O.sibling=A,O=A,_=v}if(S.done)return n(R,_),ve&&xr(R,m),P;if(_===null){for(;!S.done;m++,S=C.next())S=p(R,S.value,L),S!==null&&(T=s(S,T,m),O===null?P=S:O.sibling=S,O=S);return ve&&xr(R,m),P}for(_=r(R,_);!S.done;m++,S=C.next())S=I(_,R,m,S.value,L),S!==null&&(t&&S.alternate!==null&&_.delete(S.key===null?m:S.key),T=s(S,T,m),O===null?P=S:O.sibling=S,O=S);return t&&_.forEach(function(k){return e(R,k)}),ve&&xr(R,m),P}function b(R,T,C,L){if(typeof C=="object"&&C!==null&&C.type===yi&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case _a:e:{for(var P=C.key,O=T;O!==null;){if(O.key===P){if(P=C.type,P===yi){if(O.tag===7){n(R,O.sibling),T=i(O,C.props.children),T.return=R,R=T;break e}}else if(O.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Hn&&ym(P)===O.type){n(R,O.sibling),T=i(O,C.props),T.ref=Ds(R,O,C),T.return=R,R=T;break e}n(R,O);break}else e(R,O);O=O.sibling}C.type===yi?(T=Ur(C.props.children,R.mode,L,C.key),T.return=R,R=T):(L=Ja(C.type,C.key,C.props,null,R.mode,L),L.ref=Ds(R,T,C),L.return=R,R=L)}return o(R);case gi:e:{for(O=C.key;T!==null;){if(T.key===O)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){n(R,T.sibling),T=i(T,C.children||[]),T.return=R,R=T;break e}else{n(R,T);break}else e(R,T);T=T.sibling}T=Ac(C,R.mode,L),T.return=R,R=T}return o(R);case Hn:return O=C._init,b(R,T,O(C._payload),L)}if(Us(C))return x(R,T,C,L);if(Cs(C))return D(R,T,C,L);Pa(R,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,T!==null&&T.tag===6?(n(R,T.sibling),T=i(T,C),T.return=R,R=T):(n(R,T),T=Sc(C,R.mode,L),T.return=R,R=T),o(R)):n(R,T)}return b}var Wi=x_(!0),D_=x_(!1),Il=Tr(null),Sl=null,Ai=null,Ad=null;function Rd(){Ad=Ai=Sl=null}function Cd(t){var e=Il.current;_e(Il),t._currentValue=e}function ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Vi(t,e){Sl=t,Ad=Ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(Ad!==t)if(t={context:t,memoizedValue:e,next:null},Ai===null){if(Sl===null)throw Error(U(308));Ai=t,Sl.dependencies={lanes:0,firstContext:t}}else Ai=Ai.next=t;return e}var Lr=null;function kd(t){Lr===null?Lr=[t]:Lr.push(t)}function V_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,kd(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wn=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function O_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function In(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,kd(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function qa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pd(t,n)}}function _m(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,r){var i=t.updateQueue;Wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,I=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,D=l;switch(y=e,I=n,D.tag){case 1:if(x=D.payload,typeof x=="function"){p=x.call(I,p,y);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=D.payload,y=typeof x=="function"?x.call(I,p,y):x,y==null)break e;p=Ae({},p,y);break e;case 2:Wn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else I={eventTime:I,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=I,u=p):f=f.next=I,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=p}}function vm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Bo={},an=Tr(Bo),Eo=Tr(Bo),wo=Tr(Bo);function Mr(t){if(t===Bo)throw Error(U(174));return t}function Nd(t,e){switch(pe(wo,e),pe(Eo,t),pe(an,Bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gc(e,t)}_e(an),pe(an,e)}function qi(){_e(an),_e(Eo),_e(wo)}function L_(t){Mr(wo.current);var e=Mr(an.current),n=Gc(e,t.type);e!==n&&(pe(Eo,t),pe(an,n))}function xd(t){Eo.current===t&&(_e(an),_e(Eo))}var Te=Tr(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _c=[];function Dd(){for(var t=0;t<_c.length;t++)_c[t]._workInProgressVersionPrimary=null;_c.length=0}var Ka=On.ReactCurrentDispatcher,vc=On.ReactCurrentBatchConfig,Wr=0,Se=null,Le=null,ze=null,Cl=!1,Zs=!1,To=0,w0=0;function Ye(){throw Error(U(321))}function Vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qt(t[n],e[n]))return!1;return!0}function Od(t,e,n,r,i,s){if(Wr=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ka.current=t===null||t.memoizedState===null?A0:R0,t=n(r,i),Zs){s=0;do{if(Zs=!1,To=0,25<=s)throw Error(U(301));s+=1,ze=Le=null,e.updateQueue=null,Ka.current=C0,t=n(r,i)}while(Zs)}if(Ka.current=kl,e=Le!==null&&Le.next!==null,Wr=0,ze=Le=Se=null,Cl=!1,e)throw Error(U(300));return t}function Ld(){var t=To!==0;return To=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Se.memoizedState=ze=t:ze=ze.next=t,ze}function bt(){if(Le===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=ze===null?Se.memoizedState:ze.next;if(e!==null)ze=e,Le=t;else{if(t===null)throw Error(U(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},ze===null?Se.memoizedState=ze=t:ze=ze.next=t}return ze}function Io(t,e){return typeof e=="function"?e(t):e}function Ec(t){var e=bt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Wr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Se.lanes|=f,qr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Qt(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wc(t){var e=bt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qt(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function M_(){}function b_(t,e){var n=Se,r=bt(),i=e(),s=!Qt(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,Md(j_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,So(9,U_.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(U(349));Wr&30||F_(n,e,i)}return i}function F_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function U_(t,e,n,r){e.value=n,e.getSnapshot=r,z_(e)&&B_(t)}function j_(t,e,n){return n(function(){z_(e)&&B_(t)})}function z_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qt(t,n)}catch{return!0}}function B_(t){var e=kn(t,1);e!==null&&Kt(e,t,1,-1)}function Em(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:t},e.queue=t,t=t.dispatch=S0.bind(null,Se,t),[e.memoizedState,t]}function So(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $_(){return bt().memoizedState}function Ga(t,e,n,r){var i=nn();Se.flags|=t,i.memoizedState=So(1|e,n,void 0,r===void 0?null:r)}function cu(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&Vd(r,o.deps)){i.memoizedState=So(e,n,s,r);return}}Se.flags|=t,i.memoizedState=So(1|e,n,s,r)}function wm(t,e){return Ga(8390656,8,t,e)}function Md(t,e){return cu(2048,8,t,e)}function H_(t,e){return cu(4,2,t,e)}function W_(t,e){return cu(4,4,t,e)}function q_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function K_(t,e,n){return n=n!=null?n.concat([t]):null,cu(4,4,q_.bind(null,e,t),n)}function bd(){}function G_(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Q_(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function X_(t,e,n){return Wr&21?(Qt(n,e)||(n=t_(),Se.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function T0(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=vc.transition;vc.transition={};try{t(!1),e()}finally{he=n,vc.transition=r}}function Y_(){return bt().memoizedState}function I0(t,e,n){var r=or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},J_(t))Z_(e,n);else if(n=V_(t,e,n,r),n!==null){var i=ut();Kt(n,t,r,i),ev(n,e,r)}}function S0(t,e,n){var r=or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(J_(t))Z_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Qt(l,o)){var u=e.interleaved;u===null?(i.next=i,kd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=V_(t,e,i,r),n!==null&&(i=ut(),Kt(n,t,r,i),ev(n,e,r))}}function J_(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function Z_(t,e){Zs=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ev(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pd(t,n)}}var kl={readContext:Mt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},A0={readContext:Mt,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:wm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ga(4194308,4,q_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ga(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ga(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=I0.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:Em,useDebugValue:bd,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=Em(!1),e=t[0];return t=T0.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=nn();if(ve){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),$e===null)throw Error(U(349));Wr&30||F_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wm(j_.bind(null,r,s,t),[t]),r.flags|=2048,So(9,U_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nn(),e=$e.identifierPrefix;if(ve){var n=vn,r=_n;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=To++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=w0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},R0={readContext:Mt,useCallback:G_,useContext:Mt,useEffect:Md,useImperativeHandle:K_,useInsertionEffect:H_,useLayoutEffect:W_,useMemo:Q_,useReducer:Ec,useRef:$_,useState:function(){return Ec(Io)},useDebugValue:bd,useDeferredValue:function(t){var e=bt();return X_(e,Le.memoizedState,t)},useTransition:function(){var t=Ec(Io)[0],e=bt().memoizedState;return[t,e]},useMutableSource:M_,useSyncExternalStore:b_,useId:Y_,unstable_isNewReconciler:!1},C0={readContext:Mt,useCallback:G_,useContext:Mt,useEffect:Md,useImperativeHandle:K_,useInsertionEffect:H_,useLayoutEffect:W_,useMemo:Q_,useReducer:wc,useRef:$_,useState:function(){return wc(Io)},useDebugValue:bd,useDeferredValue:function(t){var e=bt();return Le===null?e.memoizedState=t:X_(e,Le.memoizedState,t)},useTransition:function(){var t=wc(Io)[0],e=bt().memoizedState;return[t,e]},useMutableSource:M_,useSyncExternalStore:b_,useId:Y_,unstable_isNewReconciler:!1};function zt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hu={isMounted:function(t){return(t=t._reactInternals)?ti(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=or(t),s=In(r,i);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(Kt(e,t,i,r),qa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=or(t),s=In(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(Kt(e,t,i,r),qa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=or(t),i=In(n,r);i.tag=2,e!=null&&(i.callback=e),e=ir(t,i,r),e!==null&&(Kt(e,t,r,n),qa(e,t,r))}};function Tm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!go(n,r)||!go(i,s):!0}function tv(t,e,n){var r=!1,i=fr,s=e.contextType;return typeof s=="object"&&s!==null?s=Mt(s):(i=yt(e)?$r:rt.current,r=e.contextTypes,s=(r=r!=null)?$i(t,i):fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Im(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hu.enqueueReplaceState(e,e.state,null)}function gh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Pd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mt(s):(s=yt(e)?$r:rt.current,i.context=$i(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(mh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hu.enqueueReplaceState(i,i.state,null),Al(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ki(t,e){try{var n="",r=e;do n+=tI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var k0=typeof WeakMap=="function"?WeakMap:Map;function nv(t,e,n){n=In(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nl||(Nl=!0,Ch=r),yh(t,e)},n}function rv(t,e,n){n=In(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){yh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yh(t,e),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Sm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new k0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=B0.bind(null,t,e,n),e.then(t,t))}function Am(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=In(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var P0=On.ReactCurrentOwner,mt=!1;function lt(t,e,n,r){e.child=t===null?D_(e,null,n,r):Wi(e,t.child,n,r)}function Cm(t,e,n,r,i){n=n.render;var s=e.ref;return Vi(e,i),r=Od(t,e,n,r,s,i),n=Ld(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(ve&&n&&Td(e),e.flags|=1,lt(t,e,r,i),e.child)}function km(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Wd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,iv(t,e,s,r,i)):(t=Ja(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:go,n(o,r)&&t.ref===e.ref)return Pn(t,e,i)}return e.flags|=1,t=ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function iv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(go(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Pn(t,e,i)}return _h(t,e,n,r,i)}function sv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Ci,Tt),Tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Ci,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Ci,Tt),Tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Ci,Tt),Tt|=r;return lt(t,e,i,n),e.child}function ov(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _h(t,e,n,r,i){var s=yt(n)?$r:rt.current;return s=$i(e,s),Vi(e,i),n=Od(t,e,n,r,s,i),r=Ld(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(ve&&r&&Td(e),e.flags|=1,lt(t,e,n,i),e.child)}function Pm(t,e,n,r,i){if(yt(n)){var s=!0;El(e)}else s=!1;if(Vi(e,i),e.stateNode===null)Qa(t,e),tv(e,n,r),gh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Mt(h):(h=yt(n)?$r:rt.current,h=$i(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Im(e,o,r,h),Wn=!1;var y=e.memoizedState;o.state=y,Al(e,r,o,i),u=e.memoizedState,l!==r||y!==u||gt.current||Wn?(typeof f=="function"&&(mh(e,n,f,r),u=e.memoizedState),(l=Wn||Tm(e,n,l,r,y,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,O_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:zt(e.type,l),o.props=h,p=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Mt(u):(u=yt(n)?$r:rt.current,u=$i(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||y!==u)&&Im(e,o,r,u),Wn=!1,y=e.memoizedState,o.state=y,Al(e,r,o,i);var x=e.memoizedState;l!==p||y!==x||gt.current||Wn?(typeof I=="function"&&(mh(e,n,I,r),x=e.memoizedState),(h=Wn||Tm(e,n,h,r,y,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return vh(t,e,n,r,s,i)}function vh(t,e,n,r,i,s){ov(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&pm(e,n,!1),Pn(t,e,s);r=e.stateNode,P0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wi(e,t.child,null,s),e.child=Wi(e,null,l,s)):lt(t,e,l,s),e.memoizedState=r.state,i&&pm(e,n,!0),e.child}function av(t){var e=t.stateNode;e.pendingContext?fm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fm(t,e.context,!1),Nd(t,e.containerInfo)}function Nm(t,e,n,r,i){return Hi(),Sd(i),e.flags|=256,lt(t,e,n,r),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function wh(t){return{baseLanes:t,cachePool:null,transitions:null}}function lv(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Te,i&1),t===null)return fh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pu(o,r,0,null),t=Ur(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wh(n),e.memoizedState=Eh,t):Fd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return N0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ar(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ar(l,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?wh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Eh,r}return s=t.child,t=s.sibling,r=ar(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fd(t,e){return e=pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Na(t,e,n,r){return r!==null&&Sd(r),Wi(e,t.child,null,n),t=Fd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function N0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Tc(Error(U(422))),Na(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pu({mode:"visible",children:r.children},i,0,null),s=Ur(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Wi(e,t.child,null,o),e.child.memoizedState=wh(o),e.memoizedState=Eh,s);if(!(e.mode&1))return Na(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Tc(s,r,void 0),Na(t,e,o,r)}if(l=(o&t.childLanes)!==0,mt||l){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),Kt(r,t,i,-1))}return Hd(),r=Tc(Error(U(421))),Na(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=rr(i.nextSibling),St=e,ve=!0,$t=null,t!==null&&(Pt[Nt++]=_n,Pt[Nt++]=vn,Pt[Nt++]=Hr,_n=t.id,vn=t.overflow,Hr=e),e=Fd(e,r.children),e.flags|=4096,e)}function xm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ph(t.return,e,n)}function Ic(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function uv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,n,e);else if(t.tag===19)xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ic(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Rl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ic(e,!0,n,null,s);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function x0(t,e,n){switch(e.tag){case 3:av(e),Hi();break;case 5:L_(e);break;case 1:yt(e.type)&&El(e);break;case 4:Nd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(Il,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?lv(t,e,n):(pe(Te,Te.current&1),t=Pn(t,e,n),t!==null?t.sibling:null);pe(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return uv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,sv(t,e,n)}return Pn(t,e,n)}var cv,Th,hv,dv;cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Th=function(){};hv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mr(an.current);var s=null;switch(n){case"input":i=Hc(t,i),r=Hc(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=Kc(t,i),r=Kc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_l)}Qc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(lo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(lo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ge("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};dv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vs(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function D0(t,e,n){var r=e.pendingProps;switch(Id(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return yt(e.type)&&vl(),Je(e),null;case 3:return r=e.stateNode,qi(),_e(gt),_e(rt),Dd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(Nh($t),$t=null))),Th(t,e),Je(e),null;case 5:xd(e);var i=Mr(wo.current);if(n=e.type,t!==null&&e.stateNode!=null)hv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Je(e),null}if(t=Mr(an.current),ka(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[sn]=e,r[vo]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<zs.length;i++)ge(zs[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":jp(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":Bp(r,s),ge("invalid",r)}Qc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ca(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ca(r.textContent,l,t),i=["children",""+l]):lo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":va(r),zp(r,s,!0);break;case"textarea":va(r),$p(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_l)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[sn]=e,t[vo]=r,cv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xc(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<zs.length;i++)ge(zs[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":jp(t,r),i=Hc(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ge("invalid",t);break;case"textarea":Bp(t,r),i=Kc(t,r),ge("invalid",t);break;default:i=r}Qc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?$y(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&zy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&uo(t,u):typeof u=="number"&&uo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(lo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ge("scroll",t):u!=null&&ld(t,s,u,o))}switch(n){case"input":va(t),zp(t,r,!1);break;case"textarea":va(t),$p(t);break;case"option":r.value!=null&&t.setAttribute("value",""+dr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)dv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Mr(wo.current),Mr(an.current),ka(e)){if(r=e.stateNode,n=e.memoizedProps,r[sn]=e,(s=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:Ca(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ca(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=e,e.stateNode=r}return Je(e),null;case 13:if(_e(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&It!==null&&e.mode&1&&!(e.flags&128))N_(),Hi(),e.flags|=98560,s=!1;else if(s=ka(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[sn]=e}else Hi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else $t!==null&&(Nh($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?be===0&&(be=3):Hd())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return qi(),Th(t,e),t===null&&yo(e.stateNode.containerInfo),Je(e),null;case 10:return Cd(e.type._context),Je(e),null;case 17:return yt(e.type)&&vl(),Je(e),null;case 19:if(_e(Te),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Vs(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rl(t),o!==null){for(e.flags|=128,Vs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>Gi&&(e.flags|=128,r=!0,Vs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Rl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Je(e),null}else 2*Ne()-s.renderingStartTime>Gi&&n!==1073741824&&(e.flags|=128,r=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Te.current,pe(Te,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return $d(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function V0(t,e){switch(Id(e),e.tag){case 1:return yt(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qi(),_e(gt),_e(rt),Dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xd(e),null;case 13:if(_e(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Hi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Te),null;case 4:return qi(),null;case 10:return Cd(e.type._context),null;case 22:case 23:return $d(),null;case 24:return null;default:return null}}var xa=!1,tt=!1,O0=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ri(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function Ih(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var Dm=!1;function L0(t,e){if(oh=ml,t=y_(),wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,y=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)y=p,p=I;for(;;){if(p===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(I=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ah={focusedElem:t,selectionRange:n},ml=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var D=x.memoizedProps,b=x.memoizedState,R=e.stateNode,T=R.getSnapshotBeforeUpdate(e.elementType===e.type?D:zt(e.type,D),b);R.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(L){Ce(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return x=Dm,Dm=!1,x}function eo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ih(e,n,s)}i=i.next}while(i!==r)}}function du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fv(t){var e=t.alternate;e!==null&&(t.alternate=null,fv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[vo],delete e[ch],delete e[y0],delete e[_0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pv(t){return t.tag===5||t.tag===3||t.tag===4}function Vm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(r!==4&&(t=t.child,t!==null))for(Ah(t,e,n),t=t.sibling;t!==null;)Ah(t,e,n),t=t.sibling}function Rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}var He=null,Bt=!1;function Bn(t,e,n){for(n=n.child;n!==null;)mv(t,e,n),n=n.sibling}function mv(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(iu,n)}catch{}switch(n.tag){case 5:tt||Ri(n,e);case 6:var r=He,i=Bt;He=null,Bn(t,e,n),He=r,Bt=i,He!==null&&(Bt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Bt?(t=He,n=n.stateNode,t.nodeType===8?gc(t.parentNode,n):t.nodeType===1&&gc(t,n),po(t)):gc(He,n.stateNode));break;case 4:r=He,i=Bt,He=n.stateNode.containerInfo,Bt=!0,Bn(t,e,n),He=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ih(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!tt&&(Ri(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Bn(t,e,n),tt=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function Om(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new O0),e.forEach(function(r){var i=H0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:He=l.stateNode,Bt=!1;break e;case 3:He=l.stateNode.containerInfo,Bt=!0;break e;case 4:He=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if(He===null)throw Error(U(160));mv(s,o,i),He=null,Bt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ce(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gv(e,t),e=e.sibling}function gv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jt(e,t),tn(t),r&4){try{eo(3,t,t.return),du(3,t)}catch(D){Ce(t,t.return,D)}try{eo(5,t,t.return)}catch(D){Ce(t,t.return,D)}}break;case 1:jt(e,t),tn(t),r&512&&n!==null&&Ri(n,n.return);break;case 5:if(jt(e,t),tn(t),r&512&&n!==null&&Ri(n,n.return),t.flags&32){var i=t.stateNode;try{uo(i,"")}catch(D){Ce(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Fy(i,s),Xc(l,o);var h=Xc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?$y(i,p):f==="dangerouslySetInnerHTML"?zy(i,p):f==="children"?uo(i,p):ld(i,f,p,h)}switch(l){case"input":Wc(i,s);break;case"textarea":Uy(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Pi(i,!!s.multiple,I,!1):y!==!!s.multiple&&(s.defaultValue!=null?Pi(i,!!s.multiple,s.defaultValue,!0):Pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[vo]=s}catch(D){Ce(t,t.return,D)}}break;case 6:if(jt(e,t),tn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Ce(t,t.return,D)}}break;case 3:if(jt(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{po(e.containerInfo)}catch(D){Ce(t,t.return,D)}break;case 4:jt(e,t),tn(t);break;case 13:jt(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zd=Ne())),r&4&&Om(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(h=tt)||f,jt(e,t),tt=h):jt(e,t),tn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(y=$,I=y.child,y.tag){case 0:case 11:case 14:case 15:eo(4,y,y.return);break;case 1:Ri(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(D){Ce(r,n,D)}}break;case 5:Ri(y,y.return);break;case 22:if(y.memoizedState!==null){Mm(p);continue}}I!==null?(I.return=y,$=I):Mm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=By("display",o))}catch(D){Ce(t,t.return,D)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(D){Ce(t,t.return,D)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:jt(e,t),tn(t),r&4&&Om(t);break;case 21:break;default:jt(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pv(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(uo(i,""),r.flags&=-33);var s=Vm(t);Rh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Vm(t);Ah(t,l,o);break;default:throw Error(U(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function M0(t,e,n){$=t,yv(t)}function yv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||tt;l=xa;var h=tt;if(xa=o,(tt=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?bm(i):u!==null?(u.return=o,$=u):bm(i);for(;s!==null;)$=s,yv(s),s=s.sibling;$=i,xa=l,tt=h}Lm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Lm(t)}}function Lm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||du(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&po(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}tt||e.flags&512&&Sh(e)}catch(y){Ce(e,e.return,y)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Mm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function bm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{du(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ce(e,i,u)}}var s=e.return;try{Sh(e)}catch(u){Ce(e,s,u)}break;case 5:var o=e.return;try{Sh(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var b0=Math.ceil,Pl=On.ReactCurrentDispatcher,Ud=On.ReactCurrentOwner,Lt=On.ReactCurrentBatchConfig,le=0,$e=null,De=null,Ke=0,Tt=0,Ci=Tr(0),be=0,Ao=null,qr=0,fu=0,jd=0,to=null,pt=null,zd=0,Gi=1/0,gn=null,Nl=!1,Ch=null,sr=null,Da=!1,Zn=null,xl=0,no=0,kh=null,Xa=-1,Ya=0;function ut(){return le&6?Ne():Xa!==-1?Xa:Xa=Ne()}function or(t){return t.mode&1?le&2&&Ke!==0?Ke&-Ke:E0.transition!==null?(Ya===0&&(Ya=t_()),Ya):(t=he,t!==0||(t=window.event,t=t===void 0?16:l_(t.type)),t):1}function Kt(t,e,n,r){if(50<no)throw no=0,kh=null,Error(U(185));Uo(t,n,r),(!(le&2)||t!==$e)&&(t===$e&&(!(le&2)&&(fu|=n),be===4&&Kn(t,Ke)),_t(t,r),n===1&&le===0&&!(e.mode&1)&&(Gi=Ne()+500,uu&&Ir()))}function _t(t,e){var n=t.callbackNode;EI(t,e);var r=pl(t,t===$e?Ke:0);if(r===0)n!==null&&qp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qp(n),e===1)t.tag===0?v0(Fm.bind(null,t)):C_(Fm.bind(null,t)),m0(function(){!(le&6)&&Ir()}),n=null;else{switch(n_(r)){case 1:n=fd;break;case 4:n=Zy;break;case 16:n=fl;break;case 536870912:n=e_;break;default:n=fl}n=Av(n,_v.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _v(t,e){if(Xa=-1,Ya=0,le&6)throw Error(U(327));var n=t.callbackNode;if(Oi()&&t.callbackNode!==n)return null;var r=pl(t,t===$e?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dl(t,r);else{e=r;var i=le;le|=2;var s=Ev();($e!==t||Ke!==e)&&(gn=null,Gi=Ne()+500,Fr(t,e));do try{j0();break}catch(l){vv(t,l)}while(!0);Rd(),Pl.current=s,le=i,De!==null?e=0:($e=null,Ke=0,e=be)}if(e!==0){if(e===2&&(i=th(t),i!==0&&(r=i,e=Ph(t,i))),e===1)throw n=Ao,Fr(t,0),Kn(t,r),_t(t,Ne()),n;if(e===6)Kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!F0(i)&&(e=Dl(t,r),e===2&&(s=th(t),s!==0&&(r=s,e=Ph(t,s))),e===1))throw n=Ao,Fr(t,0),Kn(t,r),_t(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Dr(t,pt,gn);break;case 3:if(Kn(t,r),(r&130023424)===r&&(e=zd+500-Ne(),10<e)){if(pl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=uh(Dr.bind(null,t,pt,gn),e);break}Dr(t,pt,gn);break;case 4:if(Kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b0(r/1960))-r,10<r){t.timeoutHandle=uh(Dr.bind(null,t,pt,gn),r);break}Dr(t,pt,gn);break;case 5:Dr(t,pt,gn);break;default:throw Error(U(329))}}}return _t(t,Ne()),t.callbackNode===n?_v.bind(null,t):null}function Ph(t,e){var n=to;return t.current.memoizedState.isDehydrated&&(Fr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=pt,pt=n,e!==null&&Nh(e)),t}function Nh(t){pt===null?pt=t:pt.push.apply(pt,t)}function F0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e){for(e&=~jd,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qt(e),r=1<<n;t[n]=-1,e&=~r}}function Fm(t){if(le&6)throw Error(U(327));Oi();var e=pl(t,0);if(!(e&1))return _t(t,Ne()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var r=th(t);r!==0&&(e=r,n=Ph(t,r))}if(n===1)throw n=Ao,Fr(t,0),Kn(t,e),_t(t,Ne()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,pt,gn),_t(t,Ne()),null}function Bd(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Gi=Ne()+500,uu&&Ir())}}function Kr(t){Zn!==null&&Zn.tag===0&&!(le&6)&&Oi();var e=le;le|=1;var n=Lt.transition,r=he;try{if(Lt.transition=null,he=1,t)return t()}finally{he=r,Lt.transition=n,le=e,!(le&6)&&Ir()}}function $d(){Tt=Ci.current,_e(Ci)}function Fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,p0(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Id(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vl();break;case 3:qi(),_e(gt),_e(rt),Dd();break;case 5:xd(r);break;case 4:qi();break;case 13:_e(Te);break;case 19:_e(Te);break;case 10:Cd(r.type._context);break;case 22:case 23:$d()}n=n.return}if($e=t,De=t=ar(t.current,null),Ke=Tt=e,be=0,Ao=null,jd=fu=qr=0,pt=to=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function vv(t,e){do{var n=De;try{if(Rd(),Ka.current=kl,Cl){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cl=!1}if(Wr=0,ze=Le=Se=null,Zs=!1,To=0,Ud.current=null,n===null||n.return===null){be=1,Ao=e,De=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ke,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=Am(o);if(I!==null){I.flags&=-257,Rm(I,o,l,s,e),I.mode&1&&Sm(s,h,e),e=I,u=h;var x=e.updateQueue;if(x===null){var D=new Set;D.add(u),e.updateQueue=D}else x.add(u);break e}else{if(!(e&1)){Sm(s,h,e),Hd();break e}u=Error(U(426))}}else if(ve&&l.mode&1){var b=Am(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Rm(b,o,l,s,e),Sd(Ki(u,l));break e}}s=u=Ki(u,l),be!==4&&(be=2),to===null?to=[s]:to.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var R=nv(s,u,e);_m(s,R);break e;case 1:l=u;var T=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(sr===null||!sr.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=rv(s,l,e);_m(s,L);break e}}s=s.return}while(s!==null)}Tv(n)}catch(P){e=P,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function Ev(){var t=Pl.current;return Pl.current=kl,t===null?kl:t}function Hd(){(be===0||be===3||be===2)&&(be=4),$e===null||!(qr&268435455)&&!(fu&268435455)||Kn($e,Ke)}function Dl(t,e){var n=le;le|=2;var r=Ev();($e!==t||Ke!==e)&&(gn=null,Fr(t,e));do try{U0();break}catch(i){vv(t,i)}while(!0);if(Rd(),le=n,Pl.current=r,De!==null)throw Error(U(261));return $e=null,Ke=0,be}function U0(){for(;De!==null;)wv(De)}function j0(){for(;De!==null&&!hI();)wv(De)}function wv(t){var e=Sv(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?Tv(t):De=e,Ud.current=null}function Tv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=V0(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,De=null;return}}else if(n=D0(n,e,Tt),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);be===0&&(be=5)}function Dr(t,e,n){var r=he,i=Lt.transition;try{Lt.transition=null,he=1,z0(t,e,n,r)}finally{Lt.transition=i,he=r}return null}function z0(t,e,n,r){do Oi();while(Zn!==null);if(le&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(wI(t,s),t===$e&&(De=$e=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Da||(Da=!0,Av(fl,function(){return Oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var o=he;he=1;var l=le;le|=4,Ud.current=null,L0(t,n),gv(n,t),a0(ah),ml=!!oh,ah=oh=null,t.current=n,M0(n),dI(),le=l,he=o,Lt.transition=s}else t.current=n;if(Da&&(Da=!1,Zn=t,xl=i),s=t.pendingLanes,s===0&&(sr=null),mI(n.stateNode),_t(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nl)throw Nl=!1,t=Ch,Ch=null,t;return xl&1&&t.tag!==0&&Oi(),s=t.pendingLanes,s&1?t===kh?no++:(no=0,kh=t):no=0,Ir(),null}function Oi(){if(Zn!==null){var t=n_(xl),e=Lt.transition,n=he;try{if(Lt.transition=null,he=16>t?16:t,Zn===null)var r=!1;else{if(t=Zn,Zn=null,xl=0,le&6)throw Error(U(331));var i=le;for(le|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:eo(8,f,s)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var y=f.sibling,I=f.return;if(fv(f),f===h){$=null;break}if(y!==null){y.return=I,$=y;break}$=I}}}var x=s.alternate;if(x!==null){var D=x.child;if(D!==null){x.child=null;do{var b=D.sibling;D.sibling=null,D=b}while(D!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:eo(9,s,s.return)}var R=s.sibling;if(R!==null){R.return=s.return,$=R;break e}$=s.return}}var T=t.current;for($=T;$!==null;){o=$;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,$=C;else e:for(o=T;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:du(9,l)}}catch(P){Ce(l,l.return,P)}if(l===o){$=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,$=L;break e}$=l.return}}if(le=i,Ir(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(iu,t)}catch{}r=!0}return r}finally{he=n,Lt.transition=e}}return!1}function Um(t,e,n){e=Ki(n,e),e=nv(t,e,1),t=ir(t,e,1),e=ut(),t!==null&&(Uo(t,1,e),_t(t,e))}function Ce(t,e,n){if(t.tag===3)Um(t,t,n);else for(;e!==null;){if(e.tag===3){Um(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){t=Ki(n,t),t=rv(e,t,1),e=ir(e,t,1),t=ut(),e!==null&&(Uo(e,1,t),_t(e,t));break}}e=e.return}}function B0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Ke&n)===n&&(be===4||be===3&&(Ke&130023424)===Ke&&500>Ne()-zd?Fr(t,0):jd|=n),_t(t,e)}function Iv(t,e){e===0&&(t.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var n=ut();t=kn(t,e),t!==null&&(Uo(t,e,n),_t(t,n))}function $0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Iv(t,n)}function H0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),Iv(t,n)}var Sv;Sv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,x0(t,e,n);mt=!!(t.flags&131072)}else mt=!1,ve&&e.flags&1048576&&k_(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Qa(t,e),t=e.pendingProps;var i=$i(e,rt.current);Vi(e,n),i=Od(null,e,r,t,i,n);var s=Ld();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,El(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pd(e),i.updater=hu,e.stateNode=i,i._reactInternals=e,gh(e,r,t,n),e=vh(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&Td(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Qa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=q0(r),t=zt(r,t),i){case 0:e=_h(null,e,r,t,n);break e;case 1:e=Pm(null,e,r,t,n);break e;case 11:e=Cm(null,e,r,t,n);break e;case 14:e=km(null,e,r,zt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),_h(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Pm(t,e,r,i,n);case 3:e:{if(av(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,O_(t,e),Al(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ki(Error(U(423)),e),e=Nm(t,e,r,n,i);break e}else if(r!==i){i=Ki(Error(U(424)),e),e=Nm(t,e,r,n,i);break e}else for(It=rr(e.stateNode.containerInfo.firstChild),St=e,ve=!0,$t=null,n=D_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hi(),r===i){e=Pn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return L_(e),t===null&&fh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,lh(r,i)?o=null:s!==null&&lh(r,s)&&(e.flags|=32),ov(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&fh(e),null;case 13:return lv(t,e,n);case 4:return Nd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wi(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Cm(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(Il,r._currentValue),r._currentValue=o,s!==null)if(Qt(s.value,o)){if(s.children===i.children&&!gt.current){e=Pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=In(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ph(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Vi(e,n),i=Mt(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),km(t,e,r,i,n);case 15:return iv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Qa(t,e),e.tag=1,yt(r)?(t=!0,El(e)):t=!1,Vi(e,n),tv(e,r,i),gh(e,r,i,n),vh(null,e,r,!0,t,n);case 19:return uv(t,e,n);case 22:return sv(t,e,n)}throw Error(U(156,e.tag))};function Av(t,e){return Jy(t,e)}function W0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,n,r){return new W0(t,e,n,r)}function Wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function q0(t){if(typeof t=="function")return Wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cd)return 11;if(t===hd)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=Ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ja(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Wd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yi:return Ur(n.children,i,s,e);case ud:o=8,i|=8;break;case jc:return t=Ot(12,n,e,i|2),t.elementType=jc,t.lanes=s,t;case zc:return t=Ot(13,n,e,i),t.elementType=zc,t.lanes=s,t;case Bc:return t=Ot(19,n,e,i),t.elementType=Bc,t.lanes=s,t;case Ly:return pu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vy:o=10;break e;case Oy:o=9;break e;case cd:o=11;break e;case hd:o=14;break e;case Hn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ur(t,e,n,r){return t=Ot(7,t,r,e),t.lanes=n,t}function pu(t,e,n,r){return t=Ot(22,t,r,e),t.elementType=Ly,t.lanes=n,t.stateNode={isHidden:!1},t}function Sc(t,e,n){return t=Ot(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function K0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sc(0),this.expirationTimes=sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qd(t,e,n,r,i,s,o,l,u){return t=new K0(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(s),t}function G0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Rv(t){if(!t)return fr;t=t._reactInternals;e:{if(ti(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(yt(n))return R_(t,n,e)}return e}function Cv(t,e,n,r,i,s,o,l,u){return t=qd(n,r,!0,t,i,s,o,l,u),t.context=Rv(null),n=t.current,r=ut(),i=or(n),s=In(r,i),s.callback=e??null,ir(n,s,i),t.current.lanes=i,Uo(t,i,r),_t(t,r),t}function mu(t,e,n,r){var i=e.current,s=ut(),o=or(i);return n=Rv(n),e.context===null?e.context=n:e.pendingContext=n,e=In(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ir(i,e,o),t!==null&&(Kt(t,i,o,s),qa(t,i,o)),o}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kd(t,e){jm(t,e),(t=t.alternate)&&jm(t,e)}function Q0(){return null}var kv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gd(t){this._internalRoot=t}gu.prototype.render=Gd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));mu(t,e,null,null)};gu.prototype.unmount=Gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){mu(null,t,null,null)}),e[Cn]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=s_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qn.length&&e!==0&&e<qn[n].priority;n++);qn.splice(n,0,t),n===0&&a_(t)}};function Qd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zm(){}function X0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Vl(o);s.call(h)}}var o=Cv(e,r,t,0,null,!1,!1,"",zm);return t._reactRootContainer=o,t[Cn]=o.current,yo(t.nodeType===8?t.parentNode:t),Kr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Vl(u);l.call(h)}}var u=qd(t,0,!1,null,null,!1,!1,"",zm);return t._reactRootContainer=u,t[Cn]=u.current,yo(t.nodeType===8?t.parentNode:t),Kr(function(){mu(e,u,n,r)}),u}function _u(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Vl(o);l.call(u)}}mu(e,o,t,i)}else o=X0(n,e,t,i,r);return Vl(o)}r_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=js(e.pendingLanes);n!==0&&(pd(e,n|1),_t(e,Ne()),!(le&6)&&(Gi=Ne()+500,Ir()))}break;case 13:Kr(function(){var r=kn(t,1);if(r!==null){var i=ut();Kt(r,t,1,i)}}),Kd(t,1)}};md=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=ut();Kt(e,t,134217728,n)}Kd(t,134217728)}};i_=function(t){if(t.tag===13){var e=or(t),n=kn(t,e);if(n!==null){var r=ut();Kt(n,t,e,r)}Kd(t,e)}};s_=function(){return he};o_=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};Jc=function(t,e,n){switch(e){case"input":if(Wc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=lu(r);if(!i)throw Error(U(90));by(r),Wc(r,i)}}}break;case"textarea":Uy(t,n);break;case"select":e=n.value,e!=null&&Pi(t,!!n.multiple,e,!1)}};qy=Bd;Ky=Kr;var Y0={usingClientEntryPoint:!1,Events:[zo,wi,lu,Hy,Wy,Bd]},Os={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J0={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xy(t),t===null?null:t.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||Q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Va.isDisabled&&Va.supportsFiber)try{iu=Va.inject(J0),on=Va}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y0;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(e))throw Error(U(200));return G0(t,e,null,n)};Rt.createRoot=function(t,e){if(!Qd(t))throw Error(U(299));var n=!1,r="",i=kv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=qd(t,1,!1,null,null,n,!1,r,i),t[Cn]=e.current,yo(t.nodeType===8?t.parentNode:t),new Gd(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Xy(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Kr(t)};Rt.hydrate=function(t,e,n){if(!yu(e))throw Error(U(200));return _u(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Qd(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=kv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Cv(e,null,t,1,n??null,i,!1,s,o),t[Cn]=e.current,yo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gu(e)};Rt.render=function(t,e,n){if(!yu(e))throw Error(U(200));return _u(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!yu(t))throw Error(U(40));return t._reactRootContainer?(Kr(function(){_u(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Bd;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return _u(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function Pv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pv)}catch(t){console.error(t)}}Pv(),Py.exports=Rt;var Z0=Py.exports,Bm=Z0;Fc.createRoot=Bm.createRoot,Fc.hydrateRoot=Bm.hydrateRoot;const eS=()=>{};var $m={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},xv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,I=h&63;u||(I=64,o||(y=64)),r.push(n[f],n[p],n[y],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new nS;const y=s<<2|l>>4;if(r.push(y),h!==64){const I=l<<4&240|h>>2;if(r.push(I),p!==64){const x=h<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rS=function(t){const e=Nv(t);return xv.encodeByteArray(e,!0)},Ol=function(t){return rS(t).replace(/\./g,"")},Dv=function(t){try{return xv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS=()=>iS().__FIREBASE_DEFAULTS__,oS=()=>{if(typeof process>"u"||typeof $m>"u")return;const t=$m.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dv(t[1]);return e&&JSON.parse(e)},vu=()=>{try{return eS()||sS()||oS()||aS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vv=t=>{var e,n;return(n=(e=vu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},lS=t=>{const e=Vv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ov=()=>{var t;return(t=vu())==null?void 0:t.config},Lv=t=>{var e;return(e=vu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ol(JSON.stringify(n)),Ol(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function dS(){var e;const t=(e=vu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gS(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yS(){return!dS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _S(){try{return typeof indexedDB=="object"}catch{return!1}}function vS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ES,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$o.prototype.create)}}class $o{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ln(i,l,r)}}function wS(t,e){return t.replace(TS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const TS=/\{\$([^}]+)}/g;function IS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Hm(s)&&Hm(o)){if(!Gr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function $s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function SS(t,e){const n=new AS(t,e);return n.subscribe.bind(n)}class AS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Rc),i.error===void 0&&(i.error=Rc),i.complete===void 0&&(i.complete=Rc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mv(t){return(await fetch(t,{credentials:"include"})).ok}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PS(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kS(t){return t===Vr?void 0:t}function PS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const xS={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},DS=se.INFO,VS={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},OS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=VS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xd{constructor(e){this.name=e,this._logLevel=DS,this._logHandler=OS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const LS=(t,e)=>e.some(n=>t instanceof n);let Wm,qm;function MS(){return Wm||(Wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bS(){return qm||(qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bv=new WeakMap,xh=new WeakMap,Fv=new WeakMap,Cc=new WeakMap,Yd=new WeakMap;function FS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bv.set(n,t)}).catch(()=>{}),Yd.set(e,t),e}function US(t){if(xh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xh.set(t,e)}let Dh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jS(t){Dh=t(Dh)}function zS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kc(this),e,...n);return Fv.set(r,e.sort?e.sort():[e]),lr(r)}:bS().includes(t)?function(...e){return t.apply(kc(this),e),lr(bv.get(this))}:function(...e){return lr(t.apply(kc(this),e))}}function BS(t){return typeof t=="function"?zS(t):(t instanceof IDBTransaction&&US(t),LS(t,MS())?new Proxy(t,Dh):t)}function lr(t){if(t instanceof IDBRequest)return FS(t);if(Cc.has(t))return Cc.get(t);const e=BS(t);return e!==t&&(Cc.set(t,e),Yd.set(e,t)),e}const kc=t=>Yd.get(t);function $S(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=lr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(lr(o.result),u.oldVersion,u.newVersion,lr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const HS=["get","getKey","getAll","getAllKeys","count"],WS=["put","add","delete","clear"],Pc=new Map;function Km(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pc.get(e))return Pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=WS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Pc.set(e,s),s}jS(t=>({...t,get:(e,n,r)=>Km(e,n)||t.get(e,n,r),has:(e,n)=>!!Km(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vh="@firebase/app",Gm="0.14.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Xd("@firebase/app"),GS="@firebase/app-compat",QS="@firebase/analytics-compat",XS="@firebase/analytics",YS="@firebase/app-check-compat",JS="@firebase/app-check",ZS="@firebase/auth",eA="@firebase/auth-compat",tA="@firebase/database",nA="@firebase/data-connect",rA="@firebase/database-compat",iA="@firebase/functions",sA="@firebase/functions-compat",oA="@firebase/installations",aA="@firebase/installations-compat",lA="@firebase/messaging",uA="@firebase/messaging-compat",cA="@firebase/performance",hA="@firebase/performance-compat",dA="@firebase/remote-config",fA="@firebase/remote-config-compat",pA="@firebase/storage",mA="@firebase/storage-compat",gA="@firebase/firestore",yA="@firebase/ai",_A="@firebase/firestore-compat",vA="firebase",EA="12.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="[DEFAULT]",wA={[Vh]:"fire-core",[GS]:"fire-core-compat",[XS]:"fire-analytics",[QS]:"fire-analytics-compat",[JS]:"fire-app-check",[YS]:"fire-app-check-compat",[ZS]:"fire-auth",[eA]:"fire-auth-compat",[tA]:"fire-rtdb",[nA]:"fire-data-connect",[rA]:"fire-rtdb-compat",[iA]:"fire-fn",[sA]:"fire-fn-compat",[oA]:"fire-iid",[aA]:"fire-iid-compat",[lA]:"fire-fcm",[uA]:"fire-fcm-compat",[cA]:"fire-perf",[hA]:"fire-perf-compat",[dA]:"fire-rc",[fA]:"fire-rc-compat",[pA]:"fire-gcs",[mA]:"fire-gcs-compat",[gA]:"fire-fst",[_A]:"fire-fst-compat",[yA]:"fire-vertex","fire-js":"fire-js",[vA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Map,TA=new Map,Lh=new Map;function Qm(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qi(t){const e=t.name;if(Lh.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;Lh.set(e,t);for(const n of Ll.values())Qm(n,t);for(const n of TA.values())Qm(n,t);return!0}function Jd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new $o("app","Firebase",IA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=EA;function Uv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Oh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ur.create("bad-app-name",{appName:String(i)});if(n||(n=Ov()),!n)throw ur.create("no-options");const s=Ll.get(i);if(s){if(Gr(n,s.options)&&Gr(r,s.config))return s;throw ur.create("duplicate-app",{appName:i})}const o=new NS(i);for(const u of Lh.values())o.addComponent(u);const l=new SA(n,r,o);return Ll.set(i,l),l}function jv(t=Oh){const e=Ll.get(t);if(!e&&t===Oh&&Ov())return Uv();if(!e)throw ur.create("no-app",{appName:t});return e}function cr(t,e,n){let r=wA[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(o.join(" "));return}Qi(new Qr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="firebase-heartbeat-database",RA=1,Ro="firebase-heartbeat-store";let Nc=null;function zv(){return Nc||(Nc=$S(AA,RA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})})),Nc}async function CA(t){try{const n=(await zv()).transaction(Ro),r=await n.objectStore(Ro).get(Bv(t));return await n.done,r}catch(e){if(e instanceof Ln)Nn.warn(e.message);else{const n=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function Xm(t,e){try{const r=(await zv()).transaction(Ro,"readwrite");await r.objectStore(Ro).put(e,Bv(t)),await r.done}catch(n){if(n instanceof Ln)Nn.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function Bv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=1024,PA=30;class NA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ym();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>PA){const o=VA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ym(),{heartbeatsToSend:r,unsentEntries:i}=xA(this._heartbeatsCache.heartbeats),s=Ol(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Nn.warn(n),""}}}function Ym(){return new Date().toISOString().substring(0,10)}function xA(t,e=kA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _S()?vS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Jm(t){return Ol(JSON.stringify({version:2,heartbeats:t})).length}function VA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t){Qi(new Qr("platform-logger",e=>new qS(e),"PRIVATE")),Qi(new Qr("heartbeat",e=>new NA(e),"PRIVATE")),cr(Vh,Gm,t),cr(Vh,Gm,"esm2020"),cr("fire-js","")}OA("");var LA="firebase",MA="12.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cr(LA,MA,"app");function $v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bA=$v,Hv=new $o("auth","Firebase",$v());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new Xd("@firebase/auth");function FA(t,...e){Ml.logLevel<=se.WARN&&Ml.warn(`Auth (${rs}): ${t}`,...e)}function Za(t,...e){Ml.logLevel<=se.ERROR&&Ml.error(`Auth (${rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw Zd(t,...e)}function ln(t,...e){return Zd(t,...e)}function Wv(t,e,n){const r={...bA(),[e]:n};return new $o("auth","Firebase",r).create(e,{appName:t.name})}function Sn(t){return Wv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hv.create(t,...e)}function Q(t,e,...n){if(!t)throw Zd(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Za(e),new Error(e)}function xn(t,e){t||En(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function UA(){return Zm()==="http:"||Zm()==="https:"}function Zm(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UA()||pS()||"connection"in navigator)?navigator.onLine:!0}function zA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=hS()||mS()}get(){return jA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HA=new qo(3e4,6e4);function Sr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ar(t,e,n,r,i={}){return Kv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ho({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return fS()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Wo(t.emulatorConfig.host)&&(h.credentials="include"),qv.fetch()(await Gv(t,t.config.apiHost,n,l),h)})}async function Kv(t,e,n){t._canInitEmulator=!1;const r={...BA,...e};try{const i=new qA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Oa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Oa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Oa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Wv(t,f,h);Xt(t,f)}}catch(i){if(i instanceof Ln)throw i;Xt(t,"network-request-failed",{message:String(i)})}}async function Ko(t,e,n,r,i={}){const s=await Ar(t,e,n,r,i);return"mfaPendingCredential"in s&&Xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Gv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?ef(t.config,i):`${t.config.apiScheme}://${i}`;return $A.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function WA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),HA.get())})}}function Oa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ln(t,e,r);return i.customData._tokenResponse=n,i}function eg(t){return t!==void 0&&t.enterprise!==void 0}class KA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return WA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GA(t,e){return Ar(t,"GET","/v2/recaptchaConfig",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function bl(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XA(t,e=!1){const n=vt(t),r=await n.getIdToken(e),i=tf(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ro(xc(i.auth_time)),issuedAtTime:ro(xc(i.iat)),expirationTime:ro(xc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xc(t){return Number(t)*1e3}function tf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Za("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dv(n);return i?JSON.parse(i):(Za("Failed to decode base64 JWT payload"),null)}catch(i){return Za("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function tg(t){const e=tf(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&YA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ro(this.lastLoginAt),this.creationTime=ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Co(t,bl(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?Qv(i.providerUserInfo):[],o=eR(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new bh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function ZA(t){const e=vt(t);await Fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tR(t,e){const n=await Kv(t,{},async()=>{const r=Ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Gv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Wo(t.emulatorConfig.host)&&(u.credentials="include"),qv.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nR(t,e){return Ar(t,"POST","/v2/accounts:revokeToken",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=tg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Li;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new JA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Co(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XA(this,e)}reload(){return ZA(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(Sn(this.auth));const e=await this.getIdToken();return await Co(this,QA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:y,isAnonymous:I,providerData:x,stsTokenManager:D}=n;Q(p&&D,e,"internal-error");const b=Li.fromJSON(this.name,D);Q(typeof p=="string",e,"internal-error"),$n(r,e.name),$n(i,e.name),Q(typeof y=="boolean",e,"internal-error"),Q(typeof I=="boolean",e,"internal-error"),$n(s,e.name),$n(o,e.name),$n(l,e.name),$n(u,e.name),$n(h,e.name),$n(f,e.name);const R=new Ht({uid:p,auth:e,email:i,emailVerified:y,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:h,lastLoginAt:f});return x&&Array.isArray(x)&&(R.providerData=x.map(T=>({...T}))),u&&(R._redirectEventId=u),R}static async _fromIdTokenResponse(e,n,r=!1){const i=new Li;i.updateFromServerResponse(n);const s=new Ht({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Qv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Li;l.updateFromIdToken(r);const u=new Ht({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=new Map;function wn(t){xn(t instanceof Function,"Expected a class definition");let e=ng.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ng.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xv.type="NONE";const rg=Xv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=el(this.userKey,i.apiKey,s),this.fullPersistenceKey=el("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await bl(this.auth,{idToken:e}).catch(()=>{});return n?Ht._fromGetAccountInfoResponse(this.auth,n,e):null}return Ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mi(wn(rg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||wn(rg);const o=el(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const y=await bl(e,{idToken:f}).catch(()=>{});if(!y)break;p=await Ht._fromGetAccountInfoResponse(e,y,f)}else p=Ht._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Mi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Mi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nE(e))return"Blackberry";if(rE(e))return"Webos";if(Jv(e))return"Safari";if((e.includes("chrome/")||Zv(e))&&!e.includes("edge/"))return"Chrome";if(tE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yv(t=it()){return/firefox\//i.test(t)}function Jv(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zv(t=it()){return/crios\//i.test(t)}function eE(t=it()){return/iemobile/i.test(t)}function tE(t=it()){return/android/i.test(t)}function nE(t=it()){return/blackberry/i.test(t)}function rE(t=it()){return/webos/i.test(t)}function nf(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rR(t=it()){var e;return nf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function iR(){return gS()&&document.documentMode===10}function iE(t=it()){return nf(t)||tE(t)||rE(t)||nE(t)||/windows phone/i.test(t)||eE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t,e=[]){let n;switch(t){case"Browser":n=ig(it());break;case"Worker":n=`${ig(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",Sr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=6;class lR{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??aR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sg(this),this.idTokenSubscription=new sg(this),this.beforeStateQueue=new sR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bl(this,{idToken:e}),r=await Ht._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(Sn(this));const n=e?vt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(Sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(Sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oR(this),n=new lR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $o("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&FA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ni(t){return vt(t)}class sg{constructor(e){this.auth=e,this.observer=null,this.addObserver=SS(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cR(t){Eu=t}function oE(t){return Eu.loadJS(t)}function hR(){return Eu.recaptchaEnterpriseScript}function dR(){return Eu.gapiScript}function fR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class pR{constructor(){this.enterprise=new mR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class mR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const gR="recaptcha-enterprise",aE="NO_RECAPTCHA";class yR{constructor(e){this.type=gR,this.auth=ni(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{GA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new KA(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;eg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(aE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pR().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&eg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=hR();u.length!==0&&(u+=l),oE(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function og(t,e,n,r=!1,i=!1){const s=new yR(t);let o;if(i)o=aE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Fh(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await og(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await og(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t,e){const n=Jd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Gr(s,e??{}))return i;Xt(i,"already-initialized")}return n.initialize({options:e})}function vR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ER(t,e,n){const r=ni(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=lE(e),{host:o,port:l}=wR(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(Gr(h,r.config.emulator)&&Gr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Wo(o)?Mv(`${s}//${o}${u}`):TR()}function lE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wR(t){const e=lE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ag(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ag(o)}}}function ag(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function IR(t,e){return Ar(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(t,e){return Ko(t,"POST","/v1/accounts:signInWithPassword",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,e){return Ko(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}async function RR(t,e){return Ko(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends rf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ko(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ko(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fh(e,n,"signInWithPassword",SR);case"emailLink":return AR(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fh(e,r,"signUpPassword",IR);case"emailLink":return RR(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t,e){return Ko(t,"POST","/v1/accounts:signInWithIdp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR="http://localhost";class Xr extends rf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Xr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bi(e,n)}buildRequest(){const e={requestUri:CR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PR(t){const e=Bs($s(t)).link,n=e?Bs($s(e)).deep_link_id:null,r=Bs($s(t)).deep_link_id;return(r?Bs($s(r)).link:null)||r||n||e||t}class sf{constructor(e){const n=Bs($s(e)),r=n.apiKey??null,i=n.oobCode??null,s=kR(n.mode??null);Q(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=PR(e);try{return new sf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.providerId=is.PROVIDER_ID}static credential(e,n){return ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=sf.parseLink(n);return Q(r,"argument-error"),ko._fromEmailAndCode(e,r.code,r.tenantId)}}is.PROVIDER_ID="password";is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends uE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Go{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Go{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Go{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NR(t,e){return Ko(t,"POST","/v1/accounts:signUp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ht._fromIdTokenResponse(e,r,i),o=lg(r);return new Yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=lg(r);return new Yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function lg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends Ln{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ul.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ul(e,n,r,i)}}function cE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ul._fromErrorAndOperation(t,s,e,r):s})}async function xR(t,e,n=!1){const r=await Co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject(Sn(r));const i="reauthenticate";try{const s=await Co(t,cE(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=tf(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),Yr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(t,e,n=!1){if(xt(t.app))return Promise.reject(Sn(t));const r="signIn",i=await cE(t,r,e),s=await Yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function VR(t,e){return hE(ni(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(t){const e=ni(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function OR(t,e,n){if(xt(t.app))return Promise.reject(Sn(t));const r=ni(t),o=await Fh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&dE(t),u}),l=await Yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function LR(t,e,n){return xt(t.app)?Promise.reject(Sn(t)):VR(vt(t),is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dE(t),r})}function MR(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function bR(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function FR(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}function UR(t){return vt(t).signOut()}const jl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jl,"1"),this.storage.removeItem(jl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=1e3,zR=10;class pE extends fE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);iR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},jR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pE.type="LOCAL";const BR=pE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE extends fE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mE.type="SESSION";const gE=mE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await $R(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=of("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function WR(t){un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function qR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function GR(){return yE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="firebaseLocalStorageDb",QR=1,zl="firebaseLocalStorage",vE="fbase_key";class Qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Tu(t,e){return t.transaction([zl],e?"readwrite":"readonly").objectStore(zl)}function XR(){const t=indexedDB.deleteDatabase(_E);return new Qo(t).toPromise()}function EE(){const t=indexedDB.open(_E,QR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zl,{keyPath:vE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zl)?e(r):(r.close(),await XR(),e(await EE()))})})}async function ug(t,e,n){const r=Tu(t,!0).put({[vE]:e,value:n});return new Qo(r).toPromise()}async function YR(t,e){const n=Tu(t,!1).get(e),r=await new Qo(n).toPromise();return r===void 0?null:r.value}function cg(t,e){const n=Tu(t,!0).delete(e);return new Qo(n).toPromise()}const JR=800,ZR=3;class wE{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=EE(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZR)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return yE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wu._getInstance(GR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await qR(),!this.activeServiceWorker)return;this.sender=new HR(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await ug(e,jl,"1"),await cg(e,jl)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ug(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Tu(i,!1).getAll();return new Qo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wE.type="LOCAL";const eC=wE;new qo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t,e){return e?wn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af extends rf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nC(t){return hE(t.auth,new af(t),t.bypassAuthState)}function rC(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),DR(n,new af(t),t.bypassAuthState)}async function iC(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),xR(n,new af(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nC;case"linkViaPopup":case"linkViaRedirect":return iC;case"reauthViaPopup":case"reauthViaRedirect":return rC;default:Xt(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=new qo(2e3,1e4);class ki extends TE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ki.currentPopupAction&&ki.currentPopupAction.cancel(),ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=of();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sC.get())};e()}}ki.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="pendingRedirect",tl=new Map;class aC extends TE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tl.get(this.auth._key());if(!e){try{const r=await lC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tl.set(this.auth._key(),e)}return this.bypassAuthState||tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lC(t,e){const n=hC(e),r=cC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uC(t,e){tl.set(t._key(),e)}function cC(t){return wn(t._redirectPersistence)}function hC(t){return el(oC,t.config.apiKey,t.name)}async function dC(t,e,n=!1){if(xt(t.app))return Promise.reject(Sn(t));const r=ni(t),i=tC(r,e),o=await new aC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=10*60*1e3;class pC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!IE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fC&&this.cachedEventUids.clear(),this.cachedEventUids.has(hg(e))}saveEventToCache(e){this.cachedEventUids.add(hg(e)),this.lastProcessedEventTime=Date.now()}}function hg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function IE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return IE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_C=/^https?/;async function vC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gC(t);for(const n of e)try{if(EC(n))return}catch{}Xt(t,"unauthorized-domain")}function EC(t){const e=Mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_C.test(n))return!1;if(yC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=new qo(3e4,6e4);function dg(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TC(t){return new Promise((e,n)=>{var i,s,o;function r(){dg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dg(),n(ln(t,"network-request-failed"))},timeout:wC.get()})}if((s=(i=un().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=un().gapi)!=null&&o.load)r();else{const l=fR("iframefcb");return un()[l]=()=>{gapi.load?r():n(ln(t,"network-request-failed"))},oE(`${dR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw nl=null,e})}let nl=null;function IC(t){return nl=nl||TC(t),nl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=new qo(5e3,15e3),AC="__/auth/iframe",RC="emulator/auth/iframe",CC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PC(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ef(e,RC):`https://${t.config.authDomain}/${AC}`,r={apiKey:e.apiKey,appName:t.name,v:rs},i=kC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ho(r).slice(1)}`}async function NC(t){const e=await IC(t),n=un().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:PC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),l=un().setTimeout(()=>{s(o)},SC.get());function u(){un().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DC=500,VC=600,OC="_blank",LC="http://localhost";class fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MC(t,e,n,r=DC,i=VC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...xC,width:r.toString(),height:i.toString(),top:s,left:o},h=it().toLowerCase();n&&(l=Zv(h)?OC:n),Yv(h)&&(e=e||LC,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[I,x])=>`${y}${I}=${x},`,"");if(rR(h)&&l!=="_self")return bC(e||"",l),new fg(null);const p=window.open(e||"",l,f);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new fg(p)}function bC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC="__/auth/handler",UC="emulator/auth/handler",jC=encodeURIComponent("fac");async function pg(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rs,eventId:i};if(e instanceof uE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Go){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${jC}=${encodeURIComponent(u)}`:"";return`${zC(t)}?${Ho(l).slice(1)}${h}`}function zC({config:t}){return t.emulator?ef(t,UC):`https://${t.authDomain}/${FC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="webStorageSupport";class BC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gE,this._completeRedirectFn=dC,this._overrideRedirectResult=uC}async _openPopup(e,n,r,i){var o;xn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await pg(e,n,r,Mh(),i);return MC(e,s,of())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await pg(e,n,r,Mh(),i);return WR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await NC(e),r=new pC(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dc,{type:Dc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Dc];s!==void 0&&n(!!s),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iE()||Jv()||nf()}}const $C=BC;var mg="@firebase/auth",gg="1.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qC(t){Qi(new Qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sE(t)},h=new uR(r,i,s,u);return vR(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qi(new Qr("auth-internal",e=>{const n=ni(e.getProvider("auth").getImmediate());return(r=>new HC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(mg,gg,WC(t)),cr(mg,gg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=5*60,GC=Lv("authIdTokenMaxAge")||KC;let yg=null;const QC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GC)return;const i=n==null?void 0:n.token;yg!==i&&(yg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function XC(t=jv()){const e=Jd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_R(t,{popupRedirectResolver:$C,persistence:[eC,BR,gE]}),r=Lv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=QC(s.toString());bR(n,o,()=>o(n.currentUser)),MR(n,l=>o(l))}}const i=Vv("auth");return i&&ER(n,`http://${i}`),n}function YC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}cR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ln("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qC("Browser");var _g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,SE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,m){function v(){}v.prototype=m.prototype,_.F=m.prototype,_.prototype=new v,_.prototype.constructor=_,_.D=function(S,A,k){for(var w=Array(arguments.length-2),we=2;we<arguments.length;we++)w[we-2]=arguments[we];return m.prototype[A].apply(S,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,m,v){v||(v=0);const S=Array(16);if(typeof m=="string")for(var A=0;A<16;++A)S[A]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(A=0;A<16;++A)S[A]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=_.g[0],v=_.g[1],A=_.g[2];let k=_.g[3],w;w=m+(k^v&(A^k))+S[0]+3614090360&4294967295,m=v+(w<<7&4294967295|w>>>25),w=k+(A^m&(v^A))+S[1]+3905402710&4294967295,k=m+(w<<12&4294967295|w>>>20),w=A+(v^k&(m^v))+S[2]+606105819&4294967295,A=k+(w<<17&4294967295|w>>>15),w=v+(m^A&(k^m))+S[3]+3250441966&4294967295,v=A+(w<<22&4294967295|w>>>10),w=m+(k^v&(A^k))+S[4]+4118548399&4294967295,m=v+(w<<7&4294967295|w>>>25),w=k+(A^m&(v^A))+S[5]+1200080426&4294967295,k=m+(w<<12&4294967295|w>>>20),w=A+(v^k&(m^v))+S[6]+2821735955&4294967295,A=k+(w<<17&4294967295|w>>>15),w=v+(m^A&(k^m))+S[7]+4249261313&4294967295,v=A+(w<<22&4294967295|w>>>10),w=m+(k^v&(A^k))+S[8]+1770035416&4294967295,m=v+(w<<7&4294967295|w>>>25),w=k+(A^m&(v^A))+S[9]+2336552879&4294967295,k=m+(w<<12&4294967295|w>>>20),w=A+(v^k&(m^v))+S[10]+4294925233&4294967295,A=k+(w<<17&4294967295|w>>>15),w=v+(m^A&(k^m))+S[11]+2304563134&4294967295,v=A+(w<<22&4294967295|w>>>10),w=m+(k^v&(A^k))+S[12]+1804603682&4294967295,m=v+(w<<7&4294967295|w>>>25),w=k+(A^m&(v^A))+S[13]+4254626195&4294967295,k=m+(w<<12&4294967295|w>>>20),w=A+(v^k&(m^v))+S[14]+2792965006&4294967295,A=k+(w<<17&4294967295|w>>>15),w=v+(m^A&(k^m))+S[15]+1236535329&4294967295,v=A+(w<<22&4294967295|w>>>10),w=m+(A^k&(v^A))+S[1]+4129170786&4294967295,m=v+(w<<5&4294967295|w>>>27),w=k+(v^A&(m^v))+S[6]+3225465664&4294967295,k=m+(w<<9&4294967295|w>>>23),w=A+(m^v&(k^m))+S[11]+643717713&4294967295,A=k+(w<<14&4294967295|w>>>18),w=v+(k^m&(A^k))+S[0]+3921069994&4294967295,v=A+(w<<20&4294967295|w>>>12),w=m+(A^k&(v^A))+S[5]+3593408605&4294967295,m=v+(w<<5&4294967295|w>>>27),w=k+(v^A&(m^v))+S[10]+38016083&4294967295,k=m+(w<<9&4294967295|w>>>23),w=A+(m^v&(k^m))+S[15]+3634488961&4294967295,A=k+(w<<14&4294967295|w>>>18),w=v+(k^m&(A^k))+S[4]+3889429448&4294967295,v=A+(w<<20&4294967295|w>>>12),w=m+(A^k&(v^A))+S[9]+568446438&4294967295,m=v+(w<<5&4294967295|w>>>27),w=k+(v^A&(m^v))+S[14]+3275163606&4294967295,k=m+(w<<9&4294967295|w>>>23),w=A+(m^v&(k^m))+S[3]+4107603335&4294967295,A=k+(w<<14&4294967295|w>>>18),w=v+(k^m&(A^k))+S[8]+1163531501&4294967295,v=A+(w<<20&4294967295|w>>>12),w=m+(A^k&(v^A))+S[13]+2850285829&4294967295,m=v+(w<<5&4294967295|w>>>27),w=k+(v^A&(m^v))+S[2]+4243563512&4294967295,k=m+(w<<9&4294967295|w>>>23),w=A+(m^v&(k^m))+S[7]+1735328473&4294967295,A=k+(w<<14&4294967295|w>>>18),w=v+(k^m&(A^k))+S[12]+2368359562&4294967295,v=A+(w<<20&4294967295|w>>>12),w=m+(v^A^k)+S[5]+4294588738&4294967295,m=v+(w<<4&4294967295|w>>>28),w=k+(m^v^A)+S[8]+2272392833&4294967295,k=m+(w<<11&4294967295|w>>>21),w=A+(k^m^v)+S[11]+1839030562&4294967295,A=k+(w<<16&4294967295|w>>>16),w=v+(A^k^m)+S[14]+4259657740&4294967295,v=A+(w<<23&4294967295|w>>>9),w=m+(v^A^k)+S[1]+2763975236&4294967295,m=v+(w<<4&4294967295|w>>>28),w=k+(m^v^A)+S[4]+1272893353&4294967295,k=m+(w<<11&4294967295|w>>>21),w=A+(k^m^v)+S[7]+4139469664&4294967295,A=k+(w<<16&4294967295|w>>>16),w=v+(A^k^m)+S[10]+3200236656&4294967295,v=A+(w<<23&4294967295|w>>>9),w=m+(v^A^k)+S[13]+681279174&4294967295,m=v+(w<<4&4294967295|w>>>28),w=k+(m^v^A)+S[0]+3936430074&4294967295,k=m+(w<<11&4294967295|w>>>21),w=A+(k^m^v)+S[3]+3572445317&4294967295,A=k+(w<<16&4294967295|w>>>16),w=v+(A^k^m)+S[6]+76029189&4294967295,v=A+(w<<23&4294967295|w>>>9),w=m+(v^A^k)+S[9]+3654602809&4294967295,m=v+(w<<4&4294967295|w>>>28),w=k+(m^v^A)+S[12]+3873151461&4294967295,k=m+(w<<11&4294967295|w>>>21),w=A+(k^m^v)+S[15]+530742520&4294967295,A=k+(w<<16&4294967295|w>>>16),w=v+(A^k^m)+S[2]+3299628645&4294967295,v=A+(w<<23&4294967295|w>>>9),w=m+(A^(v|~k))+S[0]+4096336452&4294967295,m=v+(w<<6&4294967295|w>>>26),w=k+(v^(m|~A))+S[7]+1126891415&4294967295,k=m+(w<<10&4294967295|w>>>22),w=A+(m^(k|~v))+S[14]+2878612391&4294967295,A=k+(w<<15&4294967295|w>>>17),w=v+(k^(A|~m))+S[5]+4237533241&4294967295,v=A+(w<<21&4294967295|w>>>11),w=m+(A^(v|~k))+S[12]+1700485571&4294967295,m=v+(w<<6&4294967295|w>>>26),w=k+(v^(m|~A))+S[3]+2399980690&4294967295,k=m+(w<<10&4294967295|w>>>22),w=A+(m^(k|~v))+S[10]+4293915773&4294967295,A=k+(w<<15&4294967295|w>>>17),w=v+(k^(A|~m))+S[1]+2240044497&4294967295,v=A+(w<<21&4294967295|w>>>11),w=m+(A^(v|~k))+S[8]+1873313359&4294967295,m=v+(w<<6&4294967295|w>>>26),w=k+(v^(m|~A))+S[15]+4264355552&4294967295,k=m+(w<<10&4294967295|w>>>22),w=A+(m^(k|~v))+S[6]+2734768916&4294967295,A=k+(w<<15&4294967295|w>>>17),w=v+(k^(A|~m))+S[13]+1309151649&4294967295,v=A+(w<<21&4294967295|w>>>11),w=m+(A^(v|~k))+S[4]+4149444226&4294967295,m=v+(w<<6&4294967295|w>>>26),w=k+(v^(m|~A))+S[11]+3174756917&4294967295,k=m+(w<<10&4294967295|w>>>22),w=A+(m^(k|~v))+S[2]+718787259&4294967295,A=k+(w<<15&4294967295|w>>>17),w=v+(k^(A|~m))+S[9]+3951481745&4294967295,_.g[0]=_.g[0]+m&4294967295,_.g[1]=_.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+k&4294967295}r.prototype.v=function(_,m){m===void 0&&(m=_.length);const v=m-this.blockSize,S=this.C;let A=this.h,k=0;for(;k<m;){if(A==0)for(;k<=v;)i(this,_,k),k+=this.blockSize;if(typeof _=="string"){for(;k<m;)if(S[A++]=_.charCodeAt(k++),A==this.blockSize){i(this,S),A=0;break}}else for(;k<m;)if(S[A++]=_[k++],A==this.blockSize){i(this,S),A=0;break}}this.h=A,this.o+=m},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var m=1;m<_.length-8;++m)_[m]=0;m=this.o*8;for(var v=_.length-8;v<_.length;++v)_[v]=m&255,m/=256;for(this.v(_),_=Array(16),m=0,v=0;v<4;++v)for(let S=0;S<32;S+=8)_[m++]=this.g[v]>>>S&255;return _};function s(_,m){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=m(_)}function o(_,m){this.h=m;const v=[];let S=!0;for(let A=_.length-1;A>=0;A--){const k=_[A]|0;S&&k==m||(v[A]=k,S=!1)}this.g=v}var l={};function u(_){return-128<=_&&_<128?s(_,function(m){return new o([m|0],m<0?-1:0)}):new o([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return b(h(-_));const m=[];let v=1;for(let S=0;_>=v;S++)m[S]=_/v|0,v*=4294967296;return new o(m,0)}function f(_,m){if(_.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(_.charAt(0)=="-")return b(f(_.substring(1),m));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(m,8));let S=p;for(let k=0;k<_.length;k+=8){var A=Math.min(8,_.length-k);const w=parseInt(_.substring(k,k+A),m);A<8?(A=h(Math.pow(m,A)),S=S.j(A).add(h(w))):(S=S.j(v),S=S.add(h(w)))}return S}var p=u(0),y=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-b(this).m();let _=0,m=1;for(let v=0;v<this.g.length;v++){const S=this.i(v);_+=(S>=0?S:4294967296+S)*m,m*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(x(this))return"0";if(D(this))return"-"+b(this).toString(_);const m=h(Math.pow(_,6));var v=this;let S="";for(;;){const A=L(v,m).g;v=R(v,A.j(m));let k=((v.g.length>0?v.g[0]:v.h)>>>0).toString(_);if(v=A,x(v))return k+S;for(;k.length<6;)k="0"+k;S=k+S}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function x(_){if(_.h!=0)return!1;for(let m=0;m<_.g.length;m++)if(_.g[m]!=0)return!1;return!0}function D(_){return _.h==-1}t.l=function(_){return _=R(this,_),D(_)?-1:x(_)?0:1};function b(_){const m=_.g.length,v=[];for(let S=0;S<m;S++)v[S]=~_.g[S];return new o(v,~_.h).add(y)}t.abs=function(){return D(this)?b(this):this},t.add=function(_){const m=Math.max(this.g.length,_.g.length),v=[];let S=0;for(let A=0;A<=m;A++){let k=S+(this.i(A)&65535)+(_.i(A)&65535),w=(k>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);S=w>>>16,k&=65535,w&=65535,v[A]=w<<16|k}return new o(v,v[v.length-1]&-2147483648?-1:0)};function R(_,m){return _.add(b(m))}t.j=function(_){if(x(this)||x(_))return p;if(D(this))return D(_)?b(this).j(b(_)):b(b(this).j(_));if(D(_))return b(this.j(b(_)));if(this.l(I)<0&&_.l(I)<0)return h(this.m()*_.m());const m=this.g.length+_.g.length,v=[];for(var S=0;S<2*m;S++)v[S]=0;for(S=0;S<this.g.length;S++)for(let A=0;A<_.g.length;A++){const k=this.i(S)>>>16,w=this.i(S)&65535,we=_.i(A)>>>16,st=_.i(A)&65535;v[2*S+2*A]+=w*st,T(v,2*S+2*A),v[2*S+2*A+1]+=k*st,T(v,2*S+2*A+1),v[2*S+2*A+1]+=w*we,T(v,2*S+2*A+1),v[2*S+2*A+2]+=k*we,T(v,2*S+2*A+2)}for(_=0;_<m;_++)v[_]=v[2*_+1]<<16|v[2*_];for(_=m;_<2*m;_++)v[_]=0;return new o(v,0)};function T(_,m){for(;(_[m]&65535)!=_[m];)_[m+1]+=_[m]>>>16,_[m]&=65535,m++}function C(_,m){this.g=_,this.h=m}function L(_,m){if(x(m))throw Error("division by zero");if(x(_))return new C(p,p);if(D(_))return m=L(b(_),m),new C(b(m.g),b(m.h));if(D(m))return m=L(_,b(m)),new C(b(m.g),m.h);if(_.g.length>30){if(D(_)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var v=y,S=m;S.l(_)<=0;)v=P(v),S=P(S);var A=O(v,1),k=O(S,1);for(S=O(S,2),v=O(v,2);!x(S);){var w=k.add(S);w.l(_)<=0&&(A=A.add(v),k=w),S=O(S,1),v=O(v,1)}return m=R(_,A.j(m)),new C(A,m)}for(A=p;_.l(m)>=0;){for(v=Math.max(1,Math.floor(_.m()/m.m())),S=Math.ceil(Math.log(v)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),k=h(v),w=k.j(m);D(w)||w.l(_)>0;)v-=S,k=h(v),w=k.j(m);x(k)&&(k=y),A=A.add(k),_=R(_,w)}return new C(A,_)}t.B=function(_){return L(this,_).h},t.and=function(_){const m=Math.max(this.g.length,_.g.length),v=[];for(let S=0;S<m;S++)v[S]=this.i(S)&_.i(S);return new o(v,this.h&_.h)},t.or=function(_){const m=Math.max(this.g.length,_.g.length),v=[];for(let S=0;S<m;S++)v[S]=this.i(S)|_.i(S);return new o(v,this.h|_.h)},t.xor=function(_){const m=Math.max(this.g.length,_.g.length),v=[];for(let S=0;S<m;S++)v[S]=this.i(S)^_.i(S);return new o(v,this.h^_.h)};function P(_){const m=_.g.length+1,v=[];for(let S=0;S<m;S++)v[S]=_.i(S)<<1|_.i(S-1)>>>31;return new o(v,_.h)}function O(_,m){const v=m>>5;m%=32;const S=_.g.length-v,A=[];for(let k=0;k<S;k++)A[k]=m>0?_.i(k+v)>>>m|_.i(k+v+1)<<32-m:_.i(k+v);return new o(A,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,SE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,hr=o}).apply(typeof _g<"u"?_g:typeof self<"u"?self:typeof window<"u"?window:{});var La=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var AE,Hs,RE,rl,Uh,CE,kE,PE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof La=="object"&&La];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in d))break e;d=d[N]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,N,V){for(var j=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)j[ee-2]=arguments[ee];return c.prototype[N].apply(g,j)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const c=a.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function x(a,c){for(let g=1;g<arguments.length;g++){const N=arguments[g];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=a.length||0;const V=N.length||0;a.length=d+V;for(let j=0;j<V;j++)a[d+j]=N[j]}else a.push(N)}}class D{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function b(a){o.setTimeout(()=>{throw a},0)}function R(){var a=_;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class T{constructor(){this.h=this.g=null}add(c,d){const g=C.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var C=new D(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let P,O=!1,_=new T,m=()=>{const a=Promise.resolve(void 0);P=()=>{a.then(v)}};function v(){for(var a;a=R();){try{a.h.call(a.g)}catch(d){b(d)}var c=C;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}O=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function we(a,c){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(we,A),we.prototype.init=function(a,c){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&we.Z.h.call(this)},we.prototype.h=function(){we.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var st="closure_listenable_"+(Math.random()*1e6|0),Yt=0;function Ft(a,c,d,g,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=N,this.key=++Yt,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function J(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function ue(a){const c={};for(const d in a)c[d]=a[d];return c}const fe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ae(a,c){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)a[d]=g[d];for(let V=0;V<fe.length;V++)d=fe[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function te(a){this.src=a,this.g={},this.h=0}te.prototype.add=function(a,c,d,g,N){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const j=Et(a,c,g,N);return j>-1?(c=a[j],d||(c.fa=!1)):(c=new Ft(c,this.src,V,!!g,N),c.fa=d,a.push(c)),c};function ke(a,c){const d=c.type;if(d in a.g){var g=a.g[d],N=Array.prototype.indexOf.call(g,c,void 0),V;(V=N>=0)&&Array.prototype.splice.call(g,N,1),V&&(B(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Et(a,c,d,g){for(let N=0;N<a.length;++N){const V=a[N];if(!V.da&&V.listener==c&&V.capture==!!d&&V.ha==g)return N}return-1}var Jt="closure_lm_"+(Math.random()*1e6|0),ai={};function ra(a,c,d,g,N){if(Array.isArray(c)){for(let V=0;V<c.length;V++)ra(a,c[V],d,g,N);return null}return d=Uf(d),a&&a[st]?a.J(c,d,l(g)?!!g.capture:!1,N):Mu(a,c,d,!1,g,N)}function Mu(a,c,d,g,N,V){if(!c)throw Error("Invalid event type");const j=l(N)?!!N.capture:!!N;let ee=kt(a);if(ee||(a[Jt]=ee=new te(a)),d=ee.add(c,d,g,j,V),d.proxy)return d;if(g=ia(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)k||(N=j),N===void 0&&(N=!1),a.addEventListener(c.toString(),g,N);else if(a.attachEvent)a.attachEvent(Ut(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ia(){function a(d){return c.call(a.src,a.listener,d)}const c=dt;return a}function us(a,c,d,g,N){if(Array.isArray(c))for(var V=0;V<c.length;V++)us(a,c[V],d,g,N);else g=l(g)?!!g.capture:!!g,d=Uf(d),a&&a[st]?(a=a.i,V=String(c).toString(),V in a.g&&(c=a.g[V],d=Et(c,d,g,N),d>-1&&(B(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[V],a.h--)))):a&&(a=kt(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Et(c,d,g,N)),(d=a>-1?c[a]:null)&&W(d))}function W(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[st])ke(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(Ut(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=kt(c))?(ke(d,a),d.h==0&&(d.src=null,c[Jt]=null)):B(a)}}}function Ut(a){return a in ai?ai[a]:ai[a]="on"+a}function dt(a,c){if(a.da)a=!0;else{c=new we(c,this);const d=a.listener,g=a.ha||a.src;a.fa&&W(a),a=d.call(g,c)}return a}function kt(a){return a=a[Jt],a instanceof te?a:null}var cs="__closure_events_fn_"+(Math.random()*1e9>>>0);function Uf(a){return typeof a=="function"?a:(a[cs]||(a[cs]=function(c){return a.handleEvent(c)}),a[cs])}function Xe(){S.call(this),this.i=new te(this),this.M=this,this.G=null}p(Xe,S),Xe.prototype[st]=!0,Xe.prototype.removeEventListener=function(a,c,d,g){us(this,a,c,d,g)};function ot(a,c){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new A(c,a);else if(c instanceof A)c.target=c.target||a;else{var N=c;c=new A(g,a),ae(c,N)}N=!0;let V,j;if(d)for(j=d.length-1;j>=0;j--)V=c.g=d[j],N=sa(V,g,!0,c)&&N;if(V=c.g=a,N=sa(V,g,!0,c)&&N,N=sa(V,g,!1,c)&&N,d)for(j=0;j<d.length;j++)V=c.g=d[j],N=sa(V,g,!1,c)&&N}Xe.prototype.N=function(){if(Xe.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let g=0;g<d.length;g++)B(d[g]);delete a.g[c],a.h--}}this.G=null},Xe.prototype.J=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},Xe.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function sa(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let N=!0;for(let V=0;V<c.length;++V){const j=c[V];if(j&&!j.da&&j.capture==d){const ee=j.listener,Oe=j.ha||j.src;j.fa&&ke(a.i,j),N=ee.call(Oe,g)!==!1&&N}}return N&&!g.defaultPrevented}function eT(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function jf(a){a.g=eT(()=>{a.g=null,a.i&&(a.i=!1,jf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class tT extends S{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:jf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(a){S.call(this),this.h=a,this.g={}}p(hs,S);var zf=[];function Bf(a){G(a.g,function(c,d){this.g.hasOwnProperty(d)&&W(c)},a),a.g={}}hs.prototype.N=function(){hs.Z.N.call(this),Bf(this)},hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bu=o.JSON.stringify,nT=o.JSON.parse,rT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function $f(){}function Hf(){}var ds={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Fu(){A.call(this,"d")}p(Fu,A);function Uu(){A.call(this,"c")}p(Uu,A);var Rr={},Wf=null;function oa(){return Wf=Wf||new Xe}Rr.Ia="serverreachability";function qf(a){A.call(this,Rr.Ia,a)}p(qf,A);function fs(a){const c=oa();ot(c,new qf(c))}Rr.STAT_EVENT="statevent";function Kf(a,c){A.call(this,Rr.STAT_EVENT,a),this.stat=c}p(Kf,A);function at(a){const c=oa();ot(c,new Kf(c,a))}Rr.Ja="timingevent";function Gf(a,c){A.call(this,Rr.Ja,a),this.size=c}p(Gf,A);function ps(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function ms(){this.g=!0}ms.prototype.ua=function(){this.g=!1};function iT(a,c,d,g,N,V){a.info(function(){if(a.g)if(V){var j="",ee=V.split("&");for(let de=0;de<ee.length;de++){var Oe=ee[de].split("=");if(Oe.length>1){const Ue=Oe[0];Oe=Oe[1];const en=Ue.split("_");j=en.length>=2&&en[1]=="type"?j+(Ue+"="+Oe+"&"):j+(Ue+"=redacted&")}}}else j=null;else j=V;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+c+`
`+d+`
`+j})}function sT(a,c,d,g,N,V,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+c+`
`+d+`
`+V+" "+j})}function li(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+aT(a,d)+(g?" "+g:"")})}function oT(a,c){a.info(function(){return"TIMEOUT: "+c})}ms.prototype.info=function(){};function aT(a,c){if(!a.g)return c;if(!c)return null;try{const V=JSON.parse(c);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let j=1;j<g.length;j++)g[j]=""}}}}return bu(V)}catch{return c}}var aa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Qf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Xf;function ju(){}p(ju,$f),ju.prototype.g=function(){return new XMLHttpRequest},Xf=new ju;function gs(a){return encodeURIComponent(String(a))}function lT(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Mn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.S=g||1,this.V=new hs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Yf}function Yf(){this.i=null,this.g="",this.h=!1}var Jf={},zu={};function Bu(a,c,d){a.M=1,a.A=ua(Zt(c)),a.u=d,a.R=!0,Zf(a,null)}function Zf(a,c){a.F=Date.now(),la(a),a.B=Zt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),dp(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Yf,a.g=Np(a.j,d?c:null,!a.u),a.P>0&&(a.O=new tT(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(zf[0]=N.toString()),N=zf);for(let V=0;V<N.length;V++){const j=ra(d,N[V],g||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.J?ue(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),fs(),iT(a.i,a.v,a.B,a.l,a.S,a.u)}Mn.prototype.ba=function(a){a=a.target;const c=this.O;c&&Un(a)==3?c.j():this.Y(a)},Mn.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Un(this.g),Oe=this.g.ya(),de=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||vp(this.g)))){this.K||ee!=4||Oe==7||(Oe==8||de<=0?fs(3):fs(2)),$u(this);var c=this.g.ca();this.X=c;var d=uT(this);if(this.o=c==200,sT(this.i,this.v,this.B,this.l,this.S,ee,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(g)){var V=g;break t}}V=null}if(a=V)li(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Hu(this,a);else{this.o=!1,this.m=3,at(12),Cr(this),ys(this);break e}}if(this.R){a=!0;let Ue;for(;!this.K&&this.C<d.length;)if(Ue=cT(this,d),Ue==zu){ee==4&&(this.m=4,at(14),a=!1),li(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==Jf){this.m=4,at(15),li(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else li(this.i,this.l,Ue,null),Hu(this,Ue);if(ep(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||d.length!=0||this.h.h||(this.m=1,at(16),a=!1),this.o=this.o&&a,!a)li(this.i,this.l,d,"[Invalid Chunked Response]"),Cr(this),ys(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ju(j),j.P=!0,at(11))}}else li(this.i,this.l,d,null),Hu(this,d);ee==4&&Cr(this),this.o&&!this.K&&(ee==4?Rp(this.j,this):(this.o=!1,la(this)))}else ST(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,at(12)):(this.m=0,at(13)),Cr(this),ys(this)}}}catch{}finally{}};function uT(a){if(!ep(a))return a.g.la();const c=vp(a.g);if(c==="")return"";let d="";const g=c.length,N=Un(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Cr(a),ys(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,d+=a.h.i.decode(c[V],{stream:!(N&&V==g-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function ep(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function cT(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?zu:(d=Number(c.substring(d,g)),isNaN(d)?Jf:(g+=1,g+d>c.length?zu:(c=c.slice(g,g+d),a.C=g+d,c)))}Mn.prototype.cancel=function(){this.K=!0,Cr(this)};function la(a){a.T=Date.now()+a.H,tp(a,a.H)}function tp(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ps(h(a.aa,a),c)}function $u(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Mn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(oT(this.i,this.B),this.M!=2&&(fs(),at(17)),Cr(this),this.m=2,ys(this)):tp(this,this.T-a)};function ys(a){a.j.I==0||a.K||Rp(a.j,a)}function Cr(a){$u(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Bf(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Hu(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Wu(d.h,a))){if(!a.L&&Wu(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)pa(d),da(d);else break e;Yu(d),at(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ps(h(d.Va,d),6e3));ip(d.h)<=1&&d.ta&&(d.ta=void 0)}else Pr(d,11)}else if((a.L||d.g==a)&&pa(d),!w(c))for(N=d.Ba.g.parse(c),c=0;c<N.length;c++){let de=N[c];const Ue=de[0];if(!(Ue<=d.K))if(d.K=Ue,de=de[1],d.I==2)if(de[0]=="c"){d.M=de[1],d.ba=de[2];const en=de[3];en!=null&&(d.ka=en,d.j.info("VER="+d.ka));const Nr=de[4];Nr!=null&&(d.za=Nr,d.j.info("SVER="+d.za));const jn=de[5];jn!=null&&typeof jn=="number"&&jn>0&&(g=1.5*jn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const zn=a.g;if(zn){const ga=zn.g?zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var V=g.h;V.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(qu(V,V.h),V.h=null))}if(g.G){const Zu=zn.g?zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zu&&(g.wa=Zu,me(g.J,g.G,Zu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var j=a;if(g.na=Pp(g,g.L?g.ba:null,g.W),j.L){sp(g.h,j);var ee=j,Oe=g.O;Oe&&(ee.H=Oe),ee.D&&($u(ee),la(ee)),g.g=j}else Sp(g);d.i.length>0&&fa(d)}else de[0]!="stop"&&de[0]!="close"||Pr(d,7);else d.I==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Pr(d,7):Xu(d):de[0]!="noop"&&d.l&&d.l.qa(de),d.A=0)}}fs(4)}catch{}}var hT=class{constructor(a,c){this.g=a,this.map=c}};function np(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function rp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ip(a){return a.h?1:a.g?a.g.size:0}function Wu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function qu(a,c){a.g?a.g.add(c):a.h=c}function sp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}np.prototype.cancel=function(){if(this.i=op(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function op(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return I(a.i)}var ap=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dT(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let N,V=null;g>=0?(N=a[d].substring(0,g),V=a[d].substring(g+1)):N=a[d],c(N,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function bn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof bn?(this.l=a.l,_s(this,a.j),this.o=a.o,this.g=a.g,vs(this,a.u),this.h=a.h,Ku(this,fp(a.i)),this.m=a.m):a&&(c=String(a).match(ap))?(this.l=!1,_s(this,c[1]||"",!0),this.o=Es(c[2]||""),this.g=Es(c[3]||"",!0),vs(this,c[4]),this.h=Es(c[5]||"",!0),Ku(this,c[6]||"",!0),this.m=Es(c[7]||"")):(this.l=!1,this.i=new Ts(null,this.l))}bn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(ws(c,lp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ws(c,lp,!0),"@"),a.push(gs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ws(d,d.charAt(0)=="/"?mT:pT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ws(d,yT)),a.join("")},bn.prototype.resolve=function(a){const c=Zt(this);let d=!!a.j;d?_s(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var g=a.h;if(d)vs(c,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=c.h.lastIndexOf("/");N!=-1&&(g=c.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const V=[];for(let j=0;j<N.length;){const ee=N[j++];ee=="."?g&&j==N.length&&V.push(""):ee==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&j==N.length&&V.push("")):(V.push(ee),g=!0)}g=V.join("/")}else g=N}return d?c.h=g:d=a.i.toString()!=="",d?Ku(c,fp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Zt(a){return new bn(a)}function _s(a,c,d){a.j=d?Es(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function vs(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Ku(a,c,d){c instanceof Ts?(a.i=c,_T(a.i,a.l)):(d||(c=ws(c,gT)),a.i=new Ts(c,a.l))}function me(a,c,d){a.i.set(c,d)}function ua(a){return me(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Es(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ws(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,fT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var lp=/[#\/\?@]/g,pT=/[#\?:]/g,mT=/[#\?]/g,gT=/[#\?@]/g,yT=/#/g;function Ts(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function kr(a){a.g||(a.g=new Map,a.h=0,a.i&&dT(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Ts.prototype,t.add=function(a,c){kr(this),this.i=null,a=ui(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function up(a,c){kr(a),c=ui(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function cp(a,c){return kr(a),c=ui(a,c),a.g.has(c)}t.forEach=function(a,c){kr(this),this.g.forEach(function(d,g){d.forEach(function(N){a.call(c,N,g,this)},this)},this)};function hp(a,c){kr(a);let d=[];if(typeof c=="string")cp(a,c)&&(d=d.concat(a.g.get(ui(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return kr(this),this.i=null,a=ui(this,a),cp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=hp(this,a),a.length>0?String(a[0]):c):c};function dp(a,c,d){up(a,c),d.length>0&&(a.i=null,a.g.set(ui(a,c),I(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const N=gs(d);d=hp(this,d);for(let V=0;V<d.length;V++){let j=N;d[V]!==""&&(j+="="+gs(d[V])),a.push(j)}}return this.i=a.join("&")};function fp(a){const c=new Ts;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function ui(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function _T(a,c){c&&!a.j&&(kr(a),a.i=null,a.g.forEach(function(d,g){const N=g.toLowerCase();g!=N&&(up(this,g),dp(this,N,d))},a)),a.j=c}function vT(a,c){const d=new ms;if(o.Image){const g=new Image;g.onload=f(Fn,d,"TestLoadImage: loaded",!0,c,g),g.onerror=f(Fn,d,"TestLoadImage: error",!1,c,g),g.onabort=f(Fn,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=f(Fn,d,"TestLoadImage: timeout",!1,c,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function ET(a,c){const d=new ms,g=new AbortController,N=setTimeout(()=>{g.abort(),Fn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(N),V.ok?Fn(d,"TestPingServer: ok",!0,c):Fn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),Fn(d,"TestPingServer: error",!1,c)})}function Fn(a,c,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function wT(){this.g=new rT}function Gu(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Gu,$f),Gu.prototype.g=function(){return new ca(this.i,this.h)};function ca(a,c){Xe.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ca,Xe),t=ca.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,Ss(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Is(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ss(this)),this.g&&(this.readyState=3,Ss(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;pp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function pp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Is(this):Ss(this),this.readyState==3&&pp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Is(this))},t.Na=function(a){this.g&&(this.response=a,Is(this))},t.ga=function(){this.g&&Is(this)};function Is(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ss(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ss(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function mp(a){let c="";return G(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Qu(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=mp(d),typeof a=="string"?d!=null&&gs(d):me(a,c,d))}function Re(a){Xe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Re,Xe);var TT=/^https?$/i,IT=["POST","PUT"];t=Re.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Xf.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(V){gp(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(IT,c,void 0)>=0)||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,j]of d)this.g.setRequestHeader(V,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){gp(this,V)}};function gp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,yp(a),ha(a)}function yp(a){a.A||(a.A=!0,ot(a,"complete"),ot(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ot(this,"complete"),ot(this,"abort"),ha(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ha(this,!0)),Re.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?_p(this):this.Xa())},t.Xa=function(){_p(this)};function _p(a){if(a.h&&typeof s<"u"){if(a.v&&Un(a)==4)setTimeout(a.Ca.bind(a),0);else if(ot(a,"readystatechange"),Un(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=V===0){let j=String(a.D).match(ap)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),g=!TT.test(j?j.toLowerCase():"")}d=g}if(d)ot(a,"complete"),ot(a,"success");else{a.o=6;try{var N=Un(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",yp(a)}}finally{ha(a)}}}}function ha(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||ot(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Un(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Un(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),nT(c)}};function vp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ST(a){const c={};a=(a.g&&Un(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var d=lT(a[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=c[N]||[];c[N]=V,V.push(d)}J(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Ep(a){this.za=0,this.i=[],this.j=new ms,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=As("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=As("baseRetryDelayMs",5e3,a),this.Za=As("retryDelaySeedMs",1e4,a),this.Ta=As("forwardChannelMaxRetries",2,a),this.va=As("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new np(a&&a.concurrentRequestLimit),this.Ba=new wT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Ep.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,g){at(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Pp(this,null,this.W),fa(this)};function Xu(a){if(wp(a),a.I==3){var c=a.V++,d=Zt(a.J);if(me(d,"SID",a.M),me(d,"RID",c),me(d,"TYPE","terminate"),Rs(a,d),c=new Mn(a,a.j,c),c.M=2,c.A=ua(Zt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Np(c.j,null),c.g.ea(c.A)),c.F=Date.now(),la(c)}kp(a)}function da(a){a.g&&(Ju(a),a.g.cancel(),a.g=null)}function wp(a){da(a),a.v&&(o.clearTimeout(a.v),a.v=null),pa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function fa(a){if(!rp(a.h)&&!a.m){a.m=!0;var c=a.Ea;P||m(),O||(P(),O=!0),_.add(c,a),a.D=0}}function AT(a,c){return ip(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ps(h(a.Ea,a,c),Cp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Mn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=ue(V),ae(V,this.U)):V=this.U),this.u!==null||this.R||(N.J=V,V=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Ip(this,N,c),d=Zt(this.J),me(d,"RID",a),me(d,"CVER",22),this.G&&me(d,"X-HTTP-Session-Id",this.G),Rs(this,d),V&&(this.R?c="headers="+gs(mp(V))+"&"+c:this.u&&Qu(d,this.u,V)),qu(this.h,N),this.Ra&&me(d,"TYPE","init"),this.S?(me(d,"$req",c),me(d,"SID","null"),N.U=!0,Bu(N,d,null)):Bu(N,d,c),this.I=2}}else this.I==3&&(a?Tp(this,a):this.i.length==0||rp(this.h)||Tp(this))};function Tp(a,c){var d;c?d=c.l:d=a.V++;const g=Zt(a.J);me(g,"SID",a.M),me(g,"RID",d),me(g,"AID",a.K),Rs(a,g),a.u&&a.o&&Qu(g,a.u,a.o),d=new Mn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Ip(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),qu(a.h,d),Bu(d,g,c)}function Rs(a,c){a.H&&G(a.H,function(d,g){me(c,g,d)}),a.l&&G({},function(d,g){me(c,g,d)})}function Ip(a,c,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var N=a.i;let ee=-1;for(;;){const Oe=["count="+d];ee==-1?d>0?(ee=N[0].g,Oe.push("ofs="+ee)):ee=0:Oe.push("ofs="+ee);let de=!0;for(let Ue=0;Ue<d;Ue++){var V=N[Ue].g;const en=N[Ue].map;if(V-=ee,V<0)ee=Math.max(0,N[Ue].g-100),de=!1;else try{V="req"+V+"_"||"";try{var j=en instanceof Map?en:Object.entries(en);for(const[Nr,jn]of j){let zn=jn;l(jn)&&(zn=bu(jn)),Oe.push(V+Nr+"="+encodeURIComponent(zn))}}catch(Nr){throw Oe.push(V+"type="+encodeURIComponent("_badmap")),Nr}}catch{g&&g(en)}}if(de){j=Oe.join("&");break e}}j=void 0}return a=a.i.splice(0,d),c.G=a,j}function Sp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;P||m(),O||(P(),O=!0),_.add(c,a),a.A=0}}function Yu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ps(h(a.Da,a),Cp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ap(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ps(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,at(10),da(this),Ap(this))};function Ju(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ap(a){a.g=new Mn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Zt(a.na);me(c,"RID","rpc"),me(c,"SID",a.M),me(c,"AID",a.K),me(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&me(c,"TO",a.ia),me(c,"TYPE","xmlhttp"),Rs(a,c),a.u&&a.o&&Qu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ua(Zt(c)),d.u=null,d.R=!0,Zf(d,a)}t.Va=function(){this.C!=null&&(this.C=null,da(this),Yu(this),at(19))};function pa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Rp(a,c){var d=null;if(a.g==c){pa(a),Ju(a),a.g=null;var g=2}else if(Wu(a.h,c))d=c.G,sp(a.h,c),g=1;else return;if(a.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var N=a.D;g=oa(),ot(g,new Gf(g,d)),fa(a)}else Sp(a);else if(N=c.m,N==3||N==0&&c.X>0||!(g==1&&AT(a,c)||g==2&&Yu(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),N){case 1:Pr(a,5);break;case 4:Pr(a,10);break;case 3:Pr(a,6);break;default:Pr(a,2)}}}function Cp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Pr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),g=a.Ua;const N=!g;g=new bn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||_s(g,"https"),ua(g),N?vT(g.toString(),d):ET(g.toString(),d)}else at(2);a.I=0,a.l&&a.l.pa(c),kp(a),wp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))};function kp(a){if(a.I=0,a.ja=[],a.l){const c=op(a.h);(c.length!=0||a.i.length!=0)&&(x(a.ja,c),x(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Pp(a,c,d){var g=d instanceof bn?Zt(d):new bn(d);if(g.g!="")c&&(g.g=c+"."+g.g),vs(g,g.u);else{var N=o.location;g=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;const V=new bn(null);g&&_s(V,g),c&&(V.g=c),N&&vs(V,N),d&&(V.h=d),g=V}return d=a.G,c=a.wa,d&&c&&me(g,d,c),me(g,"VER",a.ka),Rs(a,g),g}function Np(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Re(new Gu({ab:d})):new Re(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xp(){}t=xp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ma(){}ma.prototype.g=function(a,c){return new wt(a,c)};function wt(a,c){Xe.call(this),this.g=new Ep(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!w(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ci(this)}p(wt,Xe),wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Xu(this.g)},wt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=bu(a),a=d);c.i.push(new hT(c.Ya++,a)),c.I==3&&fa(c)},wt.prototype.N=function(){this.g.l=null,delete this.j,Xu(this.g),delete this.g,wt.Z.N.call(this)};function Dp(a){Fu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(Dp,Fu);function Vp(){Uu.call(this),this.status=1}p(Vp,Uu);function ci(a){this.g=a}p(ci,xp),ci.prototype.ra=function(){ot(this.g,"a")},ci.prototype.qa=function(a){ot(this.g,new Dp(a))},ci.prototype.pa=function(a){ot(this.g,new Vp)},ci.prototype.oa=function(){ot(this.g,"b")},ma.prototype.createWebChannel=ma.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,PE=function(){return new ma},kE=function(){return oa()},CE=Rr,Uh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},aa.NO_ERROR=0,aa.TIMEOUT=8,aa.HTTP_ERROR=6,rl=aa,Qf.COMPLETE="complete",RE=Qf,Hf.EventType=ds,ds.OPEN="a",ds.CLOSE="b",ds.ERROR="c",ds.MESSAGE="d",Xe.prototype.listen=Xe.prototype.J,Hs=Hf,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,AE=Re}).apply(typeof La<"u"?La:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss="12.14.0";function JC(t){ss=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new Xd("@firebase/firestore");function di(){return Jr.logLevel}function z(t,...e){if(Jr.logLevel<=se.DEBUG){const n=e.map(lf);Jr.debug(`Firestore (${ss}): ${t}`,...n)}}function Dn(t,...e){if(Jr.logLevel<=se.ERROR){const n=e.map(lf);Jr.error(`Firestore (${ss}): ${t}`,...n)}}function Zr(t,...e){if(Jr.logLevel<=se.WARN){const n=e.map(lf);Jr.warn(`Firestore (${ss}): ${t}`,...n)}}function lf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,NE(t,r,n)}function NE(t,e,n){let r=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Dn(r),new Error(r)}function ce(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||NE(e,i,r)}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class ek{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tk{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new jr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new jr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string",31837,{l:r}),new xE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string",2055,{h:e}),new et(e)}}class nk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class rk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new nk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ik{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ce(this.o===void 0,3512);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new vg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new vg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=sk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function jh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Vc(i)===Vc(s)?ne(i,s):Vc(i)?1:-1}return ne(t.length,e.length)}const ok=55296,ak=57343;function Vc(t){const e=t.charCodeAt(0);return e>=ok&&e<=ak}function Xi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="__name__";class rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&X(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=rn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=rn.isNumericId(e),i=rn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?rn.extractNumericId(e).compare(rn.extractNumericId(n)):jh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hr.fromString(e.substring(4,e.length-2))}}class Ie extends rn{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const lk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends rn{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return lk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Eg}static keyField(){return new qe([Eg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ie.fromString(e))}static fromName(e){return new K(Ie.fromString(e).popFirst(5))}static empty(){return new K(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t,e,n){if(!n)throw new q(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ck(t,e,n,r){if(e===!0&&r===!0)throw new q(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wg(t){if(!K.isDocumentKey(t))throw new q(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function DE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function cf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X(12329,{type:typeof t})}function Fi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cf(t);throw new q(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,e){const n={typeString:t};return e&&(n.value=e),n}function Xo(t,e){if(!DE(t))throw new q(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new q(F.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=-62135596800,Ig=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ig);return new ye(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Tg)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ig}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xo(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Tg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:Ve("string",ye._jsonSchemaVersion),seconds:Ve("number"),nanoseconds:Ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new ye(0,0))}static max(){return new Y(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=-1;function hk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new ye(n+1,0):new ye(n,r));return new pr(i,K.empty(),e)}function dk(t){return new pr(t.readTime,t.key,Po)}class pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pr(Y.min(),K.empty(),Po)}static max(){return new pr(Y.max(),K.empty(),Po)}}function fk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==pk)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function gk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function as(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Iu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=-1;function Su(t){return t==null}function Bl(t){return t===0&&1/t==-1/0}function yk(t){return typeof t=="number"&&Number.isInteger(t)&&!Bl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="";function _k(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sg(e)),e=vk(t.get(n),e);return Sg(e)}function vk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case VE:n+="";break;default:n+=s}}return n}function Sg(t){return t+VE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ri(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function OE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ma(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ma(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ma(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ma(this.root,e,this.comparator,!0)}}class Ma{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rg(this.data.getIterator())}getIteratorFrom(e){return new Rg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class Rg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new Fe(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new LE("Invalid base64 string: "+s):s}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Ek=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(t){if(ce(!!t,39018),typeof t=="string"){let e=0;const n=Ek.exec(t);if(ce(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gr(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="server_timestamp",bE="__type__",FE="__previous_value__",UE="__local_write_time__";function df(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[bE])==null?void 0:r.stringValue)===ME}function Au(t){const e=t.mapValue.fields[FE];return df(e)?Au(e):e}function No(t){const e=mr(t.mapValue.fields[UE].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n,r,i,s,o,l,u,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const $l="(default)";class xo{constructor(e,n){this.projectId=e,this.database=n||$l}static empty(){return new xo("","")}get isDefaultDatabase(){return this.database===$l}isEqual(e){return e instanceof xo&&e.projectId===this.projectId&&e.database===this.database}}function Tk(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new q(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xo(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="__type__",Ik="__max__",ba={mapValue:{}},zE="__vector__",Hl="value";function yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?df(t)?4:Ak(t)?9007199254740991:Sk(t)?10:11:X(28295,{value:t})}function fn(t,e){if(t===e)return!0;const n=yr(t);if(n!==yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return No(t).isEqual(No(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mr(i.timestampValue),l=mr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return gr(i.bytesValue).isEqual(gr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Pe(i.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(i.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Pe(i.integerValue)===Pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Pe(i.doubleValue),l=Pe(s.doubleValue);return o===l?Bl(o)===Bl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Xi(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ag(o)!==Ag(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!fn(o[u],l[u])))return!1;return!0}(t,e);default:return X(52216,{left:t})}}function Do(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function Yi(t,e){if(t===e)return 0;const n=yr(t),r=yr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Pe(s.integerValue||s.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Cg(t.timestampValue,e.timestampValue);case 4:return Cg(No(t),No(e));case 5:return jh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=gr(s),u=gr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ne(l[h],u[h]);if(f!==0)return f}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Pe(s.latitude),Pe(o.latitude));return l!==0?l:ne(Pe(s.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return kg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var y,I,x,D;const l=s.fields||{},u=o.fields||{},h=(y=l[Hl])==null?void 0:y.arrayValue,f=(I=u[Hl])==null?void 0:I.arrayValue,p=ne(((x=h==null?void 0:h.values)==null?void 0:x.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return p!==0?p:kg(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ba.mapValue&&o===ba.mapValue)return 0;if(s===ba.mapValue)return 1;if(o===ba.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const y=jh(u[p],f[p]);if(y!==0)return y;const I=Yi(l[u[p]],h[f[p]]);if(I!==0)return I}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X(23264,{he:n})}}function Cg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=mr(t),r=mr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function kg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Yi(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function Ji(t){return zh(t)}function zh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=zh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${zh(n.fields[o])}`;return i+"}"}(t.mapValue):X(61005,{value:t})}function il(t){switch(yr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Au(t);return e?16+il(e):16;case 5:return 2*t.stringValue.length;case 6:return gr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+il(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ri(r.fields,(s,o)=>{i+=s.length+il(o)}),i}(t.mapValue);default:throw X(13486,{value:t})}}function Vo(t){return!!t&&"integerValue"in t}function BE(t){return Vo(t)||function(n){return!!n&&"doubleValue"in n}(t)}function ff(t){return!!t&&"arrayValue"in t}function Pg(t){return!!t&&"nullValue"in t}function Ng(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sl(t){return!!t&&"mapValue"in t}function Sk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[jE])==null?void 0:r.stringValue)===zE}function io(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ri(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=io(t.arrayValue.values[n]);return e}return{...t}}function Ak(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Ik}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=io(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=io(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());sl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];sl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ri(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(io(this.value))}}function $E(t){const e=[];return ri(t.fields,(n,r)=>{const i=new qe([n]);if(sl(r)){const s=$E(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,Y.min(),Y.min(),Y.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,Y.min(),Y.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,Y.min(),Y.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.position=e,this.inclusive=n}}function xg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Yi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n="asc"){this.field=e,this.dir=n}}function Rk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{}class Me extends HE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kk(e,n,r):n==="array-contains"?new xk(e,r):n==="in"?new Dk(e,r):n==="not-in"?new Vk(e,r):n==="array-contains-any"?new Ok(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Pk(e,r):new Nk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Yi(n,this.value)):n!==null&&yr(this.value)===yr(n)&&this.matchesComparison(Yi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends HE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new pn(e,n)}matches(e){return WE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function WE(t){return t.op==="and"}function qE(t){return Ck(t)&&WE(t)}function Ck(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function Bh(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Ji(t.value);if(qE(t))return t.filters.map(e=>Bh(e)).join(",");{const e=t.filters.map(n=>Bh(n)).join(",");return`${t.op}(${e})`}}function KE(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&fn(r.value,i.value)}(t,e):t instanceof pn?function(r,i){return i instanceof pn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&KE(o,i.filters[l]),!0):!1}(t,e):void X(19439)}function GE(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${Ji(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(GE).join(" ,")+"}"}(t):"Filter"}class kk extends Me{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class Pk extends Me{constructor(e,n){super(e,"in",n),this.keys=QE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Nk extends Me{constructor(e,n){super(e,"not-in",n),this.keys=QE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function QE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class xk extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ff(n)&&Do(n.arrayValue,this.value)}}class Dk extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Do(this.value.arrayValue,n)}}class Vk extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Do(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Do(this.value.arrayValue,n)}}class Ok extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Do(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Vg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Lk(t,e,n,r,i,s,o)}function pf(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Su(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ji(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ji(r)).join(",")),e.Te=n}return e.Te}function mf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Rk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!KE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dg(t.startAt,e.startAt)&&Dg(t.endAt,e.endAt)}function $h(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Mk(t,e,n,r,i,s,o,l){return new Ru(t,e,n,r,i,s,o,l)}function gf(t){return new Ru(t)}function Og(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bk(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Fk(t){return t.collectionGroup!==null}function so(t){const e=Z(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Fe(qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new ql(s,r))}),n.has(qe.keyField().canonicalString())||e.Ie.push(new ql(qe.keyField(),r))}return e.Ie}function cn(t){const e=Z(t);return e.Ee||(e.Ee=Uk(e,so(t))),e.Ee}function Uk(t,e){if(t.limitType==="F")return Vg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ql(i.field,s)});const n=t.endAt?new Wl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wl(t.startAt.position,t.startAt.inclusive):null;return Vg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hh(t,e,n){return new Ru(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cu(t,e){return mf(cn(t),cn(e))&&t.limitType===e.limitType}function XE(t){return`${pf(cn(t))}|lt:${t.limitType}`}function fi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>GE(i)).join(", ")}]`),Su(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ji(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ji(i)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function ku(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of so(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=xg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,so(r),i)||r.endAt&&!function(o,l,u){const h=xg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,so(r),i))}(t,e)}function jk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YE(t){return(e,n)=>{let r=!1;for(const i of so(t)){const s=zk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function zk(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Yi(u,h):X(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ri(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return OE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=new Ee(K.comparator);function Vn(){return Bk}const JE=new Ee(K.comparator);function Ws(...t){let e=JE;for(const n of t)e=e.insert(n.key,n);return e}function ZE(t){let e=JE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function br(){return oo()}function ew(){return oo()}function oo(){return new ii(t=>t.toString(),(t,e)=>t.isEqual(e))}const $k=new Ee(K.comparator),Hk=new Fe(K.comparator);function re(...t){let e=Hk;for(const n of t)e=e.add(n);return e}const Wk=new Fe(ne);function qk(){return Wk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bl(e)?"-0":e}}function yf(t){return{integerValue:""+t}}function Kk(t,e){return yk(e)?yf(e):Pu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this._=void 0}}function Gk(t,e,n){return t instanceof Kl?function(i,s){const o={fields:{[bE]:{stringValue:ME},[UE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&df(s)&&(s=Au(s)),s&&(o.fields[FE]=s),{mapValue:o}}(n,e):t instanceof Oo?nw(t,e):t instanceof Lo?rw(t,e):t instanceof Mo?function(i,s){const o=tw(i,s),l=Xl(o)+Xl(i.Ae);return Vo(o)&&Vo(i.Ae)?yf(l):Pu(i.serializer,l)}(t,e):t instanceof Gl?function(i,s){return Lg(i,s,Math.min)}(t,e):t instanceof Ql?function(i,s){return Lg(i,s,Math.max)}(t,e):void 0}function Qk(t,e,n){return t instanceof Oo?nw(t,e):t instanceof Lo?rw(t,e):n}function tw(t,e){return t instanceof Mo?BE(e)?e:{integerValue:0}:null}class Kl extends Nu{}class Oo extends Nu{constructor(e){super(),this.elements=e}}function nw(t,e){const n=iw(e);for(const r of t.elements)n.some(i=>fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Lo extends Nu{constructor(e){super(),this.elements=e}}function rw(t,e){let n=iw(e);for(const r of t.elements)n=n.filter(i=>!fn(i,r));return{arrayValue:{values:n}}}class _f extends Nu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}class Mo extends _f{}class Gl extends _f{}class Ql extends _f{}function Lg(t,e,n){if(!BE(e))return t.Ae;const r=n(Xl(e),Xl(t.Ae));return Vo(e)&&Vo(t.Ae)?yf(r):Pu(t.serializer,r)}function Xl(t){return Pe(t.integerValue||t.doubleValue)}function iw(t){return ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Xk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Oo&&i instanceof Oo||r instanceof Lo&&i instanceof Lo?Xi(r.elements,i.elements,fn):r instanceof Mo&&i instanceof Mo||r instanceof Gl&&i instanceof Gl||r instanceof Ql&&i instanceof Ql?fn(r.Ae,i.Ae):r instanceof Kl&&i instanceof Kl}(t.transform,e.transform)}class Yk{constructor(e,n){this.version=e,this.transformResults=n}}class An{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new An}static exists(e){return new An(void 0,e)}static updateTime(e){return new An(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ol(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xu{}function sw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new aw(t.key,An.none()):new Yo(t.key,t.data,An.none());{const n=t.data,r=Dt.empty();let i=new Fe(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new si(t.key,r,new Wt(i.toArray()),An.none())}}function Jk(t,e,n){t instanceof Yo?function(i,s,o){const l=i.value.clone(),u=bg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof si?function(i,s,o){if(!ol(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=bg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(ow(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ao(t,e,n,r){return t instanceof Yo?function(s,o,l,u){if(!ol(s.precondition,o))return l;const h=s.value.clone(),f=Fg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof si?function(s,o,l,u){if(!ol(s.precondition,o))return l;const h=Fg(s.fieldTransforms,u,o),f=o.data;return f.setAll(ow(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return ol(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Zk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=tw(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function Mg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Xi(r,i,(s,o)=>Xk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yo extends xu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class si extends xu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ow(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function bg(t,e,n){const r=new Map;ce(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Qk(o,l,n[i]))}return r}function Fg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Gk(s,o,e))}return r}class aw extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eP extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Jk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ew();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=sw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Xi(this.mutations,e.mutations,(n,r)=>Mg(n,r))&&Xi(this.baseMutations,e.baseMutations,(n,r)=>Mg(n,r))}}class vf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return $k}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,oe;function iP(t){switch(t){case F.OK:return X(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return X(15467,{code:t})}}function lw(t){if(t===void 0)return Dn("GRPC error has no .code"),F.UNKNOWN;switch(t){case xe.OK:return F.OK;case xe.CANCELLED:return F.CANCELLED;case xe.UNKNOWN:return F.UNKNOWN;case xe.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case xe.INTERNAL:return F.INTERNAL;case xe.UNAVAILABLE:return F.UNAVAILABLE;case xe.UNAUTHENTICATED:return F.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case xe.NOT_FOUND:return F.NOT_FOUND;case xe.ALREADY_EXISTS:return F.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return F.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case xe.ABORTED:return F.ABORTED;case xe.OUT_OF_RANGE:return F.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return F.UNIMPLEMENTED;case xe.DATA_LOSS:return F.DATA_LOSS;default:return X(39323,{code:t})}}(oe=xe||(xe={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=new hr([4294967295,4294967295],0);function Ug(t){const e=sP().encode(t),n=new SE;return n.update(e),new Uint8Array(n.digest())}function jg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new hr([n,r],0),new hr([i,s],0)]}class Ef{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qs(`Invalid padding: ${n}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=hr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(hr.fromNumber(r)));return i.compare(oP)===1&&(i=new hr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ug(e),[r,i]=jg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ef(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ug(e),[r,i]=jg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Zo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Jo(Y.min(),i,new Ee(ne),Vn(),re())}}class Zo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zo(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class uw{constructor(e,n){this.targetId=e,this.Ce=n}}class cw{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class zg{constructor(e){this.targetId=e,this.ve=0,this.Fe=Bg(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X(38017,{changeType:s})}}),new Zo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Bg()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ce(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const Ls="WatchChangeAggregator";class aP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vn(),this.Je=Fa(),this.He=Fa(),this.Ze=new Ee(ne)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.ze.get(n);if(r)switch(e.state){case 0:this.nt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Le(e.resumeToken));break;default:X(56790,{state:e.state})}else z(Ls,`handleTargetChange received targetChange for untracked target ID (${n}) with state (${e.state})`)})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.Ce.count,i=this.st(n);if(i){const s=i.target;if($h(s))if(r===0){const o=new K(s.path);this.et(n,o,nt.newNoDocument(o,Y.min()))}else ce(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}_t(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=gr(r).toUint8Array()}catch(u){if(u instanceof LE)return Zr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ef(o,i,s)}catch(u){return Zr(u instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ut(e,n,r){return n.Ce.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Pt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&$h(l.target)){const u=new K(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.et(o,u,nt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=re();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Jo(e,n,this.Ze,this.je,r);return this.je=Vn(),this.Je=Fa(),this.He=Fa(),this.Ze=new Ee(ne),i}Ye(e,n){const r=this.ze.get(e);if(!r||!this.nt(e))return void z(Ls,`addDocumentToTarget received document for unknown inactive target (${e})`);const i=this.It(e,n.key)?2:0;r.Ke(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Tt(n.key).add(e)),this.He=this.He.insert(n.key,this.Et(n.key).add(e))}et(e,n,r){const i=this.ze.get(e);i&&this.nt(e)?(this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Et(n).delete(e)),this.He=this.He.insert(n,this.Et(n).add(e)),r&&(this.je=this.je.insert(n,r))):z(Ls,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const n=this.ze.get(e);if(!n)return 0;const r=n.ke();return this.Ge.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}$e(e){let n=this.ze.get(e);n||(z(Ls,`recordPendingTargetRequest set up tracking for target ID ${e}`),n=new zg(e),this.ze.set(e,n)),n.$e()}Et(e){let n=this.He.get(e);return n||(n=new Fe(ne),this.He=this.He.insert(e,n)),n}Tt(e){let n=this.Je.get(e);return n||(n=new Fe(ne),this.Je=this.Je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||z(Ls,"Detected inactive target",e),n}st(e){const n=this.ze.get(e);return n===void 0||n.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new zg(e)),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Fa(){return new Ee(K.comparator)}function Bg(){return new Ee(K.comparator)}const lP={asc:"ASCENDING",desc:"DESCENDING"},uP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cP={and:"AND",or:"OR"};class hP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wh(t,e){return t.useProto3Json||Su(e)?e:{value:e}}function Yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dP(t,e){return Yl(t,e.toTimestamp())}function hn(t){return ce(!!t,49232),Y.fromTimestamp(function(n){const r=mr(n);return new ye(r.seconds,r.nanos)}(t))}function wf(t,e){return qh(t,e).canonicalString()}function qh(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dw(t){const e=Ie.fromString(t);return ce(yw(e),10190,{key:e.toString()}),e}function Kh(t,e){return wf(t.databaseId,e.path)}function Oc(t,e){const n=dw(e);if(n.get(1)!==t.databaseId.projectId)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(pw(n))}function fw(t,e){return wf(t.databaseId,e)}function fP(t){const e=dw(t);return e.length===4?Ie.emptyPath():pw(e)}function Gh(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pw(t){return ce(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function $g(t,e,n){return{name:Kh(t,e),fields:n.value.mapValue.fields}}function pP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ce(f===void 0||typeof f=="string",58123),Qe.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?F.UNKNOWN:lw(h.code);return new q(f,h.message||"")}(o);n=new cw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Oc(t,r.document.name),s=hn(r.document.updateTime),o=r.document.createTime?hn(r.document.createTime):Y.min(),l=new Dt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new al(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Oc(t,r.document),s=r.readTime?hn(r.readTime):Y.min(),o=nt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new al([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Oc(t,r.document),s=r.removedTargetIds||[];n=new al([],s,i,null)}else{if(!("filter"in e))return X(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new rP(i,s),l=r.targetId;n=new uw(l,o)}}return n}function mP(t,e){let n;if(e instanceof Yo)n={update:$g(t,e.key,e.value)};else if(e instanceof aw)n={delete:Kh(t,e.key)};else if(e instanceof si)n={update:$g(t,e.key,e.data),updateMask:SP(e.fieldMask)};else{if(!(e instanceof eP))return X(16599,{Vt:e.type});n={verify:Kh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Kl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Lo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),increment:l.Ae};if(l instanceof Gl)return{fieldPath:o.field.canonicalString(),minimum:l.Ae};if(l instanceof Ql)return{fieldPath:o.field.canonicalString(),maximum:l.Ae};throw X(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:dP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X(27497)}(t,e.precondition)),n}function gP(t,e){return t&&t.length>0?(ce(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?hn(i.updateTime):hn(s);return o.isEqual(Y.min())&&(o=hn(s)),new Yk(o,i.transformResults||[])}(n,e))):[]}function yP(t,e){return{documents:[fw(t,e.path)]}}function _P(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fw(t,i);const s=function(h){if(h.length!==0)return gw(pn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:pi(y.field),direction:wP(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Wh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{dt:n,parent:i}}function vP(t){let e=fP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const y=mw(p);return y instanceof pn&&qE(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(x){return new ql(mi(x.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,Su(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(p){const y=!!p.before,I=p.values||[];return new Wl(I,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,I=p.values||[];return new Wl(I,y)}(n.endAt)),Mk(e,i,o,s,l,"F",u,h)}function EP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=mi(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=mi(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=mi(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=mi(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(t):t.fieldFilter!==void 0?function(n){return Me.create(mi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>mw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(n.compositeFilter.op))}(t):X(30097,{filter:t})}function wP(t){return lP[t]}function TP(t){return uP[t]}function IP(t){return cP[t]}function pi(t){return{fieldPath:t.canonicalString()}}function mi(t){return qe.fromServerFormat(t.fieldPath)}function gw(t){return t instanceof Me?function(n){if(n.op==="=="){if(Ng(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NAN"}};if(Pg(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ng(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NAN"}};if(Pg(n.value))return{unaryFilter:{field:pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pi(n.field),op:TP(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(i=>gw(i));return r.length===1?r[0]:{compositeFilter:{op:IP(n.op),filters:r}}}(t):X(54877,{filter:t})}function SP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function _w(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.gt=e}}function RP(t){const e=vP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(){this.Sn=new kP}addToCollectionParentIndex(e,n){return this.Sn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(pr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(pr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class kP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Fe(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Fe(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vw=41943040;class ft{static withCacheSize(e){return new ft(e,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft.DEFAULT_COLLECTION_PERCENTILE=10,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ft.DEFAULT=new ft(vw,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ft.DISABLED=new ft(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new _r(0)}static _r(){return new _r(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="LruGarbageCollector",PP=1048576;function qg([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class NP{constructor(e){this.hr=e,this.buffer=new Fe(qg),this.Pr=0}Tr(){return++this.Pr}Ir(e){const n=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();qg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return this.Er!==null}Rr(e){z(Wg,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){as(n)?z(Wg,"Ignoring IndexedDB error during garbage collection: ",n):await os(n)}await this.Rr(3e5)})}}class DP{constructor(e,n){this.Ar=e,this.params=n}calculateTargetCount(e,n){return this.Ar.Vr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Iu.ce);const r=new NP(n);return this.Ar.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Ar.dr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Ar.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Ar.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Hg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hg):this.mr(e,n))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),di()<=se.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function VP(t,e){return new DP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.changes=new ii(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ao(r.mutation,i,Wt.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=br();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ws();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Vn();const o=oo(),l=function(){return oo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof si)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ao(f.mutation,h,f.mutation.getFieldMask(),ye.now())):o.set(h.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new LP(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=oo();let i=new Ee((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Wt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=ew();f.forEach(y=>{if(!s.has(y)){const I=sw(n.get(y),r.get(y));I!==null&&p.set(y,I),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return bk(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(br());let l=Po,u=s;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,re())).next(f=>({batchId:l,changes:ZE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Ws();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ws();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(p,y){return new Ru(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,nt.newInvalidDocument(f)))});let l=Ws();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&ao(f.mutation,h,Wt.empty(),ye.now()),ku(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,n){return M.resolve(this.Or.get(n))}saveBundleMetadata(e,n){return this.Or.set(n.id,function(i){return{id:i.id,version:i.version,createTime:hn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Nr.get(n))}saveNamedQuery(e,n){return this.Nr.set(n.name,function(i){return{name:i.name,query:RP(i.bundledQuery),readTime:hn(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(){this.overlays=new Ee(K.comparator),this.Br=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=br();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Br.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Br.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=br(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=br(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=br(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Br.get(i.largestBatchId).delete(r.key);this.Br.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nP(n,r));let s=this.Br.get(n);s===void 0&&(s=re(),this.Br.set(n,s)),this.Br.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.Lr=new Fe(je.kr),this.qr=new Fe(je.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,n){const r=new je(e,n);this.Lr=this.Lr.add(r),this.qr=this.qr.add(r)}Ur(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.$r(new je(e,n))}Wr(e,n){e.forEach(r=>this.removeReference(r,n))}Qr(e){const n=new K(new Ie([])),r=new je(n,e),i=new je(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.$r(o),s.push(o.key)}),s}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const n=new K(new Ie([])),r=new je(n,e),i=new je(n,e+1);let s=re();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new je(e,0),r=this.Lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.jr=n}static kr(e,n){return K.comparator(e.key,n.key)||ne(e.jr,n.jr)}static Kr(e,n){return ne(e.jr,n.jr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Xn=1,this.Jr=new Fe(je.kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Jr=this.Jr.add(new je(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Hr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Zr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?hf:this.Xn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const l=this.Hr(o.jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(ne);return n.forEach(i=>{const s=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],l=>{r=r.add(l.jr)})}),M.resolve(this.Xr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new je(new K(s),0);let l=new Fe(ne);return this.Jr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.jr)),!0)},o),M.resolve(this.Xr(l))}Xr(e){const n=[];return e.forEach(r=>{const i=this.Hr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return M.forEach(n.mutations,i=>{const s=new je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}tr(e){}containsKey(e,n){const r=new je(n,0),i=this.Jr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Yr(e,n){return this.Zr(e)}Zr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Hr(e){const n=this.Zr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e){this.ei=e,this.docs=function(){return new Ee(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ei(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Vn();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||fk(dk(f),r)<=0||(i.has(f.key)||ku(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X(9500)}ti(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BP(this)}getSize(e){return M.resolve(this.size)}}class BP extends OP{constructor(e){super(),this.Fr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Fr.addEntry(e,i)):this.Fr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Fr.getEntry(e,n)}getAllFromCache(e,n){return this.Fr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.persistence=e,this.ni=new ii(n=>pf(n),mf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ri=0,this.ii=new Tf,this.targetCount=0,this.si=_r.sr()}forEachTarget(e,n){return this.ni.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ri&&(this.ri=n),M.resolve()}cr(e){this.ni.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.si=new _r(n),this.highestTargetId=n),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,n){return this.cr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.cr(n),M.resolve()}removeTargetData(e,n){return this.ni.delete(n.target),this.ii.Qr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ni.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ni.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ni.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.ii.Ur(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.ii.Wr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ii.Qr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ii.zr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.ii.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n){this.oi={},this.overlays={},this._i=new Iu(0),this.ai=!1,this.ai=!0,this.ui=new UP,this.referenceDelegate=e(this),this.ci=new $P(this),this.indexManager=new CP,this.remoteDocumentCache=function(i){return new zP(i)}(r=>this.referenceDelegate.li(r)),this.serializer=new AP(n),this.hi=new bP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new FP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.oi[e.toKey()];return r||(r=new jP(n,this.referenceDelegate),this.oi[e.toKey()]=r),r}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new HP(this._i.next());return this.referenceDelegate.Pi(),r(i).next(s=>this.referenceDelegate.Ti(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return M.or(Object.values(this.oi).map(r=>()=>r.containsKey(e,n)))}}class HP extends mk{constructor(e){super(),this.currentSequenceNumber=e}}class If{constructor(e){this.persistence=e,this.Ei=new Tf,this.Ri=null}static Ai(e){return new If(e)}get Vi(){if(this.Ri)return this.Ri;throw X(60996)}addReference(e,n,r){return this.Ei.addReference(r,n),this.Vi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ei.removeReference(r,n),this.Vi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Vi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ei.Qr(n.targetId).forEach(i=>this.Vi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Vi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Pi(){this.Ri=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Vi,r=>{const i=K.fromPath(r);return this.di(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.di(e,n).next(r=>{r?this.Vi.delete(n.toString()):this.Vi.add(n.toString())})}li(e){return 0}di(e,n){return M.or([()=>M.resolve(this.Ei.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Jl{constructor(e,n){this.persistence=e,this.mi=new ii(r=>_k(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=VP(this,n)}static Ai(e,n){return new Jl(e,n)}Pi(){}Ti(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Vr(e){const n=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}gr(e){let n=0;return this.dr(e,r=>{n++}).next(()=>n)}dr(e,n){return M.forEach(this.mi,(r,i)=>this.yr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ti(e,o=>this.yr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.mi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.mi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.mi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.mi.set(n,e.currentSequenceNumber),M.resolve()}li(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=il(e.data.value)),n}yr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.mi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ps=r,this.Ts=i}static Is(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Sf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=function(){return yS()?8:gk(it())>0?6:4}()}initialize(e,n){this.ds=e,this.indexManager=n,this.Es=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.fs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.gs(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new WP;return this.ps(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.ys(e,n,o,l.size)})}).next(()=>s.result)}ys(e,n,r,i){return r.documentReadCount<this.As?(di()<=se.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),M.resolve()):(di()<=se.DEBUG&&z("QueryEngine","Query:",fi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Vs*i?(di()<=se.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):M.resolve())}fs(e,n){if(Og(n))return M.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Hh(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.ds.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ws(n,l);return this.Ss(n,h,o,u.readTime)?this.fs(e,Hh(n,null,"F")):this.bs(e,h,n,u)}))})))}gs(e,n,r,i){return Og(n)||i.isEqual(Y.min())?M.resolve(null):this.ds.getDocuments(e,r).next(s=>{const o=this.ws(n,s);return this.Ss(n,o,r,i)?M.resolve(null):(di()<=se.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fi(n)),this.bs(e,o,n,hk(i,Po)).next(l=>l))})}ws(e,n){let r=new Fe(YE(e));return n.forEach((i,s)=>{ku(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ps(e,n,r){return di()<=se.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",fi(n)),this.ds.getDocumentsMatchingQuery(e,n,pr.min(),r)}bs(e,n,r,i){return this.ds.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="LocalStore",KP=3e8;class GP{constructor(e,n,r,i){this.persistence=e,this.Ds=n,this.serializer=i,this.Cs=new Ee(ne),this.vs=new ii(s=>pf(s),mf),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(r)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new MP(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Cs))}}function QP(t,e,n,r){return new GP(t,e,n,r)}async function ww(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.xs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Os:h,removedBatchIds:o,addedBatchIds:l}))})})}function XP(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ms.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,y=p.keys();let I=M.resolve();return y.forEach(x=>{I=I.next(()=>f.getEntry(u,x)).next(D=>{const b=h.docVersions.get(x);ce(b!==null,48541),D.version.compareTo(b)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Tw(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ci.getLastRemoteSnapshotVersion(n))}function YP(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.Cs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ms.newChangeBuffer({trackRemovals:!0});i=n.Cs;const l=[];e.targetChanges.forEach((f,p)=>{const y=i.get(p);if(!y)return;l.push(n.ci.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.ci.addMatchingKeys(s,f.addedDocuments,p)));let I=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(Qe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(p,I),function(D,b,R){return D.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=KP?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(y,I,f)&&l.push(n.ci.updateTargetData(s,I))});let u=Vn(),h=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(JP(s,o,e.documentUpdates).next(f=>{u=f.Ns,h=f.Bs})),!r.isEqual(Y.min())){const f=n.ci.getLastRemoteSnapshotVersion(s).next(p=>n.ci.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Cs=i,s))}function JP(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Vn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):z(Af,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ns:o,Bs:i}})}function ZP(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=hf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function e1(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ci.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.ci.allocateTargetId(r).next(o=>(i=new Tn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ci.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Cs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Cs=n.Cs.insert(r.targetId,r),n.vs.set(e,r.targetId)),r})}async function Qh(t,e,n){const r=Z(t),i=r.Cs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!as(o))throw o;z(Af,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Cs=r.Cs.remove(e),r.vs.delete(i.target)}function Kg(t,e,n){const r=Z(t);let i=Y.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=Z(u),y=p.vs.get(f);return y!==void 0?M.resolve(p.Cs.get(y)):p.ci.getTargetData(h,f)}(r,o,cn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.ci.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Ds.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:re())).next(l=>(t1(r,jk(e),l),{documents:l,Ls:s})))}function t1(t,e,n){let r=t.Fs.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Fs.set(e,r)}class Gg{constructor(){this.activeTargetIds=qk()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class n1{constructor(){this.Co=new Gg,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,n,r){this.vo[e]=n}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new Gg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{Fo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="ConnectivityMonitor";class Xg{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){z(Qg,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){z(Qg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua=null;function Xh(){return Ua===null?Ua=function(){return 268435456+Math.round(2147483648*Math.random())}():Ua++,"0x"+Ua.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="RestConnection",i1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class s1{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Uo=this.databaseId.database===$l?`project_id=${r}`:`project_id=${r}&database_id=${i}`}$o(e,n,r,i,s){const o=Xh(),l=this.Wo(e,n.toUriEncodedString());z(Lc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(u,i,s);const{host:h}=new URL(l),f=Wo(h);return this.Go(e,l,u,r,f).then(p=>(z(Lc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Zr(Lc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}zo(e,n,r,i,s,o){return this.$o(e,n,r,i,s)}Qo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ss}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Wo(e,n){const r=i1[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection",Ms=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Ui extends s1{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!Ui.u_){const e=kE();Ms(e,CE.STAT_EVENT,n=>{n.stat===Uh.PROXY?z(Ze,"STAT_EVENT: detected buffering proxy"):n.stat===Uh.NOPROXY&&z(Ze,"STAT_EVENT: detected no buffering proxy")}),Ui.u_=!0}}Go(e,n,r,i,s){const o=Xh();return new Promise((l,u)=>{const h=new AE;h.setWithCredentials(!0),h.listenOnce(RE.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case rl.NO_ERROR:const p=h.getResponseJson();z(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case rl.TIMEOUT:z(Ze,`RPC '${e}' ${o} timed out`),u(new q(F.DEADLINE_EXCEEDED,"Request time out"));break;case rl.HTTP_ERROR:const y=h.getStatus();if(z(Ze,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const x=I==null?void 0:I.error;if(x&&x.status&&x.message){const D=function(R){const T=R.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(T)>=0?T:F.UNKNOWN}(x.status);u(new q(D,x.message))}else u(new q(F.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(F.UNAVAILABLE,"Connection failed."));break;default:X(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{z(Ze,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);z(Ze,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}P_(e,n,r){const i=Xh(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Qo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");z(Ze,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);this.T_(f);let p=!1,y=!1;const I=new o1({jo:x=>{y?z(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(p||(z(Ze,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),z(Ze,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},Jo:()=>f.close()});return Ms(f,Hs.EventType.OPEN,()=>{y||(z(Ze,`RPC '${e}' stream ${i} transport opened.`),I.r_())}),Ms(f,Hs.EventType.CLOSE,()=>{y||(y=!0,z(Ze,`RPC '${e}' stream ${i} transport closed`),I.s_(),this.I_(f))}),Ms(f,Hs.EventType.ERROR,x=>{y||(y=!0,Zr(Ze,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),I.s_(new q(F.UNAVAILABLE,"The operation could not be completed")))}),Ms(f,Hs.EventType.MESSAGE,x=>{var D;if(!y){const b=x.data[0];ce(!!b,16349);const R=b,T=(R==null?void 0:R.error)||((D=R[0])==null?void 0:D.error);if(T){z(Ze,`RPC '${e}' stream ${i} received error:`,T);const C=T.status;let L=function(_){const m=xe[_];if(m!==void 0)return lw(m)}(C),P=T.message;C==="NOT_FOUND"&&P.includes("database")&&P.includes("does not exist")&&P.includes(this.databaseId.database)&&Zr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=F.INTERNAL,P="Unknown error status: "+C+" with message "+T.message),y=!0,I.s_(new q(L,P)),f.close()}else z(Ze,`RPC '${e}' stream ${i} received:`,b),I.o_(b)}}),Ui.a_(),setTimeout(()=>{I.i_()},0),I}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(n=>n===e)}Qo(e,n,r){super.Qo(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return PE()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t){return new Ui(t)}function Mc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t){return new hP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ui.u_=!1;class Iw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Di=e,this.timerId=n,this.E_=r,this.R_=i,this.A_=s,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const n=Math.floor(this.V_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){this.d_!==null&&(this.d_.skipDelay(),this.d_=null)}cancel(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="PersistentStream";class Sw{constructor(e,n,r,i,s,o,l,u){this.Di=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new Iw(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,n){this.q_(),this.K_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(n)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.Q_(r,i)},r=>{e(()=>{const i=new q(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}Q_(e,n){const r=this.W_(this.b_);this.stream=this.z_(e,n),this.stream.Ho(()=>{r(()=>this.listener.Ho())}),this.stream.Xo(()=>{r(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.v_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return z(Yg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Di.enqueueAndForget(()=>this.b_===e?n():(z(Yg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class l1 extends Sw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=pP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?hn(o.readTime):Y.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Gh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=$h(u)?{documents:yP(s,u)}:{query:_P(s,u).dt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=hw(s,o.resumeToken);const h=Wh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Yl(s,o.snapshotVersion.toTimestamp());const h=Wh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=EP(this.serializer,e);r&&(n.labels=r),this.k_(n)}Z_(e){const n={};n.database=Gh(this.serializer),n.removeTarget=e,this.k_(n)}}class u1 extends Sw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=gP(e.writeResults,e.commitTime),r=hn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Gh(this.serializer),this.k_(e)}Y_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mP(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{}class h1 extends c1{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.$o(e,qh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(F.UNKNOWN,s.toString())})}zo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.zo(e,qh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(F.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}function d1(t,e,n,r){return new h1(t,e,n,r)}class f1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Dn(n),this._a=!1):z("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="RemoteStore";class p1{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new _r(1e3),this.Aa=new _r(1001),this.Va=new Set,this.da=[],this.ma=s,this.ma.Fo(o=>{r.enqueueAndForget(async()=>{oi(this)&&(z(mn,"Restarting streams for network reachability change."),await async function(u){const h=Z(u);h.Va.add(4),await ea(h),h.fa.set("Unknown"),h.Va.delete(4),await Vu(h)}(this))})}),this.fa=new f1(r,i)}}async function Vu(t){if(oi(t))for(const e of t.da)await e(!0)}async function ea(t){for(const e of t.da)await e(!1)}function Yh(t,e){return t.Ia.get(e)||void 0}function Aw(t,e){const n=Z(t),r=Yh(n,e.targetId);if(r!==void 0&&n.Ta.has(r))return;const i=function(l,u){const h=Yh(l,u);h!==void 0&&l.Ea.delete(h);const f=function(y,I){return I%2!=0?y.Aa.next():y.Ra.next()}(l,u);return l.Ia.set(u,f),l.Ea.set(f,u),f}(n,e.targetId);z(mn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new Tn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ta.set(i,s),Pf(n)?kf(n):ls(n).x_()&&Cf(n,s)}function Rf(t,e){const n=Z(t),r=ls(n),i=Yh(n,e);z(mn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ta.delete(i),n.Ia.delete(e),n.Ea.delete(i),r.x_()&&Rw(n,i),n.Ta.size===0&&(r.x_()?r.B_():oi(n)&&n.fa.set("Unknown"))}function Cf(t,e){if(t.ga.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.Ea.get(e.targetId);if(n===void 0)return void z(mn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}ls(t).H_(e)}function Rw(t,e){t.ga.$e(e),ls(t).Z_(e)}function kf(t){t.ga=new aP({getRemoteKeysForTarget:e=>{const n=t.Ea.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):re()},Rt:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),ls(t).start(),t.fa.aa()}function Pf(t){return oi(t)&&!ls(t).M_()&&t.Ta.size>0}function oi(t){return Z(t).Va.size===0}function Cw(t){t.ga=void 0}async function m1(t){t.fa.set("Online")}async function g1(t){t.Ta.forEach((e,n)=>{Cf(t,e)})}async function y1(t,e){Cw(t),Pf(t)?(t.fa.la(e),kf(t)):t.fa.set("Unknown")}async function _1(t,e,n){if(t.fa.set("Online"),e instanceof cw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds){if(i.Ta.has(l)){const u=i.Ea.get(l);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ia.delete(u),i.Ea.delete(l)),i.Ta.delete(l)}i.ga.removeTarget(l)}}(t,e)}catch(r){z(mn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zl(t,r)}else if(e instanceof al?t.ga.Xe(e):e instanceof uw?t.ga.it(e):t.ga.tt(e),!n.isEqual(Y.min()))try{const r=await Tw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.ga.Pt(o);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=s.Ta.get(f);p&&s.Ta.set(f,p.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,f)=>{const p=s.Ta.get(h);if(!p)return;s.Ta.set(h,p.withResumeToken(Qe.EMPTY_BYTE_STRING,p.snapshotVersion)),Rw(s,h);const y=new Tn(p.target,h,f,p.sequenceNumber);Cf(s,y)});const u=function(f,p){const y=new Map;p.targetChanges.forEach((x,D)=>{const b=f.Ea.get(D);b!==void 0&&y.set(b,x)});let I=new Ee(ne);return p.targetMismatches.forEach((x,D)=>{const b=f.Ea.get(x);b!==void 0&&(I=I.insert(b,D))}),new Jo(p.snapshotVersion,y,I,p.documentUpdates,p.resolvedLimboDocuments)}(s,l);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){z(mn,"Failed to raise snapshot:",r),await Zl(t,r)}}async function Zl(t,e,n){if(!as(e))throw e;t.Va.add(1),await ea(t),t.fa.set("Offline"),n||(n=()=>Tw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z(mn,"Retrying IndexedDB access"),await n(),t.Va.delete(1),await Vu(t)})}function kw(t,e){return e().catch(n=>Zl(t,n,e))}async function Ou(t){const e=Z(t),n=vr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:hf;for(;v1(e);)try{const i=await ZP(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,E1(e,i)}catch(i){await Zl(e,i)}Pw(e)&&Nw(e)}function v1(t){return oi(t)&&t.Pa.length<10}function E1(t,e){t.Pa.push(e);const n=vr(t);n.x_()&&n.X_&&n.Y_(e.mutations)}function Pw(t){return oi(t)&&!vr(t).M_()&&t.Pa.length>0}function Nw(t){vr(t).start()}async function w1(t){vr(t).na()}async function T1(t){const e=vr(t);for(const n of t.Pa)e.Y_(n.mutations)}async function I1(t,e,n){const r=t.Pa.shift(),i=vf.from(r,e,n);await kw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ou(t)}async function S1(t,e){e&&vr(t).X_&&await async function(r,i){if(function(o){return iP(o)&&o!==F.ABORTED}(i.code)){const s=r.Pa.shift();vr(r).N_(),await kw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ou(r)}}(t,e),Pw(t)&&Nw(t)}async function Jg(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),z(mn,"RemoteStore received new credentials");const r=oi(n);n.Va.add(3),await ea(n),r&&n.fa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Va.delete(3),await Vu(n)}async function A1(t,e){const n=Z(t);e?(n.Va.delete(2),await Vu(n)):e||(n.Va.add(2),await ea(n),n.fa.set("Unknown"))}function ls(t){return t.pa||(t.pa=function(n,r,i){const s=Z(n);return s.ia(),new l1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ho:m1.bind(null,t),Xo:g1.bind(null,t),e_:y1.bind(null,t),J_:_1.bind(null,t)}),t.da.push(async e=>{e?(t.pa.N_(),Pf(t)?kf(t):t.fa.set("Unknown")):(await t.pa.stop(),Cw(t))})),t.pa}function vr(t){return t.ya||(t.ya=function(n,r,i){const s=Z(n);return s.ia(),new u1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ho:()=>Promise.resolve(),Xo:w1.bind(null,t),e_:S1.bind(null,t),ea:T1.bind(null,t),ta:I1.bind(null,t)}),t.da.push(async e=>{e?(t.ya.N_(),await Ou(t)):(await t.ya.stop(),t.Pa.length>0&&(z(mn,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ya}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Nf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xf(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),as(t))return new q(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{static emptySet(e){return new ji(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ws(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.wa=new Ee(K.comparator)}track(e){const n=e.doc.key,r=this.wa.get(n);r?e.type!==0&&r.type===3?this.wa=this.wa.insert(n,e):e.type===3&&r.type!==1?this.wa=this.wa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.wa=this.wa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.wa=this.wa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.wa=this.wa.remove(n):e.type===1&&r.type===2?this.wa=this.wa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.wa=this.wa.insert(n,{type:2,doc:e.doc}):X(63341,{At:e,Sa:r}):this.wa=this.wa.insert(n,e)}ba(){const e=[];return this.wa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Zi(e,n,ji.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some(e=>e.Fa())}}class C1{constructor(){this.queries=ey(),this.onlineState="Unknown",this.Ma=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=ey(),s.forEach((o,l)=>{for(const u of l.Ca)u.onError(r)})})(this,new q(F.ABORTED,"Firestore shutting down"))}}function ey(){return new ii(t=>XE(t),Cu)}async function k1(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.va()&&e.Fa()&&(r=2):(s=new R1,r=e.Fa()?0:1);try{switch(r){case 0:s.Da=await n.onListen(i,!0);break;case 1:s.Da=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=xf(o,`Initialization of query '${fi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Ca.push(e),e.xa(n.onlineState),s.Da&&e.Oa(s.Da)&&Df(n)}async function P1(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Ca.indexOf(e);o>=0&&(s.Ca.splice(o,1),s.Ca.length===0?i=e.Fa()?0:1:!s.va()&&e.Fa()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function N1(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Ca)l.Oa(i)&&(r=!0);o.Da=i}}r&&Df(n)}function x1(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.Ca)s.onError(n);r.queries.delete(e)}function Df(t){t.Ma.forEach(e=>{e.next()})}var Jh,ty;(ty=Jh||(Jh={})).Na="default",ty.Cache="cache";class D1{constructor(e,n,r){this.query=e,this.Ba=n,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=r||{}}Oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.La?this.qa(e)&&(this.Ba.next(e),n=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),n=!0),this.ka=e,n}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let n=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),n=!0),n}Ka(e,n){if(!e.fromCache||!this.Fa())return!0;const r=n!=="Offline";return(!this.options.$a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ua(e){e=Zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==Jh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.key=e}}class Dw{constructor(e){this.key=e}}class V1{constructor(e,n){this.query=e,this.eu=n,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=re(),this.mutatedKeys=re(),this.ru=YE(e),this.iu=new ji(this.ru)}get su(){return this.eu}ou(e,n){const r=n?n._u:new Zg,i=n?n.iu:this.iu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const y=i.get(f),I=ku(this.query,p)?p:null,x=!!y&&this.mutatedKeys.has(y.key),D=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let b=!1;y&&I?y.data.isEqual(I.data)?x!==D&&(r.track({type:3,doc:I}),b=!0):this.au(y,I)||(r.track({type:2,doc:I}),b=!0,(u&&this.ru(I,u)>0||h&&this.ru(I,h)<0)&&(l=!0)):!y&&I?(r.track({type:0,doc:I}),b=!0):y&&!I&&(r.track({type:1,doc:y}),b=!0,(u||h)&&(l=!0)),b&&(I?(o=o.add(I),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{iu:o,_u:r,Ss:l,mutatedKeys:s}}au(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const o=e._u.ba();o.sort((f,p)=>function(I,x){const D=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{At:b})}};return D(I)-D(x)}(f.type,p.type)||this.ru(f.doc,p.doc)),this.uu(r),i=i??!1;const l=n&&!i?this.cu():[],u=this.nu.size===0&&this.current&&!i?1:0,h=u!==this.tu;return this.tu=u,o.length!==0||h?{snapshot:new Zi(this.query,e.iu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),lu:l}:{lu:l}}xa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({iu:this.iu,_u:new Zg,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach(n=>this.eu=this.eu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.eu=this.eu.delete(n)),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=re(),this.iu.forEach(r=>{this.hu(r.key)&&(this.nu=this.nu.add(r.key))});const n=[];return e.forEach(r=>{this.nu.has(r)||n.push(new Dw(r))}),this.nu.forEach(r=>{e.has(r)||n.push(new xw(r))}),n}Pu(e){this.eu=e.Ls,this.nu=re();const n=this.ou(e.documents);return this.applyChanges(n,!0)}Tu(){return Zi.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,this.tu===0,this.hasCachedResults)}}const Vf="SyncEngine";class O1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class L1{constructor(e){this.key=e,this.Iu=!1}}class M1{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Eu={},this.Ru=new ii(l=>XE(l),Cu),this.Au=new Map,this.Vu=new Set,this.du=new Ee(K.comparator),this.mu=new Map,this.fu=new Tf,this.gu={},this.pu=new Map,this.yu=_r._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return this.wu===!0}}async function b1(t,e,n=!0){const r=Fw(t);let i;const s=r.Ru.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Tu()):i=await Vw(r,e,n,!0),i}async function F1(t,e){const n=Fw(t);await Vw(n,e,!0,!1)}async function Vw(t,e,n,r){const i=await e1(t.localStore,cn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await U1(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Aw(t.remoteStore,i),l}async function U1(t,e,n,r,i){t.Su=(p,y,I)=>async function(D,b,R,T){let C=b.view.ou(R);C.Ss&&(C=await Kg(D.localStore,b.query,!1).then(({documents:_})=>b.view.ou(_,C)));const L=T&&T.targetChanges.get(b.targetId),P=T&&T.targetMismatches.get(b.targetId)!=null,O=b.view.applyChanges(C,D.isPrimaryClient,L,P);return ry(D,b.targetId,O.lu),O.snapshot}(t,p,y,I);const s=await Kg(t.localStore,e,!0),o=new V1(e,s.Ls),l=o.ou(s.documents),u=Zo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);ry(t,n,h.lu);const f=new O1(e,n,o);return t.Ru.set(e,f),t.Au.has(n)?t.Au.get(n).push(e):t.Au.set(n,[e]),h.snapshot}async function j1(t,e,n){const r=Z(t),i=r.Ru.get(e),s=r.Au.get(i.targetId);if(s.length>1)return r.Au.set(i.targetId,s.filter(o=>!Cu(o,e))),void r.Ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Rf(r.remoteStore,i.targetId),Zh(r,i.targetId)}).catch(os)):(Zh(r,i.targetId),await Qh(r.localStore,i.targetId,!0))}async function z1(t,e){const n=Z(t),r=n.Ru.get(e),i=n.Au.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Rf(n.remoteStore,r.targetId))}async function B1(t,e,n){const r=Q1(t);try{const i=await function(o,l){const u=Z(o),h=ye.now(),f=l.reduce((I,x)=>I.add(x.key),re());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let x=Vn(),D=re();return u.Ms.getEntries(I,f).next(b=>{x=b,x.forEach((R,T)=>{T.isValidDocument()||(D=D.add(R))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,x)).next(b=>{p=b;const R=[];for(const T of l){const C=Zk(T,p.get(T.key).overlayedDocument);C!=null&&R.push(new si(T.key,C,$E(C.value.mapValue),An.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,R,l)}).next(b=>{y=b;const R=b.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(I,b.batchId,R)})}).then(()=>({batchId:y.batchId,changes:ZE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.gu[o.currentUser.toKey()];h||(h=new Ee(ne)),h=h.insert(l,u),o.gu[o.currentUser.toKey()]=h}(r,i.batchId,n),await ta(r,i.changes),await Ou(r.remoteStore)}catch(i){const s=xf(i,"Failed to persist write");n.reject(s)}}async function Ow(t,e){const n=Z(t);try{const r=await YP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.mu.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Iu=!0:i.modifiedDocuments.size>0?ce(o.Iu,14607):i.removedDocuments.size>0&&(ce(o.Iu,42227),o.Iu=!1))}),await ta(n,r,e)}catch(r){await os(r)}}function ny(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ru.forEach((s,o)=>{const l=o.view.xa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const y of p.Ca)y.xa(l)&&(h=!0)}),h&&Df(u)}(r.eventManager,e),i.length&&r.Eu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $1(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.mu.get(e),s=i&&i.key;if(s){let o=new Ee(K.comparator);o=o.insert(s,nt.newNoDocument(s,Y.min()));const l=re().add(s),u=new Jo(Y.min(),new Map,new Ee(ne),o,l);await Ow(r,u),r.du=r.du.remove(s),r.mu.delete(e),Of(r)}else await Qh(r.localStore,e,!1).then(()=>Zh(r,e,n)).catch(os)}async function H1(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await XP(n.localStore,e);Mw(n,r,null),Lw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ta(n,i)}catch(i){await os(i)}}async function W1(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ce(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Mw(r,e,n),Lw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ta(r,i)}catch(i){await os(i)}}function Lw(t,e){(t.pu.get(e)||[]).forEach(n=>{n.resolve()}),t.pu.delete(e)}function Mw(t,e,n){const r=Z(t);let i=r.gu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.gu[r.currentUser.toKey()]=i}}function Zh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Au.get(e))t.Ru.delete(r),n&&t.Eu.bu(r,n);t.Au.delete(e),t.isPrimaryClient&&t.fu.Qr(e).forEach(r=>{t.fu.containsKey(r)||bw(t,r)})}function bw(t,e){t.Vu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Rf(t.remoteStore,n),t.du=t.du.remove(e),t.mu.delete(n),Of(t))}function ry(t,e,n){for(const r of n)r instanceof xw?(t.fu.addReference(r.key,e),q1(t,r)):r instanceof Dw?(z(Vf,"Document no longer in limbo: "+r.key),t.fu.removeReference(r.key,e),t.fu.containsKey(r.key)||bw(t,r.key)):X(19791,{Du:r})}function q1(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Vu.has(r)||(z(Vf,"New document in limbo: "+n),t.Vu.add(r),Of(t))}function Of(t){for(;t.Vu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Vu.values().next().value;t.Vu.delete(e);const n=new K(Ie.fromString(e)),r=t.yu.next();t.mu.set(r,new L1(n)),t.du=t.du.insert(n,r),Aw(t.remoteStore,new Tn(cn(gf(n.path)),r,"TargetPurposeLimboResolution",Iu.ce))}}async function ta(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Ru.isEmpty()||(r.Ru.forEach((l,u)=>{o.push(r.Su(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Sf.Is(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Eu.J_(i),await async function(u,h){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,y=>M.forEach(y.Ps,I=>f.persistence.referenceDelegate.addReference(p,y.targetId,I)).next(()=>M.forEach(y.Ts,I=>f.persistence.referenceDelegate.removeReference(p,y.targetId,I)))))}catch(p){if(!as(p))throw p;z(Af,"Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const I=f.Cs.get(y),x=I.snapshotVersion,D=I.withLastLimboFreeSnapshotVersion(x);f.Cs=f.Cs.insert(y,D)}}}(r.localStore,s))}async function K1(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){z(Vf,"User change. New user:",e.toKey());const r=await ww(n.localStore,e);n.currentUser=e,function(s,o){s.pu.forEach(l=>{l.forEach(u=>{u.reject(new q(F.CANCELLED,o))})}),s.pu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ta(n,r.Os)}}function G1(t,e){const n=Z(t),r=n.mu.get(e);if(r&&r.Iu)return re().add(r.key);{let i=re();const s=n.Au.get(e);if(!s)return i;for(const o of s){const l=n.Ru.get(o);i=i.unionWith(l.view.su)}return i}}function Fw(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ow.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=G1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$1.bind(null,e),e.Eu.J_=N1.bind(null,e.eventManager),e.Eu.bu=x1.bind(null,e.eventManager),e}function Q1(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=H1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=W1.bind(null,e),e}class eu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Du(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,n){return null}Nu(e,n){return null}xu(e){return QP(this.persistence,new qP,e.initialUser,this.serializer)}Mu(e){return new Ew(If.Ai,this.serializer)}Fu(e){return new n1}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eu.provider={build:()=>new eu};class X1 extends eu{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,n){ce(this.persistence.referenceDelegate instanceof Jl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xP(r,e.asyncQueue,n)}Mu(e){const n=this.cacheSizeBytes!==void 0?ft.withCacheSize(this.cacheSizeBytes):ft.DEFAULT;return new Ew(r=>Jl.Ai(r,n),this.serializer)}}class ed{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ny(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=K1.bind(null,this.syncEngine),await A1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new C1}()}createDatastore(e){const n=Du(e.databaseInfo.databaseId),r=a1(e.databaseInfo);return d1(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new p1(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ny(this.syncEngine,n,0),function(){return Xg.v()?new Xg:new r1}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new M1(i,s,o,l,u,h);return f&&(p.wu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);z(mn,"RemoteStore shutting down."),s.Va.add(5),await ea(s),s.ma.shutdown(),s.fa.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}ed.provider={build:()=>new ed};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="FirestoreClient";class J1{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=uf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{z(Er,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z(Er,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bc(t,e){t.asyncQueue.verifyOperationInProgress(),z(Er,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ww(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function iy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Z1(t);z(Er,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Jg(e.remoteStore,i)),t._onlineComponents=e}async function Z1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z(Er,"Using user provided OfflineComponentProvider");try{await bc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Zr("Error using user provided cache. Falling back to memory cache: "+n),await bc(t,new eu)}}else z(Er,"Using default OfflineComponentProvider"),await bc(t,new X1(void 0));return t._offlineComponents}async function Uw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z(Er,"Using user provided OnlineComponentProvider"),await iy(t,t._uninitializedComponentsProvider._online)):(z(Er,"Using default OnlineComponentProvider"),await iy(t,new ed))),t._onlineComponents}function eN(t){return Uw(t).then(e=>e.syncEngine)}async function sy(t){const e=await Uw(t),n=e.eventManager;return n.onListen=b1.bind(null,e.syncEngine),n.onUnlisten=j1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=F1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=z1.bind(null,e.syncEngine),n}function tN(t,e,n,r){const i=new Y1(r),s=new D1(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>k1(await sy(t),s)),()=>{i.ku(),t.asyncQueue.enqueueAndForget(async()=>P1(await sy(t),s))}}function nN(t,e){const n=new jr;return t.asyncQueue.enqueueAndForget(async()=>B1(await eN(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN="ComponentProvider",oy=new Map;function iN(t,e,n,r,i){return new wk(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,jw(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="firestore.googleapis.com",ay=!0;class ly{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zw,this.ssl=ay}else this.host=e.host,this.ssl=e.ssl??ay;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<PP)throw new q(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ck("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ly({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ly(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ZC;switch(r.type){case"firstParty":return new rk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=oy.get(n);r&&(z(rN,"Removing Datastore"),oy.delete(n),r.terminate())}(this),Promise.resolve()}}function sN(t,e,n,r={}){var h;t=Fi(t,Lf);const i=Wo(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Mv(`https://${l}`),s.host!==zw&&s.host!==l&&Zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Gr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=et.MOCK_USER;else{f=cS(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new q(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new et(y)}t._authCredentials=new ek(new xE(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Lu(this.firestore,e,this._query)}}class Be{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}toJSON(){return{type:Be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Xo(n,Be._jsonSchema))return new Be(e,r||null,new K(Ie.fromString(n.referencePath)))}}Be._jsonSchemaVersion="firestore/documentReference/1.0",Be._jsonSchema={type:Ve("string",Be._jsonSchemaVersion),referencePath:Ve("string")};class bo extends Lu{constructor(e,n,r){super(e,n,gf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new K(e))}withConverter(e){return new bo(this.firestore,e,this._path)}}function Bw(t,e,...n){if(t=vt(t),arguments.length===1&&(e=uf.newId()),uk("doc","path",e),t instanceof Lf){const r=Ie.fromString(e,...n);return wg(r),new Be(t,null,new K(r))}{if(!(t instanceof Be||t instanceof bo))throw new q(F.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return wg(r),new Be(t.firestore,t instanceof bo?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="AsyncQueue";class cy{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new Iw(this,"async_queue_retry"),this.cc=()=>{const r=Mc();r&&z(uy,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this.lc=e;const n=Mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const n=Mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});const n=new jr;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(this.nc.length!==0){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!as(e))throw e;z(uy,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){const n=this.lc.then(()=>(this._c=!0,e().catch(r=>{throw this.oc=r,this._c=!1,Dn("INTERNAL UNHANDLED ERROR: ",hy(r)),r}).then(r=>(this._c=!1,r))));return this.lc=n,n}enqueueAfterDelay(e,n,r){this.hc(),this.uc.indexOf(e)>-1&&(n=0);const i=Nf.createAndSchedule(this,e,n,r,s=>this.Ic(s));return this.sc.push(i),i}hc(){this.oc&&X(47125,{Ec:hy(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(const n of this.sc)if(n.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{this.sc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.sc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){const n=this.sc.indexOf(e);this.sc.splice(n,1)}}function hy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class tu extends Lf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new cy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cy(e),this._firestoreClient=void 0,await e}}}function oN(t,e){const n=typeof t=="object"?t:jv(),r=typeof t=="string"?t:$l,i=Jd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=lS("firestore");s&&sN(i,...s)}return i}function $w(t){if(t._terminated)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||aN(t),t._firestoreClient}function aN(t){var r,i,s,o;const e=t._freezeSettings(),n=iN(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new J1(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vt(Qe.fromBase64String(e))}catch(n){throw new q(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vt(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xo(e,Vt._jsonSchema))return Vt.fromBase64String(e.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:Ve("string",Vt._jsonSchemaVersion),bytes:Ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dn._jsonSchemaVersion}}static fromJSON(e){if(Xo(e,dn._jsonSchema))return new dn(e.latitude,e.longitude)}}dn._jsonSchemaVersion="firestore/geoPoint/1.0",dn._jsonSchema={type:Ve("string",dn._jsonSchemaVersion),latitude:Ve("number"),longitude:Ve("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xo(e,Gt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Gt(e.vectorValues);throw new q(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gt._jsonSchemaVersion="firestore/vectorValue/1.0",Gt._jsonSchema={type:Ve("string",Gt._jsonSchemaVersion),vectorValues:Ve("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=/^__.*__$/;class uN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new si(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yo(e,this.data,n,this.fieldTransforms)}}function qw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{dataSource:t})}}class Mf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Mf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.yc(e),r}wc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(),r}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return nu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(e.length===0)throw this.bc("Document fields must not be empty");if(qw(this.dataSource)&&lN.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class cN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Du(e)}V(e,n,r,i=!1){return new Mf({dataSource:e,methodName:n,targetDoc:r,path:qe.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hN(t){const e=t._freezeSettings(),n=Du(t._databaseId);return new cN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dN(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);Xw("Data must be an object, but it was:",o,r);const l=Gw(r,o);let u,h;if(s.merge)u=new Wt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const y=bf(e,p,n);if(!o.contains(y))throw new q(F.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);mN(f,y)||f.push(y)}u=new Wt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new uN(new Dt(l),u,h)}function Kw(t,e){if(Qw(t=vt(t)))return Xw("Unsupported field value:",e,t),Gw(t,e);if(t instanceof Ww)return function(r,i){if(!qw(i.dataSource))throw i.bc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.bc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.bc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Kw(l,i.Sc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Kk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ye.fromDate(r);return{timestampValue:Yl(i.serializer,s)}}if(r instanceof ye){const s=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yl(i.serializer,s)}}if(r instanceof dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vt)return{bytesValue:hw(i.serializer,r._byteString)};if(r instanceof Be){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.bc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Gt)return function(o,l){const u=o instanceof Gt?o.toArray():o;return{mapValue:{fields:{[jE]:{stringValue:zE},[Hl]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.bc("VectorValues must only contain numeric values.");return Pu(l.serializer,f)})}}}}}}(r,i);if(_w(r))return r._toProto(i.serializer);throw i.bc(`Unsupported field value: ${cf(r)}`)}(t,e)}function Gw(t,e){const n={};return OE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ri(t,(r,i)=>{const s=Kw(i,e.gc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Qw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof dn||t instanceof Vt||t instanceof Be||t instanceof Ww||t instanceof Gt||_w(t))}function Xw(t,e,n){if(!Qw(n)||!DE(n)){const r=cf(n);throw r==="an object"?e.bc(t+" a custom object"):e.bc(t+" "+r)}}function bf(t,e,n){if((e=vt(e))instanceof Hw)return e._internalPath;if(typeof e=="string")return pN(t,e);throw nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const fN=new RegExp("[~\\*/\\[\\]]");function pN(t,e,n){if(e.search(fN)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hw(...e.split("."))._internalPath}catch{throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(F.INVALID_ARGUMENT,l+t+u)}function mN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{convertValue(e,n="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ri(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Hl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Pe(o.doubleValue));return new Gt(n)}convertGeoPoint(e){return new dn(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Au(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(No(e));default:return null}}convertTimestamp(e){const n=mr(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ce(yw(r),9688,{name:e});const i=new xo(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Dn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw extends gN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}const dy="@firebase/firestore",fy="4.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(bf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yN extends Jw{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function vN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zr extends Jw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ll(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=zr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}zr._jsonSchemaVersion="firestore/documentSnapshot/1.0",zr._jsonSchema={type:Ve("string",zr._jsonSchemaVersion),bundleSource:Ve("string","DocumentSnapshot"),bundleName:Ve("string"),bundle:Ve("string")};class ll extends zr{data(e={}){return super.data(e)}}class zi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ks(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ll(this._firestore,this._userDataWriter,r.key,r,new Ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ll(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ks(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ll(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ks(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:EN(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=uf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function EN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zi._jsonSchemaVersion="firestore/querySnapshot/1.0",zi._jsonSchema={type:Ve("string",zi._jsonSchemaVersion),bundleSource:Ve("string","QuerySnapshot"),bundleName:Ve("string"),bundle:Ve("string")};function wN(t,e,n){t=Fi(t,Be);const r=Fi(t.firestore,tu),i=vN(t.converter,e,n),s=hN(r);return IN(r,[dN(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,An.none())])}function TN(t,...e){var h,f,p;t=vt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||py(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(py(e[r])){const y=e[r];e[r]=(h=y.next)==null?void 0:h.bind(y),e[r+1]=(f=y.error)==null?void 0:f.bind(y),e[r+2]=(p=y.complete)==null?void 0:p.bind(y)}let s,o,l;if(t instanceof Be)o=Fi(t.firestore,tu),l=gf(t._key.path),s={next:y=>{e[r]&&e[r](SN(o,t,y))},error:e[r+1],complete:e[r+2]};else{const y=Fi(t,Lu);o=Fi(y.firestore,tu),l=y._query;const I=new Yw(o);s={next:x=>{e[r]&&e[r](new zi(o,I,y,x))},error:e[r+1],complete:e[r+2]},_N(t._query)}const u=$w(o);return tN(u,l,i,s)}function IN(t,e){const n=$w(t);return nN(n,e)}function SN(t,e,n){const r=n.docs.get(e._key),i=new Yw(t);return new zr(t,i,e._key,r,new Ks(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){JC(rs),Qi(new Qr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new tu(new tk(r.getProvider("auth-internal")),new ik(o,r.getProvider("app-check-internal")),Tk(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),cr(dy,fy,e),cr(dy,fy,"esm2020")})();const AN={VITE_FIREBASE_API_KEY:"AIzaSyAzALxyXOhchAV4b0Ui4SX4ZDhAm9PS068",VITE_FIREBASE_APP_ID:"1:29445217103:web:4587af4b25353c0a87833a",VITE_FIREBASE_AUTH_DOMAIN:"hourglass-98a43.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"29445217103",VITE_FIREBASE_PROJECT_ID:"hourglass-98a43",VITE_FIREBASE_STORAGE_BUCKET:"hourglass-98a43.firebasestorage.app"},{VITE_FIREBASE_API_KEY:RN,VITE_FIREBASE_AUTH_DOMAIN:CN,VITE_FIREBASE_PROJECT_ID:kN,VITE_FIREBASE_STORAGE_BUCKET:PN,VITE_FIREBASE_MESSAGING_SENDER_ID:NN,VITE_FIREBASE_APP_ID:xN}=AN;let na,Ff;{const t=Uv({apiKey:RN,authDomain:CN,projectId:kN,storageBucket:PN,messagingSenderId:NN,appId:xN});na=XC(t),Ff=oN(t)}const DN=(t,e)=>LR(na,t,e),VN=(t,e)=>OR(na,t,e),ON=()=>UR(na);function LN(t,e){return TN(Bw(Ff,"users",t),n=>{n.exists()&&e(n.data())})}let my=null;function MN(t,e){clearTimeout(my),my=setTimeout(()=>wN(Bw(Ff,"users",t),e,{merge:!0}),500)}const td=[{id:"work",name:"工作",color:"#3b82f6",icon:"💼"},{id:"learning",name:"学习",color:"#10b981",icon:"📚"},{id:"sports",name:"运动",color:"#f59e0b",icon:"🏃"},{id:"entertainment",name:"娱乐",color:"#ef4444",icon:"🎮"},{id:"social",name:"社交",color:"#8b5cf6",icon:"👥"},{id:"rest",name:"休息",color:"#06b6d4",icon:"😴"},{id:"other",name:"其他",color:"#6b7280",icon:"📝"}],bs=25*60,bN=5*60,FN=["🎯","🚀","💪","📖","💰","🏆","🌱","❤️","🎨","🏠","🎵","✈️"],UN=["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#06b6d4","#f97316","#ec4899"],jN=[{title:"早起",icon:"🌅"},{title:"运动",icon:"💪"},{title:"阅读",icon:"📖"},{title:"冥想",icon:"🧘"},{title:"喝水",icon:"💧"},{title:"早睡",icon:"🌙"}];function ul(t){const e=Math.floor(t/3600),n=Math.floor(t%3600/60),r=t%60;return e>0?`${e}:${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function Br(t){const e=t/3600;return e<.017?"< 1分":e<1?`${Math.round(e*60)}分`:`${e.toFixed(1)}h`}function Zw(){return new Date().toISOString().slice(0,10)}function zN({logs:t}){const e=Array.from({length:7},(l,u)=>{const h=new Date;h.setDate(h.getDate()-(6-u));const f=h.toISOString().slice(0,10),p=t.filter(y=>y.date.slice(0,10)===f).reduce((y,I)=>y+I.duration,0);return{label:["日","一","二","三","四","五","六"][h.getDay()],total:p,ds:f}}),n=Math.max(...e.map(l=>l.total),3600),r=280,i=100,s=28,o=(r-7*s)/8;return E.jsx("svg",{viewBox:`0 0 ${r} ${i+24}`,style:{width:"100%",maxWidth:360},children:e.map((l,u)=>{const h=Math.max(l.total/n*i,l.total>0?4:0),f=o+u*(s+o),p=l.ds===Zw();return E.jsxs("g",{children:[E.jsx("rect",{x:f,y:i-h,width:s,height:h,rx:5,fill:p?"var(--accent)":"var(--accent-muted)"}),l.total>0&&E.jsx("text",{x:f+s/2,y:i-h-4,textAnchor:"middle",fontSize:9,fill:"var(--text-muted)",children:Br(l.total)}),E.jsx("text",{x:f+s/2,y:i+16,textAnchor:"middle",fontSize:11,fill:p?"var(--accent)":"var(--text-muted)",fontWeight:p?"700":"400",children:l.label})]},u)})})}function BN({data:t,total:e}){if(!t.length)return null;const n=52,r=70,i=70,s=20,o=2*Math.PI*n;let l=0;const u=t.map(h=>{const f={...h,off:l};return l+=h.value/e,f});return E.jsxs("svg",{viewBox:"0 0 140 140",style:{width:140,height:140,flexShrink:0},children:[E.jsx("circle",{cx:r,cy:i,r:n,fill:"none",stroke:"var(--border)",strokeWidth:s}),u.map((h,f)=>E.jsx("circle",{cx:r,cy:i,r:n,fill:"none",stroke:h.color,strokeWidth:s,strokeDasharray:`${h.value/e*o} ${o}`,strokeDashoffset:`${-h.off*o}`,transform:`rotate(-90 ${r} ${i})`},f)),E.jsx("text",{x:r,y:i-7,textAnchor:"middle",fontSize:9,fill:"var(--text-muted)",children:"总计"}),E.jsx("text",{x:r,y:i+10,textAnchor:"middle",fontSize:15,fontWeight:"700",fill:"var(--text)",children:Br(e)})]})}function gy(t="work"){try{const e=new(window.AudioContext||window.webkitAudioContext),n=e.createOscillator(),r=e.createGain();n.connect(r),r.connect(e.destination),n.frequency.value=t==="work"?660:440,n.type="sine",r.gain.setValueAtTime(.4,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.8),n.start(e.currentTime),n.stop(e.currentTime+.8);const i=e.createOscillator(),s=e.createGain();i.connect(s),s.connect(e.destination),i.frequency.value=t==="work"?880:330,s.gain.setValueAtTime(.3,e.currentTime+.4),s.gain.exponentialRampToValueAtTime(.001,e.currentTime+1.2),i.start(e.currentTime+.4),i.stop(e.currentTime+1.2)}catch{}}function yy(t,e){Notification.permission==="granted"&&new Notification(t,{body:e,icon:"/favicon.ico",tag:"timeflow-timer"})}const $N=15*60;function HN({logs:t,onSave:e,goals:n}){var us;const[r,i]=H.useState("stopwatch"),[s,o]=H.useState(!1),[l,u]=H.useState(0),[h,f]=H.useState("work"),[p,y]=H.useState(""),[I,x]=H.useState(""),[D,b]=H.useState(""),[R,T]=H.useState("work"),[C,L]=H.useState(0),[P,O]=H.useState(bs),_=H.useRef(null),m=H.useRef(null),v=H.useRef(!1),S=H.useRef("stopwatch"),A=H.useRef("work"),k=H.useRef(0),w=H.useRef("work"),we=H.useRef(""),st=H.useRef(""),Yt=H.useRef("");H.useEffect(()=>{v.current=s},[s]),H.useEffect(()=>{S.current=r},[r]),H.useEffect(()=>{A.current=R},[R]),H.useEffect(()=>{k.current=C},[C]),H.useEffect(()=>{w.current=h},[h]),H.useEffect(()=>{we.current=p},[p]),H.useEffect(()=>{st.current=I},[I]),H.useEffect(()=>{Yt.current=D},[D]);const Ft=W=>W==="work"?bs:W==="longbreak"?$N:bN;function B(W,Ut){const dt=td.find(kt=>kt.id===w.current);e({id:Date.now(),category:w.current,categoryName:dt.name,categoryColor:dt.color,categoryIcon:dt.icon,description:we.current||Ut,duration:W,startTime:Date.now()-W*1e3,endTime:Date.now(),date:new Date().toISOString(),goalId:st.current,taskId:Yt.current})}const G=()=>{if(!_.current)return;const W=Date.now();if(S.current==="stopwatch")u(Math.floor((W-_.current)/1e3));else{const Ut=Ft(A.current),dt=Math.floor((W-_.current)/1e3),kt=Ut-dt;kt<=0?J():O(kt)}};function J(){clearInterval(m.current),o(!1);const W=A.current,Ut=k.current;if(W==="work"){const dt=Ut+1;B(bs,`🍅 番茄钟 #${dt}`),gy("break");const kt=dt%4===0?"longbreak":"break",cs=dt%4===0?"长休息时间 (15分钟)":"休息时间 (5分钟)";yy("🍅 专注完成！",`第 ${dt} 个番茄！${cs}`),L(dt),k.current=dt,T(kt),A.current=kt,O(Ft(kt))}else gy("work"),yy("☕ 休息结束！","准备好开始下一个番茄了吗？"),T("work"),A.current="work",O(bs);_.current=null}H.useEffect(()=>(s?m.current=setInterval(G,500):clearInterval(m.current),()=>clearInterval(m.current)),[s]),H.useEffect(()=>{const W=()=>{v.current&&G()};return document.addEventListener("visibilitychange",W),()=>document.removeEventListener("visibilitychange",W)},[]),H.useEffect(()=>{Notification.permission==="default"&&Notification.requestPermission()},[]);const ue=()=>{_.current=Date.now(),o(!0)},fe=()=>{o(!1),r==="stopwatch"&&l>0&&(B(l,h),u(0),y(""),_.current=null)},ae=()=>{o(!1),u(0),_.current=null,r==="pomodoro"&&(T("work"),A.current="work",O(bs),L(0),k.current=0)},te=W=>{ae(),i(W),S.current=W},ke=n.find(W=>W.id===I),Et=Ft(R),Jt=1-P/Et,ai=2*Math.PI*52,ra=R==="work"?"🍅 专注时间":R==="longbreak"?"🌿 长休息":"☕ 休息时间",Mu=R==="work"?"":"pom-break",ia=t.filter(W=>{var Ut;return((Ut=W.description)==null?void 0:Ut.includes("🍅"))&&new Date(W.date).toDateString()===new Date().toDateString()}).length;return E.jsxs("div",{className:"page-container",children:[E.jsxs("div",{className:"mode-toggle",children:[E.jsx("button",{className:r==="stopwatch"?"active":"",onClick:()=>te("stopwatch"),children:"⏱ 计时器"}),E.jsx("button",{className:r==="pomodoro"?"active":"",onClick:()=>te("pomodoro"),children:"🍅 番茄钟"})]}),E.jsxs("div",{className:`timer-display ${s?"running":""} ${r==="pomodoro"?Mu:""}`,children:[r==="pomodoro"?E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"pom-label",children:ra}),E.jsxs("svg",{viewBox:"0 0 140 140",width:"180",height:"180",children:[E.jsx("circle",{cx:"70",cy:"70",r:"52",fill:"none",stroke:"rgba(255,255,255,.25)",strokeWidth:"10"}),E.jsx("circle",{cx:"70",cy:"70",r:"52",fill:"none",stroke:"white",strokeWidth:"10",strokeDasharray:ai,strokeDashoffset:ai*(1-Jt),transform:"rotate(-90 70 70)",strokeLinecap:"round"}),E.jsx("text",{x:"70",y:"60",textAnchor:"middle",fill:"white",fontSize:"24",fontWeight:"700",fontFamily:"monospace",children:ul(P)}),E.jsxs("text",{x:"70",y:"78",textAnchor:"middle",fill:"rgba(255,255,255,.85)",fontSize:"11",children:["🍅".repeat(Math.min(C,8)),C>8?`+${C-8}`:""]}),ia>0&&E.jsxs("text",{x:"70",y:"95",textAnchor:"middle",fill:"rgba(255,255,255,.65)",fontSize:"10",children:["今日 ",ia," 个"]})]}),!s&&R==="work"&&C===0&&E.jsxs("div",{className:"pom-tip",children:["专注25分→休息5分，每4个获得15分长休息",E.jsx("br",{}),"完成后自动记录到统计"]})]}):E.jsx("div",{className:"sw-time",children:ul(l)}),E.jsx("div",{className:"timer-btns",children:s?E.jsxs(E.Fragment,{children:[r==="stopwatch"?E.jsx("button",{className:"btn btn-stop",onClick:fe,children:"⏹ 停止保存"}):E.jsx("button",{className:"btn btn-stop",onClick:()=>{o(!1)},children:"⏸ 暂停"}),E.jsx("button",{className:"btn btn-reset",onClick:ae,children:"↻ 重置"})]}):E.jsx("button",{className:"btn btn-start",onClick:ue,children:"▶ 开始"})})]}),E.jsxs("div",{className:"section",children:[E.jsx("div",{className:"section-title",children:"分类"}),E.jsx("div",{className:"categories-grid",children:td.map(W=>E.jsxs("button",{className:`category-card ${h===W.id?"active":""}`,onClick:()=>!s&&f(W.id),style:{borderColor:h===W.id?W.color:"transparent",backgroundColor:h===W.id?`${W.color}18`:""},children:[E.jsx("span",{className:"cat-icon",children:W.icon}),E.jsx("span",{className:"cat-name",children:W.name})]},W.id))})]}),E.jsxs("div",{className:"section",children:[E.jsx("div",{className:"section-title",children:"任务描述（可选）"}),E.jsx("input",{className:"text-input",type:"text",placeholder:"正在做什么？",value:p,onChange:W=>y(W.target.value),disabled:s})]}),n.length>0&&E.jsxs("div",{className:"section",children:[E.jsx("div",{className:"section-title",children:"关联目标（可选）"}),E.jsxs("select",{className:"select-input",value:I,onChange:W=>{x(W.target.value),b("")},disabled:s,children:[E.jsx("option",{value:"",children:"— 不关联 —"}),n.map(W=>E.jsxs("option",{value:W.id,children:[W.icon," ",W.title]},W.id))]}),((us=ke==null?void 0:ke.tasks)==null?void 0:us.filter(W=>!W.done).length)>0&&E.jsxs("select",{className:"select-input",style:{marginTop:8},value:D,onChange:W=>b(W.target.value),disabled:s,children:[E.jsx("option",{value:"",children:"— 选择子任务 —"}),ke.tasks.filter(W=>!W.done).map(W=>E.jsx("option",{value:W.id,children:W.title},W.id))]})]}),t.slice(0,3).length>0&&E.jsxs("div",{className:"section",children:[E.jsx("div",{className:"section-title",children:"最近记录"}),E.jsx("div",{className:"recent-logs",children:t.slice(0,3).map(W=>E.jsxs("div",{className:"recent-log-item",style:{borderLeftColor:W.categoryColor},children:[E.jsx("span",{children:W.categoryIcon}),E.jsx("span",{className:"rl-desc",children:W.description}),E.jsx("span",{className:"rl-time",children:ul(W.duration)})]},W.id))})]})]})}function WN({goals:t,setGoals:e,logs:n}){const[r,i]=H.useState(!1),[s,o]=H.useState(null),[l,u]=H.useState({title:"",description:"",deadline:"",icon:"🎯",color:"#3b82f6"}),[h,f]=H.useState({}),[p,y]=H.useState(null),I=P=>n.filter(O=>O.goalId===P).reduce((O,_)=>O+_.duration,0),x=()=>{l.title.trim()&&(s?(e(P=>P.map(O=>O.id===s?{...O,...l}:O)),o(null)):e(P=>[...P,{...l,id:Date.now(),tasks:[],createdAt:new Date().toISOString()}]),u({title:"",description:"",deadline:"",icon:"🎯",color:"#3b82f6"}),i(!1))},D=P=>{const O=(h[P]||"").trim();O&&(e(_=>_.map(m=>m.id===P?{...m,tasks:[...m.tasks,{id:Date.now(),title:O,done:!1}]}:m)),f(_=>({..._,[P]:""})))},b=(P,O)=>e(_=>_.map(m=>m.id===P?{...m,tasks:m.tasks.map(v=>v.id===O?{...v,done:!v.done}:v)}:m)),R=(P,O)=>e(_=>_.map(m=>m.id===P?{...m,tasks:m.tasks.filter(v=>v.id!==O)}:m)),T=P=>{u({title:P.title,description:P.description||"",deadline:P.deadline||"",icon:P.icon,color:P.color}),o(P.id),i(!0)},C=t.filter(P=>!P.archived),L=t.filter(P=>P.archived);return E.jsxs("div",{className:"page-container",children:[E.jsxs("div",{className:"page-header",children:[E.jsx("h2",{children:"我的目标"}),E.jsx("button",{className:"btn-primary",onClick:()=>{o(null),u({title:"",description:"",deadline:"",icon:"🎯",color:"#3b82f6"}),i(!0)},children:"+ 新建"})]}),r&&E.jsx("div",{className:"modal-overlay",onClick:()=>i(!1),children:E.jsxs("div",{className:"modal",onClick:P=>P.stopPropagation(),children:[E.jsx("h3",{className:"modal-title",children:s?"编辑目标":"新建目标"}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"图标"}),E.jsx("div",{className:"icon-picker",children:FN.map(P=>E.jsx("button",{className:`icon-btn ${l.icon===P?"active":""}`,onClick:()=>u(O=>({...O,icon:P})),children:P},P))})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"颜色"}),E.jsx("div",{className:"color-picker",children:UN.map(P=>E.jsx("button",{className:`color-btn ${l.color===P?"active":""}`,style:{background:P},onClick:()=>u(O=>({...O,color:P}))},P))})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"目标名称 *"}),E.jsx("input",{className:"text-input",placeholder:"例：读完10本书",value:l.title,onChange:P=>u(O=>({...O,title:P.target.value}))})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"描述"}),E.jsx("input",{className:"text-input",placeholder:"具体描述...",value:l.description,onChange:P=>u(O=>({...O,description:P.target.value}))})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"截止日期"}),E.jsx("input",{className:"text-input",type:"date",value:l.deadline,onChange:P=>u(O=>({...O,deadline:P.target.value}))})]}),E.jsxs("div",{className:"modal-actions",children:[E.jsx("button",{className:"btn-secondary",onClick:()=>i(!1),children:"取消"}),E.jsx("button",{className:"btn-primary",onClick:x,children:"保存"})]})]})}),C.length===0?E.jsxs("div",{className:"empty-state",children:[E.jsx("div",{style:{fontSize:"3rem",marginBottom:12},children:"🎯"}),E.jsx("p",{children:'还没有目标，点击"新建"开始吧！'})]}):E.jsx("div",{className:"goals-list",children:C.map(P=>{const O=P.tasks.filter(k=>k.done).length,_=P.tasks.length>0?O/P.tasks.length:0,m=I(P.id),v=p===P.id,S=new Date;S.setHours(0,0,0,0);const A=P.deadline?Math.ceil((new Date(P.deadline)-S)/864e5):null;return E.jsxs("div",{className:"goal-card",style:{borderLeft:`4px solid ${P.color}`},children:[E.jsxs("div",{className:"goal-header",onClick:()=>y(v?null:P.id),children:[E.jsxs("div",{className:"goal-icon-title",children:[E.jsx("span",{className:"goal-icon",children:P.icon}),E.jsxs("div",{children:[E.jsx("div",{className:"goal-title",children:P.title}),P.description&&E.jsx("div",{className:"goal-desc",children:P.description})]})]}),E.jsxs("div",{className:"goal-meta",children:[A!==null&&E.jsx("span",{className:`badge ${A<=7?"badge-urgent":A<=30?"badge-warn":"badge-ok"}`,children:A>0?`${A}天`:A===0?"今天":"已逾期"}),m>0&&E.jsx("span",{className:"badge badge-time",children:Br(m)}),E.jsx("span",{className:"expand-arrow",children:v?"▲":"▼"})]})]}),P.tasks.length>0&&E.jsxs("div",{className:"progress-row",children:[E.jsx("div",{className:"progress-bar",children:E.jsx("div",{className:"progress-fill",style:{width:`${_*100}%`,background:P.color}})}),E.jsxs("span",{className:"progress-text",children:[O,"/",P.tasks.length]})]}),v&&E.jsxs("div",{className:"goal-tasks",children:[P.tasks.map(k=>E.jsxs("div",{className:`task-item ${k.done?"done":""}`,children:[E.jsx("input",{type:"checkbox",checked:k.done,onChange:()=>b(P.id,k.id)}),E.jsx("span",{className:"task-title",children:k.title}),E.jsx("button",{className:"icon-action",onClick:()=>R(P.id,k.id),children:"✕"})]},k.id)),E.jsxs("div",{className:"add-task-row",children:[E.jsx("input",{className:"text-input",placeholder:"添加子任务...",value:h[P.id]||"",onChange:k=>f(w=>({...w,[P.id]:k.target.value})),onKeyDown:k=>k.key==="Enter"&&D(P.id)}),E.jsx("button",{className:"btn-primary small",onClick:()=>D(P.id),children:"+"})]}),E.jsxs("div",{className:"goal-actions",children:[E.jsx("button",{className:"btn-secondary small",onClick:()=>T(P),children:"✏️ 编辑"}),E.jsx("button",{className:"btn-secondary small",onClick:()=>e(k=>k.map(w=>w.id===P.id?{...w,archived:!0}:w)),children:"📦 归档"}),E.jsx("button",{className:"btn-danger small",onClick:()=>e(k=>k.filter(w=>w.id!==P.id)),children:"🗑 删除"})]})]})]},P.id)})}),L.length>0&&E.jsxs("details",{className:"archived-section",children:[E.jsxs("summary",{children:["已归档 (",L.length,")"]}),L.map(P=>E.jsxs("div",{className:"goal-card archived",style:{borderLeft:`4px solid ${P.color}`},children:[E.jsxs("div",{className:"goal-icon-title",children:[E.jsx("span",{className:"goal-icon",children:P.icon}),E.jsx("span",{className:"goal-title",children:P.title})]}),E.jsx("button",{className:"btn-secondary small",onClick:()=>e(O=>O.map(_=>_.id===P.id?{..._,archived:!1}:_)),children:"恢复"})]},P.id))]})]})}function qN({logs:t,onDeleteLog:e}){const[n,r]=H.useState("today"),i=new Date,s=t.filter(p=>{const y=new Date(p.date);if(n==="today")return y.toDateString()===i.toDateString();if(n==="week"){const I=new Date(i);return I.setDate(i.getDate()-7),y>=I}return n==="month"?y.getMonth()===i.getMonth()&&y.getFullYear()===i.getFullYear():!0}),o=s.reduce((p,y)=>p+y.duration,0),l=s.length,u={};s.forEach(p=>{u[p.category]||(u[p.category]={...td.find(y=>y.id===p.category),value:0}),u[p.category].value+=p.duration});const h=Object.values(u).sort((p,y)=>y.value-p.value),f=n==="today"?1:n==="week"?7:30;return E.jsxs("div",{className:"page-container",children:[E.jsx("div",{className:"mode-toggle",children:[["today","今天"],["week","本周"],["month","本月"]].map(([p,y])=>E.jsx("button",{className:n===p?"active":"",onClick:()=>r(p),children:y},p))}),E.jsxs("div",{className:"stats-grid",children:[E.jsxs("div",{className:"stat-card primary",children:[E.jsx("div",{className:"stat-val",children:Br(o)}),E.jsx("div",{className:"stat-lbl",children:"总时长"})]}),E.jsxs("div",{className:"stat-card secondary",children:[E.jsx("div",{className:"stat-val",children:l}),E.jsx("div",{className:"stat-lbl",children:"记录次数"})]}),n!=="today"&&E.jsxs("div",{className:"stat-card tertiary",children:[E.jsx("div",{className:"stat-val",children:Br(Math.round(o/f))}),E.jsx("div",{className:"stat-lbl",children:"日均"})]})]}),E.jsxs("div",{className:"chart-section",children:[E.jsx("div",{className:"section-title",children:"过去7天趋势"}),E.jsx(zN,{logs:t})]}),h.length>0&&E.jsxs("div",{className:"chart-section",children:[E.jsx("div",{className:"section-title",children:"分类占比"}),E.jsxs("div",{className:"donut-row",children:[E.jsx(BN,{data:h,total:o}),E.jsx("div",{className:"cat-legend",children:h.map(p=>E.jsxs("div",{className:"legend-item",children:[E.jsx("span",{className:"legend-dot",style:{background:p.color}}),E.jsxs("span",{children:[p.icon," ",p.name]}),E.jsx("span",{className:"legend-pct",children:Br(p.value)}),E.jsxs("span",{className:"legend-pct muted",children:[Math.round(p.value/o*100),"%"]})]},p.id))})]})]}),E.jsxs("div",{className:"chart-section",children:[E.jsx("div",{className:"section-title",children:"活动记录"}),s.length===0?E.jsx("div",{className:"empty-state",children:E.jsx("p",{children:"该时间段暂无记录"})}):E.jsx("div",{className:"logs-list",children:s.slice(0,30).map(p=>E.jsxs("div",{className:"log-item",style:{borderLeftColor:p.categoryColor},children:[E.jsx("span",{className:"log-icon",children:p.categoryIcon}),E.jsxs("div",{className:"log-details",children:[E.jsx("div",{className:"log-desc",children:p.description}),E.jsx("div",{className:"log-time-str",children:new Date(p.date).toLocaleString("zh-CN",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})})]}),E.jsx("span",{className:"log-dur",children:ul(p.duration)}),E.jsx("button",{className:"icon-action",onClick:()=>e(p.id),children:"✕"})]},p.id))})]})]})}function KN({habits:t,setHabits:e}){const[n,r]=H.useState(!1),[i,s]=H.useState({title:"",icon:"✅"}),o=Zw(),l=I=>{e(x=>x.map(D=>{if(D.id!==I)return D;const b=D.history||[],T=b.includes(o)?b.filter(P=>P!==o):[...b,o];let C=0;const L=new Date;for(let P=0;P<365;P++){const O=new Date(L);O.setDate(L.getDate()-P);const _=O.toISOString().slice(0,10);if(T.includes(_))C++;else if(P>0)break}return{...D,history:T,streak:C}}))},u=()=>{i.title.trim()&&(e(I=>[...I,{...i,id:Date.now(),history:[],streak:0}]),s({title:"",icon:"✅"}),r(!1))},h=Array.from({length:7},(I,x)=>{const D=new Date;return D.setDate(D.getDate()-(6-x)),D.toISOString().slice(0,10)}),f=t.filter(I=>(I.history||[]).includes(o)).length,p=t.length>0?f/t.length:0,y=2*Math.PI*34;return E.jsxs("div",{className:"page-container",children:[E.jsxs("div",{className:"page-header",children:[E.jsx("h2",{children:"习惯打卡"}),E.jsx("button",{className:"btn-primary",onClick:()=>r(!0),children:"+ 添加"})]}),t.length>0&&E.jsxs("div",{className:"habit-summary",children:[E.jsxs("svg",{viewBox:"0 0 80 80",width:"70",height:"70",children:[E.jsx("circle",{cx:"40",cy:"40",r:"34",fill:"none",stroke:"var(--border)",strokeWidth:"8"}),E.jsx("circle",{cx:"40",cy:"40",r:"34",fill:"none",stroke:"#10b981",strokeWidth:"8",strokeDasharray:y,strokeDashoffset:y*(1-p),transform:"rotate(-90 40 40)",strokeLinecap:"round"}),E.jsxs("text",{x:"40",y:"45",textAnchor:"middle",fontSize:"14",fontWeight:"700",fill:"var(--text)",children:[Math.round(p*100),"%"]})]}),E.jsxs("div",{children:[E.jsxs("div",{className:"habit-sum-title",children:["今日完成 ",f,"/",t.length]}),E.jsx("div",{className:"habit-sum-sub",children:"坚持是最好的习惯"})]})]}),n&&E.jsx("div",{className:"modal-overlay",onClick:()=>r(!1),children:E.jsxs("div",{className:"modal",onClick:I=>I.stopPropagation(),children:[E.jsx("h3",{className:"modal-title",children:"新建习惯"}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"快速选择"}),E.jsx("div",{className:"preset-habits",children:jN.map(I=>E.jsxs("button",{className:"preset-btn",onClick:()=>s({title:I.title,icon:I.icon}),children:[I.icon," ",I.title]},I.title))})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"图标"}),E.jsx("input",{className:"text-input",style:{width:60},value:i.icon,onChange:I=>s(x=>({...x,icon:I.target.value}))})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"习惯名称"}),E.jsx("input",{className:"text-input",placeholder:"例：每天读书30分钟",value:i.title,onChange:I=>s(x=>({...x,title:I.target.value})),onKeyDown:I=>I.key==="Enter"&&u()})]}),E.jsxs("div",{className:"modal-actions",children:[E.jsx("button",{className:"btn-secondary",onClick:()=>r(!1),children:"取消"}),E.jsx("button",{className:"btn-primary",onClick:u,children:"添加"})]})]})}),t.length===0?E.jsxs("div",{className:"empty-state",children:[E.jsx("div",{style:{fontSize:"3rem",marginBottom:12},children:"✅"}),E.jsx("p",{children:'还没有习惯，点击"添加"开始坚持吧！'})]}):E.jsx("div",{className:"habits-list",children:t.map(I=>{const x=(I.history||[]).includes(o);return E.jsxs("div",{className:`habit-card ${x?"done":""}`,children:[E.jsx("button",{className:`habit-check ${x?"checked":""}`,onClick:()=>l(I.id),children:x&&"✓"}),E.jsxs("div",{className:"habit-info",children:[E.jsxs("div",{className:"habit-name",children:[I.icon," ",I.title]}),E.jsx("div",{className:"habit-streak",children:I.streak>0?`🔥 ${I.streak} 天连续`:"今天开始！"})]}),E.jsx("div",{className:"habit-dots",children:h.map(D=>E.jsx("div",{className:`h-dot ${(I.history||[]).includes(D)?"done":""}`,title:D},D))}),E.jsx("button",{className:"icon-action",onClick:()=>e(D=>D.filter(b=>b.id!==I.id)),children:"✕"})]},I.id)})})]})}function GN({onAuth:t}){const[e,n]=H.useState("login"),[r,i]=H.useState(""),[s,o]=H.useState(""),[l,u]=H.useState(!1),[h,f]=H.useState(""),p=async y=>{if(y.preventDefault(),!(!r||!s)){u(!0),f("");try{await t(e,r,s)}catch(I){const x={"auth/invalid-email":"邮箱格式不正确","auth/user-not-found":"账号不存在","auth/wrong-password":"密码错误","auth/invalid-credential":"邮箱或密码错误","auth/email-already-in-use":"该邮箱已注册，请直接登录","auth/weak-password":"密码至少6位","auth/too-many-requests":"尝试次数过多，请稍后再试"}[I.code]||"操作失败，请重试";f(x)}u(!1)}};return E.jsxs("div",{className:"login-tabs-wrap",children:[E.jsxs("div",{className:"login-tabs",children:[E.jsx("button",{className:e==="login"?"active":"",onClick:()=>{n("login"),f("")},children:"登录"}),E.jsx("button",{className:e==="register"?"active":"",onClick:()=>{n("register"),f("")},children:"注册"})]}),E.jsxs("form",{onSubmit:p,children:[E.jsx("div",{className:"login-field",children:E.jsx("input",{className:"login-input",type:"email",placeholder:"邮箱地址",value:r,onChange:y=>i(y.target.value),autoComplete:"email",required:!0})}),E.jsx("div",{className:"login-field",children:E.jsx("input",{className:"login-input",type:"password",placeholder:"密码（至少6位）",value:s,onChange:y=>o(y.target.value),autoComplete:e==="login"?"current-password":"new-password",required:!0})}),h&&E.jsx("div",{className:"login-error",children:h}),E.jsx("button",{className:"login-btn",type:"submit",disabled:l,children:l?"请稍候...":e==="login"?"登录并同步":"注册账号"})]})]})}function ja(t,e){const[n,r]=H.useState(()=>{try{return JSON.parse(localStorage.getItem(t))??e}catch{return e}});return H.useEffect(()=>{localStorage.setItem(t,JSON.stringify(n))},[t,n]),[n,r]}function QN(){var fe;const[t,e]=H.useState("timer"),[n,r]=H.useState(void 0),[i,s]=H.useState(!1),[o,l]=H.useState(!1),[u,h]=H.useState([]),[f,p]=H.useState([]),[y,I]=H.useState([]),[x,D]=ja("darkMode",!1),[b,R]=ja("timeLogs",[]),[T,C]=ja("goals",[]),[L,P]=ja("habits",[]),O=!!n,_=O?o:x,m=O?u:b,v=O?f:T,S=O?y:L,A=O?l:D,k=O?h:R,w=O?p:C,we=O?I:P;H.useEffect(()=>FR(na,ae=>r(ae??null)),[]),H.useEffect(()=>n?LN(n.uid,te=>{te.timeLogs!==void 0&&k(te.timeLogs),te.goals!==void 0&&w(te.goals),te.habits!==void 0&&we(te.habits),te.darkMode!==void 0&&A(te.darkMode)}):void 0,[n]);const st=H.useRef(!1);H.useEffect(()=>{if(n){if(!st.current){st.current=!0;return}MN(n.uid,{timeLogs:m,goals:v,habits:S,darkMode:_})}},[m,v,S,_]);const Yt=async(ae,te,ke)=>{ae==="login"?await DN(te,ke):await VN(te,ke)},Ft=ae=>k(te=>[ae,...te]),B=ae=>k(te=>te.filter(ke=>ke.id!==ae)),G=m.filter(ae=>new Date(ae.date).toDateString()===new Date().toDateString()).reduce((ae,te)=>ae+te.duration,0),[J,ue]=H.useState(!1);return n===void 0?E.jsx("div",{className:"app",children:E.jsxs("div",{className:"splash",children:[E.jsx("div",{className:"splash-logo",children:"⏳"}),E.jsx("div",{className:"splash-name",children:"TimeFlow"})]})}):E.jsxs("div",{className:`app ${_?"dark":""}`,children:[E.jsx("header",{className:"app-header",children:E.jsxs("div",{className:"header-inner",children:[E.jsxs("div",{children:[E.jsx("h1",{className:"app-title",children:"⏳ TimeFlow"}),E.jsxs("p",{className:"app-sub",children:["今日已记录 ",E.jsx("strong",{children:Br(G)})]})]}),E.jsxs("div",{className:"header-actions",children:[E.jsx("button",{className:"dark-btn",onClick:()=>A(ae=>!ae),title:"深色模式",children:_?"☀️":"🌙"}),n?E.jsx("button",{className:"avatar-btn synced",onClick:()=>{confirm(`退出登录？
(${n.email})`)&&ON()},title:`已同步：${n.email}`,children:(((fe=n.email)==null?void 0:fe[0])??"?").toUpperCase()}):E.jsx("button",{className:"sync-btn",onClick:()=>ue(!0),title:"登录以同步数据",children:"☁️"})]})]})}),E.jsxs("main",{className:"main-content",children:[t==="timer"&&E.jsx(HN,{logs:m,onSave:Ft,goals:v}),t==="goals"&&E.jsx(WN,{goals:v,setGoals:w,logs:m}),t==="stats"&&E.jsx(qN,{logs:m,onDeleteLog:B}),t==="habits"&&E.jsx(KN,{habits:S,setHabits:we})]}),E.jsx("nav",{className:"bottom-nav",children:[["timer","⏱","计时"],["goals","🎯","目标"],["stats","📊","统计"],["habits","✅","习惯"]].map(([ae,te,ke])=>E.jsxs("button",{className:`nav-btn ${t===ae?"active":""}`,onClick:()=>e(ae),children:[E.jsx("span",{className:"nav-ic",children:te}),E.jsx("span",{className:"nav-lb",children:ke})]},ae))}),J&&E.jsx("div",{className:"modal-overlay",onClick:()=>ue(!1),children:E.jsxs("div",{className:"modal login-modal",onClick:ae=>ae.stopPropagation(),children:[E.jsxs("div",{className:"login-modal-header",children:[E.jsxs("div",{children:[E.jsx("div",{className:"login-modal-title",children:"☁️ 云端同步"}),E.jsx("div",{className:"login-modal-sub",children:"登录后数据自动同步到所有设备"})]}),E.jsx("button",{className:"modal-close",onClick:()=>ue(!1),children:"✕"})]}),E.jsx(GN,{onAuth:async(ae,te,ke)=>{await Yt(ae,te,ke),ue(!1)}})]})})]})}Fc.createRoot(document.getElementById("root")).render(E.jsx(BT.StrictMode,{children:E.jsx(QN,{})}));
