(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function AT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var py={exports:{}},Gl={},my={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),CT=Symbol.for("react.portal"),RT=Symbol.for("react.fragment"),kT=Symbol.for("react.strict_mode"),PT=Symbol.for("react.profiler"),NT=Symbol.for("react.provider"),xT=Symbol.for("react.context"),DT=Symbol.for("react.forward_ref"),VT=Symbol.for("react.suspense"),OT=Symbol.for("react.memo"),LT=Symbol.for("react.lazy"),xp=Symbol.iterator;function MT(t){return t===null||typeof t!="object"?null:(t=xp&&t[xp]||t["@@iterator"],typeof t=="function"?t:null)}var gy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yy=Object.assign,_y={};function Qi(t,e,n){this.props=t,this.context=e,this.refs=_y,this.updater=n||gy}Qi.prototype.isReactComponent={};Qi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vy(){}vy.prototype=Qi.prototype;function Xh(t,e,n){this.props=t,this.context=e,this.refs=_y,this.updater=n||gy}var Yh=Xh.prototype=new vy;Yh.constructor=Xh;yy(Yh,Qi.prototype);Yh.isPureReactComponent=!0;var Dp=Array.isArray,Ey=Object.prototype.hasOwnProperty,Jh={current:null},wy={key:!0,ref:!0,__self:!0,__source:!0};function Ty(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ey.call(e,r)&&!wy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:xo,type:t,key:s,ref:o,props:i,_owner:Jh.current}}function bT(t,e){return{$$typeof:xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===xo}function FT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vp=/\/+/g;function Gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FT(""+t.key):e.toString(36)}function Da(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xo:case CT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gu(o,0):r,Dp(i)?(n="",t!=null&&(n=t.replace(Vp,"$&/")+"/"),Da(i,e,n,"",function(h){return h})):i!=null&&(Zh(i)&&(i=bT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Gu(s,l);o+=Da(s,e,n,u,i)}else if(u=MT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Gu(s,l++),o+=Da(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function la(t,e,n){if(t==null)return t;var r=[],i=0;return Da(t,r,"","",function(s){return e.call(n,s,i++)}),r}function UT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},Va={transition:null},jT={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:Va,ReactCurrentOwner:Jh};function Iy(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:la,forEach:function(t,e,n){la(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return la(t,function(){e++}),e},toArray:function(t){return la(t,function(e){return e})||[]},only:function(t){if(!Zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=Qi;ne.Fragment=RT;ne.Profiler=PT;ne.PureComponent=Xh;ne.StrictMode=kT;ne.Suspense=VT;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jT;ne.act=Iy;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=yy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ey.call(e,u)&&!wy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:xo,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:xT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NT,_context:t},t.Consumer=t};ne.createElement=Ty;ne.createFactory=function(t){var e=Ty.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:DT,render:t}};ne.isValidElement=Zh;ne.lazy=function(t){return{$$typeof:LT,_payload:{_status:-1,_result:t},_init:UT}};ne.memo=function(t,e){return{$$typeof:OT,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Va.transition;Va.transition={};try{t()}finally{Va.transition=e}};ne.unstable_act=Iy;ne.useCallback=function(t,e){return ut.current.useCallback(t,e)};ne.useContext=function(t){return ut.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};ne.useEffect=function(t,e){return ut.current.useEffect(t,e)};ne.useId=function(){return ut.current.useId()};ne.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return ut.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};ne.useRef=function(t){return ut.current.useRef(t)};ne.useState=function(t){return ut.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return ut.current.useTransition()};ne.version="18.3.1";my.exports=ne;var J=my.exports;const zT=AT(J);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BT=J,$T=Symbol.for("react.element"),HT=Symbol.for("react.fragment"),WT=Object.prototype.hasOwnProperty,qT=BT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KT={key:!0,ref:!0,__self:!0,__source:!0};function Sy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)WT.call(e,r)&&!KT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$T,type:t,key:s,ref:o,props:i,_owner:qT.current}}Gl.Fragment=HT;Gl.jsx=Sy;Gl.jsxs=Sy;py.exports=Gl;var E=py.exports,Dc={},Ay={exports:{}},It={},Cy={exports:{}},Ry={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,K){var j=$.length;$.push(K);e:for(;0<j;){var oe=j-1>>>1,ce=$[oe];if(0<i(ce,K))$[oe]=K,$[j]=ce,j=oe;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],j=$.pop();if(j!==K){$[0]=j;e:for(var oe=0,ce=$.length,le=ce>>>1;oe<le;){var ie=2*(oe+1)-1,Ge=$[ie],Lt=ie+1,xn=$[Lt];if(0>i(Ge,j))Lt<ce&&0>i(xn,Ge)?($[oe]=xn,$[Lt]=j,oe=Lt):($[oe]=Ge,$[ie]=j,oe=ie);else if(Lt<ce&&0>i(xn,j))$[oe]=xn,$[Lt]=j,oe=Lt;else break e}}return K}function i($,K){var j=$.sortIndex-K.sortIndex;return j!==0?j:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,y=3,I=!1,x=!1,D=!1,b=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R($){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=$)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function O($){if(D=!1,R($),!x)if(n(u)!==null)x=!0,At(P);else{var K=n(h);K!==null&&cn(O,K.startTime-$)}}function P($,K){x=!1,D&&(D=!1,C(m),m=-1),I=!0;var j=y;try{for(R(K),p=n(u);p!==null&&(!(p.expirationTime>K)||$&&!A());){var oe=p.callback;if(typeof oe=="function"){p.callback=null,y=p.priorityLevel;var ce=oe(p.expirationTime<=K);K=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(u)&&r(u),R(K)}else r(u);p=n(u)}if(p!==null)var le=!0;else{var ie=n(h);ie!==null&&cn(O,ie.startTime-K),le=!1}return le}finally{p=null,y=j,I=!1}}var L=!1,_=null,m=-1,v=5,S=-1;function A(){return!(t.unstable_now()-S<v)}function k(){if(_!==null){var $=t.unstable_now();S=$;var K=!0;try{K=_(!0,$)}finally{K?w():(L=!1,_=null)}}else L=!1}var w;if(typeof T=="function")w=function(){T(k)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,it=Ee.port2;Ee.port1.onmessage=k,w=function(){it.postMessage(null)}}else w=function(){b(k,0)};function At($){_=$,L||(L=!0,w())}function cn($,K){m=b(function(){$(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){x||I||(x=!0,At(P))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var j=y;y=K;try{return $()}finally{y=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var j=y;y=$;try{return K()}finally{y=j}},t.unstable_scheduleCallback=function($,K,j){var oe=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?oe+j:oe):j=oe,$){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=j+ce,$={id:f++,callback:K,priorityLevel:$,startTime:j,expirationTime:ce,sortIndex:-1},j>oe?($.sortIndex=j,e(h,$),n(u)===null&&$===n(h)&&(D?(C(m),m=-1):D=!0,cn(O,j-oe))):($.sortIndex=ce,e(u,$),x||I||(x=!0,At(P))),$},t.unstable_shouldYield=A,t.unstable_wrapCallback=function($){var K=y;return function(){var j=y;y=K;try{return $.apply(this,arguments)}finally{y=j}}}})(Ry);Cy.exports=Ry;var GT=Cy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QT=J,Tt=GT;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ky=new Set,to={};function Xr(t,e){bi(t,e),bi(t+"Capture",e)}function bi(t,e){for(to[t]=e,t=0;t<e.length;t++)ky.add(e[t])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,XT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},Lp={};function YT(t){return Vc.call(Lp,t)?!0:Vc.call(Op,t)?!1:XT.test(t)?Lp[t]=!0:(Op[t]=!0,!1)}function JT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ZT(t,e,n,r){if(e===null||typeof e>"u"||JT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var ed=/[\-:]([a-z])/g;function td(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ed,td);qe[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ed,td);qe[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ed,td);qe[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function nd(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ZT(e,n,i,r)&&(n=null),r||i===null?YT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pn=QT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),hi=Symbol.for("react.portal"),di=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),Py=Symbol.for("react.provider"),Ny=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),Lc=Symbol.for("react.suspense"),Mc=Symbol.for("react.suspense_list"),sd=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),xy=Symbol.for("react.offscreen"),Mp=Symbol.iterator;function Es(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,Qu;function xs(t){if(Qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qu=e&&e[1]||""}return`
`+Qu+t}var Xu=!1;function Yu(t,e){if(!t||Xu)return"";Xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xs(t):""}function eI(t){switch(t.tag){case 5:return xs(t.type);case 16:return xs("Lazy");case 13:return xs("Suspense");case 19:return xs("SuspenseList");case 0:case 2:case 15:return t=Yu(t.type,!1),t;case 11:return t=Yu(t.type.render,!1),t;case 1:return t=Yu(t.type,!0),t;default:return""}}function bc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case di:return"Fragment";case hi:return"Portal";case Oc:return"Profiler";case rd:return"StrictMode";case Lc:return"Suspense";case Mc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ny:return(t.displayName||"Context")+".Consumer";case Py:return(t._context.displayName||"Context")+".Provider";case id:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sd:return e=t.displayName||null,e!==null?e:bc(t.type)||"Memo";case jn:e=t._payload,t=t._init;try{return bc(t(e))}catch{}}return null}function tI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bc(e);case 8:return e===rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nI(t){var e=Dy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ca(t){t._valueTracker||(t._valueTracker=nI(t))}function Vy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Dy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fc(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Oy(t,e){e=e.checked,e!=null&&nd(t,"checked",e,!1)}function Uc(t,e){Oy(t,e);var n=lr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jc(t,e.type,n):e.hasOwnProperty("defaultValue")&&jc(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jc(t,e,n){(e!=="number"||tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ds=Array.isArray;function Si(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Ds(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function Ly(t,e){var n=lr(e.value),r=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function My(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?My(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ha,by=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function no(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rI=["Webkit","ms","Moz","O"];Object.keys(zs).forEach(function(t){rI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zs[e]=zs[t]})});function Fy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zs.hasOwnProperty(t)&&zs[t]?(""+e).trim():e+"px"}function Uy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var iI=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $c(t,e){if(e){if(iI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Hc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wc=null;function od(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qc=null,Ai=null,Ci=null;function zp(t){if(t=Oo(t)){if(typeof qc!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Zl(e),qc(t.stateNode,t.type,e))}}function jy(t){Ai?Ci?Ci.push(t):Ci=[t]:Ai=t}function zy(){if(Ai){var t=Ai,e=Ci;if(Ci=Ai=null,zp(t),e)for(t=0;t<e.length;t++)zp(e[t])}}function By(t,e){return t(e)}function $y(){}var Ju=!1;function Hy(t,e,n){if(Ju)return t(e,n);Ju=!0;try{return By(t,e,n)}finally{Ju=!1,(Ai!==null||Ci!==null)&&($y(),zy())}}function ro(t,e){var n=t.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Kc=!1;if(wn)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{Kc=!1}function sI(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Bs=!1,nl=null,rl=!1,Gc=null,oI={onError:function(t){Bs=!0,nl=t}};function aI(t,e,n,r,i,s,o,l,u){Bs=!1,nl=null,sI.apply(oI,arguments)}function lI(t,e,n,r,i,s,o,l,u){if(aI.apply(this,arguments),Bs){if(Bs){var h=nl;Bs=!1,nl=null}else throw Error(U(198));rl||(rl=!0,Gc=h)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bp(t){if(Yr(t)!==t)throw Error(U(188))}function uI(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bp(i),t;if(s===r)return Bp(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function qy(t){return t=uI(t),t!==null?Ky(t):null}function Ky(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ky(t);if(e!==null)return e;t=t.sibling}return null}var Gy=Tt.unstable_scheduleCallback,$p=Tt.unstable_cancelCallback,cI=Tt.unstable_shouldYield,hI=Tt.unstable_requestPaint,ke=Tt.unstable_now,dI=Tt.unstable_getCurrentPriorityLevel,ad=Tt.unstable_ImmediatePriority,Qy=Tt.unstable_UserBlockingPriority,il=Tt.unstable_NormalPriority,fI=Tt.unstable_LowPriority,Xy=Tt.unstable_IdlePriority,Ql=null,Zt=null;function pI(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ql,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:yI,mI=Math.log,gI=Math.LN2;function yI(t){return t>>>=0,t===0?32:31-(mI(t)/gI|0)|0}var da=64,fa=4194304;function Vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Vs(l):(s&=o,s!==0&&(r=Vs(s)))}else o=n&~i,o!==0?r=Vs(o):s!==0&&(r=Vs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),i=1<<n,r|=t[n],e&=~i;return r}function _I(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=_I(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Qc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yy(){var t=da;return da<<=1,!(da&4194240)&&(da=64),t}function Zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Do(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function EI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function Jy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zy,ud,e_,t_,n_,Xc=!1,pa=[],Xn=null,Yn=null,Jn=null,io=new Map,so=new Map,Bn=[],wI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(t,e){switch(t){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(e.pointerId)}}function Ts(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Oo(e),e!==null&&ud(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function TI(t,e,n,r,i){switch(e){case"focusin":return Xn=Ts(Xn,t,e,n,r,i),!0;case"dragenter":return Yn=Ts(Yn,t,e,n,r,i),!0;case"mouseover":return Jn=Ts(Jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return io.set(s,Ts(io.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,so.set(s,Ts(so.get(s)||null,t,e,n,r,i)),!0}return!1}function r_(t){var e=Nr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=Wy(n),e!==null){t.blockedOn=e,n_(t.priority,function(){e_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wc=r,n.target.dispatchEvent(r),Wc=null}else return e=Oo(n),e!==null&&ud(e),t.blockedOn=n,!1;e.shift()}return!0}function Wp(t,e,n){Oa(t)&&n.delete(e)}function II(){Xc=!1,Xn!==null&&Oa(Xn)&&(Xn=null),Yn!==null&&Oa(Yn)&&(Yn=null),Jn!==null&&Oa(Jn)&&(Jn=null),io.forEach(Wp),so.forEach(Wp)}function Is(t,e){t.blockedOn===e&&(t.blockedOn=null,Xc||(Xc=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,II)))}function oo(t){function e(i){return Is(i,t)}if(0<pa.length){Is(pa[0],t);for(var n=1;n<pa.length;n++){var r=pa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xn!==null&&Is(Xn,t),Yn!==null&&Is(Yn,t),Jn!==null&&Is(Jn,t),io.forEach(e),so.forEach(e),n=0;n<Bn.length;n++)r=Bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)r_(n),n.blockedOn===null&&Bn.shift()}var Ri=Pn.ReactCurrentBatchConfig,ol=!0;function SI(t,e,n,r){var i=he,s=Ri.transition;Ri.transition=null;try{he=1,cd(t,e,n,r)}finally{he=i,Ri.transition=s}}function AI(t,e,n,r){var i=he,s=Ri.transition;Ri.transition=null;try{he=4,cd(t,e,n,r)}finally{he=i,Ri.transition=s}}function cd(t,e,n,r){if(ol){var i=Yc(t,e,n,r);if(i===null)uc(t,e,r,al,n),Hp(t,r);else if(TI(i,t,e,n,r))r.stopPropagation();else if(Hp(t,r),e&4&&-1<wI.indexOf(t)){for(;i!==null;){var s=Oo(i);if(s!==null&&Zy(s),s=Yc(t,e,n,r),s===null&&uc(t,e,r,al,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uc(t,e,r,null,n)}}var al=null;function Yc(t,e,n,r){if(al=null,t=od(r),t=Nr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return al=t,null}function i_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dI()){case ad:return 1;case Qy:return 4;case il:case fI:return 16;case Xy:return 536870912;default:return 16}default:return 16}}var Gn=null,hd=null,La=null;function s_(){if(La)return La;var t,e=hd,n=e.length,r,i="value"in Gn?Gn.value:Gn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return La=i.slice(t,1<r?1-r:void 0)}function Ma(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ma(){return!0}function qp(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ma:qp,this.isPropagationStopped=qp,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ma)},persist:function(){},isPersistent:ma}),e}var Xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dd=St(Xi),Vo=Se({},Xi,{view:0,detail:0}),CI=St(Vo),ec,tc,Ss,Xl=Se({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ss&&(Ss&&t.type==="mousemove"?(ec=t.screenX-Ss.screenX,tc=t.screenY-Ss.screenY):tc=ec=0,Ss=t),ec)},movementY:function(t){return"movementY"in t?t.movementY:tc}}),Kp=St(Xl),RI=Se({},Xl,{dataTransfer:0}),kI=St(RI),PI=Se({},Vo,{relatedTarget:0}),nc=St(PI),NI=Se({},Xi,{animationName:0,elapsedTime:0,pseudoElement:0}),xI=St(NI),DI=Se({},Xi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VI=St(DI),OI=Se({},Xi,{data:0}),Gp=St(OI),LI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bI[t])?!!e[t]:!1}function fd(){return FI}var UI=Se({},Vo,{key:function(t){if(t.key){var e=LI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fd,charCode:function(t){return t.type==="keypress"?Ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jI=St(UI),zI=Se({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qp=St(zI),BI=Se({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fd}),$I=St(BI),HI=Se({},Xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),WI=St(HI),qI=Se({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KI=St(qI),GI=[9,13,27,32],pd=wn&&"CompositionEvent"in window,$s=null;wn&&"documentMode"in document&&($s=document.documentMode);var QI=wn&&"TextEvent"in window&&!$s,o_=wn&&(!pd||$s&&8<$s&&11>=$s),Xp=" ",Yp=!1;function a_(t,e){switch(t){case"keyup":return GI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fi=!1;function XI(t,e){switch(t){case"compositionend":return l_(e);case"keypress":return e.which!==32?null:(Yp=!0,Xp);case"textInput":return t=e.data,t===Xp&&Yp?null:t;default:return null}}function YI(t,e){if(fi)return t==="compositionend"||!pd&&a_(t,e)?(t=s_(),La=hd=Gn=null,fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o_&&e.locale!=="ko"?null:e.data;default:return null}}var JI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!JI[t.type]:e==="textarea"}function u_(t,e,n,r){jy(r),e=ll(e,"onChange"),0<e.length&&(n=new dd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hs=null,ao=null;function ZI(t){E_(t,0)}function Yl(t){var e=gi(t);if(Vy(e))return t}function e0(t,e){if(t==="change")return e}var c_=!1;if(wn){var rc;if(wn){var ic="oninput"in document;if(!ic){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),ic=typeof Zp.oninput=="function"}rc=ic}else rc=!1;c_=rc&&(!document.documentMode||9<document.documentMode)}function em(){Hs&&(Hs.detachEvent("onpropertychange",h_),ao=Hs=null)}function h_(t){if(t.propertyName==="value"&&Yl(ao)){var e=[];u_(e,ao,t,od(t)),Hy(ZI,e)}}function t0(t,e,n){t==="focusin"?(em(),Hs=e,ao=n,Hs.attachEvent("onpropertychange",h_)):t==="focusout"&&em()}function n0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(ao)}function r0(t,e){if(t==="click")return Yl(e)}function i0(t,e){if(t==="input"||t==="change")return Yl(e)}function s0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:s0;function lo(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vc.call(e,i)||!Wt(t[i],e[i]))return!1}return!0}function tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nm(t,e){var n=tm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tm(n)}}function d_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?d_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function f_(){for(var t=window,e=tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tl(t.document)}return e}function md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function o0(t){var e=f_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&d_(n.ownerDocument.documentElement,n)){if(r!==null&&md(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=nm(n,s);var o=nm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var a0=wn&&"documentMode"in document&&11>=document.documentMode,pi=null,Jc=null,Ws=null,Zc=!1;function rm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zc||pi==null||pi!==tl(r)||(r=pi,"selectionStart"in r&&md(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ws&&lo(Ws,r)||(Ws=r,r=ll(Jc,"onSelect"),0<r.length&&(e=new dd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pi)))}function ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mi={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},sc={},p_={};wn&&(p_=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function Jl(t){if(sc[t])return sc[t];if(!mi[t])return t;var e=mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in p_)return sc[t]=e[n];return t}var m_=Jl("animationend"),g_=Jl("animationiteration"),y_=Jl("animationstart"),__=Jl("transitionend"),v_=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){v_.set(t,e),Xr(e,[t])}for(var oc=0;oc<im.length;oc++){var ac=im[oc],l0=ac.toLowerCase(),u0=ac[0].toUpperCase()+ac.slice(1);yr(l0,"on"+u0)}yr(m_,"onAnimationEnd");yr(g_,"onAnimationIteration");yr(y_,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(__,"onTransitionEnd");bi("onMouseEnter",["mouseout","mouseover"]);bi("onMouseLeave",["mouseout","mouseover"]);bi("onPointerEnter",["pointerout","pointerover"]);bi("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));function sm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,lI(r,e,void 0,t),t.currentTarget=null}function E_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;sm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;sm(i,l,h),s=u}}}if(rl)throw t=Gc,rl=!1,Gc=null,t}function me(t,e){var n=e[ih];n===void 0&&(n=e[ih]=new Set);var r=t+"__bubble";n.has(r)||(w_(e,t,2,!1),n.add(r))}function lc(t,e,n){var r=0;e&&(r|=4),w_(n,t,r,e)}var ya="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[ya]){t[ya]=!0,ky.forEach(function(n){n!=="selectionchange"&&(c0.has(n)||lc(n,!1,t),lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ya]||(e[ya]=!0,lc("selectionchange",!1,e))}}function w_(t,e,n,r){switch(i_(e)){case 1:var i=SI;break;case 4:i=AI;break;default:i=cd}n=i.bind(null,e,n,t),i=void 0,!Kc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Nr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Hy(function(){var h=s,f=od(n),p=[];e:{var y=v_.get(t);if(y!==void 0){var I=dd,x=t;switch(t){case"keypress":if(Ma(n)===0)break e;case"keydown":case"keyup":I=jI;break;case"focusin":x="focus",I=nc;break;case"focusout":x="blur",I=nc;break;case"beforeblur":case"afterblur":I=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=kI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=$I;break;case m_:case g_:case y_:I=xI;break;case __:I=WI;break;case"scroll":I=CI;break;case"wheel":I=KI;break;case"copy":case"cut":case"paste":I=VI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Qp}var D=(e&4)!==0,b=!D&&t==="scroll",C=D?y!==null?y+"Capture":null:y;D=[];for(var T=h,R;T!==null;){R=T;var O=R.stateNode;if(R.tag===5&&O!==null&&(R=O,C!==null&&(O=ro(T,C),O!=null&&D.push(co(T,O,R)))),b)break;T=T.return}0<D.length&&(y=new I(y,x,null,n,f),p.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",y&&n!==Wc&&(x=n.relatedTarget||n.fromElement)&&(Nr(x)||x[Tn]))break e;if((I||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,I?(x=n.relatedTarget||n.toElement,I=h,x=x?Nr(x):null,x!==null&&(b=Yr(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(I=null,x=h),I!==x)){if(D=Kp,O="onMouseLeave",C="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(D=Qp,O="onPointerLeave",C="onPointerEnter",T="pointer"),b=I==null?y:gi(I),R=x==null?y:gi(x),y=new D(O,T+"leave",I,n,f),y.target=b,y.relatedTarget=R,O=null,Nr(f)===h&&(D=new D(C,T+"enter",x,n,f),D.target=R,D.relatedTarget=b,O=D),b=O,I&&x)t:{for(D=I,C=x,T=0,R=D;R;R=oi(R))T++;for(R=0,O=C;O;O=oi(O))R++;for(;0<T-R;)D=oi(D),T--;for(;0<R-T;)C=oi(C),R--;for(;T--;){if(D===C||C!==null&&D===C.alternate)break t;D=oi(D),C=oi(C)}D=null}else D=null;I!==null&&om(p,y,I,D,!1),x!==null&&b!==null&&om(p,b,x,D,!0)}}e:{if(y=h?gi(h):window,I=y.nodeName&&y.nodeName.toLowerCase(),I==="select"||I==="input"&&y.type==="file")var P=e0;else if(Jp(y))if(c_)P=i0;else{P=n0;var L=t0}else(I=y.nodeName)&&I.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(P=r0);if(P&&(P=P(t,h))){u_(p,P,n,f);break e}L&&L(t,y,h),t==="focusout"&&(L=y._wrapperState)&&L.controlled&&y.type==="number"&&jc(y,"number",y.value)}switch(L=h?gi(h):window,t){case"focusin":(Jp(L)||L.contentEditable==="true")&&(pi=L,Jc=h,Ws=null);break;case"focusout":Ws=Jc=pi=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,rm(p,n,f);break;case"selectionchange":if(a0)break;case"keydown":case"keyup":rm(p,n,f)}var _;if(pd)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else fi?a_(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(o_&&n.locale!=="ko"&&(fi||m!=="onCompositionStart"?m==="onCompositionEnd"&&fi&&(_=s_()):(Gn=f,hd="value"in Gn?Gn.value:Gn.textContent,fi=!0)),L=ll(h,m),0<L.length&&(m=new Gp(m,t,null,n,f),p.push({event:m,listeners:L}),_?m.data=_:(_=l_(n),_!==null&&(m.data=_)))),(_=QI?XI(t,n):YI(t,n))&&(h=ll(h,"onBeforeInput"),0<h.length&&(f=new Gp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=_))}E_(p,e)})}function co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ll(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ro(t,n),s!=null&&r.unshift(co(t,s,i)),s=ro(t,e),s!=null&&r.push(co(t,s,i))),t=t.return}return r}function oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function om(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=ro(n,s),u!=null&&o.unshift(co(n,u,l))):i||(u=ro(n,s),u!=null&&o.push(co(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var h0=/\r\n?/g,d0=/\u0000|\uFFFD/g;function am(t){return(typeof t=="string"?t:""+t).replace(h0,`
`).replace(d0,"")}function _a(t,e,n){if(e=am(e),am(t)!==e&&n)throw Error(U(425))}function ul(){}var eh=null,th=null;function nh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rh=typeof setTimeout=="function"?setTimeout:void 0,f0=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,p0=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(t){return lm.resolve(null).then(t).catch(m0)}:rh;function m0(t){setTimeout(function(){throw t})}function cc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),oo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oo(e)}function Zn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yi=Math.random().toString(36).slice(2),Jt="__reactFiber$"+Yi,ho="__reactProps$"+Yi,Tn="__reactContainer$"+Yi,ih="__reactEvents$"+Yi,g0="__reactListeners$"+Yi,y0="__reactHandles$"+Yi;function Nr(t){var e=t[Jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[Jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=um(t);t!==null;){if(n=t[Jt])return n;t=um(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[Jt]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Zl(t){return t[ho]||null}var sh=[],yi=-1;function _r(t){return{current:t}}function ye(t){0>yi||(t.current=sh[yi],sh[yi]=null,yi--)}function fe(t,e){yi++,sh[yi]=t.current,t.current=e}var ur={},nt=_r(ur),pt=_r(!1),Ur=ur;function Fi(t,e){var n=t.type.contextTypes;if(!n)return ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function cl(){ye(pt),ye(nt)}function cm(t,e,n){if(nt.current!==ur)throw Error(U(168));fe(nt,e),fe(pt,n)}function T_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,tI(t)||"Unknown",i));return Se({},n,r)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Ur=nt.current,fe(nt,t),fe(pt,pt.current),!0}function hm(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=T_(t,e,Ur),r.__reactInternalMemoizedMergedChildContext=t,ye(pt),ye(nt),fe(nt,t)):ye(pt),fe(pt,n)}var dn=null,eu=!1,hc=!1;function I_(t){dn===null?dn=[t]:dn.push(t)}function _0(t){eu=!0,I_(t)}function vr(){if(!hc&&dn!==null){hc=!0;var t=0,e=he;try{var n=dn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,eu=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),Gy(ad,vr),i}finally{he=e,hc=!1}}return null}var _i=[],vi=0,dl=null,fl=0,Ct=[],Rt=0,jr=null,fn=1,pn="";function Rr(t,e){_i[vi++]=fl,_i[vi++]=dl,dl=t,fl=e}function S_(t,e,n){Ct[Rt++]=fn,Ct[Rt++]=pn,Ct[Rt++]=jr,jr=t;var r=fn;t=pn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var s=32-Bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-Bt(e)+i|n<<i|r,pn=s+t}else fn=1<<s|n<<i|r,pn=t}function gd(t){t.return!==null&&(Rr(t,1),S_(t,1,0))}function yd(t){for(;t===dl;)dl=_i[--vi],_i[vi]=null,fl=_i[--vi],_i[vi]=null;for(;t===jr;)jr=Ct[--Rt],Ct[Rt]=null,pn=Ct[--Rt],Ct[Rt]=null,fn=Ct[--Rt],Ct[Rt]=null}var wt=null,Et=null,_e=!1,Ut=null;function A_(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,Et=Zn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,Et=null,!0):!1;default:return!1}}function oh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ah(t){if(_e){var e=Et;if(e){var n=e;if(!dm(t,e)){if(oh(t))throw Error(U(418));e=Zn(n.nextSibling);var r=wt;e&&dm(t,e)?A_(r,n):(t.flags=t.flags&-4097|2,_e=!1,wt=t)}}else{if(oh(t))throw Error(U(418));t.flags=t.flags&-4097|2,_e=!1,wt=t}}}function fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function va(t){if(t!==wt)return!1;if(!_e)return fm(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nh(t.type,t.memoizedProps)),e&&(e=Et)){if(oh(t))throw C_(),Error(U(418));for(;e;)A_(t,e),e=Zn(e.nextSibling)}if(fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=Zn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=wt?Zn(t.stateNode.nextSibling):null;return!0}function C_(){for(var t=Et;t;)t=Zn(t.nextSibling)}function Ui(){Et=wt=null,_e=!1}function _d(t){Ut===null?Ut=[t]:Ut.push(t)}var v0=Pn.ReactCurrentBatchConfig;function As(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Ea(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pm(t){var e=t._init;return e(t._payload)}function R_(t){function e(C,T){if(t){var R=C.deletions;R===null?(C.deletions=[T],C.flags|=16):R.push(T)}}function n(C,T){if(!t)return null;for(;T!==null;)e(C,T),T=T.sibling;return null}function r(C,T){for(C=new Map;T!==null;)T.key!==null?C.set(T.key,T):C.set(T.index,T),T=T.sibling;return C}function i(C,T){return C=rr(C,T),C.index=0,C.sibling=null,C}function s(C,T,R){return C.index=R,t?(R=C.alternate,R!==null?(R=R.index,R<T?(C.flags|=2,T):R):(C.flags|=2,T)):(C.flags|=1048576,T)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function l(C,T,R,O){return T===null||T.tag!==6?(T=_c(R,C.mode,O),T.return=C,T):(T=i(T,R),T.return=C,T)}function u(C,T,R,O){var P=R.type;return P===di?f(C,T,R.props.children,O,R.key):T!==null&&(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===jn&&pm(P)===T.type)?(O=i(T,R.props),O.ref=As(C,T,R),O.return=C,O):(O=$a(R.type,R.key,R.props,null,C.mode,O),O.ref=As(C,T,R),O.return=C,O)}function h(C,T,R,O){return T===null||T.tag!==4||T.stateNode.containerInfo!==R.containerInfo||T.stateNode.implementation!==R.implementation?(T=vc(R,C.mode,O),T.return=C,T):(T=i(T,R.children||[]),T.return=C,T)}function f(C,T,R,O,P){return T===null||T.tag!==7?(T=Lr(R,C.mode,O,P),T.return=C,T):(T=i(T,R),T.return=C,T)}function p(C,T,R){if(typeof T=="string"&&T!==""||typeof T=="number")return T=_c(""+T,C.mode,R),T.return=C,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ua:return R=$a(T.type,T.key,T.props,null,C.mode,R),R.ref=As(C,null,T),R.return=C,R;case hi:return T=vc(T,C.mode,R),T.return=C,T;case jn:var O=T._init;return p(C,O(T._payload),R)}if(Ds(T)||Es(T))return T=Lr(T,C.mode,R,null),T.return=C,T;Ea(C,T)}return null}function y(C,T,R,O){var P=T!==null?T.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return P!==null?null:l(C,T,""+R,O);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ua:return R.key===P?u(C,T,R,O):null;case hi:return R.key===P?h(C,T,R,O):null;case jn:return P=R._init,y(C,T,P(R._payload),O)}if(Ds(R)||Es(R))return P!==null?null:f(C,T,R,O,null);Ea(C,R)}return null}function I(C,T,R,O,P){if(typeof O=="string"&&O!==""||typeof O=="number")return C=C.get(R)||null,l(T,C,""+O,P);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ua:return C=C.get(O.key===null?R:O.key)||null,u(T,C,O,P);case hi:return C=C.get(O.key===null?R:O.key)||null,h(T,C,O,P);case jn:var L=O._init;return I(C,T,R,L(O._payload),P)}if(Ds(O)||Es(O))return C=C.get(R)||null,f(T,C,O,P,null);Ea(T,O)}return null}function x(C,T,R,O){for(var P=null,L=null,_=T,m=T=0,v=null;_!==null&&m<R.length;m++){_.index>m?(v=_,_=null):v=_.sibling;var S=y(C,_,R[m],O);if(S===null){_===null&&(_=v);break}t&&_&&S.alternate===null&&e(C,_),T=s(S,T,m),L===null?P=S:L.sibling=S,L=S,_=v}if(m===R.length)return n(C,_),_e&&Rr(C,m),P;if(_===null){for(;m<R.length;m++)_=p(C,R[m],O),_!==null&&(T=s(_,T,m),L===null?P=_:L.sibling=_,L=_);return _e&&Rr(C,m),P}for(_=r(C,_);m<R.length;m++)v=I(_,C,m,R[m],O),v!==null&&(t&&v.alternate!==null&&_.delete(v.key===null?m:v.key),T=s(v,T,m),L===null?P=v:L.sibling=v,L=v);return t&&_.forEach(function(A){return e(C,A)}),_e&&Rr(C,m),P}function D(C,T,R,O){var P=Es(R);if(typeof P!="function")throw Error(U(150));if(R=P.call(R),R==null)throw Error(U(151));for(var L=P=null,_=T,m=T=0,v=null,S=R.next();_!==null&&!S.done;m++,S=R.next()){_.index>m?(v=_,_=null):v=_.sibling;var A=y(C,_,S.value,O);if(A===null){_===null&&(_=v);break}t&&_&&A.alternate===null&&e(C,_),T=s(A,T,m),L===null?P=A:L.sibling=A,L=A,_=v}if(S.done)return n(C,_),_e&&Rr(C,m),P;if(_===null){for(;!S.done;m++,S=R.next())S=p(C,S.value,O),S!==null&&(T=s(S,T,m),L===null?P=S:L.sibling=S,L=S);return _e&&Rr(C,m),P}for(_=r(C,_);!S.done;m++,S=R.next())S=I(_,C,m,S.value,O),S!==null&&(t&&S.alternate!==null&&_.delete(S.key===null?m:S.key),T=s(S,T,m),L===null?P=S:L.sibling=S,L=S);return t&&_.forEach(function(k){return e(C,k)}),_e&&Rr(C,m),P}function b(C,T,R,O){if(typeof R=="object"&&R!==null&&R.type===di&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case ua:e:{for(var P=R.key,L=T;L!==null;){if(L.key===P){if(P=R.type,P===di){if(L.tag===7){n(C,L.sibling),T=i(L,R.props.children),T.return=C,C=T;break e}}else if(L.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===jn&&pm(P)===L.type){n(C,L.sibling),T=i(L,R.props),T.ref=As(C,L,R),T.return=C,C=T;break e}n(C,L);break}else e(C,L);L=L.sibling}R.type===di?(T=Lr(R.props.children,C.mode,O,R.key),T.return=C,C=T):(O=$a(R.type,R.key,R.props,null,C.mode,O),O.ref=As(C,T,R),O.return=C,C=O)}return o(C);case hi:e:{for(L=R.key;T!==null;){if(T.key===L)if(T.tag===4&&T.stateNode.containerInfo===R.containerInfo&&T.stateNode.implementation===R.implementation){n(C,T.sibling),T=i(T,R.children||[]),T.return=C,C=T;break e}else{n(C,T);break}else e(C,T);T=T.sibling}T=vc(R,C.mode,O),T.return=C,C=T}return o(C);case jn:return L=R._init,b(C,T,L(R._payload),O)}if(Ds(R))return x(C,T,R,O);if(Es(R))return D(C,T,R,O);Ea(C,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,T!==null&&T.tag===6?(n(C,T.sibling),T=i(T,R),T.return=C,C=T):(n(C,T),T=_c(R,C.mode,O),T.return=C,C=T),o(C)):n(C,T)}return b}var ji=R_(!0),k_=R_(!1),pl=_r(null),ml=null,Ei=null,vd=null;function Ed(){vd=Ei=ml=null}function wd(t){var e=pl.current;ye(pl),t._currentValue=e}function lh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ki(t,e){ml=t,vd=Ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(vd!==t)if(t={context:t,memoizedValue:e,next:null},Ei===null){if(ml===null)throw Error(U(308));Ei=t,ml.dependencies={lanes:0,firstContext:t}}else Ei=Ei.next=t;return e}var xr=null;function Td(t){xr===null?xr=[t]:xr.push(t)}function P_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Td(e)):(n.next=i.next,i.next=n),e.interleaved=n,In(t,r)}function In(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function Id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,In(t,n)}return i=r.interleaved,i===null?(e.next=e,Td(r)):(e.next=i.next,i.next=e),r.interleaved=e,In(t,n)}function ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ld(t,n)}}function mm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gl(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,I=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,D=l;switch(y=e,I=n,D.tag){case 1:if(x=D.payload,typeof x=="function"){p=x.call(I,p,y);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=D.payload,y=typeof x=="function"?x.call(I,p,y):x,y==null)break e;p=Se({},p,y);break e;case 2:zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else I={eventTime:I,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=I,u=p):f=f.next=I,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Br|=o,t.lanes=o,t.memoizedState=p}}function gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Lo={},en=_r(Lo),fo=_r(Lo),po=_r(Lo);function Dr(t){if(t===Lo)throw Error(U(174));return t}function Sd(t,e){switch(fe(po,e),fe(fo,t),fe(en,Lo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bc(e,t)}ye(en),fe(en,e)}function zi(){ye(en),ye(fo),ye(po)}function x_(t){Dr(po.current);var e=Dr(en.current),n=Bc(e,t.type);e!==n&&(fe(fo,t),fe(en,n))}function Ad(t){fo.current===t&&(ye(en),ye(fo))}var we=_r(0);function yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dc=[];function Cd(){for(var t=0;t<dc.length;t++)dc[t]._workInProgressVersionPrimary=null;dc.length=0}var Fa=Pn.ReactCurrentDispatcher,fc=Pn.ReactCurrentBatchConfig,zr=0,Ie=null,Ve=null,Ue=null,_l=!1,qs=!1,mo=0,E0=0;function Xe(){throw Error(U(321))}function Rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wt(t[n],e[n]))return!1;return!0}function kd(t,e,n,r,i,s){if(zr=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fa.current=t===null||t.memoizedState===null?S0:A0,t=n(r,i),qs){s=0;do{if(qs=!1,mo=0,25<=s)throw Error(U(301));s+=1,Ue=Ve=null,e.updateQueue=null,Fa.current=C0,t=n(r,i)}while(qs)}if(Fa.current=vl,e=Ve!==null&&Ve.next!==null,zr=0,Ue=Ve=Ie=null,_l=!1,e)throw Error(U(300));return t}function Pd(){var t=mo!==0;return mo=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ie.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Ot(){if(Ve===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Ue===null?Ie.memoizedState:Ue.next;if(e!==null)Ue=e,Ve=t;else{if(t===null)throw Error(U(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ue===null?Ie.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function go(t,e){return typeof e=="function"?e(t):e}function pc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((zr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ie.lanes|=f,Br|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Wt(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,Br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wt(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function D_(){}function V_(t,e){var n=Ie,r=Ot(),i=e(),s=!Wt(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,Nd(M_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,yo(9,L_.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(U(349));zr&30||O_(n,e,i)}return i}function O_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function L_(t,e,n,r){e.value=n,e.getSnapshot=r,b_(e)&&F_(t)}function M_(t,e,n){return n(function(){b_(e)&&F_(t)})}function b_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wt(t,n)}catch{return!0}}function F_(t){var e=In(t,1);e!==null&&$t(e,t,1,-1)}function ym(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:t},e.queue=t,t=t.dispatch=I0.bind(null,Ie,t),[e.memoizedState,t]}function yo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function U_(){return Ot().memoizedState}function Ua(t,e,n,r){var i=Xt();Ie.flags|=t,i.memoizedState=yo(1|e,n,void 0,r===void 0?null:r)}function tu(t,e,n,r){var i=Ot();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&Rd(r,o.deps)){i.memoizedState=yo(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=yo(1|e,n,s,r)}function _m(t,e){return Ua(8390656,8,t,e)}function Nd(t,e){return tu(2048,8,t,e)}function j_(t,e){return tu(4,2,t,e)}function z_(t,e){return tu(4,4,t,e)}function B_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $_(t,e,n){return n=n!=null?n.concat([t]):null,tu(4,4,B_.bind(null,e,t),n)}function xd(){}function H_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function W_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function q_(t,e,n){return zr&21?(Wt(n,e)||(n=Yy(),Ie.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function w0(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=fc.transition;fc.transition={};try{t(!1),e()}finally{he=n,fc.transition=r}}function K_(){return Ot().memoizedState}function T0(t,e,n){var r=nr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},G_(t))Q_(e,n);else if(n=P_(t,e,n,r),n!==null){var i=lt();$t(n,t,r,i),X_(n,e,r)}}function I0(t,e,n){var r=nr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(G_(t))Q_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Wt(l,o)){var u=e.interleaved;u===null?(i.next=i,Td(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=P_(t,e,i,r),n!==null&&(i=lt(),$t(n,t,r,i),X_(n,e,r))}}function G_(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function Q_(t,e){qs=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function X_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ld(t,n)}}var vl={readContext:Vt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},S0={readContext:Vt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:_m,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ua(4194308,4,B_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ua(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ua(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=T0.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:ym,useDebugValue:xd,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=ym(!1),e=t[0];return t=w0.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=Xt();if(_e){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),ze===null)throw Error(U(349));zr&30||O_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,_m(M_.bind(null,r,s,t),[t]),r.flags|=2048,yo(9,L_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=ze.identifierPrefix;if(_e){var n=pn,r=fn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=mo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=E0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},A0={readContext:Vt,useCallback:H_,useContext:Vt,useEffect:Nd,useImperativeHandle:$_,useInsertionEffect:j_,useLayoutEffect:z_,useMemo:W_,useReducer:pc,useRef:U_,useState:function(){return pc(go)},useDebugValue:xd,useDeferredValue:function(t){var e=Ot();return q_(e,Ve.memoizedState,t)},useTransition:function(){var t=pc(go)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:D_,useSyncExternalStore:V_,useId:K_,unstable_isNewReconciler:!1},C0={readContext:Vt,useCallback:H_,useContext:Vt,useEffect:Nd,useImperativeHandle:$_,useInsertionEffect:j_,useLayoutEffect:z_,useMemo:W_,useReducer:mc,useRef:U_,useState:function(){return mc(go)},useDebugValue:xd,useDeferredValue:function(t){var e=Ot();return Ve===null?e.memoizedState=t:q_(e,Ve.memoizedState,t)},useTransition:function(){var t=mc(go)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:D_,useSyncExternalStore:V_,useId:K_,unstable_isNewReconciler:!1};function bt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function uh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nu={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=nr(t),s=_n(r,i);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,i),e!==null&&($t(e,t,i,r),ba(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=nr(t),s=_n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,i),e!==null&&($t(e,t,i,r),ba(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=nr(t),i=_n(n,r);i.tag=2,e!=null&&(i.callback=e),e=er(t,i,r),e!==null&&($t(e,t,r,n),ba(e,t,r))}};function vm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!lo(n,r)||!lo(i,s):!0}function Y_(t,e,n){var r=!1,i=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=mt(e)?Ur:nt.current,r=e.contextTypes,s=(r=r!=null)?Fi(t,i):ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Em(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nu.enqueueReplaceState(e,e.state,null)}function ch(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Id(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=mt(e)?Ur:nt.current,i.context=Fi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(uh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&nu.enqueueReplaceState(i,i.state,null),gl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bi(t,e){try{var n="",r=e;do n+=eI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var R0=typeof WeakMap=="function"?WeakMap:Map;function J_(t,e,n){n=_n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wl||(wl=!0,wh=r),hh(t,e)},n}function Z_(t,e,n){n=_n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hh(t,e),typeof r!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new R0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=z0.bind(null,t,e,n),e.then(t,t))}function Tm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Im(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_n(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var k0=Pn.ReactCurrentOwner,ft=!1;function at(t,e,n,r){e.child=t===null?k_(e,null,n,r):ji(e,t.child,n,r)}function Sm(t,e,n,r,i){n=n.render;var s=e.ref;return ki(e,i),r=kd(t,e,n,r,s,i),n=Pd(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(_e&&n&&gd(e),e.flags|=1,at(t,e,r,i),e.child)}function Am(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ud(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ev(t,e,s,r,i)):(t=$a(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(o,r)&&t.ref===e.ref)return Sn(t,e,i)}return e.flags|=1,t=rr(s,r),t.ref=e.ref,t.return=e,e.child=t}function ev(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(lo(s,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,Sn(t,e,i)}return dh(t,e,n,r,i)}function tv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Ti,vt),vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(Ti,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(Ti,vt),vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(Ti,vt),vt|=r;return at(t,e,i,n),e.child}function nv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dh(t,e,n,r,i){var s=mt(n)?Ur:nt.current;return s=Fi(e,s),ki(e,i),n=kd(t,e,n,r,s,i),r=Pd(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(_e&&r&&gd(e),e.flags|=1,at(t,e,n,i),e.child)}function Cm(t,e,n,r,i){if(mt(n)){var s=!0;hl(e)}else s=!1;if(ki(e,i),e.stateNode===null)ja(t,e),Y_(e,n,r),ch(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Vt(h):(h=mt(n)?Ur:nt.current,h=Fi(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Em(e,o,r,h),zn=!1;var y=e.memoizedState;o.state=y,gl(e,r,o,i),u=e.memoizedState,l!==r||y!==u||pt.current||zn?(typeof f=="function"&&(uh(e,n,f,r),u=e.memoizedState),(l=zn||vm(e,n,l,r,y,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,N_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:bt(e.type,l),o.props=h,p=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vt(u):(u=mt(n)?Ur:nt.current,u=Fi(e,u));var I=n.getDerivedStateFromProps;(f=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||y!==u)&&Em(e,o,r,u),zn=!1,y=e.memoizedState,o.state=y,gl(e,r,o,i);var x=e.memoizedState;l!==p||y!==x||pt.current||zn?(typeof I=="function"&&(uh(e,n,I,r),x=e.memoizedState),(h=zn||vm(e,n,h,r,y,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return fh(t,e,n,r,s,i)}function fh(t,e,n,r,i,s){nv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hm(e,n,!1),Sn(t,e,s);r=e.stateNode,k0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ji(e,t.child,null,s),e.child=ji(e,null,l,s)):at(t,e,l,s),e.memoizedState=r.state,i&&hm(e,n,!0),e.child}function rv(t){var e=t.stateNode;e.pendingContext?cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cm(t,e.context,!1),Sd(t,e.containerInfo)}function Rm(t,e,n,r,i){return Ui(),_d(i),e.flags|=256,at(t,e,n,r),e.child}var ph={dehydrated:null,treeContext:null,retryLane:0};function mh(t){return{baseLanes:t,cachePool:null,transitions:null}}function iv(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(we,i&1),t===null)return ah(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=su(o,r,0,null),t=Lr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mh(n),e.memoizedState=ph,t):Dd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return P0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=rr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=rr(l,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?mh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ph,r}return s=t.child,t=s.sibling,r=rr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dd(t,e){return e=su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wa(t,e,n,r){return r!==null&&_d(r),ji(e,t.child,null,n),t=Dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function P0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gc(Error(U(422))),wa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=su({mode:"visible",children:r.children},i,0,null),s=Lr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ji(e,t.child,null,o),e.child.memoizedState=mh(o),e.memoizedState=ph,s);if(!(e.mode&1))return wa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=gc(s,r,void 0),wa(t,e,o,r)}if(l=(o&t.childLanes)!==0,ft||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,In(t,i),$t(r,t,i,-1))}return Fd(),r=gc(Error(U(421))),wa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=B0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=Zn(i.nextSibling),wt=e,_e=!0,Ut=null,t!==null&&(Ct[Rt++]=fn,Ct[Rt++]=pn,Ct[Rt++]=jr,fn=t.id,pn=t.overflow,jr=e),e=Dd(e,r.children),e.flags|=4096,e)}function km(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lh(t.return,e,n)}function yc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&km(t,n,e);else if(t.tag===19)km(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yc(e,!0,n,null,s);break;case"together":yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function N0(t,e,n){switch(e.tag){case 3:rv(e),Ui();break;case 5:x_(e);break;case 1:mt(e.type)&&hl(e);break;case 4:Sd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(pl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?iv(t,e,n):(fe(we,we.current&1),t=Sn(t,e,n),t!==null?t.sibling:null);fe(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return sv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,tv(t,e,n)}return Sn(t,e,n)}var ov,gh,av,lv;ov=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gh=function(){};av=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Dr(en.current);var s=null;switch(n){case"input":i=Fc(t,i),r=Fc(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=zc(t,i),r=zc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ul)}$c(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(to.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(to.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};lv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Cs(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function x0(t,e,n){var r=e.pendingProps;switch(yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return mt(e.type)&&cl(),Ye(e),null;case 3:return r=e.stateNode,zi(),ye(pt),ye(nt),Cd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(va(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(Sh(Ut),Ut=null))),gh(t,e),Ye(e),null;case 5:Ad(e);var i=Dr(po.current);if(n=e.type,t!==null&&e.stateNode!=null)av(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Ye(e),null}if(t=Dr(en.current),va(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Jt]=e,r[ho]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Os.length;i++)me(Os[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":bp(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Up(r,s),me("invalid",r)}$c(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&_a(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&_a(r.textContent,l,t),i=["children",""+l]):to.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":ca(r),Fp(r,s,!0);break;case"textarea":ca(r),jp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ul)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=My(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jt]=e,t[ho]=r,ov(t,e,!1,!1),e.stateNode=t;e:{switch(o=Hc(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Os.length;i++)me(Os[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":bp(t,r),i=Fc(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),me("invalid",t);break;case"textarea":Up(t,r),i=zc(t,r),me("invalid",t);break;default:i=r}$c(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Uy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&by(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&no(t,u):typeof u=="number"&&no(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(to.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&nd(t,s,u,o))}switch(n){case"input":ca(t),Fp(t,r,!1);break;case"textarea":ca(t),jp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+lr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Si(t,!!r.multiple,s,!1):r.defaultValue!=null&&Si(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)lv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Dr(po.current),Dr(en.current),va(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jt]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:_a(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=e,e.stateNode=r}return Ye(e),null;case 13:if(ye(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&Et!==null&&e.mode&1&&!(e.flags&128))C_(),Ui(),e.flags|=98560,s=!1;else if(s=va(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Jt]=e}else Ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Ut!==null&&(Sh(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Le===0&&(Le=3):Fd())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return zi(),gh(t,e),t===null&&uo(e.stateNode.containerInfo),Ye(e),null;case 10:return wd(e.type._context),Ye(e),null;case 17:return mt(e.type)&&cl(),Ye(e),null;case 19:if(ye(we),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Cs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yl(t),o!==null){for(e.flags|=128,Cs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>$i&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304)}else{if(!r)if(t=yl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Cs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return Ye(e),null}else 2*ke()-s.renderingStartTime>$i&&n!==1073741824&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=we.current,fe(we,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return bd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function D0(t,e){switch(yd(e),e.tag){case 1:return mt(e.type)&&cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zi(),ye(pt),ye(nt),Cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ad(e),null;case 13:if(ye(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(we),null;case 4:return zi(),null;case 10:return wd(e.type._context),null;case 22:case 23:return bd(),null;case 24:return null;default:return null}}var Ta=!1,et=!1,V0=typeof WeakSet=="function"?WeakSet:Set,H=null;function wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function yh(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var Pm=!1;function O0(t,e){if(eh=ol,t=f_(),md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,y=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)y=p,p=I;for(;;){if(p===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(I=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(th={focusedElem:t,selectionRange:n},ol=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var D=x.memoizedProps,b=x.memoizedState,C=e.stateNode,T=C.getSnapshotBeforeUpdate(e.elementType===e.type?D:bt(e.type,D),b);C.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Ce(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return x=Pm,Pm=!1,x}function Ks(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&yh(e,n,s)}i=i.next}while(i!==r)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function _h(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uv(t){var e=t.alternate;e!==null&&(t.alternate=null,uv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jt],delete e[ho],delete e[ih],delete e[g0],delete e[y0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cv(t){return t.tag===5||t.tag===3||t.tag===4}function Nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ul));else if(r!==4&&(t=t.child,t!==null))for(vh(t,e,n),t=t.sibling;t!==null;)vh(t,e,n),t=t.sibling}function Eh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Eh(t,e,n),t=t.sibling;t!==null;)Eh(t,e,n),t=t.sibling}var Be=null,Ft=!1;function Fn(t,e,n){for(n=n.child;n!==null;)hv(t,e,n),n=n.sibling}function hv(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:et||wi(n,e);case 6:var r=Be,i=Ft;Be=null,Fn(t,e,n),Be=r,Ft=i,Be!==null&&(Ft?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Ft?(t=Be,n=n.stateNode,t.nodeType===8?cc(t.parentNode,n):t.nodeType===1&&cc(t,n),oo(t)):cc(Be,n.stateNode));break;case 4:r=Be,i=Ft,Be=n.stateNode.containerInfo,Ft=!0,Fn(t,e,n),Be=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yh(n,e,o),i=i.next}while(i!==r)}Fn(t,e,n);break;case 1:if(!et&&(wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}Fn(t,e,n);break;case 21:Fn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,Fn(t,e,n),et=r):Fn(t,e,n);break;default:Fn(t,e,n)}}function xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new V0),e.forEach(function(r){var i=$0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Ft=!1;break e;case 3:Be=l.stateNode.containerInfo,Ft=!0;break e;case 4:Be=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(Be===null)throw Error(U(160));hv(s,o,i),Be=null,Ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ce(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dv(e,t),e=e.sibling}function dv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),Qt(t),r&4){try{Ks(3,t,t.return),ru(3,t)}catch(D){Ce(t,t.return,D)}try{Ks(5,t,t.return)}catch(D){Ce(t,t.return,D)}}break;case 1:Mt(e,t),Qt(t),r&512&&n!==null&&wi(n,n.return);break;case 5:if(Mt(e,t),Qt(t),r&512&&n!==null&&wi(n,n.return),t.flags&32){var i=t.stateNode;try{no(i,"")}catch(D){Ce(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Oy(i,s),Hc(l,o);var h=Hc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Uy(i,p):f==="dangerouslySetInnerHTML"?by(i,p):f==="children"?no(i,p):nd(i,f,p,h)}switch(l){case"input":Uc(i,s);break;case"textarea":Ly(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Si(i,!!s.multiple,I,!1):y!==!!s.multiple&&(s.defaultValue!=null?Si(i,!!s.multiple,s.defaultValue,!0):Si(i,!!s.multiple,s.multiple?[]:"",!1))}i[ho]=s}catch(D){Ce(t,t.return,D)}}break;case 6:if(Mt(e,t),Qt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Ce(t,t.return,D)}}break;case 3:if(Mt(e,t),Qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oo(e.containerInfo)}catch(D){Ce(t,t.return,D)}break;case 4:Mt(e,t),Qt(t);break;case 13:Mt(e,t),Qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ld=ke())),r&4&&xm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(et=(h=et)||f,Mt(e,t),et=h):Mt(e,t),Qt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(p=H=f;H!==null;){switch(y=H,I=y.child,y.tag){case 0:case 11:case 14:case 15:Ks(4,y,y.return);break;case 1:wi(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(D){Ce(r,n,D)}}break;case 5:wi(y,y.return);break;case 22:if(y.memoizedState!==null){Vm(p);continue}}I!==null?(I.return=y,H=I):Vm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Fy("display",o))}catch(D){Ce(t,t.return,D)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(D){Ce(t,t.return,D)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Mt(e,t),Qt(t),r&4&&xm(t);break;case 21:break;default:Mt(e,t),Qt(t)}}function Qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cv(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(no(i,""),r.flags&=-33);var s=Nm(t);Eh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Nm(t);vh(t,l,o);break;default:throw Error(U(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function L0(t,e,n){H=t,fv(t)}function fv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ta;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=Ta;var h=et;if(Ta=o,(et=u)&&!h)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Om(i):u!==null?(u.return=o,H=u):Om(i);for(;s!==null;)H=s,fv(s),s=s.sibling;H=i,Ta=l,et=h}Dm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Dm(t)}}function Dm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||ru(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&oo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}et||e.flags&512&&_h(e)}catch(y){Ce(e,e.return,y)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Vm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Om(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ce(e,i,u)}}var s=e.return;try{_h(e)}catch(u){Ce(e,s,u)}break;case 5:var o=e.return;try{_h(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var M0=Math.ceil,El=Pn.ReactCurrentDispatcher,Vd=Pn.ReactCurrentOwner,Dt=Pn.ReactCurrentBatchConfig,ae=0,ze=null,Ne=null,We=0,vt=0,Ti=_r(0),Le=0,_o=null,Br=0,iu=0,Od=0,Gs=null,dt=null,Ld=0,$i=1/0,hn=null,wl=!1,wh=null,tr=null,Ia=!1,Qn=null,Tl=0,Qs=0,Th=null,za=-1,Ba=0;function lt(){return ae&6?ke():za!==-1?za:za=ke()}function nr(t){return t.mode&1?ae&2&&We!==0?We&-We:v0.transition!==null?(Ba===0&&(Ba=Yy()),Ba):(t=he,t!==0||(t=window.event,t=t===void 0?16:i_(t.type)),t):1}function $t(t,e,n,r){if(50<Qs)throw Qs=0,Th=null,Error(U(185));Do(t,n,r),(!(ae&2)||t!==ze)&&(t===ze&&(!(ae&2)&&(iu|=n),Le===4&&$n(t,We)),gt(t,r),n===1&&ae===0&&!(e.mode&1)&&($i=ke()+500,eu&&vr()))}function gt(t,e){var n=t.callbackNode;vI(t,e);var r=sl(t,t===ze?We:0);if(r===0)n!==null&&$p(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$p(n),e===1)t.tag===0?_0(Lm.bind(null,t)):I_(Lm.bind(null,t)),p0(function(){!(ae&6)&&vr()}),n=null;else{switch(Jy(r)){case 1:n=ad;break;case 4:n=Qy;break;case 16:n=il;break;case 536870912:n=Xy;break;default:n=il}n=wv(n,pv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pv(t,e){if(za=-1,Ba=0,ae&6)throw Error(U(327));var n=t.callbackNode;if(Pi()&&t.callbackNode!==n)return null;var r=sl(t,t===ze?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Il(t,r);else{e=r;var i=ae;ae|=2;var s=gv();(ze!==t||We!==e)&&(hn=null,$i=ke()+500,Or(t,e));do try{U0();break}catch(l){mv(t,l)}while(!0);Ed(),El.current=s,ae=i,Ne!==null?e=0:(ze=null,We=0,e=Le)}if(e!==0){if(e===2&&(i=Qc(t),i!==0&&(r=i,e=Ih(t,i))),e===1)throw n=_o,Or(t,0),$n(t,r),gt(t,ke()),n;if(e===6)$n(t,r);else{if(i=t.current.alternate,!(r&30)&&!b0(i)&&(e=Il(t,r),e===2&&(s=Qc(t),s!==0&&(r=s,e=Ih(t,s))),e===1))throw n=_o,Or(t,0),$n(t,r),gt(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:kr(t,dt,hn);break;case 3:if($n(t,r),(r&130023424)===r&&(e=Ld+500-ke(),10<e)){if(sl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rh(kr.bind(null,t,dt,hn),e);break}kr(t,dt,hn);break;case 4:if($n(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M0(r/1960))-r,10<r){t.timeoutHandle=rh(kr.bind(null,t,dt,hn),r);break}kr(t,dt,hn);break;case 5:kr(t,dt,hn);break;default:throw Error(U(329))}}}return gt(t,ke()),t.callbackNode===n?pv.bind(null,t):null}function Ih(t,e){var n=Gs;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=Il(t,e),t!==2&&(e=dt,dt=n,e!==null&&Sh(e)),t}function Sh(t){dt===null?dt=t:dt.push.apply(dt,t)}function b0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $n(t,e){for(e&=~Od,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function Lm(t){if(ae&6)throw Error(U(327));Pi();var e=sl(t,0);if(!(e&1))return gt(t,ke()),null;var n=Il(t,e);if(t.tag!==0&&n===2){var r=Qc(t);r!==0&&(e=r,n=Ih(t,r))}if(n===1)throw n=_o,Or(t,0),$n(t,e),gt(t,ke()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kr(t,dt,hn),gt(t,ke()),null}function Md(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&($i=ke()+500,eu&&vr())}}function $r(t){Qn!==null&&Qn.tag===0&&!(ae&6)&&Pi();var e=ae;ae|=1;var n=Dt.transition,r=he;try{if(Dt.transition=null,he=1,t)return t()}finally{he=r,Dt.transition=n,ae=e,!(ae&6)&&vr()}}function bd(){vt=Ti.current,ye(Ti)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,f0(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cl();break;case 3:zi(),ye(pt),ye(nt),Cd();break;case 5:Ad(r);break;case 4:zi();break;case 13:ye(we);break;case 19:ye(we);break;case 10:wd(r.type._context);break;case 22:case 23:bd()}n=n.return}if(ze=t,Ne=t=rr(t.current,null),We=vt=e,Le=0,_o=null,Od=iu=Br=0,dt=Gs=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xr=null}return t}function mv(t,e){do{var n=Ne;try{if(Ed(),Fa.current=vl,_l){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_l=!1}if(zr=0,Ue=Ve=Ie=null,qs=!1,mo=0,Vd.current=null,n===null||n.return===null){Le=1,_o=e,Ne=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var I=Tm(o);if(I!==null){I.flags&=-257,Im(I,o,l,s,e),I.mode&1&&wm(s,h,e),e=I,u=h;var x=e.updateQueue;if(x===null){var D=new Set;D.add(u),e.updateQueue=D}else x.add(u);break e}else{if(!(e&1)){wm(s,h,e),Fd();break e}u=Error(U(426))}}else if(_e&&l.mode&1){var b=Tm(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Im(b,o,l,s,e),_d(Bi(u,l));break e}}s=u=Bi(u,l),Le!==4&&(Le=2),Gs===null?Gs=[s]:Gs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var C=J_(s,u,e);mm(s,C);break e;case 1:l=u;var T=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(tr===null||!tr.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Z_(s,l,e);mm(s,O);break e}}s=s.return}while(s!==null)}_v(n)}catch(P){e=P,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function gv(){var t=El.current;return El.current=vl,t===null?vl:t}function Fd(){(Le===0||Le===3||Le===2)&&(Le=4),ze===null||!(Br&268435455)&&!(iu&268435455)||$n(ze,We)}function Il(t,e){var n=ae;ae|=2;var r=gv();(ze!==t||We!==e)&&(hn=null,Or(t,e));do try{F0();break}catch(i){mv(t,i)}while(!0);if(Ed(),ae=n,El.current=r,Ne!==null)throw Error(U(261));return ze=null,We=0,Le}function F0(){for(;Ne!==null;)yv(Ne)}function U0(){for(;Ne!==null&&!cI();)yv(Ne)}function yv(t){var e=Ev(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?_v(t):Ne=e,Vd.current=null}function _v(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=D0(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ne=null;return}}else if(n=x0(n,e,vt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Le===0&&(Le=5)}function kr(t,e,n){var r=he,i=Dt.transition;try{Dt.transition=null,he=1,j0(t,e,n,r)}finally{Dt.transition=i,he=r}return null}function j0(t,e,n,r){do Pi();while(Qn!==null);if(ae&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(EI(t,s),t===ze&&(Ne=ze=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ia||(Ia=!0,wv(il,function(){return Pi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=he;he=1;var l=ae;ae|=4,Vd.current=null,O0(t,n),dv(n,t),o0(th),ol=!!eh,th=eh=null,t.current=n,L0(n),hI(),ae=l,he=o,Dt.transition=s}else t.current=n;if(Ia&&(Ia=!1,Qn=t,Tl=i),s=t.pendingLanes,s===0&&(tr=null),pI(n.stateNode),gt(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wl)throw wl=!1,t=wh,wh=null,t;return Tl&1&&t.tag!==0&&Pi(),s=t.pendingLanes,s&1?t===Th?Qs++:(Qs=0,Th=t):Qs=0,vr(),null}function Pi(){if(Qn!==null){var t=Jy(Tl),e=Dt.transition,n=he;try{if(Dt.transition=null,he=16>t?16:t,Qn===null)var r=!1;else{if(t=Qn,Qn=null,Tl=0,ae&6)throw Error(U(331));var i=ae;for(ae|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Ks(8,f,s)}var p=f.child;if(p!==null)p.return=f,H=p;else for(;H!==null;){f=H;var y=f.sibling,I=f.return;if(uv(f),f===h){H=null;break}if(y!==null){y.return=I,H=y;break}H=I}}}var x=s.alternate;if(x!==null){var D=x.child;if(D!==null){x.child=null;do{var b=D.sibling;D.sibling=null,D=b}while(D!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ks(9,s,s.return)}var C=s.sibling;if(C!==null){C.return=s.return,H=C;break e}H=s.return}}var T=t.current;for(H=T;H!==null;){o=H;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,H=R;else e:for(o=T;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ru(9,l)}}catch(P){Ce(l,l.return,P)}if(l===o){H=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,H=O;break e}H=l.return}}if(ae=i,vr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ql,t)}catch{}r=!0}return r}finally{he=n,Dt.transition=e}}return!1}function Mm(t,e,n){e=Bi(n,e),e=J_(t,e,1),t=er(t,e,1),e=lt(),t!==null&&(Do(t,1,e),gt(t,e))}function Ce(t,e,n){if(t.tag===3)Mm(t,t,n);else for(;e!==null;){if(e.tag===3){Mm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tr===null||!tr.has(r))){t=Bi(n,t),t=Z_(e,t,1),e=er(e,t,1),t=lt(),e!==null&&(Do(e,1,t),gt(e,t));break}}e=e.return}}function z0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(We&n)===n&&(Le===4||Le===3&&(We&130023424)===We&&500>ke()-Ld?Or(t,0):Od|=n),gt(t,e)}function vv(t,e){e===0&&(t.mode&1?(e=fa,fa<<=1,!(fa&130023424)&&(fa=4194304)):e=1);var n=lt();t=In(t,e),t!==null&&(Do(t,e,n),gt(t,n))}function B0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vv(t,n)}function $0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),vv(t,n)}var Ev;Ev=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,N0(t,e,n);ft=!!(t.flags&131072)}else ft=!1,_e&&e.flags&1048576&&S_(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ja(t,e),t=e.pendingProps;var i=Fi(e,nt.current);ki(e,n),i=kd(null,e,r,t,i,n);var s=Pd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,hl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Id(e),i.updater=nu,e.stateNode=i,i._reactInternals=e,ch(e,r,t,n),e=fh(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&gd(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ja(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=W0(r),t=bt(r,t),i){case 0:e=dh(null,e,r,t,n);break e;case 1:e=Cm(null,e,r,t,n);break e;case 11:e=Sm(null,e,r,t,n);break e;case 14:e=Am(null,e,r,bt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),dh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Cm(t,e,r,i,n);case 3:e:{if(rv(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,N_(t,e),gl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bi(Error(U(423)),e),e=Rm(t,e,r,n,i);break e}else if(r!==i){i=Bi(Error(U(424)),e),e=Rm(t,e,r,n,i);break e}else for(Et=Zn(e.stateNode.containerInfo.firstChild),wt=e,_e=!0,Ut=null,n=k_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ui(),r===i){e=Sn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return x_(e),t===null&&ah(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,nh(r,i)?o=null:s!==null&&nh(r,s)&&(e.flags|=32),nv(t,e),at(t,e,o,n),e.child;case 6:return t===null&&ah(e),null;case 13:return iv(t,e,n);case 4:return Sd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ji(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Sm(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(pl,r._currentValue),r._currentValue=o,s!==null)if(Wt(s.value,o)){if(s.children===i.children&&!pt.current){e=Sn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=_n(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),lh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),lh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ki(e,n),i=Vt(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=bt(r,e.pendingProps),i=bt(r.type,i),Am(t,e,r,i,n);case 15:return ev(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),ja(t,e),e.tag=1,mt(r)?(t=!0,hl(e)):t=!1,ki(e,n),Y_(e,r,i),ch(e,r,i,n),fh(null,e,r,!0,t,n);case 19:return sv(t,e,n);case 22:return tv(t,e,n)}throw Error(U(156,e.tag))};function wv(t,e){return Gy(t,e)}function H0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new H0(t,e,n,r)}function Ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function W0(t){if(typeof t=="function")return Ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===id)return 11;if(t===sd)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $a(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ud(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case di:return Lr(n.children,i,s,e);case rd:o=8,i|=8;break;case Oc:return t=xt(12,n,e,i|2),t.elementType=Oc,t.lanes=s,t;case Lc:return t=xt(13,n,e,i),t.elementType=Lc,t.lanes=s,t;case Mc:return t=xt(19,n,e,i),t.elementType=Mc,t.lanes=s,t;case xy:return su(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Py:o=10;break e;case Ny:o=9;break e;case id:o=11;break e;case sd:o=14;break e;case jn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Lr(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function su(t,e,n,r){return t=xt(22,t,r,e),t.elementType=xy,t.lanes=n,t.stateNode={isHidden:!1},t}function _c(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function vc(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function q0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zu(0),this.expirationTimes=Zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jd(t,e,n,r,i,s,o,l,u){return t=new q0(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(s),t}function K0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Tv(t){if(!t)return ur;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(mt(n))return T_(t,n,e)}return e}function Iv(t,e,n,r,i,s,o,l,u){return t=jd(n,r,!0,t,i,s,o,l,u),t.context=Tv(null),n=t.current,r=lt(),i=nr(n),s=_n(r,i),s.callback=e??null,er(n,s,i),t.current.lanes=i,Do(t,i,r),gt(t,r),t}function ou(t,e,n,r){var i=e.current,s=lt(),o=nr(i);return n=Tv(n),e.context===null?e.context=n:e.pendingContext=n,e=_n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=er(i,e,o),t!==null&&($t(t,i,o,s),ba(t,i,o)),o}function Sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zd(t,e){bm(t,e),(t=t.alternate)&&bm(t,e)}function G0(){return null}var Sv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bd(t){this._internalRoot=t}au.prototype.render=Bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));ou(t,e,null,null)};au.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){ou(null,t,null,null)}),e[Tn]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=t_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bn.length&&e!==0&&e<Bn[n].priority;n++);Bn.splice(n,0,t),n===0&&r_(t)}};function $d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function Q0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Sl(o);s.call(h)}}var o=Iv(e,r,t,0,null,!1,!1,"",Fm);return t._reactRootContainer=o,t[Tn]=o.current,uo(t.nodeType===8?t.parentNode:t),$r(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Sl(u);l.call(h)}}var u=jd(t,0,!1,null,null,!1,!1,"",Fm);return t._reactRootContainer=u,t[Tn]=u.current,uo(t.nodeType===8?t.parentNode:t),$r(function(){ou(e,u,n,r)}),u}function uu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Sl(o);l.call(u)}}ou(e,o,t,i)}else o=Q0(n,e,t,i,r);return Sl(o)}Zy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vs(e.pendingLanes);n!==0&&(ld(e,n|1),gt(e,ke()),!(ae&6)&&($i=ke()+500,vr()))}break;case 13:$r(function(){var r=In(t,1);if(r!==null){var i=lt();$t(r,t,1,i)}}),zd(t,1)}};ud=function(t){if(t.tag===13){var e=In(t,134217728);if(e!==null){var n=lt();$t(e,t,134217728,n)}zd(t,134217728)}};e_=function(t){if(t.tag===13){var e=nr(t),n=In(t,e);if(n!==null){var r=lt();$t(n,t,e,r)}zd(t,e)}};t_=function(){return he};n_=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};qc=function(t,e,n){switch(e){case"input":if(Uc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zl(r);if(!i)throw Error(U(90));Vy(r),Uc(r,i)}}}break;case"textarea":Ly(t,n);break;case"select":e=n.value,e!=null&&Si(t,!!n.multiple,e,!1)}};By=Md;$y=$r;var X0={usingClientEntryPoint:!1,Events:[Oo,gi,Zl,jy,zy,Md]},Rs={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Y0={bundleType:Rs.bundleType,version:Rs.version,rendererPackageName:Rs.rendererPackageName,rendererConfig:Rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qy(t),t===null?null:t.stateNode},findFiberByHostInstance:Rs.findFiberByHostInstance||G0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{Ql=Sa.inject(Y0),Zt=Sa}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(e))throw Error(U(200));return K0(t,e,null,n)};It.createRoot=function(t,e){if(!$d(t))throw Error(U(299));var n=!1,r="",i=Sv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jd(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,uo(t.nodeType===8?t.parentNode:t),new Bd(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=qy(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return $r(t)};It.hydrate=function(t,e,n){if(!lu(e))throw Error(U(200));return uu(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!$d(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Sv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Iv(e,null,t,1,n??null,i,!1,s,o),t[Tn]=e.current,uo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new au(e)};It.render=function(t,e,n){if(!lu(e))throw Error(U(200));return uu(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!lu(t))throw Error(U(40));return t._reactRootContainer?($r(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};It.unstable_batchedUpdates=Md;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return uu(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function Av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Av)}catch(t){console.error(t)}}Av(),Ay.exports=It;var J0=Ay.exports,Um=J0;Dc.createRoot=Um.createRoot,Dc.hydrateRoot=Um.hydrateRoot;const Z0=()=>{};var jm={};/**
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
 */const Cv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Rv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,I=h&63;u||(I=64,o||(y=64)),r.push(n[f],n[p],n[y],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new tS;const y=s<<2|l>>4;if(r.push(y),h!==64){const I=l<<4&240|h>>2;if(r.push(I),p!==64){const x=h<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nS=function(t){const e=Cv(t);return Rv.encodeByteArray(e,!0)},Al=function(t){return nS(t).replace(/\./g,"")},kv=function(t){try{return Rv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iS=()=>rS().__FIREBASE_DEFAULTS__,sS=()=>{if(typeof process>"u"||typeof jm>"u")return;const t=jm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kv(t[1]);return e&&JSON.parse(e)},cu=()=>{try{return Z0()||iS()||sS()||oS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pv=t=>{var e,n;return(n=(e=cu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},aS=t=>{const e=Pv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Nv=()=>{var t;return(t=cu())==null?void 0:t.config},xv=t=>{var e;return(e=cu())==null?void 0:e[`_${t}`]};/**
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
 */class lS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function uS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Al(JSON.stringify(n)),Al(JSON.stringify(o)),""].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function hS(){var e;const t=(e=cu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mS(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gS(){return!hS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yS(){try{return typeof indexedDB=="object"}catch{return!1}}function _S(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const vS="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vS,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ES(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Nn(i,l,r)}}function ES(t,e){return t.replace(wS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wS=/\{\$([^}]+)}/g;function TS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(zm(s)&&zm(o)){if(!Hr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zm(t){return t!==null&&typeof t=="object"}/**
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
 */function bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function IS(t,e){const n=new SS(t,e);return n.subscribe.bind(n)}class SS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ec),i.error===void 0&&(i.error=Ec),i.complete===void 0&&(i.complete=Ec);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
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
 */function yt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Fo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dv(t){return(await fetch(t,{credentials:"include"})).ok}class Wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pr="[DEFAULT]";/**
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
 */class CS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kS(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RS(t){return t===Pr?void 0:t}function kS(t){return t.instantiationMode==="EAGER"}/**
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
 */class PS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const NS={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},xS=re.INFO,DS={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},VS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hd{constructor(e){this.name=e,this._logLevel=xS,this._logHandler=VS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const OS=(t,e)=>e.some(n=>t instanceof n);let Bm,$m;function LS(){return Bm||(Bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MS(){return $m||($m=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vv=new WeakMap,Ah=new WeakMap,Ov=new WeakMap,wc=new WeakMap,Wd=new WeakMap;function bS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vv.set(n,t)}).catch(()=>{}),Wd.set(e,t),e}function FS(t){if(Ah.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ah.set(t,e)}let Ch={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ah.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ov.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function US(t){Ch=t(Ch)}function jS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tc(this),e,...n);return Ov.set(r,e.sort?e.sort():[e]),ir(r)}:MS().includes(t)?function(...e){return t.apply(Tc(this),e),ir(Vv.get(this))}:function(...e){return ir(t.apply(Tc(this),e))}}function zS(t){return typeof t=="function"?jS(t):(t instanceof IDBTransaction&&FS(t),OS(t,LS())?new Proxy(t,Ch):t)}function ir(t){if(t instanceof IDBRequest)return bS(t);if(wc.has(t))return wc.get(t);const e=zS(t);return e!==t&&(wc.set(t,e),Wd.set(e,t)),e}const Tc=t=>Wd.get(t);function BS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ir(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ir(o.result),u.oldVersion,u.newVersion,ir(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const $S=["get","getKey","getAll","getAllKeys","count"],HS=["put","add","delete","clear"],Ic=new Map;function Hm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ic.get(e))return Ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=HS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$S.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Ic.set(e,s),s}US(t=>({...t,get:(e,n,r)=>Hm(e,n)||t.get(e,n,r),has:(e,n)=>!!Hm(e,n)||t.has(e,n)}));/**
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
 */class WS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rh="@firebase/app",Wm="0.14.13";/**
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
 */const An=new Hd("@firebase/app"),KS="@firebase/app-compat",GS="@firebase/analytics-compat",QS="@firebase/analytics",XS="@firebase/app-check-compat",YS="@firebase/app-check",JS="@firebase/auth",ZS="@firebase/auth-compat",eA="@firebase/database",tA="@firebase/data-connect",nA="@firebase/database-compat",rA="@firebase/functions",iA="@firebase/functions-compat",sA="@firebase/installations",oA="@firebase/installations-compat",aA="@firebase/messaging",lA="@firebase/messaging-compat",uA="@firebase/performance",cA="@firebase/performance-compat",hA="@firebase/remote-config",dA="@firebase/remote-config-compat",fA="@firebase/storage",pA="@firebase/storage-compat",mA="@firebase/firestore",gA="@firebase/ai",yA="@firebase/firestore-compat",_A="firebase",vA="12.14.0";/**
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
 */const kh="[DEFAULT]",EA={[Rh]:"fire-core",[KS]:"fire-core-compat",[QS]:"fire-analytics",[GS]:"fire-analytics-compat",[YS]:"fire-app-check",[XS]:"fire-app-check-compat",[JS]:"fire-auth",[ZS]:"fire-auth-compat",[eA]:"fire-rtdb",[tA]:"fire-data-connect",[nA]:"fire-rtdb-compat",[rA]:"fire-fn",[iA]:"fire-fn-compat",[sA]:"fire-iid",[oA]:"fire-iid-compat",[aA]:"fire-fcm",[lA]:"fire-fcm-compat",[uA]:"fire-perf",[cA]:"fire-perf-compat",[hA]:"fire-rc",[dA]:"fire-rc-compat",[fA]:"fire-gcs",[pA]:"fire-gcs-compat",[mA]:"fire-fst",[yA]:"fire-fst-compat",[gA]:"fire-vertex","fire-js":"fire-js",[_A]:"fire-js-all"};/**
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
 */const Cl=new Map,wA=new Map,Ph=new Map;function qm(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hi(t){const e=t.name;if(Ph.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Ph.set(e,t);for(const n of Cl.values())qm(n,t);for(const n of wA.values())qm(n,t);return!0}function qd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const TA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sr=new Mo("app","Firebase",TA);/**
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
 */class IA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ji=vA;function Lv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:kh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw sr.create("bad-app-name",{appName:String(i)});if(n||(n=Nv()),!n)throw sr.create("no-options");const s=Cl.get(i);if(s){if(Hr(n,s.options)&&Hr(r,s.config))return s;throw sr.create("duplicate-app",{appName:i})}const o=new PS(i);for(const u of Ph.values())o.addComponent(u);const l=new IA(n,r,o);return Cl.set(i,l),l}function Mv(t=kh){const e=Cl.get(t);if(!e&&t===kh&&Nv())return Lv();if(!e)throw sr.create("no-app",{appName:t});return e}function or(t,e,n){let r=EA[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(o.join(" "));return}Hi(new Wr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const SA="firebase-heartbeat-database",AA=1,vo="firebase-heartbeat-store";let Sc=null;function bv(){return Sc||(Sc=BS(SA,AA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(vo)}catch(n){console.warn(n)}}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),Sc}async function CA(t){try{const n=(await bv()).transaction(vo),r=await n.objectStore(vo).get(Fv(t));return await n.done,r}catch(e){if(e instanceof Nn)An.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(n.message)}}}async function Km(t,e){try{const r=(await bv()).transaction(vo,"readwrite");await r.objectStore(vo).put(e,Fv(t)),await r.done}catch(n){if(n instanceof Nn)An.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(r.message)}}}function Fv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RA=1024,kA=30;class PA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>kA){const o=DA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){An.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gm(),{heartbeatsToSend:r,unsentEntries:i}=NA(this._heartbeatsCache.heartbeats),s=Al(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return An.warn(n),""}}}function Gm(){return new Date().toISOString().substring(0,10)}function NA(t,e=RA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yS()?_S().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Km(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Km(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qm(t){return Al(JSON.stringify({version:2,heartbeats:t})).length}function DA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function VA(t){Hi(new Wr("platform-logger",e=>new WS(e),"PRIVATE")),Hi(new Wr("heartbeat",e=>new PA(e),"PRIVATE")),or(Rh,Wm,t),or(Rh,Wm,"esm2020"),or("fire-js","")}VA("");var OA="firebase",LA="12.14.0";/**
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
 */or(OA,LA,"app");function Uv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const MA=Uv,jv=new Mo("auth","Firebase",Uv());/**
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
 */const Rl=new Hd("@firebase/auth");function bA(t,...e){Rl.logLevel<=re.WARN&&Rl.warn(`Auth (${Ji}): ${t}`,...e)}function Ha(t,...e){Rl.logLevel<=re.ERROR&&Rl.error(`Auth (${Ji}): ${t}`,...e)}/**
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
 */function qt(t,...e){throw Kd(t,...e)}function tn(t,...e){return Kd(t,...e)}function zv(t,e,n){const r={...MA(),[e]:n};return new Mo("auth","Firebase",r).create(e,{appName:t.name})}function vn(t){return zv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jv.create(t,...e)}function G(t,e,...n){if(!t)throw Kd(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ha(e),new Error(e)}function Cn(t,e){t||mn(e)}/**
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
 */function Nh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function FA(){return Xm()==="http:"||Xm()==="https:"}function Xm(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function UA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FA()||fS()||"connection"in navigator)?navigator.onLine:!0}function jA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=cS()||pS()}get(){return UA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gd(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Bv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const BA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$A=new Uo(3e4,6e4);function Er(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function wr(t,e,n,r,i={}){return $v(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=bo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return dS()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Fo(t.emulatorConfig.host)&&(h.credentials="include"),Bv.fetch()(await Hv(t,t.config.apiHost,n,l),h)})}async function $v(t,e,n){t._canInitEmulator=!1;const r={...zA,...e};try{const i=new WA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Aa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Aa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Aa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Aa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zv(t,f,h);qt(t,f)}}catch(i){if(i instanceof Nn)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function jo(t,e,n,r,i={}){const s=await wr(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Hv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Gd(t.config,i):`${t.config.apiScheme}://${i}`;return BA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function HA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),$A.get())})}}function Aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tn(t,e,r);return i.customData._tokenResponse=n,i}function Ym(t){return t!==void 0&&t.enterprise!==void 0}class qA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return HA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function KA(t,e){return wr(t,"GET","/v2/recaptchaConfig",Er(t,e))}/**
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
 */async function GA(t,e){return wr(t,"POST","/v1/accounts:delete",e)}async function kl(t,e){return wr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QA(t,e=!1){const n=yt(t),r=await n.getIdToken(e),i=Qd(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xs(Ac(i.auth_time)),issuedAtTime:Xs(Ac(i.iat)),expirationTime:Xs(Ac(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ac(t){return Number(t)*1e3}function Qd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ha("JWT malformed, contained fewer than 3 sections"),null;try{const i=kv(n);return i?JSON.parse(i):(Ha("Failed to decode base64 JWT payload"),null)}catch(i){return Ha("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jm(t){const e=Qd(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Eo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&XA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class YA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Eo(t,kl(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?Wv(i.providerUserInfo):[],o=ZA(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new xh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function JA(t){const e=yt(t);await Pl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Wv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function eC(t,e){const n=await $v(t,{},async()=>{const r=bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Hv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Fo(t.emulatorConfig.host)&&(u.credentials="include"),Bv.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tC(t,e){return wr(t,"POST","/v2/accounts:revokeToken",Er(t,e))}/**
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
 */class Ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Jm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await eC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ni;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ni,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Un(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new YA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Eo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QA(this,e)}reload(){return JA(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await Eo(this,GA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:y,isAnonymous:I,providerData:x,stsTokenManager:D}=n;G(p&&D,e,"internal-error");const b=Ni.fromJSON(this.name,D);G(typeof p=="string",e,"internal-error"),Un(r,e.name),Un(i,e.name),G(typeof y=="boolean",e,"internal-error"),G(typeof I=="boolean",e,"internal-error"),Un(s,e.name),Un(o,e.name),Un(l,e.name),Un(u,e.name),Un(h,e.name),Un(f,e.name);const C=new jt({uid:p,auth:e,email:i,emailVerified:y,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:h,lastLoginAt:f});return x&&Array.isArray(x)&&(C.providerData=x.map(T=>({...T}))),u&&(C._redirectEventId=u),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ni;i.updateFromServerResponse(n);const s=new jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Pl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Wv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ni;l.updateFromIdToken(r);const u=new jt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new xh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Zm=new Map;function gn(t){Cn(t instanceof Function,"Expected a class definition");let e=Zm.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zm.set(t,e),e)}/**
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
 */class qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qv.type="NONE";const eg=qv;/**
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
 */function Wa(t,e,n){return`firebase:${t}:${e}:${n}`}class xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Wa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Wa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await kl(this.auth,{idToken:e}).catch(()=>{});return n?jt._fromGetAccountInfoResponse(this.auth,n,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xi(gn(eg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||gn(eg);const o=Wa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const y=await kl(e,{idToken:f}).catch(()=>{});if(!y)break;p=await jt._fromGetAccountInfoResponse(e,y,f)}else p=jt._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new xi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new xi(s,e,r))}}/**
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
 */function tg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jv(e))return"Blackberry";if(Zv(e))return"Webos";if(Gv(e))return"Safari";if((e.includes("chrome/")||Qv(e))&&!e.includes("edge/"))return"Chrome";if(Yv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kv(t=rt()){return/firefox\//i.test(t)}function Gv(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qv(t=rt()){return/crios\//i.test(t)}function Xv(t=rt()){return/iemobile/i.test(t)}function Yv(t=rt()){return/android/i.test(t)}function Jv(t=rt()){return/blackberry/i.test(t)}function Zv(t=rt()){return/webos/i.test(t)}function Xd(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nC(t=rt()){var e;return Xd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function rC(){return mS()&&document.documentMode===10}function eE(t=rt()){return Xd(t)||Yv(t)||Zv(t)||Jv(t)||/windows phone/i.test(t)||Xv(t)}/**
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
 */function tE(t,e=[]){let n;switch(t){case"Browser":n=tg(rt());break;case"Worker":n=`${tg(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ji}/${r}`}/**
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
 */class iC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function sC(t,e={}){return wr(t,"GET","/v2/passwordPolicy",Er(t,e))}/**
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
 */const oC=6;class aC{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??oC,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class lC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ng(this),this.idTokenSubscription=new ng(this),this.beforeStateQueue=new iC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await xi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kl(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kt(this.app))return Promise.reject(vn(this));const n=e?yt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sC(this),n=new aC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await xi.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&bA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Jr(t){return yt(t)}class ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=IS(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uC(t){hu=t}function nE(t){return hu.loadJS(t)}function cC(){return hu.recaptchaEnterpriseScript}function hC(){return hu.gapiScript}function dC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class fC{constructor(){this.enterprise=new pC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class pC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const mC="recaptcha-enterprise",rE="NO_RECAPTCHA";class gC{constructor(e){this.type=mC,this.auth=Jr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{KA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new qA(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Ym(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(rE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Ym(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=cC();u.length!==0&&(u+=l),nE(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function rg(t,e,n,r=!1,i=!1){const s=new gC(t);let o;if(i)o=rE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Dh(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await rg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await rg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function yC(t,e){const n=qd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Hr(s,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function _C(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vC(t,e,n){const r=Jr(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=iE(e),{host:o,port:l}=EC(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(Hr(h,r.config.emulator)&&Hr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Fo(o)?Dv(`${s}//${o}${u}`):wC()}function iE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function EC(t){const e=iE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ig(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ig(o)}}}function ig(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function TC(t,e){return wr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function IC(t,e){return jo(t,"POST","/v1/accounts:signInWithPassword",Er(t,e))}/**
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
 */async function SC(t,e){return jo(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}async function AC(t,e){return jo(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}/**
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
 */class wo extends Yd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new wo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dh(e,n,"signInWithPassword",IC);case"emailLink":return SC(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dh(e,r,"signUpPassword",TC);case"emailLink":return AC(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Di(t,e){return jo(t,"POST","/v1/accounts:signInWithIdp",Er(t,e))}/**
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
 */const CC="http://localhost";class qr extends Yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Di(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Di(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Di(e,n)}buildRequest(){const e={requestUri:CC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bo(n)}return e}}/**
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
 */function RC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kC(t){const e=Ls(Ms(t)).link,n=e?Ls(Ms(e)).deep_link_id:null,r=Ls(Ms(t)).deep_link_id;return(r?Ls(Ms(r)).link:null)||r||n||e||t}class Jd{constructor(e){const n=Ls(Ms(e)),r=n.apiKey??null,i=n.oobCode??null,s=RC(n.mode??null);G(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=kC(e);try{return new Jd(n)}catch{return null}}}/**
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
 */class Zi{constructor(){this.providerId=Zi.PROVIDER_ID}static credential(e,n){return wo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jd.parseLink(n);return G(r,"argument-error"),wo._fromEmailAndCode(e,r.code,r.tenantId)}}Zi.PROVIDER_ID="password";Zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class sE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zo extends sE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Hn extends zo{constructor(){super("facebook.com")}static credential(e){return qr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
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
 */class Wn extends zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
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
 */class qn extends zo{constructor(){super("github.com")}static credential(e){return qr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
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
 */class Kn extends zo{constructor(){super("twitter.com")}static credential(e,n){return qr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
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
 */async function PC(t,e){return jo(t,"POST","/v1/accounts:signUp",Er(t,e))}/**
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
 */class Kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jt._fromIdTokenResponse(e,r,i),o=sg(r);return new Kr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sg(r);return new Kr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Nl extends Nn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Nl(e,n,r,i)}}function oE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nl._fromErrorAndOperation(t,s,e,r):s})}async function NC(t,e,n=!1){const r=await Eo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Kr._forOperation(t,"link",r)}/**
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
 */async function xC(t,e,n=!1){const{auth:r}=t;if(kt(r.app))return Promise.reject(vn(r));const i="reauthenticate";try{const s=await Eo(t,oE(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Qd(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),Kr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
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
 */async function aE(t,e,n=!1){if(kt(t.app))return Promise.reject(vn(t));const r="signIn",i=await oE(t,r,e),s=await Kr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function DC(t,e){return aE(Jr(t),e)}/**
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
 */async function lE(t){const e=Jr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function VC(t,e,n){if(kt(t.app))return Promise.reject(vn(t));const r=Jr(t),o=await Dh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",PC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&lE(t),u}),l=await Kr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function OC(t,e,n){return kt(t.app)?Promise.reject(vn(t)):DC(yt(t),Zi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lE(t),r})}function LC(t,e,n,r){return yt(t).onIdTokenChanged(e,n,r)}function MC(t,e,n){return yt(t).beforeAuthStateChanged(e,n)}function bC(t,e,n,r){return yt(t).onAuthStateChanged(e,n,r)}function FC(t){return yt(t).signOut()}const xl="__sak";/**
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
 */class uE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xl,"1"),this.storage.removeItem(xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const UC=1e3,jC=10;class cE extends uE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cE.type="LOCAL";const zC=cE;/**
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
 */class hE extends uE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hE.type="SESSION";const dE=hE;/**
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
 */function BC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class du{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new du(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await BC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}du.receivers=[];/**
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
 */function Zd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $C{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Zd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nn(){return window}function HC(t){nn().location.href=t}/**
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
 */function fE(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function WC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function KC(){return fE()?self:null}/**
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
 */const pE="firebaseLocalStorageDb",GC=1,Dl="firebaseLocalStorage",mE="fbase_key";class Bo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fu(t,e){return t.transaction([Dl],e?"readwrite":"readonly").objectStore(Dl)}function QC(){const t=indexedDB.deleteDatabase(pE);return new Bo(t).toPromise()}function gE(){const t=indexedDB.open(pE,GC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dl,{keyPath:mE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dl)?e(r):(r.close(),await QC(),e(await gE()))})})}async function og(t,e,n){const r=fu(t,!0).put({[mE]:e,value:n});return new Bo(r).toPromise()}async function XC(t,e){const n=fu(t,!1).get(e),r=await new Bo(n).toPromise();return r===void 0?null:r.value}function ag(t,e){const n=fu(t,!0).delete(e);return new Bo(n).toPromise()}const YC=800,JC=3;class yE{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=gE(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JC)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return fE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=du._getInstance(KC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await WC(),!this.activeServiceWorker)return;this.sender=new $C(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await og(e,xl,"1"),await ag(e,xl)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>og(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ag(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fu(i,!1).getAll();return new Bo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yE.type="LOCAL";const ZC=yE;new Uo(3e4,6e4);/**
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
 */function eR(t,e){return e?gn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ef extends Yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tR(t){return aE(t.auth,new ef(t),t.bypassAuthState)}function nR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),xC(n,new ef(t),t.bypassAuthState)}async function rR(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),NC(n,new ef(t),t.bypassAuthState)}/**
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
 */class _E{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tR;case"linkViaPopup":case"linkViaRedirect":return rR;case"reauthViaPopup":case"reauthViaRedirect":return nR;default:qt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const iR=new Uo(2e3,1e4);class Ii extends _E{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ii.currentPopupAction&&Ii.currentPopupAction.cancel(),Ii.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ii.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iR.get())};e()}}Ii.currentPopupAction=null;/**
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
 */const sR="pendingRedirect",qa=new Map;class oR extends _E{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qa.get(this.auth._key());if(!e){try{const r=await aR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qa.set(this.auth._key(),e)}return this.bypassAuthState||qa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aR(t,e){const n=cR(e),r=uR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function lR(t,e){qa.set(t._key(),e)}function uR(t){return gn(t._redirectPersistence)}function cR(t){return Wa(sR,t.config.apiKey,t.name)}async function hR(t,e,n=!1){if(kt(t.app))return Promise.reject(vn(t));const r=Jr(t),i=eR(r,e),o=await new oR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const dR=10*60*1e3;class fR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dR&&this.cachedEventUids.clear(),this.cachedEventUids.has(lg(e))}saveEventToCache(e){this.cachedEventUids.add(lg(e)),this.lastProcessedEventTime=Date.now()}}function lg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vE(t);default:return!1}}/**
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
 */async function mR(t,e={}){return wr(t,"GET","/v1/projects",e)}/**
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
 */const gR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yR=/^https?/;async function _R(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mR(t);for(const n of e)try{if(vR(n))return}catch{}qt(t,"unauthorized-domain")}function vR(t){const e=Nh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yR.test(n))return!1;if(gR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ER=new Uo(3e4,6e4);function ug(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wR(t){return new Promise((e,n)=>{var i,s,o;function r(){ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ug(),n(tn(t,"network-request-failed"))},timeout:ER.get()})}if((s=(i=nn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=nn().gapi)!=null&&o.load)r();else{const l=dC("iframefcb");return nn()[l]=()=>{gapi.load?r():n(tn(t,"network-request-failed"))},nE(`${hC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ka=null,e})}let Ka=null;function TR(t){return Ka=Ka||wR(t),Ka}/**
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
 */const IR=new Uo(5e3,15e3),SR="__/auth/iframe",AR="emulator/auth/iframe",CR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kR(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gd(e,AR):`https://${t.config.authDomain}/${SR}`,r={apiKey:e.apiKey,appName:t.name,v:Ji},i=RR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${bo(r).slice(1)}`}async function PR(t){const e=await TR(t),n=nn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:kR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=nn().setTimeout(()=>{s(o)},IR.get());function u(){nn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const NR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xR=500,DR=600,VR="_blank",OR="http://localhost";class cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LR(t,e,n,r=xR,i=DR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...NR,width:r.toString(),height:i.toString(),top:s,left:o},h=rt().toLowerCase();n&&(l=Qv(h)?VR:n),Kv(h)&&(e=e||OR,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[I,x])=>`${y}${I}=${x},`,"");if(nC(h)&&l!=="_self")return MR(e||"",l),new cg(null);const p=window.open(e||"",l,f);G(p,t,"popup-blocked");try{p.focus()}catch{}return new cg(p)}function MR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bR="__/auth/handler",FR="emulator/auth/handler",UR=encodeURIComponent("fac");async function hg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ji,eventId:i};if(e instanceof sE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof zo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${UR}=${encodeURIComponent(u)}`:"";return`${jR(t)}?${bo(l).slice(1)}${h}`}function jR({config:t}){return t.emulator?Gd(t,FR):`https://${t.authDomain}/${bR}`}/**
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
 */const Cc="webStorageSupport";class zR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dE,this._completeRedirectFn=hR,this._overrideRedirectResult=lR}async _openPopup(e,n,r,i){var o;Cn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await hg(e,n,r,Nh(),i);return LR(e,s,Zd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await hg(e,n,r,Nh(),i);return HC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PR(e),r=new fR(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cc,{type:Cc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Cc];s!==void 0&&n(!!s),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_R(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eE()||Gv()||Xd()}}const BR=zR;var dg="@firebase/auth",fg="1.13.2";/**
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
 */class $R{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function HR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WR(t){Hi(new Wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tE(t)},h=new lC(r,i,s,u);return _C(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hi(new Wr("auth-internal",e=>{const n=Jr(e.getProvider("auth").getImmediate());return(r=>new $R(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(dg,fg,HR(t)),or(dg,fg,"esm2020")}/**
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
 */const qR=5*60,KR=xv("authIdTokenMaxAge")||qR;let pg=null;const GR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KR)return;const i=n==null?void 0:n.token;pg!==i&&(pg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function QR(t=Mv()){const e=qd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yC(t,{popupRedirectResolver:BR,persistence:[ZC,zC,dE]}),r=xv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=GR(s.toString());MC(n,o,()=>o(n.currentUser)),LC(n,l=>o(l))}}const i=Pv("auth");return i&&vC(n,`http://${i}`),n}function XR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}uC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",XR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WR("Browser");var mg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ar,EE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,m){function v(){}v.prototype=m.prototype,_.F=m.prototype,_.prototype=new v,_.prototype.constructor=_,_.D=function(S,A,k){for(var w=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)w[Ee-2]=arguments[Ee];return m.prototype[A].apply(S,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,m,v){v||(v=0);const S=Array(16);if(typeof m=="string")for(var A=0;A<16;++A)S[A]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(A=0;A<16;++A)S[A]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=_.g[0],v=_.g[1],A=_.g[2];let k=_.g[3],w;w=m+(k^v&(A^k))+S[0]+3614090360&4294967295,m=v+(w<<7&4294967295|w>>>25),w=k+(A^m&(v^A))+S[1]+3905402710&4294967295,k=m+(w<<12&4294967295|w>>>20),w=A+(v^k&(m^v))+S[2]+606105819&4294967295,A=k+(w<<17&4294967295|w>>>15),w=v+(m^A&(k^m))+S[3]+3250441966&4294967295,v=A+(w<<22&4294967295|w>>>10),w=m+(k^v&(A^k))+S[4]+4118548399&4294967295,m=v+(w<<7&4294967295|w>>>25),w=k+(A^m&(v^A))+S[5]+1200080426&4294967295,k=m+(w<<12&4294967295|w>>>20),w=A+(v^k&(m^v))+S[6]+2821735955&4294967295,A=k+(w<<17&4294967295|w>>>15),w=v+(m^A&(k^m))+S[7]+4249261313&4294967295,v=A+(w<<22&4294967295|w>>>10),w=m+(k^v&(A^k))+S[8]+1770035416&4294967295,m=v+(w<<7&4294967295|w>>>25),w=k+(A^m&(v^A))+S[9]+2336552879&4294967295,k=m+(w<<12&4294967295|w>>>20),w=A+(v^k&(m^v))+S[10]+4294925233&4294967295,A=k+(w<<17&4294967295|w>>>15),w=v+(m^A&(k^m))+S[11]+2304563134&4294967295,v=A+(w<<22&4294967295|w>>>10),w=m+(k^v&(A^k))+S[12]+1804603682&4294967295,m=v+(w<<7&4294967295|w>>>25),w=k+(A^m&(v^A))+S[13]+4254626195&4294967295,k=m+(w<<12&4294967295|w>>>20),w=A+(v^k&(m^v))+S[14]+2792965006&4294967295,A=k+(w<<17&4294967295|w>>>15),w=v+(m^A&(k^m))+S[15]+1236535329&4294967295,v=A+(w<<22&4294967295|w>>>10),w=m+(A^k&(v^A))+S[1]+4129170786&4294967295,m=v+(w<<5&4294967295|w>>>27),w=k+(v^A&(m^v))+S[6]+3225465664&4294967295,k=m+(w<<9&4294967295|w>>>23),w=A+(m^v&(k^m))+S[11]+643717713&4294967295,A=k+(w<<14&4294967295|w>>>18),w=v+(k^m&(A^k))+S[0]+3921069994&4294967295,v=A+(w<<20&4294967295|w>>>12),w=m+(A^k&(v^A))+S[5]+3593408605&4294967295,m=v+(w<<5&4294967295|w>>>27),w=k+(v^A&(m^v))+S[10]+38016083&4294967295,k=m+(w<<9&4294967295|w>>>23),w=A+(m^v&(k^m))+S[15]+3634488961&4294967295,A=k+(w<<14&4294967295|w>>>18),w=v+(k^m&(A^k))+S[4]+3889429448&4294967295,v=A+(w<<20&4294967295|w>>>12),w=m+(A^k&(v^A))+S[9]+568446438&4294967295,m=v+(w<<5&4294967295|w>>>27),w=k+(v^A&(m^v))+S[14]+3275163606&4294967295,k=m+(w<<9&4294967295|w>>>23),w=A+(m^v&(k^m))+S[3]+4107603335&4294967295,A=k+(w<<14&4294967295|w>>>18),w=v+(k^m&(A^k))+S[8]+1163531501&4294967295,v=A+(w<<20&4294967295|w>>>12),w=m+(A^k&(v^A))+S[13]+2850285829&4294967295,m=v+(w<<5&4294967295|w>>>27),w=k+(v^A&(m^v))+S[2]+4243563512&4294967295,k=m+(w<<9&4294967295|w>>>23),w=A+(m^v&(k^m))+S[7]+1735328473&4294967295,A=k+(w<<14&4294967295|w>>>18),w=v+(k^m&(A^k))+S[12]+2368359562&4294967295,v=A+(w<<20&4294967295|w>>>12),w=m+(v^A^k)+S[5]+4294588738&4294967295,m=v+(w<<4&4294967295|w>>>28),w=k+(m^v^A)+S[8]+2272392833&4294967295,k=m+(w<<11&4294967295|w>>>21),w=A+(k^m^v)+S[11]+1839030562&4294967295,A=k+(w<<16&4294967295|w>>>16),w=v+(A^k^m)+S[14]+4259657740&4294967295,v=A+(w<<23&4294967295|w>>>9),w=m+(v^A^k)+S[1]+2763975236&4294967295,m=v+(w<<4&4294967295|w>>>28),w=k+(m^v^A)+S[4]+1272893353&4294967295,k=m+(w<<11&4294967295|w>>>21),w=A+(k^m^v)+S[7]+4139469664&4294967295,A=k+(w<<16&4294967295|w>>>16),w=v+(A^k^m)+S[10]+3200236656&4294967295,v=A+(w<<23&4294967295|w>>>9),w=m+(v^A^k)+S[13]+681279174&4294967295,m=v+(w<<4&4294967295|w>>>28),w=k+(m^v^A)+S[0]+3936430074&4294967295,k=m+(w<<11&4294967295|w>>>21),w=A+(k^m^v)+S[3]+3572445317&4294967295,A=k+(w<<16&4294967295|w>>>16),w=v+(A^k^m)+S[6]+76029189&4294967295,v=A+(w<<23&4294967295|w>>>9),w=m+(v^A^k)+S[9]+3654602809&4294967295,m=v+(w<<4&4294967295|w>>>28),w=k+(m^v^A)+S[12]+3873151461&4294967295,k=m+(w<<11&4294967295|w>>>21),w=A+(k^m^v)+S[15]+530742520&4294967295,A=k+(w<<16&4294967295|w>>>16),w=v+(A^k^m)+S[2]+3299628645&4294967295,v=A+(w<<23&4294967295|w>>>9),w=m+(A^(v|~k))+S[0]+4096336452&4294967295,m=v+(w<<6&4294967295|w>>>26),w=k+(v^(m|~A))+S[7]+1126891415&4294967295,k=m+(w<<10&4294967295|w>>>22),w=A+(m^(k|~v))+S[14]+2878612391&4294967295,A=k+(w<<15&4294967295|w>>>17),w=v+(k^(A|~m))+S[5]+4237533241&4294967295,v=A+(w<<21&4294967295|w>>>11),w=m+(A^(v|~k))+S[12]+1700485571&4294967295,m=v+(w<<6&4294967295|w>>>26),w=k+(v^(m|~A))+S[3]+2399980690&4294967295,k=m+(w<<10&4294967295|w>>>22),w=A+(m^(k|~v))+S[10]+4293915773&4294967295,A=k+(w<<15&4294967295|w>>>17),w=v+(k^(A|~m))+S[1]+2240044497&4294967295,v=A+(w<<21&4294967295|w>>>11),w=m+(A^(v|~k))+S[8]+1873313359&4294967295,m=v+(w<<6&4294967295|w>>>26),w=k+(v^(m|~A))+S[15]+4264355552&4294967295,k=m+(w<<10&4294967295|w>>>22),w=A+(m^(k|~v))+S[6]+2734768916&4294967295,A=k+(w<<15&4294967295|w>>>17),w=v+(k^(A|~m))+S[13]+1309151649&4294967295,v=A+(w<<21&4294967295|w>>>11),w=m+(A^(v|~k))+S[4]+4149444226&4294967295,m=v+(w<<6&4294967295|w>>>26),w=k+(v^(m|~A))+S[11]+3174756917&4294967295,k=m+(w<<10&4294967295|w>>>22),w=A+(m^(k|~v))+S[2]+718787259&4294967295,A=k+(w<<15&4294967295|w>>>17),w=v+(k^(A|~m))+S[9]+3951481745&4294967295,_.g[0]=_.g[0]+m&4294967295,_.g[1]=_.g[1]+(A+(w<<21&4294967295|w>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+k&4294967295}r.prototype.v=function(_,m){m===void 0&&(m=_.length);const v=m-this.blockSize,S=this.C;let A=this.h,k=0;for(;k<m;){if(A==0)for(;k<=v;)i(this,_,k),k+=this.blockSize;if(typeof _=="string"){for(;k<m;)if(S[A++]=_.charCodeAt(k++),A==this.blockSize){i(this,S),A=0;break}}else for(;k<m;)if(S[A++]=_[k++],A==this.blockSize){i(this,S),A=0;break}}this.h=A,this.o+=m},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var m=1;m<_.length-8;++m)_[m]=0;m=this.o*8;for(var v=_.length-8;v<_.length;++v)_[v]=m&255,m/=256;for(this.v(_),_=Array(16),m=0,v=0;v<4;++v)for(let S=0;S<32;S+=8)_[m++]=this.g[v]>>>S&255;return _};function s(_,m){var v=l;return Object.prototype.hasOwnProperty.call(v,_)?v[_]:v[_]=m(_)}function o(_,m){this.h=m;const v=[];let S=!0;for(let A=_.length-1;A>=0;A--){const k=_[A]|0;S&&k==m||(v[A]=k,S=!1)}this.g=v}var l={};function u(_){return-128<=_&&_<128?s(_,function(m){return new o([m|0],m<0?-1:0)}):new o([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return b(h(-_));const m=[];let v=1;for(let S=0;_>=v;S++)m[S]=_/v|0,v*=4294967296;return new o(m,0)}function f(_,m){if(_.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(_.charAt(0)=="-")return b(f(_.substring(1),m));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(m,8));let S=p;for(let k=0;k<_.length;k+=8){var A=Math.min(8,_.length-k);const w=parseInt(_.substring(k,k+A),m);A<8?(A=h(Math.pow(m,A)),S=S.j(A).add(h(w))):(S=S.j(v),S=S.add(h(w)))}return S}var p=u(0),y=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-b(this).m();let _=0,m=1;for(let v=0;v<this.g.length;v++){const S=this.i(v);_+=(S>=0?S:4294967296+S)*m,m*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(x(this))return"0";if(D(this))return"-"+b(this).toString(_);const m=h(Math.pow(_,6));var v=this;let S="";for(;;){const A=O(v,m).g;v=C(v,A.j(m));let k=((v.g.length>0?v.g[0]:v.h)>>>0).toString(_);if(v=A,x(v))return k+S;for(;k.length<6;)k="0"+k;S=k+S}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function x(_){if(_.h!=0)return!1;for(let m=0;m<_.g.length;m++)if(_.g[m]!=0)return!1;return!0}function D(_){return _.h==-1}t.l=function(_){return _=C(this,_),D(_)?-1:x(_)?0:1};function b(_){const m=_.g.length,v=[];for(let S=0;S<m;S++)v[S]=~_.g[S];return new o(v,~_.h).add(y)}t.abs=function(){return D(this)?b(this):this},t.add=function(_){const m=Math.max(this.g.length,_.g.length),v=[];let S=0;for(let A=0;A<=m;A++){let k=S+(this.i(A)&65535)+(_.i(A)&65535),w=(k>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);S=w>>>16,k&=65535,w&=65535,v[A]=w<<16|k}return new o(v,v[v.length-1]&-2147483648?-1:0)};function C(_,m){return _.add(b(m))}t.j=function(_){if(x(this)||x(_))return p;if(D(this))return D(_)?b(this).j(b(_)):b(b(this).j(_));if(D(_))return b(this.j(b(_)));if(this.l(I)<0&&_.l(I)<0)return h(this.m()*_.m());const m=this.g.length+_.g.length,v=[];for(var S=0;S<2*m;S++)v[S]=0;for(S=0;S<this.g.length;S++)for(let A=0;A<_.g.length;A++){const k=this.i(S)>>>16,w=this.i(S)&65535,Ee=_.i(A)>>>16,it=_.i(A)&65535;v[2*S+2*A]+=w*it,T(v,2*S+2*A),v[2*S+2*A+1]+=k*it,T(v,2*S+2*A+1),v[2*S+2*A+1]+=w*Ee,T(v,2*S+2*A+1),v[2*S+2*A+2]+=k*Ee,T(v,2*S+2*A+2)}for(_=0;_<m;_++)v[_]=v[2*_+1]<<16|v[2*_];for(_=m;_<2*m;_++)v[_]=0;return new o(v,0)};function T(_,m){for(;(_[m]&65535)!=_[m];)_[m+1]+=_[m]>>>16,_[m]&=65535,m++}function R(_,m){this.g=_,this.h=m}function O(_,m){if(x(m))throw Error("division by zero");if(x(_))return new R(p,p);if(D(_))return m=O(b(_),m),new R(b(m.g),b(m.h));if(D(m))return m=O(_,b(m)),new R(b(m.g),m.h);if(_.g.length>30){if(D(_)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var v=y,S=m;S.l(_)<=0;)v=P(v),S=P(S);var A=L(v,1),k=L(S,1);for(S=L(S,2),v=L(v,2);!x(S);){var w=k.add(S);w.l(_)<=0&&(A=A.add(v),k=w),S=L(S,1),v=L(v,1)}return m=C(_,A.j(m)),new R(A,m)}for(A=p;_.l(m)>=0;){for(v=Math.max(1,Math.floor(_.m()/m.m())),S=Math.ceil(Math.log(v)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),k=h(v),w=k.j(m);D(w)||w.l(_)>0;)v-=S,k=h(v),w=k.j(m);x(k)&&(k=y),A=A.add(k),_=C(_,w)}return new R(A,_)}t.B=function(_){return O(this,_).h},t.and=function(_){const m=Math.max(this.g.length,_.g.length),v=[];for(let S=0;S<m;S++)v[S]=this.i(S)&_.i(S);return new o(v,this.h&_.h)},t.or=function(_){const m=Math.max(this.g.length,_.g.length),v=[];for(let S=0;S<m;S++)v[S]=this.i(S)|_.i(S);return new o(v,this.h|_.h)},t.xor=function(_){const m=Math.max(this.g.length,_.g.length),v=[];for(let S=0;S<m;S++)v[S]=this.i(S)^_.i(S);return new o(v,this.h^_.h)};function P(_){const m=_.g.length+1,v=[];for(let S=0;S<m;S++)v[S]=_.i(S)<<1|_.i(S-1)>>>31;return new o(v,_.h)}function L(_,m){const v=m>>5;m%=32;const S=_.g.length-v,A=[];for(let k=0;k<S;k++)A[k]=m>0?_.i(k+v)>>>m|_.i(k+v+1)<<32-m:_.i(k+v);return new o(A,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,EE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,ar=o}).apply(typeof mg<"u"?mg:typeof self<"u"?self:typeof window<"u"?window:{});var Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wE,bs,TE,Ga,Vh,IE,SE,AE;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ca=="object"&&Ca];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in d))break e;d=d[N]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,N,V){for(var z=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)z[Z-2]=arguments[Z];return c.prototype[N].apply(g,z)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const c=a.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function x(a,c){for(let g=1;g<arguments.length;g++){const N=arguments[g];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=a.length||0;const V=N.length||0;a.length=d+V;for(let z=0;z<V;z++)a[d+z]=N[z]}else a.push(N)}}class D{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function b(a){o.setTimeout(()=>{throw a},0)}function C(){var a=_;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class T{constructor(){this.h=this.g=null}add(c,d){const g=R.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var R=new D(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let P,L=!1,_=new T,m=()=>{const a=Promise.resolve(void 0);P=()=>{a.then(v)}};function v(){for(var a;a=C();){try{a.h.call(a.g)}catch(d){b(d)}var c=R;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}L=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function Ee(a,c){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(Ee,A),Ee.prototype.init=function(a,c){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ee.Z.h.call(this)},Ee.prototype.h=function(){Ee.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var it="closure_listenable_"+(Math.random()*1e6|0),At=0;function cn(a,c,d,g,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=N,this.key=++At,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function K(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function j(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function oe(a){const c={};for(const d in a)c[d]=a[d];return c}const ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function le(a,c){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)a[d]=g[d];for(let V=0;V<ce.length;V++)d=ce[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function ie(a){this.src=a,this.g={},this.h=0}ie.prototype.add=function(a,c,d,g,N){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const z=Lt(a,c,g,N);return z>-1?(c=a[z],d||(c.fa=!1)):(c=new cn(c,this.src,V,!!g,N),c.fa=d,a.push(c)),c};function Ge(a,c){const d=c.type;if(d in a.g){var g=a.g[d],N=Array.prototype.indexOf.call(g,c,void 0),V;(V=N>=0)&&Array.prototype.splice.call(g,N,1),V&&($(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Lt(a,c,d,g){for(let N=0;N<a.length;++N){const V=a[N];if(!V.da&&V.listener==c&&V.capture==!!d&&V.ha==g)return N}return-1}var xn="closure_lm_"+(Math.random()*1e6|0),Ru={};function Vf(a,c,d,g,N){if(Array.isArray(c)){for(let V=0;V<c.length;V++)Vf(a,c[V],d,g,N);return null}return d=Mf(d),a&&a[it]?a.J(c,d,l(g)?!!g.capture:!1,N):Xw(a,c,d,!1,g,N)}function Xw(a,c,d,g,N,V){if(!c)throw Error("Invalid event type");const z=l(N)?!!N.capture:!!N;let Z=Pu(a);if(Z||(a[xn]=Z=new ie(a)),d=Z.add(c,d,g,z,V),d.proxy)return d;if(g=Yw(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)k||(N=z),N===void 0&&(N=!1),a.addEventListener(c.toString(),g,N);else if(a.attachEvent)a.attachEvent(Lf(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Yw(){function a(d){return c.call(a.src,a.listener,d)}const c=Jw;return a}function Of(a,c,d,g,N){if(Array.isArray(c))for(var V=0;V<c.length;V++)Of(a,c[V],d,g,N);else g=l(g)?!!g.capture:!!g,d=Mf(d),a&&a[it]?(a=a.i,V=String(c).toString(),V in a.g&&(c=a.g[V],d=Lt(c,d,g,N),d>-1&&($(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[V],a.h--)))):a&&(a=Pu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Lt(c,d,g,N)),(d=a>-1?c[a]:null)&&ku(d))}function ku(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[it])Ge(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(Lf(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=Pu(c))?(Ge(d,a),d.h==0&&(d.src=null,c[xn]=null)):$(a)}}}function Lf(a){return a in Ru?Ru[a]:Ru[a]="on"+a}function Jw(a,c){if(a.da)a=!0;else{c=new Ee(c,this);const d=a.listener,g=a.ha||a.src;a.fa&&ku(a),a=d.call(g,c)}return a}function Pu(a){return a=a[xn],a instanceof ie?a:null}var Nu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Mf(a){return typeof a=="function"?a:(a[Nu]||(a[Nu]=function(c){return a.handleEvent(c)}),a[Nu])}function Qe(){S.call(this),this.i=new ie(this),this.M=this,this.G=null}p(Qe,S),Qe.prototype[it]=!0,Qe.prototype.removeEventListener=function(a,c,d,g){Of(this,a,c,d,g)};function st(a,c){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new A(c,a);else if(c instanceof A)c.target=c.target||a;else{var N=c;c=new A(g,a),le(c,N)}N=!0;let V,z;if(d)for(z=d.length-1;z>=0;z--)V=c.g=d[z],N=Xo(V,g,!0,c)&&N;if(V=c.g=a,N=Xo(V,g,!0,c)&&N,N=Xo(V,g,!1,c)&&N,d)for(z=0;z<d.length;z++)V=c.g=d[z],N=Xo(V,g,!1,c)&&N}Qe.prototype.N=function(){if(Qe.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let g=0;g<d.length;g++)$(d[g]);delete a.g[c],a.h--}}this.G=null},Qe.prototype.J=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},Qe.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function Xo(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let N=!0;for(let V=0;V<c.length;++V){const z=c[V];if(z&&!z.da&&z.capture==d){const Z=z.listener,De=z.ha||z.src;z.fa&&Ge(a.i,z),N=Z.call(De,g)!==!1&&N}}return N&&!g.defaultPrevented}function Zw(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function bf(a){a.g=Zw(()=>{a.g=null,a.i&&(a.i=!1,bf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class eT extends S{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:bf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function is(a){S.call(this),this.h=a,this.g={}}p(is,S);var Ff=[];function Uf(a){K(a.g,function(c,d){this.g.hasOwnProperty(d)&&ku(c)},a),a.g={}}is.prototype.N=function(){is.Z.N.call(this),Uf(this)},is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xu=o.JSON.stringify,tT=o.JSON.parse,nT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function jf(){}function zf(){}var ss={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Du(){A.call(this,"d")}p(Du,A);function Vu(){A.call(this,"c")}p(Vu,A);var Tr={},Bf=null;function Yo(){return Bf=Bf||new Qe}Tr.Ia="serverreachability";function $f(a){A.call(this,Tr.Ia,a)}p($f,A);function os(a){const c=Yo();st(c,new $f(c))}Tr.STAT_EVENT="statevent";function Hf(a,c){A.call(this,Tr.STAT_EVENT,a),this.stat=c}p(Hf,A);function ot(a){const c=Yo();st(c,new Hf(c,a))}Tr.Ja="timingevent";function Wf(a,c){A.call(this,Tr.Ja,a),this.size=c}p(Wf,A);function as(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function ls(){this.g=!0}ls.prototype.ua=function(){this.g=!1};function rT(a,c,d,g,N,V){a.info(function(){if(a.g)if(V){var z="",Z=V.split("&");for(let de=0;de<Z.length;de++){var De=Z[de].split("=");if(De.length>1){const be=De[0];De=De[1];const Gt=be.split("_");z=Gt.length>=2&&Gt[1]=="type"?z+(be+"="+De+"&"):z+(be+"=redacted&")}}}else z=null;else z=V;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+c+`
`+d+`
`+z})}function iT(a,c,d,g,N,V,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+c+`
`+d+`
`+V+" "+z})}function ri(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+oT(a,d)+(g?" "+g:"")})}function sT(a,c){a.info(function(){return"TIMEOUT: "+c})}ls.prototype.info=function(){};function oT(a,c){if(!a.g)return c;if(!c)return null;try{const V=JSON.parse(c);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return xu(V)}catch{return c}}var Jo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},qf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Kf;function Ou(){}p(Ou,jf),Ou.prototype.g=function(){return new XMLHttpRequest},Kf=new Ou;function us(a){return encodeURIComponent(String(a))}function aT(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Dn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.S=g||1,this.V=new is(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Gf}function Gf(){this.i=null,this.g="",this.h=!1}var Qf={},Lu={};function Mu(a,c,d){a.M=1,a.A=ea(Kt(c)),a.u=d,a.R=!0,Xf(a,null)}function Xf(a,c){a.F=Date.now(),Zo(a),a.B=Kt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),up(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Gf,a.g=Rp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new eT(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(Ff[0]=N.toString()),N=Ff);for(let V=0;V<N.length;V++){const z=Vf(d,N[V],g||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.J?oe(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),os(),rT(a.i,a.v,a.B,a.l,a.S,a.u)}Dn.prototype.ba=function(a){a=a.target;const c=this.O;c&&Ln(a)==3?c.j():this.Y(a)},Dn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Ln(this.g),De=this.g.ya(),de=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||gp(this.g)))){this.K||Z!=4||De==7||(De==8||de<=0?os(3):os(2)),bu(this);var c=this.g.ca();this.X=c;var d=lT(this);if(this.o=c==200,iT(this.i,this.v,this.B,this.l,this.S,Z,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(g)){var V=g;break t}}V=null}if(a=V)ri(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Fu(this,a);else{this.o=!1,this.m=3,ot(12),Ir(this),cs(this);break e}}if(this.R){a=!0;let be;for(;!this.K&&this.C<d.length;)if(be=uT(this,d),be==Lu){Z==4&&(this.m=4,ot(14),a=!1),ri(this.i,this.l,null,"[Incomplete Response]");break}else if(be==Qf){this.m=4,ot(15),ri(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ri(this.i,this.l,be,null),Fu(this,be);if(Yf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,ot(16),a=!1),this.o=this.o&&a,!a)ri(this.i,this.l,d,"[Invalid Chunked Response]"),Ir(this),cs(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),qu(z),z.P=!0,ot(11))}}else ri(this.i,this.l,d,null),Fu(this,d);Z==4&&Ir(this),this.o&&!this.K&&(Z==4?Ip(this.j,this):(this.o=!1,Zo(this)))}else IT(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,ot(12)):(this.m=0,ot(13)),Ir(this),cs(this)}}}catch{}finally{}};function lT(a){if(!Yf(a))return a.g.la();const c=gp(a.g);if(c==="")return"";let d="";const g=c.length,N=Ln(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Ir(a),cs(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,d+=a.h.i.decode(c[V],{stream:!(N&&V==g-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Yf(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function uT(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?Lu:(d=Number(c.substring(d,g)),isNaN(d)?Qf:(g+=1,g+d>c.length?Lu:(c=c.slice(g,g+d),a.C=g+d,c)))}Dn.prototype.cancel=function(){this.K=!0,Ir(this)};function Zo(a){a.T=Date.now()+a.H,Jf(a,a.H)}function Jf(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=as(h(a.aa,a),c)}function bu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Dn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(sT(this.i,this.B),this.M!=2&&(os(),ot(17)),Ir(this),this.m=2,cs(this)):Jf(this,this.T-a)};function cs(a){a.j.I==0||a.K||Ip(a.j,a)}function Ir(a){bu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Uf(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Fu(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Uu(d.h,a))){if(!a.L&&Uu(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)sa(d),ra(d);else break e;Wu(d),ot(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=as(h(d.Va,d),6e3));tp(d.h)<=1&&d.ta&&(d.ta=void 0)}else Ar(d,11)}else if((a.L||d.g==a)&&sa(d),!w(c))for(N=d.Ba.g.parse(c),c=0;c<N.length;c++){let de=N[c];const be=de[0];if(!(be<=d.K))if(d.K=be,de=de[1],d.I==2)if(de[0]=="c"){d.M=de[1],d.ba=de[2];const Gt=de[3];Gt!=null&&(d.ka=Gt,d.j.info("VER="+d.ka));const Cr=de[4];Cr!=null&&(d.za=Cr,d.j.info("SVER="+d.za));const Mn=de[5];Mn!=null&&typeof Mn=="number"&&Mn>0&&(g=1.5*Mn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const bn=a.g;if(bn){const aa=bn.g?bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(aa){var V=g.h;V.g||aa.indexOf("spdy")==-1&&aa.indexOf("quic")==-1&&aa.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ju(V,V.h),V.h=null))}if(g.G){const Ku=bn.g?bn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ku&&(g.wa=Ku,pe(g.J,g.G,Ku))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var z=a;if(g.na=Cp(g,g.L?g.ba:null,g.W),z.L){np(g.h,z);var Z=z,De=g.O;De&&(Z.H=De),Z.D&&(bu(Z),Zo(Z)),g.g=z}else wp(g);d.i.length>0&&ia(d)}else de[0]!="stop"&&de[0]!="close"||Ar(d,7);else d.I==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Ar(d,7):Hu(d):de[0]!="noop"&&d.l&&d.l.qa(de),d.A=0)}}os(4)}catch{}}var cT=class{constructor(a,c){this.g=a,this.map=c}};function Zf(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ep(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function tp(a){return a.h?1:a.g?a.g.size:0}function Uu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function ju(a,c){a.g?a.g.add(c):a.h=c}function np(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Zf.prototype.cancel=function(){if(this.i=rp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function rp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return I(a.i)}var ip=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hT(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let N,V=null;g>=0?(N=a[d].substring(0,g),V=a[d].substring(g+1)):N=a[d],c(N,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Vn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Vn?(this.l=a.l,hs(this,a.j),this.o=a.o,this.g=a.g,ds(this,a.u),this.h=a.h,zu(this,cp(a.i)),this.m=a.m):a&&(c=String(a).match(ip))?(this.l=!1,hs(this,c[1]||"",!0),this.o=fs(c[2]||""),this.g=fs(c[3]||"",!0),ds(this,c[4]),this.h=fs(c[5]||"",!0),zu(this,c[6]||"",!0),this.m=fs(c[7]||"")):(this.l=!1,this.i=new ms(null,this.l))}Vn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(ps(c,sp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ps(c,sp,!0),"@"),a.push(us(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ps(d,d.charAt(0)=="/"?pT:fT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ps(d,gT)),a.join("")},Vn.prototype.resolve=function(a){const c=Kt(this);let d=!!a.j;d?hs(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var g=a.h;if(d)ds(c,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=c.h.lastIndexOf("/");N!=-1&&(g=c.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const V=[];for(let z=0;z<N.length;){const Z=N[z++];Z=="."?g&&z==N.length&&V.push(""):Z==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&z==N.length&&V.push("")):(V.push(Z),g=!0)}g=V.join("/")}else g=N}return d?c.h=g:d=a.i.toString()!=="",d?zu(c,cp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Kt(a){return new Vn(a)}function hs(a,c,d){a.j=d?fs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ds(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function zu(a,c,d){c instanceof ms?(a.i=c,yT(a.i,a.l)):(d||(c=ps(c,mT)),a.i=new ms(c,a.l))}function pe(a,c,d){a.i.set(c,d)}function ea(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function fs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ps(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,dT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function dT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sp=/[#\/\?@]/g,fT=/[#\?:]/g,pT=/[#\?]/g,mT=/[#\?@]/g,gT=/#/g;function ms(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Sr(a){a.g||(a.g=new Map,a.h=0,a.i&&hT(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ms.prototype,t.add=function(a,c){Sr(this),this.i=null,a=ii(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function op(a,c){Sr(a),c=ii(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function ap(a,c){return Sr(a),c=ii(a,c),a.g.has(c)}t.forEach=function(a,c){Sr(this),this.g.forEach(function(d,g){d.forEach(function(N){a.call(c,N,g,this)},this)},this)};function lp(a,c){Sr(a);let d=[];if(typeof c=="string")ap(a,c)&&(d=d.concat(a.g.get(ii(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Sr(this),this.i=null,a=ii(this,a),ap(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=lp(this,a),a.length>0?String(a[0]):c):c};function up(a,c,d){op(a,c),d.length>0&&(a.i=null,a.g.set(ii(a,c),I(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const N=us(d);d=lp(this,d);for(let V=0;V<d.length;V++){let z=N;d[V]!==""&&(z+="="+us(d[V])),a.push(z)}}return this.i=a.join("&")};function cp(a){const c=new ms;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function ii(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function yT(a,c){c&&!a.j&&(Sr(a),a.i=null,a.g.forEach(function(d,g){const N=g.toLowerCase();g!=N&&(op(this,g),up(this,N,d))},a)),a.j=c}function _T(a,c){const d=new ls;if(o.Image){const g=new Image;g.onload=f(On,d,"TestLoadImage: loaded",!0,c,g),g.onerror=f(On,d,"TestLoadImage: error",!1,c,g),g.onabort=f(On,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=f(On,d,"TestLoadImage: timeout",!1,c,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function vT(a,c){const d=new ls,g=new AbortController,N=setTimeout(()=>{g.abort(),On(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(N),V.ok?On(d,"TestPingServer: ok",!0,c):On(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),On(d,"TestPingServer: error",!1,c)})}function On(a,c,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function ET(){this.g=new nT}function Bu(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Bu,jf),Bu.prototype.g=function(){return new ta(this.i,this.h)};function ta(a,c){Qe.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ta,Qe),t=ta.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,ys(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,gs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function hp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?gs(this):ys(this),this.readyState==3&&hp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,gs(this))},t.Na=function(a){this.g&&(this.response=a,gs(this))},t.ga=function(){this.g&&gs(this)};function gs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ys(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ys(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dp(a){let c="";return K(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function $u(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=dp(d),typeof a=="string"?d!=null&&us(d):pe(a,c,d))}function Ae(a){Qe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ae,Qe);var wT=/^https?$/i,TT=["POST","PUT"];t=Ae.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Kf.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(V){fp(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(TT,c,void 0)>=0)||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of d)this.g.setRequestHeader(V,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){fp(this,V)}};function fp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,pp(a),na(a)}function pp(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,st(this,"complete"),st(this,"abort"),na(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),na(this,!0)),Ae.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?mp(this):this.Xa())},t.Xa=function(){mp(this)};function mp(a){if(a.h&&typeof s<"u"){if(a.v&&Ln(a)==4)setTimeout(a.Ca.bind(a),0);else if(st(a,"readystatechange"),Ln(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=V===0){let z=String(a.D).match(ip)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!wT.test(z?z.toLowerCase():"")}d=g}if(d)st(a,"complete"),st(a,"success");else{a.o=6;try{var N=Ln(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",pp(a)}}finally{na(a)}}}}function na(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||st(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Ln(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Ln(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),tT(c)}};function gp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function IT(a){const c={};a=(a.g&&Ln(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var d=aT(a[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=c[N]||[];c[N]=V,V.push(d)}j(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function _s(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function yp(a){this.za=0,this.i=[],this.j=new ls,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=_s("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=_s("baseRetryDelayMs",5e3,a),this.Za=_s("retryDelaySeedMs",1e4,a),this.Ta=_s("forwardChannelMaxRetries",2,a),this.va=_s("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Zf(a&&a.concurrentRequestLimit),this.Ba=new ET,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=yp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,g){ot(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Cp(this,null,this.W),ia(this)};function Hu(a){if(_p(a),a.I==3){var c=a.V++,d=Kt(a.J);if(pe(d,"SID",a.M),pe(d,"RID",c),pe(d,"TYPE","terminate"),vs(a,d),c=new Dn(a,a.j,c),c.M=2,c.A=ea(Kt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Rp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Zo(c)}Ap(a)}function ra(a){a.g&&(qu(a),a.g.cancel(),a.g=null)}function _p(a){ra(a),a.v&&(o.clearTimeout(a.v),a.v=null),sa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ia(a){if(!ep(a.h)&&!a.m){a.m=!0;var c=a.Ea;P||m(),L||(P(),L=!0),_.add(c,a),a.D=0}}function ST(a,c){return tp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=as(h(a.Ea,a,c),Sp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Dn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=oe(V),le(V,this.U)):V=this.U),this.u!==null||this.R||(N.J=V,V=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Ep(this,N,c),d=Kt(this.J),pe(d,"RID",a),pe(d,"CVER",22),this.G&&pe(d,"X-HTTP-Session-Id",this.G),vs(this,d),V&&(this.R?c="headers="+us(dp(V))+"&"+c:this.u&&$u(d,this.u,V)),ju(this.h,N),this.Ra&&pe(d,"TYPE","init"),this.S?(pe(d,"$req",c),pe(d,"SID","null"),N.U=!0,Mu(N,d,null)):Mu(N,d,c),this.I=2}}else this.I==3&&(a?vp(this,a):this.i.length==0||ep(this.h)||vp(this))};function vp(a,c){var d;c?d=c.l:d=a.V++;const g=Kt(a.J);pe(g,"SID",a.M),pe(g,"RID",d),pe(g,"AID",a.K),vs(a,g),a.u&&a.o&&$u(g,a.u,a.o),d=new Dn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Ep(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ju(a.h,d),Mu(d,g,c)}function vs(a,c){a.H&&K(a.H,function(d,g){pe(c,g,d)}),a.l&&K({},function(d,g){pe(c,g,d)})}function Ep(a,c,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var N=a.i;let Z=-1;for(;;){const De=["count="+d];Z==-1?d>0?(Z=N[0].g,De.push("ofs="+Z)):Z=0:De.push("ofs="+Z);let de=!0;for(let be=0;be<d;be++){var V=N[be].g;const Gt=N[be].map;if(V-=Z,V<0)Z=Math.max(0,N[be].g-100),de=!1;else try{V="req"+V+"_"||"";try{var z=Gt instanceof Map?Gt:Object.entries(Gt);for(const[Cr,Mn]of z){let bn=Mn;l(Mn)&&(bn=xu(Mn)),De.push(V+Cr+"="+encodeURIComponent(bn))}}catch(Cr){throw De.push(V+"type="+encodeURIComponent("_badmap")),Cr}}catch{g&&g(Gt)}}if(de){z=De.join("&");break e}}z=void 0}return a=a.i.splice(0,d),c.G=a,z}function wp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;P||m(),L||(P(),L=!0),_.add(c,a),a.A=0}}function Wu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=as(h(a.Da,a),Sp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Tp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=as(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ot(10),ra(this),Tp(this))};function qu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Tp(a){a.g=new Dn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Kt(a.na);pe(c,"RID","rpc"),pe(c,"SID",a.M),pe(c,"AID",a.K),pe(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(c,"TO",a.ia),pe(c,"TYPE","xmlhttp"),vs(a,c),a.u&&a.o&&$u(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ea(Kt(c)),d.u=null,d.R=!0,Xf(d,a)}t.Va=function(){this.C!=null&&(this.C=null,ra(this),Wu(this),ot(19))};function sa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ip(a,c){var d=null;if(a.g==c){sa(a),qu(a),a.g=null;var g=2}else if(Uu(a.h,c))d=c.G,np(a.h,c),g=1;else return;if(a.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var N=a.D;g=Yo(),st(g,new Wf(g,d)),ia(a)}else wp(a);else if(N=c.m,N==3||N==0&&c.X>0||!(g==1&&ST(a,c)||g==2&&Wu(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),N){case 1:Ar(a,5);break;case 4:Ar(a,10);break;case 3:Ar(a,6);break;default:Ar(a,2)}}}function Sp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Ar(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),g=a.Ua;const N=!g;g=new Vn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||hs(g,"https"),ea(g),N?_T(g.toString(),d):vT(g.toString(),d)}else ot(2);a.I=0,a.l&&a.l.pa(c),Ap(a),_p(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Ap(a){if(a.I=0,a.ja=[],a.l){const c=rp(a.h);(c.length!=0||a.i.length!=0)&&(x(a.ja,c),x(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Cp(a,c,d){var g=d instanceof Vn?Kt(d):new Vn(d);if(g.g!="")c&&(g.g=c+"."+g.g),ds(g,g.u);else{var N=o.location;g=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;const V=new Vn(null);g&&hs(V,g),c&&(V.g=c),N&&ds(V,N),d&&(V.h=d),g=V}return d=a.G,c=a.wa,d&&c&&pe(g,d,c),pe(g,"VER",a.ka),vs(a,g),g}function Rp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ae(new Bu({ab:d})):new Ae(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kp(){}t=kp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function oa(){}oa.prototype.g=function(a,c){return new _t(a,c)};function _t(a,c){Qe.call(this),this.g=new yp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!w(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new si(this)}p(_t,Qe),_t.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){Hu(this.g)},_t.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=xu(a),a=d);c.i.push(new cT(c.Ya++,a)),c.I==3&&ia(c)},_t.prototype.N=function(){this.g.l=null,delete this.j,Hu(this.g),delete this.g,_t.Z.N.call(this)};function Pp(a){Du.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(Pp,Du);function Np(){Vu.call(this),this.status=1}p(Np,Vu);function si(a){this.g=a}p(si,kp),si.prototype.ra=function(){st(this.g,"a")},si.prototype.qa=function(a){st(this.g,new Pp(a))},si.prototype.pa=function(a){st(this.g,new Np)},si.prototype.oa=function(){st(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,AE=function(){return new oa},SE=function(){return Yo()},IE=Tr,Vh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Jo.NO_ERROR=0,Jo.TIMEOUT=8,Jo.HTTP_ERROR=6,Ga=Jo,qf.COMPLETE="complete",TE=qf,zf.EventType=ss,ss.OPEN="a",ss.CLOSE="b",ss.ERROR="c",ss.MESSAGE="d",Qe.prototype.listen=Qe.prototype.J,bs=zf,Ae.prototype.listenOnce=Ae.prototype.K,Ae.prototype.getLastError=Ae.prototype.Ha,Ae.prototype.getLastErrorCode=Ae.prototype.ya,Ae.prototype.getStatus=Ae.prototype.ca,Ae.prototype.getResponseJson=Ae.prototype.La,Ae.prototype.getResponseText=Ae.prototype.la,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Fa,wE=Ae}).apply(typeof Ca<"u"?Ca:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let es="12.14.0";function YR(t){es=t}/**
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
 */const Gr=new Hd("@firebase/firestore");function ai(){return Gr.logLevel}function B(t,...e){if(Gr.logLevel<=re.DEBUG){const n=e.map(tf);Gr.debug(`Firestore (${es}): ${t}`,...n)}}function Rn(t,...e){if(Gr.logLevel<=re.ERROR){const n=e.map(tf);Gr.error(`Firestore (${es}): ${t}`,...n)}}function Qr(t,...e){if(Gr.logLevel<=re.WARN){const n=e.map(tf);Gr.warn(`Firestore (${es}): ${t}`,...n)}}function tf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,CE(t,r,n)}function CE(t,e,n){let r=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Rn(r),new Error(r)}function ue(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||CE(e,i,r)}function Y(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class RE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class ZR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ek{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Mr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new RE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new Ze(e)}}class tk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class nk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new tk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ue(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new gg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new gg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ik(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class nf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=ik(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function Oh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Rc(i)===Rc(s)?ee(i,s):Rc(i)?1:-1}return ee(t.length,e.length)}const sk=55296,ok=57343;function Rc(t){const e=t.charCodeAt(0);return e>=sk&&e<=ok}function Wi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const yg="__name__";class Yt{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Yt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Yt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ee(e.length,n.length)}static compareSegments(e,n){const r=Yt.isNumericId(e),i=Yt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Yt.extractNumericId(e).compare(Yt.extractNumericId(n)):Oh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ar.fromString(e.substring(4,e.length-2))}}class Te extends Yt{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const ak=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Yt{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return ak.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yg}static keyField(){return new He([yg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Te.fromString(e))}static fromName(e){return new q(Te.fromString(e).popFirst(5))}static empty(){return new q(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Te(e.slice()))}}/**
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
 */function lk(t,e,n){if(!n)throw new W(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uk(t,e,n,r){if(e===!0&&r===!0)throw new W(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _g(t){if(!q.isDocumentKey(t))throw new W(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kE(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function rf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function Vi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rf(t);throw new W(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function xe(t,e){const n={typeString:t};return e&&(n.value=e),n}function $o(t,e){if(!kE(t))throw new W(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(F.INVALID_ARGUMENT,n);return!0}/**
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
 */const vg=-62135596800,Eg=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Eg);return new ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<vg)throw new W(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Eg}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if($o(e,ge._jsonSchema))return new ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-vg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:xe("string",ge._jsonSchemaVersion),seconds:xe("number"),nanoseconds:xe("number")};/**
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
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new ge(0,0))}static max(){return new X(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const To=-1;function ck(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new cr(i,q.empty(),e)}function hk(t){return new cr(t.readTime,t.key,To)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(X.min(),q.empty(),To)}static max(){return new cr(X.max(),q.empty(),To)}}function dk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const fk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ts(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==fk)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function mk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ns(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class pu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}pu.ce=-1;/**
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
 */const sf=-1;function mu(t){return t==null}function Vl(t){return t===0&&1/t==-1/0}function gk(t){return typeof t=="number"&&Number.isInteger(t)&&!Vl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const PE="";function yk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=wg(e)),e=_k(t.get(n),e);return wg(e)}function _k(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case PE:n+="";break;default:n+=s}}return n}function wg(t){return t+PE+""}/**
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
 */function Tg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function NE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ve{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ra(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ra(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ra(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ra(this.root,e,this.comparator,!0)}}class Ra{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??$e.EMPTY,this.right=s??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Me{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ig(this.data.getIterator())}getIteratorFrom(e){return new Ig(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class Ig{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new zt([])}unionWith(e){let n=new Me(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new xE("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const vk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(ue(!!t,39018),typeof t=="string"){let e=0;const n=vk.exec(t);if(ue(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function dr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */const DE="server_timestamp",VE="__type__",OE="__previous_value__",LE="__local_write_time__";function of(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[VE])==null?void 0:r.stringValue)===DE}function gu(t){const e=t.mapValue.fields[OE];return of(e)?gu(e):e}function Io(t){const e=hr(t.mapValue.fields[LE].timestampValue);return new ge(e.seconds,e.nanos)}/**
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
 */class Ek{constructor(e,n,r,i,s,o,l,u,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const Ol="(default)";class So{constructor(e,n){this.projectId=e,this.database=n||Ol}static empty(){return new So("","")}get isDefaultDatabase(){return this.database===Ol}isEqual(e){return e instanceof So&&e.projectId===this.projectId&&e.database===this.database}}function wk(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new So(t.options.projectId,e)}/**
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
 */const ME="__type__",Tk="__max__",ka={mapValue:{}},bE="__vector__",Ll="value";function fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?of(t)?4:Sk(t)?9007199254740991:Ik(t)?10:11:Q(28295,{value:t})}function an(t,e){if(t===e)return!0;const n=fr(t);if(n!==fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Io(t).isEqual(Io(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=hr(i.timestampValue),l=hr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return dr(i.bytesValue).isEqual(dr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Re(i.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Re(i.integerValue)===Re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Re(i.doubleValue),l=Re(s.doubleValue);return o===l?Vl(o)===Vl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Wi(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Tg(o)!==Tg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!an(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function Ao(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function qi(t,e){if(t===e)return 0;const n=fr(t),r=fr(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Re(s.integerValue||s.doubleValue),u=Re(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Sg(t.timestampValue,e.timestampValue);case 4:return Sg(Io(t),Io(e));case 5:return Oh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=dr(s),u=dr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ee(l[h],u[h]);if(f!==0)return f}return ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ee(Re(s.latitude),Re(o.latitude));return l!==0?l:ee(Re(s.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ag(t.arrayValue,e.arrayValue);case 10:return function(s,o){var y,I,x,D;const l=s.fields||{},u=o.fields||{},h=(y=l[Ll])==null?void 0:y.arrayValue,f=(I=u[Ll])==null?void 0:I.arrayValue,p=ee(((x=h==null?void 0:h.values)==null?void 0:x.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return p!==0?p:Ag(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ka.mapValue&&o===ka.mapValue)return 0;if(s===ka.mapValue)return 1;if(o===ka.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const y=Oh(u[p],f[p]);if(y!==0)return y;const I=qi(l[u[p]],h[f[p]]);if(I!==0)return I}return ee(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function Sg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=hr(t),r=hr(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function Ag(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=qi(n[i],r[i]);if(s)return s}return ee(n.length,r.length)}function Ki(t){return Lh(t)}function Lh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Lh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Lh(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function Qa(t){switch(fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gu(t);return e?16+Qa(e):16;case 5:return 2*t.stringValue.length;case 6:return dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Qa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Zr(r.fields,(s,o)=>{i+=s.length+Qa(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function Co(t){return!!t&&"integerValue"in t}function FE(t){return Co(t)||function(n){return!!n&&"doubleValue"in n}(t)}function af(t){return!!t&&"arrayValue"in t}function Cg(t){return!!t&&"nullValue"in t}function Rg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xa(t){return!!t&&"mapValue"in t}function Ik(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ME])==null?void 0:r.stringValue)===bE}function Ys(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return{...t}}function Sk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Tk}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ys(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Xa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Xa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Zr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(Ys(this.value))}}function UE(t){const e=[];return Zr(t.fields,(n,r)=>{const i=new He([n]);if(Xa(r)){const s=UE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new zt(e)}/**
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
 */class tt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new tt(e,0,X.min(),X.min(),X.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,i){return new tt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new tt(e,2,n,X.min(),X.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,X.min(),X.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ml{constructor(e,n){this.position=e,this.inclusive=n}}function kg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=qi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class bl{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ak(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class jE{}class Oe extends jE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Rk(e,n,r):n==="array-contains"?new Nk(e,r):n==="in"?new xk(e,r):n==="not-in"?new Dk(e,r):n==="array-contains-any"?new Vk(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kk(e,r):new Pk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(qi(n,this.value)):n!==null&&fr(this.value)===fr(n)&&this.matchesComparison(qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends jE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new ln(e,n)}matches(e){return zE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function zE(t){return t.op==="and"}function BE(t){return Ck(t)&&zE(t)}function Ck(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function Mh(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+Ki(t.value);if(BE(t))return t.filters.map(e=>Mh(e)).join(",");{const e=t.filters.map(n=>Mh(n)).join(",");return`${t.op}(${e})`}}function $E(t,e){return t instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&an(r.value,i.value)}(t,e):t instanceof ln?function(r,i){return i instanceof ln&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&$E(o,i.filters[l]),!0):!1}(t,e):void Q(19439)}function HE(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ki(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(HE).join(" ,")+"}"}(t):"Filter"}class Rk extends Oe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class kk extends Oe{constructor(e,n){super(e,"in",n),this.keys=WE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Pk extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=WE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class Nk extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return af(n)&&Ao(n.arrayValue,this.value)}}class xk extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ao(this.value.arrayValue,n)}}class Dk extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ao(this.value.arrayValue,n)}}class Vk extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!af(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ao(this.value.arrayValue,r))}}/**
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
 */class Ok{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Ng(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ok(t,e,n,r,i,s,o)}function lf(t){const e=Y(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Mh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),mu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ki(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ki(r)).join(",")),e.Te=n}return e.Te}function uf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ak(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$E(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pg(t.startAt,e.startAt)&&Pg(t.endAt,e.endAt)}function bh(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class yu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Lk(t,e,n,r,i,s,o,l){return new yu(t,e,n,r,i,s,o,l)}function cf(t){return new yu(t)}function xg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Mk(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function bk(t){return t.collectionGroup!==null}function Js(t){const e=Y(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new bl(s,r))}),n.has(He.keyField().canonicalString())||e.Ie.push(new bl(He.keyField(),r))}return e.Ie}function rn(t){const e=Y(t);return e.Ee||(e.Ee=Fk(e,Js(t))),e.Ee}function Fk(t,e){if(t.limitType==="F")return Ng(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new bl(i.field,s)});const n=t.endAt?new Ml(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ml(t.startAt.position,t.startAt.inclusive):null;return Ng(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fh(t,e,n){return new yu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _u(t,e){return uf(rn(t),rn(e))&&t.limitType===e.limitType}function qE(t){return`${lf(rn(t))}|lt:${t.limitType}`}function li(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>HE(i)).join(", ")}]`),mu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ki(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ki(i)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function vu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Js(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=kg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Js(r),i)||r.endAt&&!function(o,l,u){const h=kg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Js(r),i))}(t,e)}function Uk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function KE(t){return(e,n)=>{let r=!1;for(const i of Js(t)){const s=jk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function jk(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?qi(u,h):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
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
 */class ei{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return NE(this.inner)}size(){return this.innerSize}}/**
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
 */const zk=new ve(q.comparator);function kn(){return zk}const GE=new ve(q.comparator);function Fs(...t){let e=GE;for(const n of t)e=e.insert(n.key,n);return e}function QE(t){let e=GE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vr(){return Zs()}function XE(){return Zs()}function Zs(){return new ei(t=>t.toString(),(t,e)=>t.isEqual(e))}const Bk=new ve(q.comparator),$k=new Me(q.comparator);function te(...t){let e=$k;for(const n of t)e=e.add(n);return e}const Hk=new Me(ee);function Wk(){return Hk}/**
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
 */function Eu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vl(e)?"-0":e}}function hf(t){return{integerValue:""+t}}function qk(t,e){return gk(e)?hf(e):Eu(t,e)}/**
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
 */class wu{constructor(){this._=void 0}}function Kk(t,e,n){return t instanceof Fl?function(i,s){const o={fields:{[VE]:{stringValue:DE},[LE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&of(s)&&(s=gu(s)),s&&(o.fields[OE]=s),{mapValue:o}}(n,e):t instanceof Ro?JE(t,e):t instanceof ko?ZE(t,e):t instanceof Po?function(i,s){const o=YE(i,s),l=zl(o)+zl(i.Ae);return Co(o)&&Co(i.Ae)?hf(l):Eu(i.serializer,l)}(t,e):t instanceof Ul?function(i,s){return Dg(i,s,Math.min)}(t,e):t instanceof jl?function(i,s){return Dg(i,s,Math.max)}(t,e):void 0}function Gk(t,e,n){return t instanceof Ro?JE(t,e):t instanceof ko?ZE(t,e):n}function YE(t,e){return t instanceof Po?FE(e)?e:{integerValue:0}:null}class Fl extends wu{}class Ro extends wu{constructor(e){super(),this.elements=e}}function JE(t,e){const n=ew(e);for(const r of t.elements)n.some(i=>an(i,r))||n.push(r);return{arrayValue:{values:n}}}class ko extends wu{constructor(e){super(),this.elements=e}}function ZE(t,e){let n=ew(e);for(const r of t.elements)n=n.filter(i=>!an(i,r));return{arrayValue:{values:n}}}class df extends wu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}class Po extends df{}class Ul extends df{}class jl extends df{}function Dg(t,e,n){if(!FE(e))return t.Ae;const r=n(zl(e),zl(t.Ae));return Co(e)&&Co(t.Ae)?hf(r):Eu(t.serializer,r)}function zl(t){return Re(t.integerValue||t.doubleValue)}function ew(t){return af(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Qk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ro&&i instanceof Ro||r instanceof ko&&i instanceof ko?Wi(r.elements,i.elements,an):r instanceof Po&&i instanceof Po||r instanceof Ul&&i instanceof Ul||r instanceof jl&&i instanceof jl?an(r.Ae,i.Ae):r instanceof Fl&&i instanceof Fl}(t.transform,e.transform)}class Xk{constructor(e,n){this.version=e,this.transformResults=n}}class En{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ya(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Tu{}function tw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rw(t.key,En.none()):new Ho(t.key,t.data,En.none());{const n=t.data,r=Pt.empty();let i=new Me(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ti(t.key,r,new zt(i.toArray()),En.none())}}function Yk(t,e,n){t instanceof Ho?function(i,s,o){const l=i.value.clone(),u=Og(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ti?function(i,s,o){if(!Ya(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Og(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(nw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function eo(t,e,n,r){return t instanceof Ho?function(s,o,l,u){if(!Ya(s.precondition,o))return l;const h=s.value.clone(),f=Lg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ti?function(s,o,l,u){if(!Ya(s.precondition,o))return l;const h=Lg(s.fieldTransforms,u,o),f=o.data;return f.setAll(nw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ya(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Jk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=YE(r.transform,i||null);s!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function Vg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Wi(r,i,(s,o)=>Qk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ho extends Tu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ti extends Tu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function nw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Og(t,e,n){const r=new Map;ue(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Gk(o,l,n[i]))}return r}function Lg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Kk(s,o,e))}return r}class rw extends Tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zk extends Tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Yk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=eo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=eo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=XE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=tw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Wi(this.mutations,e.mutations,(n,r)=>Vg(n,r))&&Wi(this.baseMutations,e.baseMutations,(n,r)=>Vg(n,r))}}class ff{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Bk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ff(e,n,r,i)}}/**
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
 */class tP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pe,se;function rP(t){switch(t){case F.OK:return Q(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function iw(t){if(t===void 0)return Rn("GRPC error has no .code"),F.UNKNOWN;switch(t){case Pe.OK:return F.OK;case Pe.CANCELLED:return F.CANCELLED;case Pe.UNKNOWN:return F.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return F.INTERNAL;case Pe.UNAVAILABLE:return F.UNAVAILABLE;case Pe.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Pe.NOT_FOUND:return F.NOT_FOUND;case Pe.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Pe.ABORTED:return F.ABORTED;case Pe.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Pe.DATA_LOSS:return F.DATA_LOSS;default:return Q(39323,{code:t})}}(se=Pe||(Pe={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function iP(){return new TextEncoder}/**
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
 */const sP=new ar([4294967295,4294967295],0);function Mg(t){const e=iP().encode(t),n=new EE;return n.update(e),new Uint8Array(n.digest())}function bg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ar([n,r],0),new ar([i,s],0)]}class pf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Us(`Invalid padding: ${n}`);if(r<0)throw new Us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Us(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Us(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ar.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(ar.fromNumber(r)));return i.compare(sP)===1&&(i=new ar([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Mg(e),[r,i]=bg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new pf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Mg(e),[r,i]=bg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wo{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,qo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wo(X.min(),i,new ve(ee),kn(),te())}}class qo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new qo(r,n,te(),te(),te())}}/**
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
 */class Ja{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class sw{constructor(e,n){this.targetId=e,this.Ce=n}}class ow{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Fg{constructor(e){this.targetId=e,this.ve=0,this.Fe=Ug(),this.Me=Ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),n=te(),r=te();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new qo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Ug()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const ks="WatchChangeAggregator";class oP{constructor(e){this.Ge=e,this.ze=new Map,this.je=kn(),this.Je=Pa(),this.He=Pa(),this.Ze=new ve(ee)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.ze.get(n);if(r)switch(e.state){case 0:this.nt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}else B(ks,`handleTargetChange received targetChange for untracked target ID (${n}) with state (${e.state})`)})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.Ce.count,i=this.st(n);if(i){const s=i.target;if(bh(s))if(r===0){const o=new q(s.path);this.et(n,o,tt.newNoDocument(o,X.min()))}else ue(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}_t(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=dr(r).toUint8Array()}catch(u){if(u instanceof xE)return Qr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new pf(o,i,s)}catch(u){return Qr(u instanceof Us?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ut(e,n,r){return n.Ce.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Pt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&bh(l.target)){const u=new q(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.et(o,u,tt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=te();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Wo(e,n,this.Ze,this.je,r);return this.je=kn(),this.Je=Pa(),this.He=Pa(),this.Ze=new ve(ee),i}Ye(e,n){const r=this.ze.get(e);if(!r||!this.nt(e))return void B(ks,`addDocumentToTarget received document for unknown inactive target (${e})`);const i=this.It(e,n.key)?2:0;r.Ke(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Tt(n.key).add(e)),this.He=this.He.insert(n.key,this.Et(n.key).add(e))}et(e,n,r){const i=this.ze.get(e);i&&this.nt(e)?(this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Et(n).delete(e)),this.He=this.He.insert(n,this.Et(n).add(e)),r&&(this.je=this.je.insert(n,r))):B(ks,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const n=this.ze.get(e);if(!n)return 0;const r=n.ke();return this.Ge.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}$e(e){let n=this.ze.get(e);n||(B(ks,`recordPendingTargetRequest set up tracking for target ID ${e}`),n=new Fg(e),this.ze.set(e,n)),n.$e()}Et(e){let n=this.He.get(e);return n||(n=new Me(ee),this.He=this.He.insert(e,n)),n}Tt(e){let n=this.Je.get(e);return n||(n=new Me(ee),this.Je=this.Je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||B(ks,"Detected inactive target",e),n}st(e){const n=this.ze.get(e);return n===void 0||n.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new Fg(e)),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Pa(){return new ve(q.comparator)}function Ug(){return new ve(q.comparator)}const aP={asc:"ASCENDING",desc:"DESCENDING"},lP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uP={and:"AND",or:"OR"};class cP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Uh(t,e){return t.useProto3Json||mu(e)?e:{value:e}}function Bl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hP(t,e){return Bl(t,e.toTimestamp())}function sn(t){return ue(!!t,49232),X.fromTimestamp(function(n){const r=hr(n);return new ge(r.seconds,r.nanos)}(t))}function mf(t,e){return jh(t,e).canonicalString()}function jh(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function lw(t){const e=Te.fromString(t);return ue(fw(e),10190,{key:e.toString()}),e}function zh(t,e){return mf(t.databaseId,e.path)}function kc(t,e){const n=lw(e);if(n.get(1)!==t.databaseId.projectId)throw new W(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(cw(n))}function uw(t,e){return mf(t.databaseId,e)}function dP(t){const e=lw(t);return e.length===4?Te.emptyPath():cw(e)}function Bh(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cw(t){return ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function jg(t,e,n){return{name:zh(t,e),fields:n.value.mapValue.fields}}function fP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ue(f===void 0||typeof f=="string",58123),Ke.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ke.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?F.UNKNOWN:iw(h.code);return new W(f,h.message||"")}(o);n=new ow(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=kc(t,r.document.name),s=sn(r.document.updateTime),o=r.document.createTime?sn(r.document.createTime):X.min(),l=new Pt({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ja(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=kc(t,r.document),s=r.readTime?sn(r.readTime):X.min(),o=tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ja([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=kc(t,r.document),s=r.removedTargetIds||[];n=new Ja([],s,i,null)}else{if(!("filter"in e))return Q(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new nP(i,s),l=r.targetId;n=new sw(l,o)}}return n}function pP(t,e){let n;if(e instanceof Ho)n={update:jg(t,e.key,e.value)};else if(e instanceof rw)n={delete:zh(t,e.key)};else if(e instanceof ti)n={update:jg(t,e.key,e.data),updateMask:IP(e.fieldMask)};else{if(!(e instanceof Zk))return Q(16599,{Vt:e.type});n={verify:zh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Fl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ro)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Po)return{fieldPath:o.field.canonicalString(),increment:l.Ae};if(l instanceof Ul)return{fieldPath:o.field.canonicalString(),minimum:l.Ae};if(l instanceof jl)return{fieldPath:o.field.canonicalString(),maximum:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:hP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function mP(t,e){return t&&t.length>0?(ue(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?sn(i.updateTime):sn(s);return o.isEqual(X.min())&&(o=sn(s)),new Xk(o,i.transformResults||[])}(n,e))):[]}function gP(t,e){return{documents:[uw(t,e.path)]}}function yP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=uw(t,i);const s=function(h){if(h.length!==0)return dw(ln.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:ui(y.field),direction:EP(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Uh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{dt:n,parent:i}}function _P(t){let e=dP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const y=hw(p);return y instanceof ln&&BE(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(x){return new bl(ci(x.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,mu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(p){const y=!!p.before,I=p.values||[];return new Ml(I,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,I=p.values||[];return new Ml(I,y)}(n.endAt)),Lk(e,i,o,s,l,"F",u,h)}function vP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ci(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ci(n.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ci(n.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ci(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(ci(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>hw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function EP(t){return aP[t]}function wP(t){return lP[t]}function TP(t){return uP[t]}function ui(t){return{fieldPath:t.canonicalString()}}function ci(t){return He.fromServerFormat(t.fieldPath)}function dw(t){return t instanceof Oe?function(n){if(n.op==="=="){if(Rg(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NAN"}};if(Cg(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Rg(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NAN"}};if(Cg(n.value))return{unaryFilter:{field:ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ui(n.field),op:wP(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(i=>dw(i));return r.length===1?r[0]:{compositeFilter:{op:TP(n.op),filters:r}}}(t):Q(54877,{filter:t})}function IP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function pw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class yn{constructor(e,n,r,i,s=X.min(),o=X.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class SP{constructor(e){this.gt=e}}function AP(t){const e=_P({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fh(e,e.limit,"L"):e}/**
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
 */class CP{constructor(){this.Sn=new RP}addToCollectionParentIndex(e,n){return this.Sn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(cr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class RP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Me(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Me(Te.comparator)).toArray()}}/**
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
 */const zg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mw=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(mw,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
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
 */class pr{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new pr(0)}static _r(){return new pr(-1)}}/**
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
 */const Bg="LruGarbageCollector",kP=1048576;function $g([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class PP{constructor(e){this.hr=e,this.buffer=new Me($g),this.Pr=0}Tr(){return++this.Pr}Ir(e){const n=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();$g(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class NP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return this.Er!==null}Rr(e){B(Bg,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ns(n)?B(Bg,"Ignoring IndexedDB error during garbage collection: ",n):await ts(n)}await this.Rr(3e5)})}}class xP{constructor(e,n){this.Ar=e,this.params=n}calculateTargetCount(e,n){return this.Ar.Vr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(pu.ce);const r=new PP(n);return this.Ar.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Ar.dr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Ar.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Ar.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(zg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zg):this.mr(e,n))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),ai()<=re.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function DP(t,e){return new xP(t,e)}/**
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
 */class VP{constructor(){this.changes=new ei(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class OP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class LP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&eo(r.mutation,i,zt.empty(),ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Vr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=kn();const o=Zs(),l=function(){return Zs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof ti)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),eo(f.mutation,h,f.mutation.getFieldMask(),ge.now())):o.set(h.key,zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new OP(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Zs();let i=new ve((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||zt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=XE();f.forEach(y=>{if(!s.has(y)){const I=tw(n.get(y),r.get(y));I!==null&&p.set(y,I),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return Mk(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Vr());let l=To,u=s;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,te())).next(f=>({batchId:l,changes:QE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Fs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Fs();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(p,y){return new yu(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,tt.newInvalidDocument(f)))});let l=Fs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&eo(f.mutation,h,zt.empty(),ge.now()),vu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class MP{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,n){return M.resolve(this.Or.get(n))}saveBundleMetadata(e,n){return this.Or.set(n.id,function(i){return{id:i.id,version:i.version,createTime:sn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Nr.get(n))}saveNamedQuery(e,n){return this.Nr.set(n.name,function(i){return{name:i.name,query:AP(i.bundledQuery),readTime:sn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class bP{constructor(){this.overlays=new ve(q.comparator),this.Br=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Br.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Br.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Vr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Vr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Vr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Br.get(i.largestBatchId).delete(r.key);this.Br.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tP(n,r));let s=this.Br.get(n);s===void 0&&(s=te(),this.Br.set(n,s)),this.Br.set(n,s.add(r.key))}}/**
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
 */class FP{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class gf{constructor(){this.Lr=new Me(Fe.kr),this.qr=new Me(Fe.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Lr=this.Lr.add(r),this.qr=this.qr.add(r)}Ur(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.$r(new Fe(e,n))}Wr(e,n){e.forEach(r=>this.removeReference(r,n))}Qr(e){const n=new q(new Te([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.$r(o),s.push(o.key)}),s}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const n=new q(new Te([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=te();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.Lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.jr=n}static kr(e,n){return q.comparator(e.key,n.key)||ee(e.jr,n.jr)}static Kr(e,n){return ee(e.jr,n.jr)||q.comparator(e.key,n.key)}}/**
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
 */class UP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Xn=1,this.Jr=new Me(Fe.kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Jr=this.Jr.add(new Fe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Hr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Zr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?sf:this.Xn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],o=>{const l=this.Hr(o.jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(ee);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],l=>{r=r.add(l.jr)})}),M.resolve(this.Xr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new q(s),0);let l=new Me(ee);return this.Jr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.jr)),!0)},o),M.resolve(this.Xr(l))}Xr(e){const n=[];return e.forEach(r=>{const i=this.Hr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return M.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Jr=r})}tr(e){}containsKey(e,n){const r=new Fe(n,0),i=this.Jr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Yr(e,n){return this.Zr(e)}Zr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Hr(e){const n=this.Zr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class jP{constructor(e){this.ei=e,this.docs=function(){return new ve(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ei(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=kn();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||dk(hk(f),r)<=0||(i.has(f.key)||vu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ti(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zP(this)}getSize(e){return M.resolve(this.size)}}class zP extends VP{constructor(e){super(),this.Fr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Fr.addEntry(e,i)):this.Fr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Fr.getEntry(e,n)}getAllFromCache(e,n){return this.Fr.getEntries(e,n)}}/**
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
 */class BP{constructor(e){this.persistence=e,this.ni=new ei(n=>lf(n),uf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.ri=0,this.ii=new gf,this.targetCount=0,this.si=pr.sr()}forEachTarget(e,n){return this.ni.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ri&&(this.ri=n),M.resolve()}cr(e){this.ni.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.si=new pr(n),this.highestTargetId=n),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,n){return this.cr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.cr(n),M.resolve()}removeTargetData(e,n){return this.ni.delete(n.target),this.ii.Qr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ni.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ni.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ni.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.ii.Ur(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.ii.Wr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ii.Qr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ii.zr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.ii.containsKey(n))}}/**
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
 */class gw{constructor(e,n){this.oi={},this.overlays={},this._i=new pu(0),this.ai=!1,this.ai=!0,this.ui=new FP,this.referenceDelegate=e(this),this.ci=new BP(this),this.indexManager=new CP,this.remoteDocumentCache=function(i){return new jP(i)}(r=>this.referenceDelegate.li(r)),this.serializer=new SP(n),this.hi=new MP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.oi[e.toKey()];return r||(r=new UP(n,this.referenceDelegate),this.oi[e.toKey()]=r),r}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new $P(this._i.next());return this.referenceDelegate.Pi(),r(i).next(s=>this.referenceDelegate.Ti(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return M.or(Object.values(this.oi).map(r=>()=>r.containsKey(e,n)))}}class $P extends pk{constructor(e){super(),this.currentSequenceNumber=e}}class yf{constructor(e){this.persistence=e,this.Ei=new gf,this.Ri=null}static Ai(e){return new yf(e)}get Vi(){if(this.Ri)return this.Ri;throw Q(60996)}addReference(e,n,r){return this.Ei.addReference(r,n),this.Vi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ei.removeReference(r,n),this.Vi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Vi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ei.Qr(n.targetId).forEach(i=>this.Vi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Vi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Pi(){this.Ri=new Set}Ti(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Vi,r=>{const i=q.fromPath(r);return this.di(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.di(e,n).next(r=>{r?this.Vi.delete(n.toString()):this.Vi.add(n.toString())})}li(e){return 0}di(e,n){return M.or([()=>M.resolve(this.Ei.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class $l{constructor(e,n){this.persistence=e,this.mi=new ei(r=>yk(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=DP(this,n)}static Ai(e,n){return new $l(e,n)}Pi(){}Ti(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Vr(e){const n=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}gr(e){let n=0;return this.dr(e,r=>{n++}).next(()=>n)}dr(e,n){return M.forEach(this.mi,(r,i)=>this.yr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ti(e,o=>this.yr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.mi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.mi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.mi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.mi.set(n,e.currentSequenceNumber),M.resolve()}li(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qa(e.data.value)),n}yr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.mi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class _f{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ps=r,this.Ts=i}static Is(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new _f(e,n.fromCache,r,i)}}/**
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
 */class HP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class WP{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=function(){return gS()?8:mk(rt())>0?6:4}()}initialize(e,n){this.ds=e,this.indexManager=n,this.Es=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.fs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.gs(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new HP;return this.ps(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.ys(e,n,o,l.size)})}).next(()=>s.result)}ys(e,n,r,i){return r.documentReadCount<this.As?(ai()<=re.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),M.resolve()):(ai()<=re.DEBUG&&B("QueryEngine","Query:",li(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Vs*i?(ai()<=re.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):M.resolve())}fs(e,n){if(xg(n))return M.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Fh(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.ds.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ws(n,l);return this.Ss(n,h,o,u.readTime)?this.fs(e,Fh(n,null,"F")):this.bs(e,h,n,u)}))})))}gs(e,n,r,i){return xg(n)||i.isEqual(X.min())?M.resolve(null):this.ds.getDocuments(e,r).next(s=>{const o=this.ws(n,s);return this.Ss(n,o,r,i)?M.resolve(null):(ai()<=re.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),li(n)),this.bs(e,o,n,ck(i,To)).next(l=>l))})}ws(e,n){let r=new Me(KE(e));return n.forEach((i,s)=>{vu(e,s)&&(r=r.add(s))}),r}Ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ps(e,n,r){return ai()<=re.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",li(n)),this.ds.getDocumentsMatchingQuery(e,n,cr.min(),r)}bs(e,n,r,i){return this.ds.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const vf="LocalStore",qP=3e8;class KP{constructor(e,n,r,i){this.persistence=e,this.Ds=n,this.serializer=i,this.Cs=new ve(ee),this.vs=new ei(s=>lf(s),uf),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(r)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LP(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Cs))}}function GP(t,e,n,r){return new KP(t,e,n,r)}async function yw(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.xs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Os:h,removedBatchIds:o,addedBatchIds:l}))})})}function QP(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ms.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,y=p.keys();let I=M.resolve();return y.forEach(x=>{I=I.next(()=>f.getEntry(u,x)).next(D=>{const b=h.docVersions.get(x);ue(b!==null,48541),D.version.compareTo(b)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function _w(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ci.getLastRemoteSnapshotVersion(n))}function XP(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.Cs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ms.newChangeBuffer({trackRemovals:!0});i=n.Cs;const l=[];e.targetChanges.forEach((f,p)=>{const y=i.get(p);if(!y)return;l.push(n.ci.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.ci.addMatchingKeys(s,f.addedDocuments,p)));let I=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(Ke.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(p,I),function(D,b,C){return D.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=qP?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(y,I,f)&&l.push(n.ci.updateTargetData(s,I))});let u=kn(),h=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(YP(s,o,e.documentUpdates).next(f=>{u=f.Ns,h=f.Bs})),!r.isEqual(X.min())){const f=n.ci.getLastRemoteSnapshotVersion(s).next(p=>n.ci.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Cs=i,s))}function YP(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=kn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(vf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ns:o,Bs:i}})}function JP(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=sf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZP(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ci.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.ci.allocateTargetId(r).next(o=>(i=new yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ci.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Cs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Cs=n.Cs.insert(r.targetId,r),n.vs.set(e,r.targetId)),r})}async function $h(t,e,n){const r=Y(t),i=r.Cs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ns(o))throw o;B(vf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Cs=r.Cs.remove(e),r.vs.delete(i.target)}function Hg(t,e,n){const r=Y(t);let i=X.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=Y(u),y=p.vs.get(f);return y!==void 0?M.resolve(p.Cs.get(y)):p.ci.getTargetData(h,f)}(r,o,rn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.ci.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Ds.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:te())).next(l=>(e1(r,Uk(e),l),{documents:l,Ls:s})))}function e1(t,e,n){let r=t.Fs.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Fs.set(e,r)}class Wg{constructor(){this.activeTargetIds=Wk()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class t1{constructor(){this.Co=new Wg,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,n,r){this.vo[e]=n}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new Wg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class n1{Fo(e){}shutdown(){}}/**
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
 */const qg="ConnectivityMonitor";class Kg{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){B(qg,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){B(qg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Na=null;function Hh(){return Na===null?Na=function(){return 268435456+Math.round(2147483648*Math.random())}():Na++,"0x"+Na.toString(16)}/**
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
 */const Pc="RestConnection",r1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class i1{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Uo=this.databaseId.database===Ol?`project_id=${r}`:`project_id=${r}&database_id=${i}`}$o(e,n,r,i,s){const o=Hh(),l=this.Wo(e,n.toUriEncodedString());B(Pc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(u,i,s);const{host:h}=new URL(l),f=Fo(h);return this.Go(e,l,u,r,f).then(p=>(B(Pc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Qr(Pc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}zo(e,n,r,i,s,o){return this.$o(e,n,r,i,s)}Qo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+es}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Wo(e,n){const r=r1[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class s1{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
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
 */const Je="WebChannelConnection",Ps=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Oi extends i1{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!Oi.u_){const e=SE();Ps(e,IE.STAT_EVENT,n=>{n.stat===Vh.PROXY?B(Je,"STAT_EVENT: detected buffering proxy"):n.stat===Vh.NOPROXY&&B(Je,"STAT_EVENT: detected no buffering proxy")}),Oi.u_=!0}}Go(e,n,r,i,s){const o=Hh();return new Promise((l,u)=>{const h=new wE;h.setWithCredentials(!0),h.listenOnce(TE.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ga.NO_ERROR:const p=h.getResponseJson();B(Je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ga.TIMEOUT:B(Je,`RPC '${e}' ${o} timed out`),u(new W(F.DEADLINE_EXCEEDED,"Request time out"));break;case Ga.HTTP_ERROR:const y=h.getStatus();if(B(Je,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const x=I==null?void 0:I.error;if(x&&x.status&&x.message){const D=function(C){const T=C.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(T)>=0?T:F.UNKNOWN}(x.status);u(new W(D,x.message))}else u(new W(F.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new W(F.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{B(Je,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);B(Je,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}P_(e,n,r){const i=Hh(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Qo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");B(Je,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);this.T_(f);let p=!1,y=!1;const I=new s1({jo:x=>{y?B(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(p||(B(Je,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),B(Je,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},Jo:()=>f.close()});return Ps(f,bs.EventType.OPEN,()=>{y||(B(Je,`RPC '${e}' stream ${i} transport opened.`),I.r_())}),Ps(f,bs.EventType.CLOSE,()=>{y||(y=!0,B(Je,`RPC '${e}' stream ${i} transport closed`),I.s_(),this.I_(f))}),Ps(f,bs.EventType.ERROR,x=>{y||(y=!0,Qr(Je,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),I.s_(new W(F.UNAVAILABLE,"The operation could not be completed")))}),Ps(f,bs.EventType.MESSAGE,x=>{var D;if(!y){const b=x.data[0];ue(!!b,16349);const C=b,T=(C==null?void 0:C.error)||((D=C[0])==null?void 0:D.error);if(T){B(Je,`RPC '${e}' stream ${i} received error:`,T);const R=T.status;let O=function(_){const m=Pe[_];if(m!==void 0)return iw(m)}(R),P=T.message;R==="NOT_FOUND"&&P.includes("database")&&P.includes("does not exist")&&P.includes(this.databaseId.database)&&Qr(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=F.INTERNAL,P="Unknown error status: "+R+" with message "+T.message),y=!0,I.s_(new W(O,P)),f.close()}else B(Je,`RPC '${e}' stream ${i} received:`,b),I.o_(b)}}),Oi.a_(),setTimeout(()=>{I.i_()},0),I}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(n=>n===e)}Qo(e,n,r){super.Qo(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return AE()}}/**
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
 */function o1(t){return new Oi(t)}function Nc(){return typeof document<"u"?document:null}/**
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
 */function Iu(t){return new cP(t,!0)}/**
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
 */Oi.u_=!1;class vw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Di=e,this.timerId=n,this.E_=r,this.R_=i,this.A_=s,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const n=Math.floor(this.V_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){this.d_!==null&&(this.d_.skipDelay(),this.d_=null)}cancel(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Gg="PersistentStream";class Ew{constructor(e,n,r,i,s,o,l,u){this.Di=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new vw(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,n){this.q_(),this.K_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(n)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.Q_(r,i)},r=>{e(()=>{const i=new W(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}Q_(e,n){const r=this.W_(this.b_);this.stream=this.z_(e,n),this.stream.Ho(()=>{r(()=>this.listener.Ho())}),this.stream.Xo(()=>{r(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.v_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return B(Gg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Di.enqueueAndForget(()=>this.b_===e?n():(B(Gg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class a1 extends Ew{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=fP(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?sn(o.readTime):X.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Bh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=bh(u)?{documents:gP(s,u)}:{query:yP(s,u).dt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=aw(s,o.resumeToken);const h=Uh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Bl(s,o.snapshotVersion.toTimestamp());const h=Uh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=vP(this.serializer,e);r&&(n.labels=r),this.k_(n)}Z_(e){const n={};n.database=Bh(this.serializer),n.removeTarget=e,this.k_(n)}}class l1 extends Ew{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=mP(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Bh(this.serializer),this.k_(e)}Y_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pP(this.serializer,r))};this.k_(n)}}/**
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
 */class u1{}class c1 extends u1{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new W(F.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.$o(e,jh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(F.UNKNOWN,s.toString())})}zo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.zo(e,jh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(F.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}function h1(t,e,n,r){return new c1(t,e,n,r)}class d1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Rn(n),this._a=!1):B("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const un="RemoteStore";class f1{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new pr(1e3),this.Aa=new pr(1001),this.Va=new Set,this.da=[],this.ma=s,this.ma.Fo(o=>{r.enqueueAndForget(async()=>{ni(this)&&(B(un,"Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.Va.add(4),await Ko(h),h.fa.set("Unknown"),h.Va.delete(4),await Su(h)}(this))})}),this.fa=new d1(r,i)}}async function Su(t){if(ni(t))for(const e of t.da)await e(!0)}async function Ko(t){for(const e of t.da)await e(!1)}function Wh(t,e){return t.Ia.get(e)||void 0}function ww(t,e){const n=Y(t),r=Wh(n,e.targetId);if(r!==void 0&&n.Ta.has(r))return;const i=function(l,u){const h=Wh(l,u);h!==void 0&&l.Ea.delete(h);const f=function(y,I){return I%2!=0?y.Aa.next():y.Ra.next()}(l,u);return l.Ia.set(u,f),l.Ea.set(f,u),f}(n,e.targetId);B(un,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new yn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ta.set(i,s),If(n)?Tf(n):rs(n).x_()&&wf(n,s)}function Ef(t,e){const n=Y(t),r=rs(n),i=Wh(n,e);B(un,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ta.delete(i),n.Ia.delete(e),n.Ea.delete(i),r.x_()&&Tw(n,i),n.Ta.size===0&&(r.x_()?r.B_():ni(n)&&n.fa.set("Unknown"))}function wf(t,e){if(t.ga.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.Ea.get(e.targetId);if(n===void 0)return void B(un,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}rs(t).H_(e)}function Tw(t,e){t.ga.$e(e),rs(t).Z_(e)}function Tf(t){t.ga=new oP({getRemoteKeysForTarget:e=>{const n=t.Ea.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):te()},Rt:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),rs(t).start(),t.fa.aa()}function If(t){return ni(t)&&!rs(t).M_()&&t.Ta.size>0}function ni(t){return Y(t).Va.size===0}function Iw(t){t.ga=void 0}async function p1(t){t.fa.set("Online")}async function m1(t){t.Ta.forEach((e,n)=>{wf(t,e)})}async function g1(t,e){Iw(t),If(t)?(t.fa.la(e),Tf(t)):t.fa.set("Unknown")}async function y1(t,e,n){if(t.fa.set("Online"),e instanceof ow&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds){if(i.Ta.has(l)){const u=i.Ea.get(l);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ia.delete(u),i.Ea.delete(l)),i.Ta.delete(l)}i.ga.removeTarget(l)}}(t,e)}catch(r){B(un,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hl(t,r)}else if(e instanceof Ja?t.ga.Xe(e):e instanceof sw?t.ga.it(e):t.ga.tt(e),!n.isEqual(X.min()))try{const r=await _w(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.ga.Pt(o);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=s.Ta.get(f);p&&s.Ta.set(f,p.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,f)=>{const p=s.Ta.get(h);if(!p)return;s.Ta.set(h,p.withResumeToken(Ke.EMPTY_BYTE_STRING,p.snapshotVersion)),Tw(s,h);const y=new yn(p.target,h,f,p.sequenceNumber);wf(s,y)});const u=function(f,p){const y=new Map;p.targetChanges.forEach((x,D)=>{const b=f.Ea.get(D);b!==void 0&&y.set(b,x)});let I=new ve(ee);return p.targetMismatches.forEach((x,D)=>{const b=f.Ea.get(x);b!==void 0&&(I=I.insert(b,D))}),new Wo(p.snapshotVersion,y,I,p.documentUpdates,p.resolvedLimboDocuments)}(s,l);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){B(un,"Failed to raise snapshot:",r),await Hl(t,r)}}async function Hl(t,e,n){if(!ns(e))throw e;t.Va.add(1),await Ko(t),t.fa.set("Offline"),n||(n=()=>_w(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(un,"Retrying IndexedDB access"),await n(),t.Va.delete(1),await Su(t)})}function Sw(t,e){return e().catch(n=>Hl(t,n,e))}async function Au(t){const e=Y(t),n=mr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:sf;for(;_1(e);)try{const i=await JP(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,v1(e,i)}catch(i){await Hl(e,i)}Aw(e)&&Cw(e)}function _1(t){return ni(t)&&t.Pa.length<10}function v1(t,e){t.Pa.push(e);const n=mr(t);n.x_()&&n.X_&&n.Y_(e.mutations)}function Aw(t){return ni(t)&&!mr(t).M_()&&t.Pa.length>0}function Cw(t){mr(t).start()}async function E1(t){mr(t).na()}async function w1(t){const e=mr(t);for(const n of t.Pa)e.Y_(n.mutations)}async function T1(t,e,n){const r=t.Pa.shift(),i=ff.from(r,e,n);await Sw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Au(t)}async function I1(t,e){e&&mr(t).X_&&await async function(r,i){if(function(o){return rP(o)&&o!==F.ABORTED}(i.code)){const s=r.Pa.shift();mr(r).N_(),await Sw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Au(r)}}(t,e),Aw(t)&&Cw(t)}async function Qg(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),B(un,"RemoteStore received new credentials");const r=ni(n);n.Va.add(3),await Ko(n),r&&n.fa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Va.delete(3),await Su(n)}async function S1(t,e){const n=Y(t);e?(n.Va.delete(2),await Su(n)):e||(n.Va.add(2),await Ko(n),n.fa.set("Unknown"))}function rs(t){return t.pa||(t.pa=function(n,r,i){const s=Y(n);return s.ia(),new a1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ho:p1.bind(null,t),Xo:m1.bind(null,t),e_:g1.bind(null,t),J_:y1.bind(null,t)}),t.da.push(async e=>{e?(t.pa.N_(),If(t)?Tf(t):t.fa.set("Unknown")):(await t.pa.stop(),Iw(t))})),t.pa}function mr(t){return t.ya||(t.ya=function(n,r,i){const s=Y(n);return s.ia(),new l1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ho:()=>Promise.resolve(),Xo:E1.bind(null,t),e_:I1.bind(null,t),ea:w1.bind(null,t),ta:T1.bind(null,t)}),t.da.push(async e=>{e?(t.ya.N_(),await Au(t)):(await t.ya.stop(),t.Pa.length>0&&(B(un,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ya}/**
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
 */class Sf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Sf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Af(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),ns(t))return new W(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Li{static emptySet(e){return new Li(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Fs(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Li;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Xg{constructor(){this.wa=new ve(q.comparator)}track(e){const n=e.doc.key,r=this.wa.get(n);r?e.type!==0&&r.type===3?this.wa=this.wa.insert(n,e):e.type===3&&r.type!==1?this.wa=this.wa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.wa=this.wa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.wa=this.wa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.wa=this.wa.remove(n):e.type===1&&r.type===2?this.wa=this.wa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.wa=this.wa.insert(n,{type:2,doc:e.doc}):Q(63341,{At:e,Sa:r}):this.wa=this.wa.insert(n,e)}ba(){const e=[];return this.wa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Gi(e,n,Li.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_u(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class A1{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some(e=>e.Fa())}}class C1{constructor(){this.queries=Yg(),this.onlineState="Unknown",this.Ma=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=Yg(),s.forEach((o,l)=>{for(const u of l.Ca)u.onError(r)})})(this,new W(F.ABORTED,"Firestore shutting down"))}}function Yg(){return new ei(t=>qE(t),_u)}async function R1(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.va()&&e.Fa()&&(r=2):(s=new A1,r=e.Fa()?0:1);try{switch(r){case 0:s.Da=await n.onListen(i,!0);break;case 1:s.Da=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Af(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Ca.push(e),e.xa(n.onlineState),s.Da&&e.Oa(s.Da)&&Cf(n)}async function k1(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Ca.indexOf(e);o>=0&&(s.Ca.splice(o,1),s.Ca.length===0?i=e.Fa()?0:1:!s.va()&&e.Fa()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function P1(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Ca)l.Oa(i)&&(r=!0);o.Da=i}}r&&Cf(n)}function N1(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.Ca)s.onError(n);r.queries.delete(e)}function Cf(t){t.Ma.forEach(e=>{e.next()})}var qh,Jg;(Jg=qh||(qh={})).Na="default",Jg.Cache="cache";class x1{constructor(e,n,r){this.query=e,this.Ba=n,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=r||{}}Oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Gi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.La?this.qa(e)&&(this.Ba.next(e),n=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),n=!0),this.ka=e,n}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let n=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),n=!0),n}Ka(e,n){if(!e.fromCache||!this.Fa())return!0;const r=n!=="Offline";return(!this.options.$a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ua(e){e=Gi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==qh.Cache}}/**
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
 */class Rw{constructor(e){this.key=e}}class kw{constructor(e){this.key=e}}class D1{constructor(e,n){this.query=e,this.eu=n,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=te(),this.mutatedKeys=te(),this.ru=KE(e),this.iu=new Li(this.ru)}get su(){return this.eu}ou(e,n){const r=n?n._u:new Xg,i=n?n.iu:this.iu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const y=i.get(f),I=vu(this.query,p)?p:null,x=!!y&&this.mutatedKeys.has(y.key),D=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let b=!1;y&&I?y.data.isEqual(I.data)?x!==D&&(r.track({type:3,doc:I}),b=!0):this.au(y,I)||(r.track({type:2,doc:I}),b=!0,(u&&this.ru(I,u)>0||h&&this.ru(I,h)<0)&&(l=!0)):!y&&I?(r.track({type:0,doc:I}),b=!0):y&&!I&&(r.track({type:1,doc:y}),b=!0,(u||h)&&(l=!0)),b&&(I?(o=o.add(I),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{iu:o,_u:r,Ss:l,mutatedKeys:s}}au(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const o=e._u.ba();o.sort((f,p)=>function(I,x){const D=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{At:b})}};return D(I)-D(x)}(f.type,p.type)||this.ru(f.doc,p.doc)),this.uu(r),i=i??!1;const l=n&&!i?this.cu():[],u=this.nu.size===0&&this.current&&!i?1:0,h=u!==this.tu;return this.tu=u,o.length!==0||h?{snapshot:new Gi(this.query,e.iu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),lu:l}:{lu:l}}xa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({iu:this.iu,_u:new Xg,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach(n=>this.eu=this.eu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.eu=this.eu.delete(n)),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=te(),this.iu.forEach(r=>{this.hu(r.key)&&(this.nu=this.nu.add(r.key))});const n=[];return e.forEach(r=>{this.nu.has(r)||n.push(new kw(r))}),this.nu.forEach(r=>{e.has(r)||n.push(new Rw(r))}),n}Pu(e){this.eu=e.Ls,this.nu=te();const n=this.ou(e.documents);return this.applyChanges(n,!0)}Tu(){return Gi.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,this.tu===0,this.hasCachedResults)}}const Rf="SyncEngine";class V1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class O1{constructor(e){this.key=e,this.Iu=!1}}class L1{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Eu={},this.Ru=new ei(l=>qE(l),_u),this.Au=new Map,this.Vu=new Set,this.du=new ve(q.comparator),this.mu=new Map,this.fu=new gf,this.gu={},this.pu=new Map,this.yu=pr._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return this.wu===!0}}async function M1(t,e,n=!0){const r=Ow(t);let i;const s=r.Ru.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Tu()):i=await Pw(r,e,n,!0),i}async function b1(t,e){const n=Ow(t);await Pw(n,e,!0,!1)}async function Pw(t,e,n,r){const i=await ZP(t.localStore,rn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await F1(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&ww(t.remoteStore,i),l}async function F1(t,e,n,r,i){t.Su=(p,y,I)=>async function(D,b,C,T){let R=b.view.ou(C);R.Ss&&(R=await Hg(D.localStore,b.query,!1).then(({documents:_})=>b.view.ou(_,R)));const O=T&&T.targetChanges.get(b.targetId),P=T&&T.targetMismatches.get(b.targetId)!=null,L=b.view.applyChanges(R,D.isPrimaryClient,O,P);return ey(D,b.targetId,L.lu),L.snapshot}(t,p,y,I);const s=await Hg(t.localStore,e,!0),o=new D1(e,s.Ls),l=o.ou(s.documents),u=qo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);ey(t,n,h.lu);const f=new V1(e,n,o);return t.Ru.set(e,f),t.Au.has(n)?t.Au.get(n).push(e):t.Au.set(n,[e]),h.snapshot}async function U1(t,e,n){const r=Y(t),i=r.Ru.get(e),s=r.Au.get(i.targetId);if(s.length>1)return r.Au.set(i.targetId,s.filter(o=>!_u(o,e))),void r.Ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await $h(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ef(r.remoteStore,i.targetId),Kh(r,i.targetId)}).catch(ts)):(Kh(r,i.targetId),await $h(r.localStore,i.targetId,!0))}async function j1(t,e){const n=Y(t),r=n.Ru.get(e),i=n.Au.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ef(n.remoteStore,r.targetId))}async function z1(t,e,n){const r=G1(t);try{const i=await function(o,l){const u=Y(o),h=ge.now(),f=l.reduce((I,x)=>I.add(x.key),te());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let x=kn(),D=te();return u.Ms.getEntries(I,f).next(b=>{x=b,x.forEach((C,T)=>{T.isValidDocument()||(D=D.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,x)).next(b=>{p=b;const C=[];for(const T of l){const R=Jk(T,p.get(T.key).overlayedDocument);R!=null&&C.push(new ti(T.key,R,UE(R.value.mapValue),En.exists(!0)))}return u.mutationQueue.addMutationBatch(I,h,C,l)}).next(b=>{y=b;const C=b.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(I,b.batchId,C)})}).then(()=>({batchId:y.batchId,changes:QE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.gu[o.currentUser.toKey()];h||(h=new ve(ee)),h=h.insert(l,u),o.gu[o.currentUser.toKey()]=h}(r,i.batchId,n),await Go(r,i.changes),await Au(r.remoteStore)}catch(i){const s=Af(i,"Failed to persist write");n.reject(s)}}async function Nw(t,e){const n=Y(t);try{const r=await XP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.mu.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Iu=!0:i.modifiedDocuments.size>0?ue(o.Iu,14607):i.removedDocuments.size>0&&(ue(o.Iu,42227),o.Iu=!1))}),await Go(n,r,e)}catch(r){await ts(r)}}function Zg(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ru.forEach((s,o)=>{const l=o.view.xa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const y of p.Ca)y.xa(l)&&(h=!0)}),h&&Cf(u)}(r.eventManager,e),i.length&&r.Eu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function B1(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.mu.get(e),s=i&&i.key;if(s){let o=new ve(q.comparator);o=o.insert(s,tt.newNoDocument(s,X.min()));const l=te().add(s),u=new Wo(X.min(),new Map,new ve(ee),o,l);await Nw(r,u),r.du=r.du.remove(s),r.mu.delete(e),kf(r)}else await $h(r.localStore,e,!1).then(()=>Kh(r,e,n)).catch(ts)}async function $1(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await QP(n.localStore,e);Dw(n,r,null),xw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Go(n,i)}catch(i){await ts(i)}}async function H1(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ue(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Dw(r,e,n),xw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Go(r,i)}catch(i){await ts(i)}}function xw(t,e){(t.pu.get(e)||[]).forEach(n=>{n.resolve()}),t.pu.delete(e)}function Dw(t,e,n){const r=Y(t);let i=r.gu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.gu[r.currentUser.toKey()]=i}}function Kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Au.get(e))t.Ru.delete(r),n&&t.Eu.bu(r,n);t.Au.delete(e),t.isPrimaryClient&&t.fu.Qr(e).forEach(r=>{t.fu.containsKey(r)||Vw(t,r)})}function Vw(t,e){t.Vu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ef(t.remoteStore,n),t.du=t.du.remove(e),t.mu.delete(n),kf(t))}function ey(t,e,n){for(const r of n)r instanceof Rw?(t.fu.addReference(r.key,e),W1(t,r)):r instanceof kw?(B(Rf,"Document no longer in limbo: "+r.key),t.fu.removeReference(r.key,e),t.fu.containsKey(r.key)||Vw(t,r.key)):Q(19791,{Du:r})}function W1(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Vu.has(r)||(B(Rf,"New document in limbo: "+n),t.Vu.add(r),kf(t))}function kf(t){for(;t.Vu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Vu.values().next().value;t.Vu.delete(e);const n=new q(Te.fromString(e)),r=t.yu.next();t.mu.set(r,new O1(n)),t.du=t.du.insert(n,r),ww(t.remoteStore,new yn(rn(cf(n.path)),r,"TargetPurposeLimboResolution",pu.ce))}}async function Go(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Ru.isEmpty()||(r.Ru.forEach((l,u)=>{o.push(r.Su(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=_f.Is(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Eu.J_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,y=>M.forEach(y.Ps,I=>f.persistence.referenceDelegate.addReference(p,y.targetId,I)).next(()=>M.forEach(y.Ts,I=>f.persistence.referenceDelegate.removeReference(p,y.targetId,I)))))}catch(p){if(!ns(p))throw p;B(vf,"Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const I=f.Cs.get(y),x=I.snapshotVersion,D=I.withLastLimboFreeSnapshotVersion(x);f.Cs=f.Cs.insert(y,D)}}}(r.localStore,s))}async function q1(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){B(Rf,"User change. New user:",e.toKey());const r=await yw(n.localStore,e);n.currentUser=e,function(s,o){s.pu.forEach(l=>{l.forEach(u=>{u.reject(new W(F.CANCELLED,o))})}),s.pu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Go(n,r.Os)}}function K1(t,e){const n=Y(t),r=n.mu.get(e);if(r&&r.Iu)return te().add(r.key);{let i=te();const s=n.Au.get(e);if(!s)return i;for(const o of s){const l=n.Ru.get(o);i=i.unionWith(l.view.su)}return i}}function Ow(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=K1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=B1.bind(null,e),e.Eu.J_=P1.bind(null,e.eventManager),e.Eu.bu=N1.bind(null,e.eventManager),e}function G1(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=H1.bind(null,e),e}class Wl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Iu(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,n){return null}Nu(e,n){return null}xu(e){return GP(this.persistence,new WP,e.initialUser,this.serializer)}Mu(e){return new gw(yf.Ai,this.serializer)}Fu(e){return new t1}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wl.provider={build:()=>new Wl};class Q1 extends Wl{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,n){ue(this.persistence.referenceDelegate instanceof $l,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new NP(r,e.asyncQueue,n)}Mu(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new gw(r=>$l.Ai(r,n),this.serializer)}}class Gh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=q1.bind(null,this.syncEngine),await S1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new C1}()}createDatastore(e){const n=Iu(e.databaseInfo.databaseId),r=o1(e.databaseInfo);return h1(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new f1(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Zg(this.syncEngine,n,0),function(){return Kg.v()?new Kg:new n1}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new L1(i,s,o,l,u,h);return f&&(p.wu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);B(un,"RemoteStore shutting down."),s.Va.add(5),await Ko(s),s.ma.shutdown(),s.fa.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Gh.provider={build:()=>new Gh};/**
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
 */class X1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const gr="FirestoreClient";class Y1{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=nf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B(gr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(gr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Af(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xc(t,e){t.asyncQueue.verifyOperationInProgress(),B(gr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await yw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ty(t,e){t.asyncQueue.verifyOperationInProgress();const n=await J1(t);B(gr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Qg(e.remoteStore,i)),t._onlineComponents=e}async function J1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(gr,"Using user provided OfflineComponentProvider");try{await xc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Qr("Error using user provided cache. Falling back to memory cache: "+n),await xc(t,new Wl)}}else B(gr,"Using default OfflineComponentProvider"),await xc(t,new Q1(void 0));return t._offlineComponents}async function Lw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(gr,"Using user provided OnlineComponentProvider"),await ty(t,t._uninitializedComponentsProvider._online)):(B(gr,"Using default OnlineComponentProvider"),await ty(t,new Gh))),t._onlineComponents}function Z1(t){return Lw(t).then(e=>e.syncEngine)}async function ny(t){const e=await Lw(t),n=e.eventManager;return n.onListen=M1.bind(null,e.syncEngine),n.onUnlisten=U1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=b1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=j1.bind(null,e.syncEngine),n}function eN(t,e,n,r){const i=new X1(r),s=new x1(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>R1(await ny(t),s)),()=>{i.ku(),t.asyncQueue.enqueueAndForget(async()=>k1(await ny(t),s))}}function tN(t,e){const n=new Mr;return t.asyncQueue.enqueueAndForget(async()=>z1(await Z1(t),e,n)),n.promise}/**
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
 */function Mw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const nN="ComponentProvider",ry=new Map;function rN(t,e,n,r,i){return new Ek(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Mw(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const bw="firestore.googleapis.com",iy=!0;class sy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bw,this.ssl=iy}else this.host=e.host,this.ssl=e.ssl??iy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=mw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kP)throw new W(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new JR;switch(r.type){case"firstParty":return new nk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ry.get(n);r&&(B(nN,"Removing Datastore"),ry.delete(n),r.terminate())}(this),Promise.resolve()}}function iN(t,e,n,r={}){var h;t=Vi(t,Pf);const i=Fo(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Dv(`https://${l}`),s.host!==bw&&s.host!==l&&Qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Hr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ze.MOCK_USER;else{f=uS(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new W(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ze(y)}t._authCredentials=new ZR(new RE(f,p))}}/**
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
 */class Cu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cu(this.firestore,e,this._query)}}class je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new No(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if($o(n,je._jsonSchema))return new je(e,r||null,new q(Te.fromString(n.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:xe("string",je._jsonSchemaVersion),referencePath:xe("string")};class No extends Cu{constructor(e,n,r){super(e,n,cf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new q(e))}withConverter(e){return new No(this.firestore,e,this._path)}}function Fw(t,e,...n){if(t=yt(t),arguments.length===1&&(e=nf.newId()),lk("doc","path",e),t instanceof Pf){const r=Te.fromString(e,...n);return _g(r),new je(t,null,new q(r))}{if(!(t instanceof je||t instanceof No))throw new W(F.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return _g(r),new je(t.firestore,t instanceof No?t.converter:null,new q(r))}}/**
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
 */const oy="AsyncQueue";class ay{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new vw(this,"async_queue_retry"),this.cc=()=>{const r=Nc();r&&B(oy,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this.lc=e;const n=Nc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const n=Nc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});const n=new Mr;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(this.nc.length!==0){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!ns(e))throw e;B(oy,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){const n=this.lc.then(()=>(this._c=!0,e().catch(r=>{throw this.oc=r,this._c=!1,Rn("INTERNAL UNHANDLED ERROR: ",ly(r)),r}).then(r=>(this._c=!1,r))));return this.lc=n,n}enqueueAfterDelay(e,n,r){this.hc(),this.uc.indexOf(e)>-1&&(n=0);const i=Sf.createAndSchedule(this,e,n,r,s=>this.Ic(s));return this.sc.push(i),i}hc(){this.oc&&Q(47125,{Ec:ly(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(const n of this.sc)if(n.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{this.sc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.sc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){const n=this.sc.indexOf(e);this.sc.splice(n,1)}}function ly(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ql extends Pf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ay,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ay(e),this._firestoreClient=void 0,await e}}}function sN(t,e){const n=typeof t=="object"?t:Mv(),r=typeof t=="string"?t:Ol,i=qd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=aS("firestore");s&&iN(i,...s)}return i}function Uw(t){if(t._terminated)throw new W(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||oN(t),t._firestoreClient}function oN(t){var r,i,s,o;const e=t._freezeSettings(),n=rN(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Y1(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class Nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nt(Ke.fromBase64String(e))}catch(n){throw new W(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Nt(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if($o(e,Nt._jsonSchema))return Nt.fromBase64String(e.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:xe("string",Nt._jsonSchemaVersion),bytes:xe("string")};/**
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
 */class jw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zw{constructor(e){this._methodName=e}}/**
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
 */class on{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:on._jsonSchemaVersion}}static fromJSON(e){if($o(e,on._jsonSchema))return new on(e.latitude,e.longitude)}}on._jsonSchemaVersion="firestore/geoPoint/1.0",on._jsonSchema={type:xe("string",on._jsonSchemaVersion),latitude:xe("number"),longitude:xe("number")};/**
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
 */class Ht{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ht._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if($o(e,Ht._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ht(e.vectorValues);throw new W(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ht._jsonSchemaVersion="firestore/vectorValue/1.0",Ht._jsonSchema={type:xe("string",Ht._jsonSchemaVersion),vectorValues:xe("object")};/**
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
 */const aN=/^__.*__$/;class lN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ti(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ho(e,this.data,n,this.fieldTransforms)}}function Bw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class Nf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Nf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.yc(e),r}wc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(),r}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return Kl(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(e.length===0)throw this.bc("Document fields must not be empty");if(Bw(this.dataSource)&&aN.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class uN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Iu(e)}V(e,n,r,i=!1){return new Nf({dataSource:e,methodName:n,targetDoc:r,path:He.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cN(t){const e=t._freezeSettings(),n=Iu(t._databaseId);return new uN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hN(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);qw("Data must be an object, but it was:",o,r);const l=Hw(r,o);let u,h;if(s.merge)u=new zt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const y=xf(e,p,n);if(!o.contains(y))throw new W(F.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);pN(f,y)||f.push(y)}u=new zt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new lN(new Pt(l),u,h)}function $w(t,e){if(Ww(t=yt(t)))return qw("Unsupported field value:",e,t),Hw(t,e);if(t instanceof zw)return function(r,i){if(!Bw(i.dataSource))throw i.bc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.bc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.bc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=$w(l,i.Sc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ge.fromDate(r);return{timestampValue:Bl(i.serializer,s)}}if(r instanceof ge){const s=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bl(i.serializer,s)}}if(r instanceof on)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nt)return{bytesValue:aw(i.serializer,r._byteString)};if(r instanceof je){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.bc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:mf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ht)return function(o,l){const u=o instanceof Ht?o.toArray():o;return{mapValue:{fields:{[ME]:{stringValue:bE},[Ll]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.bc("VectorValues must only contain numeric values.");return Eu(l.serializer,f)})}}}}}}(r,i);if(pw(r))return r._toProto(i.serializer);throw i.bc(`Unsupported field value: ${rf(r)}`)}(t,e)}function Hw(t,e){const n={};return NE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zr(t,(r,i)=>{const s=$w(i,e.gc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ww(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof on||t instanceof Nt||t instanceof je||t instanceof zw||t instanceof Ht||pw(t))}function qw(t,e,n){if(!Ww(n)||!kE(n)){const r=rf(n);throw r==="an object"?e.bc(t+" a custom object"):e.bc(t+" "+r)}}function xf(t,e,n){if((e=yt(e))instanceof jw)return e._internalPath;if(typeof e=="string")return fN(t,e);throw Kl("Field path arguments must be of type string or ",t,!1,void 0,n)}const dN=new RegExp("[~\\*/\\[\\]]");function fN(t,e,n){if(e.search(dN)>=0)throw Kl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new jw(...e.split("."))._internalPath}catch{throw Kl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Kl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(F.INVALID_ARGUMENT,l+t+u)}function pN(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class mN{convertValue(e,n="none"){switch(fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Ll].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Re(o.doubleValue));return new Ht(n)}convertGeoPoint(e){return new on(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Io(e));default:return null}}convertTimestamp(e){const n=hr(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ue(fw(r),9688,{name:e});const i=new So(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Rn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Kw extends mN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}const uy="@firebase/firestore",cy="4.15.0";/**
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
 */function hy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class Gw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(xf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gN extends Gw{data(){return super.data()}}/**
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
 */function yN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function _N(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class br extends Gw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=br._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}br._jsonSchemaVersion="firestore/documentSnapshot/1.0",br._jsonSchema={type:xe("string",br._jsonSchemaVersion),bundleSource:xe("string","DocumentSnapshot"),bundleName:xe("string"),bundle:xe("string")};class Za extends br{data(e={}){return super.data(e)}}class Mi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new js(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Za(this._firestore,this._userDataWriter,r.key,r,new js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Za(i._firestore,i._userDataWriter,l.doc.key,l.doc,new js(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Za(i._firestore,i._userDataWriter,l.doc.key,l.doc,new js(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:vN(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Mi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=nf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function vN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */Mi._jsonSchemaVersion="firestore/querySnapshot/1.0",Mi._jsonSchema={type:xe("string",Mi._jsonSchemaVersion),bundleSource:xe("string","QuerySnapshot"),bundleName:xe("string"),bundle:xe("string")};function EN(t,e,n){t=Vi(t,je);const r=Vi(t.firestore,ql),i=_N(t.converter,e,n),s=cN(r);return TN(r,[hN(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,En.none())])}function wN(t,...e){var h,f,p;t=yt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||hy(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(hy(e[r])){const y=e[r];e[r]=(h=y.next)==null?void 0:h.bind(y),e[r+1]=(f=y.error)==null?void 0:f.bind(y),e[r+2]=(p=y.complete)==null?void 0:p.bind(y)}let s,o,l;if(t instanceof je)o=Vi(t.firestore,ql),l=cf(t._key.path),s={next:y=>{e[r]&&e[r](IN(o,t,y))},error:e[r+1],complete:e[r+2]};else{const y=Vi(t,Cu);o=Vi(y.firestore,ql),l=y._query;const I=new Kw(o);s={next:x=>{e[r]&&e[r](new Mi(o,I,y,x))},error:e[r+1],complete:e[r+2]},yN(t._query)}const u=Uw(o);return eN(u,l,i,s)}function TN(t,e){const n=Uw(t);return tN(n,e)}function IN(t,e,n){const r=n.docs.get(e._key),i=new Kw(t);return new br(t,i,e._key,r,new js(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){YR(Ji),Hi(new Wr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ql(new ek(r.getProvider("auth-internal")),new rk(o,r.getProvider("app-check-internal")),wk(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),or(uy,cy,e),or(uy,cy,"esm2020")})();const SN={VITE_FIREBASE_API_KEY:"AIzaSyAzALxyXOhchAV4b0Ui4SX4ZDhAm9PS068",VITE_FIREBASE_APP_ID:"1:29445217103:web:4587af4b25353c0a87833a",VITE_FIREBASE_AUTH_DOMAIN:"hourglass-98a43.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"29445217103",VITE_FIREBASE_PROJECT_ID:"hourglass-98a43",VITE_FIREBASE_STORAGE_BUCKET:"hourglass-98a43.firebasestorage.app"},{VITE_FIREBASE_API_KEY:AN,VITE_FIREBASE_AUTH_DOMAIN:CN,VITE_FIREBASE_PROJECT_ID:RN,VITE_FIREBASE_STORAGE_BUCKET:kN,VITE_FIREBASE_MESSAGING_SENDER_ID:PN,VITE_FIREBASE_APP_ID:NN}=SN;let Qo,Df;{const t=Lv({apiKey:AN,authDomain:CN,projectId:RN,storageBucket:kN,messagingSenderId:PN,appId:NN});Qo=QR(t),Df=sN(t)}const xN=(t,e)=>OC(Qo,t,e),DN=(t,e)=>VC(Qo,t,e),VN=()=>FC(Qo);function ON(t,e){return wN(Fw(Df,"users",t),n=>{n.exists()&&e(n.data())})}let dy=null;function LN(t,e){clearTimeout(dy),dy=setTimeout(()=>EN(Fw(Df,"users",t),e,{merge:!0}),500)}const Qh=[{id:"work",name:"工作",color:"#3b82f6",icon:"💼"},{id:"learning",name:"学习",color:"#10b981",icon:"📚"},{id:"sports",name:"运动",color:"#f59e0b",icon:"🏃"},{id:"entertainment",name:"娱乐",color:"#ef4444",icon:"🎮"},{id:"social",name:"社交",color:"#8b5cf6",icon:"👥"},{id:"rest",name:"休息",color:"#06b6d4",icon:"😴"},{id:"other",name:"其他",color:"#6b7280",icon:"📝"}],Ns=25*60,fy=5*60,MN=["🎯","🚀","💪","📖","💰","🏆","🌱","❤️","🎨","🏠","🎵","✈️"],bN=["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#06b6d4","#f97316","#ec4899"],FN=[{title:"早起",icon:"🌅"},{title:"运动",icon:"💪"},{title:"阅读",icon:"📖"},{title:"冥想",icon:"🧘"},{title:"喝水",icon:"💧"},{title:"早睡",icon:"🌙"}];function el(t){const e=Math.floor(t/3600),n=Math.floor(t%3600/60),r=t%60;return e>0?`${e}:${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function Fr(t){const e=t/3600;return e<.017?"< 1分":e<1?`${Math.round(e*60)}分`:`${e.toFixed(1)}h`}function Qw(){return new Date().toISOString().slice(0,10)}function UN({logs:t}){const e=Array.from({length:7},(l,u)=>{const h=new Date;h.setDate(h.getDate()-(6-u));const f=h.toISOString().slice(0,10),p=t.filter(y=>y.date.slice(0,10)===f).reduce((y,I)=>y+I.duration,0);return{label:["日","一","二","三","四","五","六"][h.getDay()],total:p,ds:f}}),n=Math.max(...e.map(l=>l.total),3600),r=280,i=100,s=28,o=(r-7*s)/8;return E.jsx("svg",{viewBox:`0 0 ${r} ${i+24}`,style:{width:"100%",maxWidth:360},children:e.map((l,u)=>{const h=Math.max(l.total/n*i,l.total>0?4:0),f=o+u*(s+o),p=l.ds===Qw();return E.jsxs("g",{children:[E.jsx("rect",{x:f,y:i-h,width:s,height:h,rx:5,fill:p?"var(--accent)":"var(--accent-muted)"}),l.total>0&&E.jsx("text",{x:f+s/2,y:i-h-4,textAnchor:"middle",fontSize:9,fill:"var(--text-muted)",children:Fr(l.total)}),E.jsx("text",{x:f+s/2,y:i+16,textAnchor:"middle",fontSize:11,fill:p?"var(--accent)":"var(--text-muted)",fontWeight:p?"700":"400",children:l.label})]},u)})})}function jN({data:t,total:e}){if(!t.length)return null;const n=52,r=70,i=70,s=20,o=2*Math.PI*n;let l=0;const u=t.map(h=>{const f={...h,off:l};return l+=h.value/e,f});return E.jsxs("svg",{viewBox:"0 0 140 140",style:{width:140,height:140,flexShrink:0},children:[E.jsx("circle",{cx:r,cy:i,r:n,fill:"none",stroke:"var(--border)",strokeWidth:s}),u.map((h,f)=>E.jsx("circle",{cx:r,cy:i,r:n,fill:"none",stroke:h.color,strokeWidth:s,strokeDasharray:`${h.value/e*o} ${o}`,strokeDashoffset:`${-h.off*o}`,transform:`rotate(-90 ${r} ${i})`},f)),E.jsx("text",{x:r,y:i-7,textAnchor:"middle",fontSize:9,fill:"var(--text-muted)",children:"总计"}),E.jsx("text",{x:r,y:i+10,textAnchor:"middle",fontSize:15,fontWeight:"700",fill:"var(--text)",children:Fr(e)})]})}function zN({logs:t,onSave:e,goals:n}){var K;const[r,i]=J.useState("stopwatch"),[s,o]=J.useState(!1),[l,u]=J.useState(0),[h,f]=J.useState(null),[p,y]=J.useState("work"),[I,x]=J.useState(""),[D,b]=J.useState(""),[C,T]=J.useState(""),[R,O]=J.useState("work"),[P,L]=J.useState(0),[_,m]=J.useState(Ns),v=J.useRef(null),S=R==="work"?Ns:fy;J.useEffect(()=>{if(!s){clearInterval(v.current);return}return v.current=setInterval(()=>{r==="stopwatch"?u(j=>j+1):m(j=>j<=1?(clearInterval(v.current),o(!1),R==="work"?(A(Ns,!0),O("break"),m(fy),L(oe=>oe+1)):(O("work"),m(Ns)),0):j-1)},1e3),()=>clearInterval(v.current)},[s,r,R]);function A(j,oe){const ce=Qh.find(le=>le.id===p);e({id:Date.now(),category:p,categoryName:ce.name,categoryColor:ce.color,categoryIcon:ce.icon,description:I||(oe?`🍅 番茄钟 #${P+1}`:ce.name),duration:j,startTime:Date.now()-j*1e3,endTime:Date.now(),date:new Date().toISOString(),goalId:D,taskId:C})}const k=()=>{o(!0),r==="stopwatch"&&f(Date.now())},w=()=>{o(!1),r==="stopwatch"&&l>0&&(A(l,!1),u(0),x(""))},Ee=()=>{o(!1),u(0),x(""),r==="pomodoro"&&(O("work"),m(Ns))},it=j=>{Ee(),i(j)},At=n.find(j=>j.id===D),cn=r==="pomodoro"?1-_/S:0,$=2*Math.PI*52;return E.jsxs("div",{className:"page-container",children:[E.jsxs("div",{className:"mode-toggle",children:[E.jsx("button",{className:r==="stopwatch"?"active":"",onClick:()=>it("stopwatch"),children:"⏱ 计时器"}),E.jsx("button",{className:r==="pomodoro"?"active":"",onClick:()=>it("pomodoro"),children:"🍅 番茄钟"})]}),E.jsxs("div",{className:`timer-display ${s?"running":""} ${r==="pomodoro"?`pom-${R}`:""}`,children:[r==="pomodoro"?E.jsxs(E.Fragment,{children:[E.jsx("div",{className:"pom-label",children:R==="work"?"🍅 专注时间":"☕ 休息时间"}),E.jsxs("svg",{viewBox:"0 0 140 140",width:"180",height:"180",children:[E.jsx("circle",{cx:"70",cy:"70",r:"52",fill:"none",stroke:"rgba(255,255,255,.25)",strokeWidth:"10"}),E.jsx("circle",{cx:"70",cy:"70",r:"52",fill:"none",stroke:"white",strokeWidth:"10",strokeDasharray:$,strokeDashoffset:$*(1-cn),transform:"rotate(-90 70 70)",strokeLinecap:"round"}),E.jsx("text",{x:"70",y:"63",textAnchor:"middle",fill:"white",fontSize:"24",fontWeight:"700",fontFamily:"monospace",children:el(_)}),E.jsx("text",{x:"70",y:"82",textAnchor:"middle",fill:"rgba(255,255,255,.8)",fontSize:"12",children:P>0?`已完成 ${P} 🍅`:"专注加油！"})]})]}):E.jsx("div",{className:"sw-time",children:el(l)}),E.jsx("div",{className:"timer-btns",children:s?E.jsxs(E.Fragment,{children:[r==="stopwatch"?E.jsx("button",{className:"btn btn-stop",onClick:w,children:"⏹ 停止保存"}):E.jsx("button",{className:"btn btn-stop",onClick:()=>o(!1),children:"⏸ 暂停"}),E.jsx("button",{className:"btn btn-reset",onClick:Ee,children:"↻ 重置"})]}):E.jsx("button",{className:"btn btn-start",onClick:k,children:"▶ 开始"})})]}),E.jsxs("div",{className:"section",children:[E.jsx("div",{className:"section-title",children:"分类"}),E.jsx("div",{className:"categories-grid",children:Qh.map(j=>E.jsxs("button",{className:`category-card ${p===j.id?"active":""}`,onClick:()=>!s&&y(j.id),style:{borderColor:p===j.id?j.color:"transparent",backgroundColor:p===j.id?`${j.color}18`:""},children:[E.jsx("span",{className:"cat-icon",children:j.icon}),E.jsx("span",{className:"cat-name",children:j.name})]},j.id))})]}),E.jsxs("div",{className:"section",children:[E.jsx("div",{className:"section-title",children:"任务描述（可选）"}),E.jsx("input",{className:"text-input",type:"text",placeholder:"正在做什么？",value:I,onChange:j=>x(j.target.value),disabled:s})]}),n.length>0&&E.jsxs("div",{className:"section",children:[E.jsx("div",{className:"section-title",children:"关联目标（可选）"}),E.jsxs("select",{className:"select-input",value:D,onChange:j=>{b(j.target.value),T("")},disabled:s,children:[E.jsx("option",{value:"",children:"— 不关联 —"}),n.map(j=>E.jsxs("option",{value:j.id,children:[j.icon," ",j.title]},j.id))]}),((K=At==null?void 0:At.tasks)==null?void 0:K.filter(j=>!j.done).length)>0&&E.jsxs("select",{className:"select-input",style:{marginTop:8},value:C,onChange:j=>T(j.target.value),disabled:s,children:[E.jsx("option",{value:"",children:"— 选择子任务 —"}),At.tasks.filter(j=>!j.done).map(j=>E.jsx("option",{value:j.id,children:j.title},j.id))]})]}),t.slice(0,3).length>0&&E.jsxs("div",{className:"section",children:[E.jsx("div",{className:"section-title",children:"最近记录"}),E.jsx("div",{className:"recent-logs",children:t.slice(0,3).map(j=>E.jsxs("div",{className:"recent-log-item",style:{borderLeftColor:j.categoryColor},children:[E.jsx("span",{children:j.categoryIcon}),E.jsx("span",{className:"rl-desc",children:j.description}),E.jsx("span",{className:"rl-time",children:el(j.duration)})]},j.id))})]})]})}function BN({goals:t,setGoals:e,logs:n}){const[r,i]=J.useState(!1),[s,o]=J.useState(null),[l,u]=J.useState({title:"",description:"",deadline:"",icon:"🎯",color:"#3b82f6"}),[h,f]=J.useState({}),[p,y]=J.useState(null),I=P=>n.filter(L=>L.goalId===P).reduce((L,_)=>L+_.duration,0),x=()=>{l.title.trim()&&(s?(e(P=>P.map(L=>L.id===s?{...L,...l}:L)),o(null)):e(P=>[...P,{...l,id:Date.now(),tasks:[],createdAt:new Date().toISOString()}]),u({title:"",description:"",deadline:"",icon:"🎯",color:"#3b82f6"}),i(!1))},D=P=>{const L=(h[P]||"").trim();L&&(e(_=>_.map(m=>m.id===P?{...m,tasks:[...m.tasks,{id:Date.now(),title:L,done:!1}]}:m)),f(_=>({..._,[P]:""})))},b=(P,L)=>e(_=>_.map(m=>m.id===P?{...m,tasks:m.tasks.map(v=>v.id===L?{...v,done:!v.done}:v)}:m)),C=(P,L)=>e(_=>_.map(m=>m.id===P?{...m,tasks:m.tasks.filter(v=>v.id!==L)}:m)),T=P=>{u({title:P.title,description:P.description||"",deadline:P.deadline||"",icon:P.icon,color:P.color}),o(P.id),i(!0)},R=t.filter(P=>!P.archived),O=t.filter(P=>P.archived);return E.jsxs("div",{className:"page-container",children:[E.jsxs("div",{className:"page-header",children:[E.jsx("h2",{children:"我的目标"}),E.jsx("button",{className:"btn-primary",onClick:()=>{o(null),u({title:"",description:"",deadline:"",icon:"🎯",color:"#3b82f6"}),i(!0)},children:"+ 新建"})]}),r&&E.jsx("div",{className:"modal-overlay",onClick:()=>i(!1),children:E.jsxs("div",{className:"modal",onClick:P=>P.stopPropagation(),children:[E.jsx("h3",{className:"modal-title",children:s?"编辑目标":"新建目标"}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"图标"}),E.jsx("div",{className:"icon-picker",children:MN.map(P=>E.jsx("button",{className:`icon-btn ${l.icon===P?"active":""}`,onClick:()=>u(L=>({...L,icon:P})),children:P},P))})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"颜色"}),E.jsx("div",{className:"color-picker",children:bN.map(P=>E.jsx("button",{className:`color-btn ${l.color===P?"active":""}`,style:{background:P},onClick:()=>u(L=>({...L,color:P}))},P))})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"目标名称 *"}),E.jsx("input",{className:"text-input",placeholder:"例：读完10本书",value:l.title,onChange:P=>u(L=>({...L,title:P.target.value}))})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"描述"}),E.jsx("input",{className:"text-input",placeholder:"具体描述...",value:l.description,onChange:P=>u(L=>({...L,description:P.target.value}))})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"截止日期"}),E.jsx("input",{className:"text-input",type:"date",value:l.deadline,onChange:P=>u(L=>({...L,deadline:P.target.value}))})]}),E.jsxs("div",{className:"modal-actions",children:[E.jsx("button",{className:"btn-secondary",onClick:()=>i(!1),children:"取消"}),E.jsx("button",{className:"btn-primary",onClick:x,children:"保存"})]})]})}),R.length===0?E.jsxs("div",{className:"empty-state",children:[E.jsx("div",{style:{fontSize:"3rem",marginBottom:12},children:"🎯"}),E.jsx("p",{children:'还没有目标，点击"新建"开始吧！'})]}):E.jsx("div",{className:"goals-list",children:R.map(P=>{const L=P.tasks.filter(k=>k.done).length,_=P.tasks.length>0?L/P.tasks.length:0,m=I(P.id),v=p===P.id,S=new Date;S.setHours(0,0,0,0);const A=P.deadline?Math.ceil((new Date(P.deadline)-S)/864e5):null;return E.jsxs("div",{className:"goal-card",style:{borderLeft:`4px solid ${P.color}`},children:[E.jsxs("div",{className:"goal-header",onClick:()=>y(v?null:P.id),children:[E.jsxs("div",{className:"goal-icon-title",children:[E.jsx("span",{className:"goal-icon",children:P.icon}),E.jsxs("div",{children:[E.jsx("div",{className:"goal-title",children:P.title}),P.description&&E.jsx("div",{className:"goal-desc",children:P.description})]})]}),E.jsxs("div",{className:"goal-meta",children:[A!==null&&E.jsx("span",{className:`badge ${A<=7?"badge-urgent":A<=30?"badge-warn":"badge-ok"}`,children:A>0?`${A}天`:A===0?"今天":"已逾期"}),m>0&&E.jsx("span",{className:"badge badge-time",children:Fr(m)}),E.jsx("span",{className:"expand-arrow",children:v?"▲":"▼"})]})]}),P.tasks.length>0&&E.jsxs("div",{className:"progress-row",children:[E.jsx("div",{className:"progress-bar",children:E.jsx("div",{className:"progress-fill",style:{width:`${_*100}%`,background:P.color}})}),E.jsxs("span",{className:"progress-text",children:[L,"/",P.tasks.length]})]}),v&&E.jsxs("div",{className:"goal-tasks",children:[P.tasks.map(k=>E.jsxs("div",{className:`task-item ${k.done?"done":""}`,children:[E.jsx("input",{type:"checkbox",checked:k.done,onChange:()=>b(P.id,k.id)}),E.jsx("span",{className:"task-title",children:k.title}),E.jsx("button",{className:"icon-action",onClick:()=>C(P.id,k.id),children:"✕"})]},k.id)),E.jsxs("div",{className:"add-task-row",children:[E.jsx("input",{className:"text-input",placeholder:"添加子任务...",value:h[P.id]||"",onChange:k=>f(w=>({...w,[P.id]:k.target.value})),onKeyDown:k=>k.key==="Enter"&&D(P.id)}),E.jsx("button",{className:"btn-primary small",onClick:()=>D(P.id),children:"+"})]}),E.jsxs("div",{className:"goal-actions",children:[E.jsx("button",{className:"btn-secondary small",onClick:()=>T(P),children:"✏️ 编辑"}),E.jsx("button",{className:"btn-secondary small",onClick:()=>e(k=>k.map(w=>w.id===P.id?{...w,archived:!0}:w)),children:"📦 归档"}),E.jsx("button",{className:"btn-danger small",onClick:()=>e(k=>k.filter(w=>w.id!==P.id)),children:"🗑 删除"})]})]})]},P.id)})}),O.length>0&&E.jsxs("details",{className:"archived-section",children:[E.jsxs("summary",{children:["已归档 (",O.length,")"]}),O.map(P=>E.jsxs("div",{className:"goal-card archived",style:{borderLeft:`4px solid ${P.color}`},children:[E.jsxs("div",{className:"goal-icon-title",children:[E.jsx("span",{className:"goal-icon",children:P.icon}),E.jsx("span",{className:"goal-title",children:P.title})]}),E.jsx("button",{className:"btn-secondary small",onClick:()=>e(L=>L.map(_=>_.id===P.id?{..._,archived:!1}:_)),children:"恢复"})]},P.id))]})]})}function $N({logs:t,onDeleteLog:e}){const[n,r]=J.useState("today"),i=new Date,s=t.filter(p=>{const y=new Date(p.date);if(n==="today")return y.toDateString()===i.toDateString();if(n==="week"){const I=new Date(i);return I.setDate(i.getDate()-7),y>=I}return n==="month"?y.getMonth()===i.getMonth()&&y.getFullYear()===i.getFullYear():!0}),o=s.reduce((p,y)=>p+y.duration,0),l=s.length,u={};s.forEach(p=>{u[p.category]||(u[p.category]={...Qh.find(y=>y.id===p.category),value:0}),u[p.category].value+=p.duration});const h=Object.values(u).sort((p,y)=>y.value-p.value),f=n==="today"?1:n==="week"?7:30;return E.jsxs("div",{className:"page-container",children:[E.jsx("div",{className:"mode-toggle",children:[["today","今天"],["week","本周"],["month","本月"]].map(([p,y])=>E.jsx("button",{className:n===p?"active":"",onClick:()=>r(p),children:y},p))}),E.jsxs("div",{className:"stats-grid",children:[E.jsxs("div",{className:"stat-card primary",children:[E.jsx("div",{className:"stat-val",children:Fr(o)}),E.jsx("div",{className:"stat-lbl",children:"总时长"})]}),E.jsxs("div",{className:"stat-card secondary",children:[E.jsx("div",{className:"stat-val",children:l}),E.jsx("div",{className:"stat-lbl",children:"记录次数"})]}),n!=="today"&&E.jsxs("div",{className:"stat-card tertiary",children:[E.jsx("div",{className:"stat-val",children:Fr(Math.round(o/f))}),E.jsx("div",{className:"stat-lbl",children:"日均"})]})]}),E.jsxs("div",{className:"chart-section",children:[E.jsx("div",{className:"section-title",children:"过去7天趋势"}),E.jsx(UN,{logs:t})]}),h.length>0&&E.jsxs("div",{className:"chart-section",children:[E.jsx("div",{className:"section-title",children:"分类占比"}),E.jsxs("div",{className:"donut-row",children:[E.jsx(jN,{data:h,total:o}),E.jsx("div",{className:"cat-legend",children:h.map(p=>E.jsxs("div",{className:"legend-item",children:[E.jsx("span",{className:"legend-dot",style:{background:p.color}}),E.jsxs("span",{children:[p.icon," ",p.name]}),E.jsx("span",{className:"legend-pct",children:Fr(p.value)}),E.jsxs("span",{className:"legend-pct muted",children:[Math.round(p.value/o*100),"%"]})]},p.id))})]})]}),E.jsxs("div",{className:"chart-section",children:[E.jsx("div",{className:"section-title",children:"活动记录"}),s.length===0?E.jsx("div",{className:"empty-state",children:E.jsx("p",{children:"该时间段暂无记录"})}):E.jsx("div",{className:"logs-list",children:s.slice(0,30).map(p=>E.jsxs("div",{className:"log-item",style:{borderLeftColor:p.categoryColor},children:[E.jsx("span",{className:"log-icon",children:p.categoryIcon}),E.jsxs("div",{className:"log-details",children:[E.jsx("div",{className:"log-desc",children:p.description}),E.jsx("div",{className:"log-time-str",children:new Date(p.date).toLocaleString("zh-CN",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})})]}),E.jsx("span",{className:"log-dur",children:el(p.duration)}),E.jsx("button",{className:"icon-action",onClick:()=>e(p.id),children:"✕"})]},p.id))})]})]})}function HN({habits:t,setHabits:e}){const[n,r]=J.useState(!1),[i,s]=J.useState({title:"",icon:"✅"}),o=Qw(),l=I=>{e(x=>x.map(D=>{if(D.id!==I)return D;const b=D.history||[],T=b.includes(o)?b.filter(P=>P!==o):[...b,o];let R=0;const O=new Date;for(let P=0;P<365;P++){const L=new Date(O);L.setDate(O.getDate()-P);const _=L.toISOString().slice(0,10);if(T.includes(_))R++;else if(P>0)break}return{...D,history:T,streak:R}}))},u=()=>{i.title.trim()&&(e(I=>[...I,{...i,id:Date.now(),history:[],streak:0}]),s({title:"",icon:"✅"}),r(!1))},h=Array.from({length:7},(I,x)=>{const D=new Date;return D.setDate(D.getDate()-(6-x)),D.toISOString().slice(0,10)}),f=t.filter(I=>(I.history||[]).includes(o)).length,p=t.length>0?f/t.length:0,y=2*Math.PI*34;return E.jsxs("div",{className:"page-container",children:[E.jsxs("div",{className:"page-header",children:[E.jsx("h2",{children:"习惯打卡"}),E.jsx("button",{className:"btn-primary",onClick:()=>r(!0),children:"+ 添加"})]}),t.length>0&&E.jsxs("div",{className:"habit-summary",children:[E.jsxs("svg",{viewBox:"0 0 80 80",width:"70",height:"70",children:[E.jsx("circle",{cx:"40",cy:"40",r:"34",fill:"none",stroke:"var(--border)",strokeWidth:"8"}),E.jsx("circle",{cx:"40",cy:"40",r:"34",fill:"none",stroke:"#10b981",strokeWidth:"8",strokeDasharray:y,strokeDashoffset:y*(1-p),transform:"rotate(-90 40 40)",strokeLinecap:"round"}),E.jsxs("text",{x:"40",y:"45",textAnchor:"middle",fontSize:"14",fontWeight:"700",fill:"var(--text)",children:[Math.round(p*100),"%"]})]}),E.jsxs("div",{children:[E.jsxs("div",{className:"habit-sum-title",children:["今日完成 ",f,"/",t.length]}),E.jsx("div",{className:"habit-sum-sub",children:"坚持是最好的习惯"})]})]}),n&&E.jsx("div",{className:"modal-overlay",onClick:()=>r(!1),children:E.jsxs("div",{className:"modal",onClick:I=>I.stopPropagation(),children:[E.jsx("h3",{className:"modal-title",children:"新建习惯"}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"快速选择"}),E.jsx("div",{className:"preset-habits",children:FN.map(I=>E.jsxs("button",{className:"preset-btn",onClick:()=>s({title:I.title,icon:I.icon}),children:[I.icon," ",I.title]},I.title))})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"图标"}),E.jsx("input",{className:"text-input",style:{width:60},value:i.icon,onChange:I=>s(x=>({...x,icon:I.target.value}))})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{children:"习惯名称"}),E.jsx("input",{className:"text-input",placeholder:"例：每天读书30分钟",value:i.title,onChange:I=>s(x=>({...x,title:I.target.value})),onKeyDown:I=>I.key==="Enter"&&u()})]}),E.jsxs("div",{className:"modal-actions",children:[E.jsx("button",{className:"btn-secondary",onClick:()=>r(!1),children:"取消"}),E.jsx("button",{className:"btn-primary",onClick:u,children:"添加"})]})]})}),t.length===0?E.jsxs("div",{className:"empty-state",children:[E.jsx("div",{style:{fontSize:"3rem",marginBottom:12},children:"✅"}),E.jsx("p",{children:'还没有习惯，点击"添加"开始坚持吧！'})]}):E.jsx("div",{className:"habits-list",children:t.map(I=>{const x=(I.history||[]).includes(o);return E.jsxs("div",{className:`habit-card ${x?"done":""}`,children:[E.jsx("button",{className:`habit-check ${x?"checked":""}`,onClick:()=>l(I.id),children:x&&"✓"}),E.jsxs("div",{className:"habit-info",children:[E.jsxs("div",{className:"habit-name",children:[I.icon," ",I.title]}),E.jsx("div",{className:"habit-streak",children:I.streak>0?`🔥 ${I.streak} 天连续`:"今天开始！"})]}),E.jsx("div",{className:"habit-dots",children:h.map(D=>E.jsx("div",{className:`h-dot ${(I.history||[]).includes(D)?"done":""}`,title:D},D))}),E.jsx("button",{className:"icon-action",onClick:()=>e(D=>D.filter(b=>b.id!==I.id)),children:"✕"})]},I.id)})})]})}function WN({onAuth:t}){const[e,n]=J.useState("login"),[r,i]=J.useState(""),[s,o]=J.useState(""),[l,u]=J.useState(!1),[h,f]=J.useState(""),p=async y=>{if(y.preventDefault(),!(!r||!s)){u(!0),f("");try{await t(e,r,s)}catch(I){const x={"auth/invalid-email":"邮箱格式不正确","auth/user-not-found":"账号不存在","auth/wrong-password":"密码错误","auth/invalid-credential":"邮箱或密码错误","auth/email-already-in-use":"该邮箱已注册，请直接登录","auth/weak-password":"密码至少6位","auth/too-many-requests":"尝试次数过多，请稍后再试"}[I.code]||"操作失败，请重试";f(x)}u(!1)}};return E.jsxs("div",{className:"login-tabs-wrap",children:[E.jsxs("div",{className:"login-tabs",children:[E.jsx("button",{className:e==="login"?"active":"",onClick:()=>{n("login"),f("")},children:"登录"}),E.jsx("button",{className:e==="register"?"active":"",onClick:()=>{n("register"),f("")},children:"注册"})]}),E.jsxs("form",{onSubmit:p,children:[E.jsx("div",{className:"login-field",children:E.jsx("input",{className:"login-input",type:"email",placeholder:"邮箱地址",value:r,onChange:y=>i(y.target.value),autoComplete:"email",required:!0})}),E.jsx("div",{className:"login-field",children:E.jsx("input",{className:"login-input",type:"password",placeholder:"密码（至少6位）",value:s,onChange:y=>o(y.target.value),autoComplete:e==="login"?"current-password":"new-password",required:!0})}),h&&E.jsx("div",{className:"login-error",children:h}),E.jsx("button",{className:"login-btn",type:"submit",disabled:l,children:l?"请稍候...":e==="login"?"登录并同步":"注册账号"})]})]})}function xa(t,e){const[n,r]=J.useState(()=>{try{return JSON.parse(localStorage.getItem(t))??e}catch{return e}});return J.useEffect(()=>{localStorage.setItem(t,JSON.stringify(n))},[t,n]),[n,r]}function qN(){var ce;const[t,e]=J.useState("timer"),[n,r]=J.useState(void 0),[i,s]=J.useState(!1),[o,l]=J.useState(!1),[u,h]=J.useState([]),[f,p]=J.useState([]),[y,I]=J.useState([]),[x,D]=xa("darkMode",!1),[b,C]=xa("timeLogs",[]),[T,R]=xa("goals",[]),[O,P]=xa("habits",[]),L=!!n,_=L?o:x,m=L?u:b,v=L?f:T,S=L?y:O,A=L?l:D,k=L?h:C,w=L?p:R,Ee=L?I:P;J.useEffect(()=>bC(Qo,le=>r(le??null)),[]),J.useEffect(()=>n?ON(n.uid,ie=>{ie.timeLogs!==void 0&&k(ie.timeLogs),ie.goals!==void 0&&w(ie.goals),ie.habits!==void 0&&Ee(ie.habits),ie.darkMode!==void 0&&A(ie.darkMode)}):void 0,[n]);const it=J.useRef(!1);J.useEffect(()=>{if(n){if(!it.current){it.current=!0;return}LN(n.uid,{timeLogs:m,goals:v,habits:S,darkMode:_})}},[m,v,S,_]);const At=async(le,ie,Ge)=>{le==="login"?await xN(ie,Ge):await DN(ie,Ge)},cn=le=>k(ie=>[le,...ie]),$=le=>k(ie=>ie.filter(Ge=>Ge.id!==le)),K=m.filter(le=>new Date(le.date).toDateString()===new Date().toDateString()).reduce((le,ie)=>le+ie.duration,0),[j,oe]=J.useState(!1);return n===void 0?E.jsx("div",{className:"app",children:E.jsxs("div",{className:"splash",children:[E.jsx("div",{className:"splash-logo",children:"⏳"}),E.jsx("div",{className:"splash-name",children:"TimeFlow"})]})}):E.jsxs("div",{className:`app ${_?"dark":""}`,children:[E.jsx("header",{className:"app-header",children:E.jsxs("div",{className:"header-inner",children:[E.jsxs("div",{children:[E.jsx("h1",{className:"app-title",children:"⏳ TimeFlow"}),E.jsxs("p",{className:"app-sub",children:["今日已记录 ",E.jsx("strong",{children:Fr(K)})]})]}),E.jsxs("div",{className:"header-actions",children:[E.jsx("button",{className:"dark-btn",onClick:()=>A(le=>!le),title:"深色模式",children:_?"☀️":"🌙"}),n?E.jsx("button",{className:"avatar-btn synced",onClick:()=>{confirm(`退出登录？
(${n.email})`)&&VN()},title:`已同步：${n.email}`,children:(((ce=n.email)==null?void 0:ce[0])??"?").toUpperCase()}):E.jsx("button",{className:"sync-btn",onClick:()=>oe(!0),title:"登录以同步数据",children:"☁️"})]})]})}),E.jsxs("main",{className:"main-content",children:[t==="timer"&&E.jsx(zN,{logs:m,onSave:cn,goals:v}),t==="goals"&&E.jsx(BN,{goals:v,setGoals:w,logs:m}),t==="stats"&&E.jsx($N,{logs:m,onDeleteLog:$}),t==="habits"&&E.jsx(HN,{habits:S,setHabits:Ee})]}),E.jsx("nav",{className:"bottom-nav",children:[["timer","⏱","计时"],["goals","🎯","目标"],["stats","📊","统计"],["habits","✅","习惯"]].map(([le,ie,Ge])=>E.jsxs("button",{className:`nav-btn ${t===le?"active":""}`,onClick:()=>e(le),children:[E.jsx("span",{className:"nav-ic",children:ie}),E.jsx("span",{className:"nav-lb",children:Ge})]},le))}),j&&E.jsx("div",{className:"modal-overlay",onClick:()=>oe(!1),children:E.jsxs("div",{className:"modal login-modal",onClick:le=>le.stopPropagation(),children:[E.jsxs("div",{className:"login-modal-header",children:[E.jsxs("div",{children:[E.jsx("div",{className:"login-modal-title",children:"☁️ 云端同步"}),E.jsx("div",{className:"login-modal-sub",children:"登录后数据自动同步到所有设备"})]}),E.jsx("button",{className:"modal-close",onClick:()=>oe(!1),children:"✕"})]}),E.jsx(WN,{onAuth:async(le,ie,Ge)=>{await At(le,ie,Ge),oe(!1)}})]})})]})}Dc.createRoot(document.getElementById("root")).render(E.jsx(zT.StrictMode,{children:E.jsx(qN,{})}));
