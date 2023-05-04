(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Yr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Wr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?as(r):Wr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(V(e))return e}}const ts=/;(?![^(]*\))/g,ns=/:([^]+)/,rs=/\/\*.*?\*\//gs;function as(e){const t={};return e.replace(rs,"").split(ts).forEach(n=>{if(n){const r=n.split(ns);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function $n(e){let t="";if(ee(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=$n(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const is="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",os=Yr(is);function Si(e){return!!e||e===""}const Ye=e=>ee(e)?e:e==null?"":R(e)||V(e)&&(e.toString===Mi||!L(e.toString))?JSON.stringify(e,Ii,2):String(e),Ii=(e,t)=>t&&t.__v_isRef?Ii(e,t.value):_t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ti(t)?{[`Set(${t.size})`]:[...t.values()]}:V(t)&&!R(t)&&!Fi(t)?String(t):t,X={},wt=[],Ae=()=>{},ss=()=>!1,ls=/^on[^a-z]/,Un=e=>ls.test(e),Kr=e=>e.startsWith("onUpdate:"),se=Object.assign,qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fs=Object.prototype.hasOwnProperty,$=(e,t)=>fs.call(e,t),R=Array.isArray,_t=e=>Hn(e)==="[object Map]",Ti=e=>Hn(e)==="[object Set]",L=e=>typeof e=="function",ee=e=>typeof e=="string",Xr=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",Ni=e=>V(e)&&L(e.then)&&L(e.catch),Mi=Object.prototype.toString,Hn=e=>Mi.call(e),cs=e=>Hn(e).slice(8,-1),Fi=e=>Hn(e)==="[object Object]",Vr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},us=/-(\w)/g,Et=Bn(e=>e.replace(us,(t,n)=>n?n.toUpperCase():"")),ds=/\B([A-Z])/g,It=Bn(e=>e.replace(ds,"-$1").toLowerCase()),Ri=Bn(e=>e.charAt(0).toUpperCase()+e.slice(1)),or=Bn(e=>e?`on${Ri(e)}`:""),Tn=(e,t)=>!Object.is(e,t),sr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Nn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ms=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ia;const ps=()=>Ia||(Ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ye;class hs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function gs(e,t=ye){t&&t.active&&t.effects.push(e)}function vs(){return ye}const Jr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Li=e=>(e.w&Ge)>0,ji=e=>(e.n&Ge)>0,bs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ge},ys=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Li(a)&&!ji(a)?a.delete(e):t[n++]=a,a.w&=~Ge,a.n&=~Ge}t.length=n}},vr=new WeakMap;let jt=0,Ge=1;const br=30;let xe;const ut=Symbol(""),yr=Symbol("");class Gr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,gs(this,r)}run(){if(!this.active)return this.fn();let t=xe,n=Ve;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=xe,xe=this,Ve=!0,Ge=1<<++jt,jt<=br?bs(this):Ta(this),this.fn()}finally{jt<=br&&ys(this),Ge=1<<--jt,xe=this.parent,Ve=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(Ta(this),this.onStop&&this.onStop(),this.active=!1)}}function Ta(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ve=!0;const Di=[];function Tt(){Di.push(Ve),Ve=!1}function Nt(){const e=Di.pop();Ve=e===void 0?!0:e}function de(e,t,n){if(Ve&&xe){let r=vr.get(e);r||vr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Jr()),zi(a)}}function zi(e,t){let n=!1;jt<=br?ji(e)||(e.n|=Ge,n=!Li(e)):n=!e.has(xe),n&&(e.add(xe),xe.deps.push(e))}function De(e,t,n,r,a,i){const o=vr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Vr(n)&&s.push(o.get("length")):(s.push(o.get(ut)),_t(e)&&s.push(o.get(yr)));break;case"delete":R(e)||(s.push(o.get(ut)),_t(e)&&s.push(o.get(yr)));break;case"set":_t(e)&&s.push(o.get(ut));break}if(s.length===1)s[0]&&xr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);xr(Jr(l))}}function xr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Na(r);for(const r of n)r.computed||Na(r)}function Na(e,t){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const xs=Yr("__proto__,__v_isRef,__isVue"),$i=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xr)),ws=Zr(),_s=Zr(!1,!0),ks=Zr(!0),Ma=As();function As(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Tt();const r=U(this)[t].apply(this,n);return Nt(),r}}),e}function Os(e){const t=U(this);return de(t,"has",e),t.hasOwnProperty(e)}function Zr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Us:Wi:t?Yi:Bi).get(r))return r;const o=R(r);if(!e){if(o&&$(Ma,a))return Reflect.get(Ma,a,i);if(a==="hasOwnProperty")return Os}const s=Reflect.get(r,a,i);return(Xr(a)?$i.has(a):xs(a))||(e||de(r,"get",a),t)?s:oe(s)?o&&Vr(a)?s:s.value:V(s)?e?Ki(s):Wn(s):s}}const Es=Ui(),Ps=Ui(!0);function Ui(e=!1){return function(n,r,a,i){let o=n[r];if(Yt(o)&&oe(o)&&!oe(a))return!1;if(!e&&(!wr(a)&&!Yt(a)&&(o=U(o),a=U(a)),!R(n)&&oe(o)&&!oe(a)))return o.value=a,!0;const s=R(n)&&Vr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Tn(a,o)&&De(n,"set",r,a):De(n,"add",r,a)),l}}function Cs(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&De(e,"delete",t,void 0),r}function Ss(e,t){const n=Reflect.has(e,t);return(!Xr(t)||!$i.has(t))&&de(e,"has",t),n}function Is(e){return de(e,"iterate",R(e)?"length":ut),Reflect.ownKeys(e)}const Hi={get:ws,set:Es,deleteProperty:Cs,has:Ss,ownKeys:Is},Ts={get:ks,set(e,t){return!0},deleteProperty(e,t){return!0}},Ns=se({},Hi,{get:_s,set:Ps}),Qr=e=>e,Yn=e=>Reflect.getPrototypeOf(e);function ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&de(a,"get",t),de(a,"get",i));const{has:o}=Yn(a),s=r?Qr:n?ra:na;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function fn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function cn(e,t=!1){return e=e.__v_raw,!t&&de(U(e),"iterate",ut),Reflect.get(e,"size",e)}function Fa(e){e=U(e);const t=U(this);return Yn(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function Ra(e,t){t=U(t);const n=U(this),{has:r,get:a}=Yn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Tn(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function La(e){const t=U(this),{has:n,get:r}=Yn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&De(t,"delete",e,void 0),i}function ja(){const e=U(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function un(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Qr:e?ra:na;return!e&&de(s,"iterate",ut),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function dn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=_t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?Qr:t?ra:na;return!t&&de(i,"iterate",l?yr:ut),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:this}}function Ms(){const e={get(i){return ln(this,i)},get size(){return cn(this)},has:fn,add:Fa,set:Ra,delete:La,clear:ja,forEach:un(!1,!1)},t={get(i){return ln(this,i,!1,!0)},get size(){return cn(this)},has:fn,add:Fa,set:Ra,delete:La,clear:ja,forEach:un(!1,!0)},n={get(i){return ln(this,i,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:un(!0,!1)},r={get(i){return ln(this,i,!0,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=dn(i,!1,!1),n[i]=dn(i,!0,!1),t[i]=dn(i,!1,!0),r[i]=dn(i,!0,!0)}),[e,n,t,r]}const[Fs,Rs,Ls,js]=Ms();function ea(e,t){const n=t?e?js:Ls:e?Rs:Fs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Ds={get:ea(!1,!1)},zs={get:ea(!1,!0)},$s={get:ea(!0,!1)},Bi=new WeakMap,Yi=new WeakMap,Wi=new WeakMap,Us=new WeakMap;function Hs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bs(e){return e.__v_skip||!Object.isExtensible(e)?0:Hs(cs(e))}function Wn(e){return Yt(e)?e:ta(e,!1,Hi,Ds,Bi)}function Ys(e){return ta(e,!1,Ns,zs,Yi)}function Ki(e){return ta(e,!0,Ts,$s,Wi)}function ta(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Bs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function kt(e){return Yt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function wr(e){return!!(e&&e.__v_isShallow)}function qi(e){return kt(e)||Yt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Xi(e){return Nn(e,"__v_skip",!0),e}const na=e=>V(e)?Wn(e):e,ra=e=>V(e)?Ki(e):e;function Ws(e){Ve&&xe&&(e=U(e),zi(e.dep||(e.dep=Jr())))}function Ks(e,t){e=U(e);const n=e.dep;n&&xr(n)}function oe(e){return!!(e&&e.__v_isRef===!0)}function _r(e){return oe(e)?e.value:e}const qs={get:(e,t,n)=>_r(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return oe(a)&&!oe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Vi(e){return kt(e)?e:new Proxy(e,qs)}var Ji;class Xs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ji]=!1,this._dirty=!0,this.effect=new Gr(t,()=>{this._dirty||(this._dirty=!0,Ks(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Ws(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Ji="__v_isReadonly";function Vs(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new Xs(r,a,i||!a,n)}function Je(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Kn(i,t,n)}return a}function Oe(e,t,n,r){if(L(e)){const i=Je(e,t,n,r);return i&&Ni(i)&&i.catch(o=>{Kn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Kn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Je(l,null,10,[e,o,s]);return}}Js(e,n,a,r)}function Js(e,t,n,r=!0){console.error(e)}let Wt=!1,kr=!1;const re=[];let Ne=0;const At=[];let je=null,st=0;const Gi=Promise.resolve();let aa=null;function Gs(e){const t=aa||Gi;return e?t.then(this?e.bind(this):e):t}function Zs(e){let t=Ne+1,n=re.length;for(;t<n;){const r=t+n>>>1;Kt(re[r])<e?t=r+1:n=r}return t}function ia(e){(!re.length||!re.includes(e,Wt&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?re.push(e):re.splice(Zs(e.id),0,e),Zi())}function Zi(){!Wt&&!kr&&(kr=!0,aa=Gi.then(eo))}function Qs(e){const t=re.indexOf(e);t>Ne&&re.splice(t,1)}function el(e){R(e)?At.push(...e):(!je||!je.includes(e,e.allowRecurse?st+1:st))&&At.push(e),Zi()}function Da(e,t=Wt?Ne+1:0){for(;t<re.length;t++){const n=re[t];n&&n.pre&&(re.splice(t,1),t--,n())}}function Qi(e){if(At.length){const t=[...new Set(At)];if(At.length=0,je){je.push(...t);return}for(je=t,je.sort((n,r)=>Kt(n)-Kt(r)),st=0;st<je.length;st++)je[st]();je=null,st=0}}const Kt=e=>e.id==null?1/0:e.id,tl=(e,t)=>{const n=Kt(e)-Kt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function eo(e){kr=!1,Wt=!0,re.sort(tl);const t=Ae;try{for(Ne=0;Ne<re.length;Ne++){const n=re[Ne];n&&n.active!==!1&&Je(n,null,14)}}finally{Ne=0,re.length=0,Qi(),Wt=!1,aa=null,(re.length||At.length)&&eo()}}function nl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||X;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||X;h&&(a=n.map(_=>ee(_)?_.trim():_)),m&&(a=n.map(ms))}let s,l=r[s=or(t)]||r[s=or(Et(t))];!l&&i&&(l=r[s=or(It(t))]),l&&Oe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(c,e,6,a)}}function to(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const u=to(c,t,!0);u&&(s=!0,se(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(V(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):se(o,i),V(e)&&r.set(e,o),o)}function qn(e,t){return!e||!Un(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,It(t))||$(e,t))}let Me=null,Xn=null;function Mn(e){const t=Me;return Me=e,Xn=e&&e.type.__scopeId||null,t}function rl(e){Xn=e}function al(){Xn=null}function il(e,t=Me,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ka(-1);const i=Mn(t);let o;try{o=e(...a)}finally{Mn(i),r._d&&Ka(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function lr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:h,setupState:_,ctx:M,inheritAttrs:C}=e;let D,x;const P=Mn(e);try{if(n.shapeFlag&4){const j=a||r;D=Te(u.call(j,j,m,i,_,h,M)),x=l}else{const j=t;D=Te(j.length>1?j(i,{attrs:l,slots:s,emit:c}):j(i,null)),x=t.props?l:ol(l)}}catch(j){$t.length=0,Kn(j,e,1),D=ue(mt)}let E=D;if(x&&C!==!1){const j=Object.keys(x),{shapeFlag:H}=E;j.length&&H&7&&(o&&j.some(Kr)&&(x=sl(x,o)),E=Pt(E,x))}return n.dirs&&(E=Pt(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),D=E,Mn(P),D}const ol=e=>{let t;for(const n in e)(n==="class"||n==="style"||Un(n))&&((t||(t={}))[n]=e[n]);return t},sl=(e,t)=>{const n={};for(const r in e)(!Kr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ll(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?za(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!qn(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?za(r,o,c):!0:!!o;return!1}function za(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!qn(n,i))return!0}return!1}function fl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const cl=e=>e.__isSuspense;function ul(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):el(e)}function dl(e,t){if(Q){let n=Q.provides;const r=Q.parent&&Q.parent.provides;r===n&&(n=Q.provides=Object.create(r)),n[e]=t}}function On(e,t,n=!1){const r=Q||Me;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const mn={};function En(e,t,n){return no(e,t,n)}function no(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=X){const s=vs()===(Q==null?void 0:Q.scope)?Q:null;let l,c=!1,u=!1;if(oe(e)?(l=()=>e.value,c=wr(e)):kt(e)?(l=()=>e,r=!0):R(e)?(u=!0,c=e.some(E=>kt(E)||wr(E)),l=()=>e.map(E=>{if(oe(E))return E.value;if(kt(E))return bt(E);if(L(E))return Je(E,s,2)})):L(e)?t?l=()=>Je(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Oe(e,s,3,[h])}:l=Ae,t&&r){const E=l;l=()=>bt(E())}let m,h=E=>{m=x.onStop=()=>{Je(E,s,4)}},_;if(Xt)if(h=Ae,t?n&&Oe(t,s,3,[l(),u?[]:void 0,h]):l(),a==="sync"){const E=of();_=E.__watcherHandles||(E.__watcherHandles=[])}else return Ae;let M=u?new Array(e.length).fill(mn):mn;const C=()=>{if(x.active)if(t){const E=x.run();(r||c||(u?E.some((j,H)=>Tn(j,M[H])):Tn(E,M)))&&(m&&m(),Oe(t,s,3,[E,M===mn?void 0:u&&M[0]===mn?[]:M,h]),M=E)}else x.run()};C.allowRecurse=!!t;let D;a==="sync"?D=C:a==="post"?D=()=>ce(C,s&&s.suspense):(C.pre=!0,s&&(C.id=s.uid),D=()=>ia(C));const x=new Gr(l,D);t?n?C():M=x.run():a==="post"?ce(x.run.bind(x),s&&s.suspense):x.run();const P=()=>{x.stop(),s&&s.scope&&qr(s.scope.effects,x)};return _&&_.push(P),P}function ml(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?ro(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=Q;Ct(this);const s=no(a,i.bind(r),n);return o?Ct(o):dt(),s}function ro(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function bt(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),oe(e))bt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)bt(e[n],t);else if(Ti(e)||_t(e))e.forEach(n=>{bt(n,t)});else if(Fi(e))for(const n in e)bt(e[n],t);return e}function Vn(e){return L(e)?{setup:e,name:e.name}:e}const Pn=e=>!!e.type.__asyncLoader,ao=e=>e.type.__isKeepAlive;function pl(e,t){io(e,"a",t)}function hl(e,t){io(e,"da",t)}function io(e,t,n=Q){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Jn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ao(a.parent.vnode)&&gl(r,t,n,a),a=a.parent}}function gl(e,t,n,r){const a=Jn(t,e,r,!0);so(()=>{qr(r[t],a)},n)}function Jn(e,t,n=Q,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Tt(),Ct(n);const s=Oe(t,n,e,o);return dt(),Nt(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=Q)=>(!Xt||e==="sp")&&Jn(e,(...r)=>t(...r),n),vl=He("bm"),oo=He("m"),bl=He("bu"),yl=He("u"),xl=He("bum"),so=He("um"),wl=He("sp"),_l=He("rtg"),kl=He("rtc");function Al(e,t=Q){Jn("ec",e,t)}function rt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Tt(),Oe(l,n,8,[e.el,s,e,t]),Nt())}}const Ol=Symbol();function El(e,t,n,r){let a;const i=n&&n[r];if(R(e)||ee(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(V(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Ar=e=>e?yo(e)?fa(e)||e.proxy:Ar(e.parent):null,zt=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ar(e.parent),$root:e=>Ar(e.root),$emit:e=>e.emit,$options:e=>oa(e),$forceUpdate:e=>e.f||(e.f=()=>ia(e.update)),$nextTick:e=>e.n||(e.n=Gs.bind(e.proxy)),$watch:e=>ml.bind(e)}),fr=(e,t)=>e!==X&&!e.__isScriptSetup&&$(e,t),Pl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(fr(r,t))return o[t]=1,r[t];if(a!==X&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==X&&$(n,t))return o[t]=4,n[t];Or&&(o[t]=0)}}const u=zt[t];let m,h;if(u)return t==="$attrs"&&de(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==X&&$(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,$(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return fr(a,t)?(a[t]=n,!0):r!==X&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==X&&$(e,o)||fr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(zt,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Or=!0;function Cl(e){const t=oa(e),n=e.proxy,r=e.ctx;Or=!1,t.beforeCreate&&$a(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:h,beforeUpdate:_,updated:M,activated:C,deactivated:D,beforeDestroy:x,beforeUnmount:P,destroyed:E,unmounted:j,render:H,renderTracked:le,renderTriggered:ne,errorCaptured:ve,serverPrefetch:he,expose:Re,inheritAttrs:Ft,components:rn,directives:an,filters:rr}=t;if(c&&Sl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const Y=o[J];L(Y)&&(r[J]=Y.bind(n))}if(a){const J=a.call(n,n);V(J)&&(e.data=Wn(J))}if(Or=!0,i)for(const J in i){const Y=i[J],tt=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Ae,on=!L(Y)&&L(Y.set)?Y.set.bind(n):Ae,nt=ge({get:tt,set:on});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ee=>nt.value=Ee})}if(s)for(const J in s)lo(s[J],r,n,J);if(l){const J=L(l)?l.call(n):l;Reflect.ownKeys(J).forEach(Y=>{dl(Y,J[Y])})}u&&$a(u,e,"c");function ae(J,Y){R(Y)?Y.forEach(tt=>J(tt.bind(n))):Y&&J(Y.bind(n))}if(ae(vl,m),ae(oo,h),ae(bl,_),ae(yl,M),ae(pl,C),ae(hl,D),ae(Al,ve),ae(kl,le),ae(_l,ne),ae(xl,P),ae(so,j),ae(wl,he),R(Re))if(Re.length){const J=e.exposed||(e.exposed={});Re.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:tt=>n[Y]=tt})})}else e.exposed||(e.exposed={});H&&e.render===Ae&&(e.render=H),Ft!=null&&(e.inheritAttrs=Ft),rn&&(e.components=rn),an&&(e.directives=an)}function Sl(e,t,n=Ae,r=!1){R(e)&&(e=Er(e));for(const a in e){const i=e[a];let o;V(i)?"default"in i?o=On(i.from||a,i.default,!0):o=On(i.from||a):o=On(i),oe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function $a(e,t,n){Oe(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function lo(e,t,n,r){const a=r.includes(".")?ro(n,r):()=>n[r];if(ee(e)){const i=t[e];L(i)&&En(a,i)}else if(L(e))En(a,e.bind(n));else if(V(e))if(R(e))e.forEach(i=>lo(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&En(a,i,e)}}function oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Fn(l,c,o,!0)),Fn(l,t,o)),V(t)&&i.set(t,l),l}function Fn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Fn(e,i,n,!0),a&&a.forEach(o=>Fn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Il[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Il={data:Ua,props:ot,emits:ot,methods:ot,computed:ot,beforeCreate:ie,created:ie,beforeMount:ie,mounted:ie,beforeUpdate:ie,updated:ie,beforeDestroy:ie,beforeUnmount:ie,destroyed:ie,unmounted:ie,activated:ie,deactivated:ie,errorCaptured:ie,serverPrefetch:ie,components:ot,directives:ot,watch:Nl,provide:Ua,inject:Tl};function Ua(e,t){return t?e?function(){return se(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Tl(e,t){return ot(Er(e),Er(t))}function Er(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ie(e,t){return e?[...new Set([].concat(e,t))]:t}function ot(e,t){return e?se(se(Object.create(null),e),t):t}function Nl(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const r in t)n[r]=ie(e[r],t[r]);return n}function Ml(e,t,n,r=!1){const a={},i={};Nn(i,Zn,1),e.propsDefaults=Object.create(null),fo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ys(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Fl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(qn(e.emitsOptions,h))continue;const _=t[h];if(l)if($(i,h))_!==i[h]&&(i[h]=_,c=!0);else{const M=Et(h);a[M]=Pr(l,s,M,_,e,!1)}else _!==i[h]&&(i[h]=_,c=!0)}}}else{fo(e,t,a,i)&&(c=!0);let u;for(const m in s)(!t||!$(t,m)&&((u=It(m))===m||!$(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Pr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&De(e,"set","$attrs")}function fo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(An(l))continue;const c=t[l];let u;a&&$(a,u=Et(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:qn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||X;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Pr(a,l,m,c[m],e,!$(c,m))}}return o}function Pr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ct(a),r=c[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===It(n))&&(r=!0))}return r}function co(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const u=m=>{l=!0;const[h,_]=co(m,t,!0);se(o,h),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return V(e)&&r.set(e,wt),wt;if(R(i))for(let u=0;u<i.length;u++){const m=Et(i[u]);Ha(m)&&(o[m]=X)}else if(i)for(const u in i){const m=Et(u);if(Ha(m)){const h=i[u],_=o[m]=R(h)||L(h)?{type:h}:Object.assign({},h);if(_){const M=Wa(Boolean,_.type),C=Wa(String,_.type);_[0]=M>-1,_[1]=C<0||M<C,(M>-1||$(_,"default"))&&s.push(m)}}}const c=[o,s];return V(e)&&r.set(e,c),c}function Ha(e){return e[0]!=="$"}function Ba(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ya(e,t){return Ba(e)===Ba(t)}function Wa(e,t){return R(t)?t.findIndex(n=>Ya(n,e)):L(t)&&Ya(t,e)?0:-1}const uo=e=>e[0]==="_"||e==="$stable",sa=e=>R(e)?e.map(Te):[Te(e)],Rl=(e,t,n)=>{if(t._n)return t;const r=il((...a)=>sa(t(...a)),n);return r._c=!1,r},mo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(uo(a))continue;const i=e[a];if(L(i))t[a]=Rl(a,i,r);else if(i!=null){const o=sa(i);t[a]=()=>o}}},po=(e,t)=>{const n=sa(t);e.slots.default=()=>n},Ll=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Nn(t,"_",n)):mo(t,e.slots={})}else e.slots={},t&&po(e,t);Nn(e.slots,Zn,1)},jl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=X;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(se(a,t),!n&&s===1&&delete a._):(i=!t.$stable,mo(t,a)),o=t}else t&&(po(e,t),o={default:1});if(i)for(const s in a)!uo(s)&&!(s in o)&&delete a[s]};function ho(){return{app:null,config:{isNativeTag:ss,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dl=0;function zl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!V(a)&&(a=null);const i=ho(),o=new Set;let s=!1;const l=i.app={_uid:Dl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:sf,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...u)):L(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const h=ue(r,a);return h.appContext=i,u&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,fa(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function Cr(e,t,n,r,a=!1){if(R(e)){e.forEach((h,_)=>Cr(h,t&&(R(t)?t[_]:t),n,r,a));return}if(Pn(r)&&!a)return;const i=r.shapeFlag&4?fa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===X?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ee(c)?(u[c]=null,$(m,c)&&(m[c]=null)):oe(c)&&(c.value=null)),L(l))Je(l,s,12,[o,u]);else{const h=ee(l),_=oe(l);if(h||_){const M=()=>{if(e.f){const C=h?$(m,l)?m[l]:u[l]:l.value;a?R(C)&&qr(C,i):R(C)?C.includes(i)||C.push(i):h?(u[l]=[i],$(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,$(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(u[e.k]=o))};o?(M.id=-1,ce(M,n)):M()}}}const ce=ul;function $l(e){return Ul(e)}function Ul(e,t){const n=ps();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:h,setScopeId:_=Ae,insertStaticContent:M}=e,C=(f,d,p,v=null,g=null,w=null,A=!1,y=null,k=!!d.dynamicChildren)=>{if(f===d)return;f&&!Lt(f,d)&&(v=sn(f),Ee(f,g,w,!0),f=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:b,ref:T,shapeFlag:S}=d;switch(b){case Gn:D(f,d,p,v);break;case mt:x(f,d,p,v);break;case cr:f==null&&P(d,p,v,A);break;case Se:rn(f,d,p,v,g,w,A,y,k);break;default:S&1?H(f,d,p,v,g,w,A,y,k):S&6?an(f,d,p,v,g,w,A,y,k):(S&64||S&128)&&b.process(f,d,p,v,g,w,A,y,k,gt)}T!=null&&g&&Cr(T,f&&f.ref,w,d||f,!d)},D=(f,d,p,v)=>{if(f==null)r(d.el=s(d.children),p,v);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},x=(f,d,p,v)=>{f==null?r(d.el=l(d.children||""),p,v):d.el=f.el},P=(f,d,p,v)=>{[f.el,f.anchor]=M(f.children,d,p,v,f.el,f.anchor)},E=({el:f,anchor:d},p,v)=>{let g;for(;f&&f!==d;)g=h(f),r(f,p,v),f=g;r(d,p,v)},j=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=h(f),a(f),f=p;a(d)},H=(f,d,p,v,g,w,A,y,k)=>{A=A||d.type==="svg",f==null?le(d,p,v,g,w,A,y,k):he(f,d,g,w,A,y,k)},le=(f,d,p,v,g,w,A,y)=>{let k,b;const{type:T,props:S,shapeFlag:N,transition:F,dirs:z}=f;if(k=f.el=o(f.type,w,S&&S.is,S),N&8?u(k,f.children):N&16&&ve(f.children,k,null,v,g,w&&T!=="foreignObject",A,y),z&&rt(f,null,v,"created"),ne(k,f,f.scopeId,A,v),S){for(const B in S)B!=="value"&&!An(B)&&i(k,B,null,S[B],w,f.children,v,g,Le);"value"in S&&i(k,"value",null,S.value),(b=S.onVnodeBeforeMount)&&Ce(b,v,f)}z&&rt(f,null,v,"beforeMount");const W=(!g||g&&!g.pendingBranch)&&F&&!F.persisted;W&&F.beforeEnter(k),r(k,d,p),((b=S&&S.onVnodeMounted)||W||z)&&ce(()=>{b&&Ce(b,v,f),W&&F.enter(k),z&&rt(f,null,v,"mounted")},g)},ne=(f,d,p,v,g)=>{if(p&&_(f,p),v)for(let w=0;w<v.length;w++)_(f,v[w]);if(g){let w=g.subTree;if(d===w){const A=g.vnode;ne(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},ve=(f,d,p,v,g,w,A,y,k=0)=>{for(let b=k;b<f.length;b++){const T=f[b]=y?Xe(f[b]):Te(f[b]);C(null,T,d,p,v,g,w,A,y)}},he=(f,d,p,v,g,w,A)=>{const y=d.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:T}=d;k|=f.patchFlag&16;const S=f.props||X,N=d.props||X;let F;p&&at(p,!1),(F=N.onVnodeBeforeUpdate)&&Ce(F,p,d,f),T&&rt(d,f,p,"beforeUpdate"),p&&at(p,!0);const z=g&&d.type!=="foreignObject";if(b?Re(f.dynamicChildren,b,y,p,v,z,w):A||Y(f,d,y,null,p,v,z,w,!1),k>0){if(k&16)Ft(y,d,S,N,p,v,g);else if(k&2&&S.class!==N.class&&i(y,"class",null,N.class,g),k&4&&i(y,"style",S.style,N.style,g),k&8){const W=d.dynamicProps;for(let B=0;B<W.length;B++){const Z=W[B],be=S[Z],vt=N[Z];(vt!==be||Z==="value")&&i(y,Z,be,vt,g,f.children,p,v,Le)}}k&1&&f.children!==d.children&&u(y,d.children)}else!A&&b==null&&Ft(y,d,S,N,p,v,g);((F=N.onVnodeUpdated)||T)&&ce(()=>{F&&Ce(F,p,d,f),T&&rt(d,f,p,"updated")},v)},Re=(f,d,p,v,g,w,A)=>{for(let y=0;y<d.length;y++){const k=f[y],b=d[y],T=k.el&&(k.type===Se||!Lt(k,b)||k.shapeFlag&70)?m(k.el):p;C(k,b,T,null,v,g,w,A,!0)}},Ft=(f,d,p,v,g,w,A)=>{if(p!==v){if(p!==X)for(const y in p)!An(y)&&!(y in v)&&i(f,y,p[y],null,A,d.children,g,w,Le);for(const y in v){if(An(y))continue;const k=v[y],b=p[y];k!==b&&y!=="value"&&i(f,y,b,k,A,d.children,g,w,Le)}"value"in v&&i(f,"value",p.value,v.value)}},rn=(f,d,p,v,g,w,A,y,k)=>{const b=d.el=f?f.el:s(""),T=d.anchor=f?f.anchor:s("");let{patchFlag:S,dynamicChildren:N,slotScopeIds:F}=d;F&&(y=y?y.concat(F):F),f==null?(r(b,p,v),r(T,p,v),ve(d.children,p,T,g,w,A,y,k)):S>0&&S&64&&N&&f.dynamicChildren?(Re(f.dynamicChildren,N,p,g,w,A,y),(d.key!=null||g&&d===g.subTree)&&go(f,d,!0)):Y(f,d,p,T,g,w,A,y,k)},an=(f,d,p,v,g,w,A,y,k)=>{d.slotScopeIds=y,f==null?d.shapeFlag&512?g.ctx.activate(d,p,v,A,k):rr(d,p,v,g,w,A,k):Aa(f,d,k)},rr=(f,d,p,v,g,w,A)=>{const y=f.component=Zl(f,v,g);if(ao(f)&&(y.ctx.renderer=gt),Ql(y),y.asyncDep){if(g&&g.registerDep(y,ae),!f.el){const k=y.subTree=ue(mt);x(null,k,d,p)}return}ae(y,f,d,p,g,w,A)},Aa=(f,d,p)=>{const v=d.component=f.component;if(ll(f,d,p))if(v.asyncDep&&!v.asyncResolved){J(v,d,p);return}else v.next=d,Qs(v.update),v.update();else d.el=f.el,v.vnode=d},ae=(f,d,p,v,g,w,A)=>{const y=()=>{if(f.isMounted){let{next:T,bu:S,u:N,parent:F,vnode:z}=f,W=T,B;at(f,!1),T?(T.el=z.el,J(f,T,A)):T=z,S&&sr(S),(B=T.props&&T.props.onVnodeBeforeUpdate)&&Ce(B,F,T,z),at(f,!0);const Z=lr(f),be=f.subTree;f.subTree=Z,C(be,Z,m(be.el),sn(be),f,g,w),T.el=Z.el,W===null&&fl(f,Z.el),N&&ce(N,g),(B=T.props&&T.props.onVnodeUpdated)&&ce(()=>Ce(B,F,T,z),g)}else{let T;const{el:S,props:N}=d,{bm:F,m:z,parent:W}=f,B=Pn(d);if(at(f,!1),F&&sr(F),!B&&(T=N&&N.onVnodeBeforeMount)&&Ce(T,W,d),at(f,!0),S&&ir){const Z=()=>{f.subTree=lr(f),ir(S,f.subTree,f,g,null)};B?d.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=lr(f);C(null,Z,p,v,f,g,w),d.el=Z.el}if(z&&ce(z,g),!B&&(T=N&&N.onVnodeMounted)){const Z=d;ce(()=>Ce(T,W,Z),g)}(d.shapeFlag&256||W&&Pn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ce(f.a,g),f.isMounted=!0,d=p=v=null}},k=f.effect=new Gr(y,()=>ia(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,at(f,!0),b()},J=(f,d,p)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,Fl(f,d.props,v,p),jl(f,d.children,p),Tt(),Da(),Nt()},Y=(f,d,p,v,g,w,A,y,k=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,S=d.children,{patchFlag:N,shapeFlag:F}=d;if(N>0){if(N&128){on(b,S,p,v,g,w,A,y,k);return}else if(N&256){tt(b,S,p,v,g,w,A,y,k);return}}F&8?(T&16&&Le(b,g,w),S!==b&&u(p,S)):T&16?F&16?on(b,S,p,v,g,w,A,y,k):Le(b,g,w,!0):(T&8&&u(p,""),F&16&&ve(S,p,v,g,w,A,y,k))},tt=(f,d,p,v,g,w,A,y,k)=>{f=f||wt,d=d||wt;const b=f.length,T=d.length,S=Math.min(b,T);let N;for(N=0;N<S;N++){const F=d[N]=k?Xe(d[N]):Te(d[N]);C(f[N],F,p,null,g,w,A,y,k)}b>T?Le(f,g,w,!0,!1,S):ve(d,p,v,g,w,A,y,k,S)},on=(f,d,p,v,g,w,A,y,k)=>{let b=0;const T=d.length;let S=f.length-1,N=T-1;for(;b<=S&&b<=N;){const F=f[b],z=d[b]=k?Xe(d[b]):Te(d[b]);if(Lt(F,z))C(F,z,p,null,g,w,A,y,k);else break;b++}for(;b<=S&&b<=N;){const F=f[S],z=d[N]=k?Xe(d[N]):Te(d[N]);if(Lt(F,z))C(F,z,p,null,g,w,A,y,k);else break;S--,N--}if(b>S){if(b<=N){const F=N+1,z=F<T?d[F].el:v;for(;b<=N;)C(null,d[b]=k?Xe(d[b]):Te(d[b]),p,z,g,w,A,y,k),b++}}else if(b>N)for(;b<=S;)Ee(f[b],g,w,!0),b++;else{const F=b,z=b,W=new Map;for(b=z;b<=N;b++){const me=d[b]=k?Xe(d[b]):Te(d[b]);me.key!=null&&W.set(me.key,b)}let B,Z=0;const be=N-z+1;let vt=!1,Pa=0;const Rt=new Array(be);for(b=0;b<be;b++)Rt[b]=0;for(b=F;b<=S;b++){const me=f[b];if(Z>=be){Ee(me,g,w,!0);continue}let Pe;if(me.key!=null)Pe=W.get(me.key);else for(B=z;B<=N;B++)if(Rt[B-z]===0&&Lt(me,d[B])){Pe=B;break}Pe===void 0?Ee(me,g,w,!0):(Rt[Pe-z]=b+1,Pe>=Pa?Pa=Pe:vt=!0,C(me,d[Pe],p,null,g,w,A,y,k),Z++)}const Ca=vt?Hl(Rt):wt;for(B=Ca.length-1,b=be-1;b>=0;b--){const me=z+b,Pe=d[me],Sa=me+1<T?d[me+1].el:v;Rt[b]===0?C(null,Pe,p,Sa,g,w,A,y,k):vt&&(B<0||b!==Ca[B]?nt(Pe,p,Sa,2):B--)}}},nt=(f,d,p,v,g=null)=>{const{el:w,type:A,transition:y,children:k,shapeFlag:b}=f;if(b&6){nt(f.component.subTree,d,p,v);return}if(b&128){f.suspense.move(d,p,v);return}if(b&64){A.move(f,d,p,gt);return}if(A===Se){r(w,d,p);for(let S=0;S<k.length;S++)nt(k[S],d,p,v);r(f.anchor,d,p);return}if(A===cr){E(f,d,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(w),r(w,d,p),ce(()=>y.enter(w),g);else{const{leave:S,delayLeave:N,afterLeave:F}=y,z=()=>r(w,d,p),W=()=>{S(w,()=>{z(),F&&F()})};N?N(w,z,W):W()}else r(w,d,p)},Ee=(f,d,p,v=!1,g=!1)=>{const{type:w,props:A,ref:y,children:k,dynamicChildren:b,shapeFlag:T,patchFlag:S,dirs:N}=f;if(y!=null&&Cr(y,null,p,f,!0),T&256){d.ctx.deactivate(f);return}const F=T&1&&N,z=!Pn(f);let W;if(z&&(W=A&&A.onVnodeBeforeUnmount)&&Ce(W,d,f),T&6)es(f.component,p,v);else{if(T&128){f.suspense.unmount(p,v);return}F&&rt(f,null,d,"beforeUnmount"),T&64?f.type.remove(f,d,p,g,gt,v):b&&(w!==Se||S>0&&S&64)?Le(b,d,p,!1,!0):(w===Se&&S&384||!g&&T&16)&&Le(k,d,p),v&&Oa(f)}(z&&(W=A&&A.onVnodeUnmounted)||F)&&ce(()=>{W&&Ce(W,d,f),F&&rt(f,null,d,"unmounted")},p)},Oa=f=>{const{type:d,el:p,anchor:v,transition:g}=f;if(d===Se){Qo(p,v);return}if(d===cr){j(f);return}const w=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:y}=g,k=()=>A(p,w);y?y(f.el,w,k):k()}else w()},Qo=(f,d)=>{let p;for(;f!==d;)p=h(f),a(f),f=p;a(d)},es=(f,d,p)=>{const{bum:v,scope:g,update:w,subTree:A,um:y}=f;v&&sr(v),g.stop(),w&&(w.active=!1,Ee(A,f,d,p)),y&&ce(y,d),ce(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Le=(f,d,p,v=!1,g=!1,w=0)=>{for(let A=w;A<f.length;A++)Ee(f[A],d,p,v,g)},sn=f=>f.shapeFlag&6?sn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Ea=(f,d,p)=>{f==null?d._vnode&&Ee(d._vnode,null,null,!0):C(d._vnode||null,f,d,null,null,null,p),Da(),Qi(),d._vnode=f},gt={p:C,um:Ee,m:nt,r:Oa,mt:rr,mc:ve,pc:Y,pbc:Re,n:sn,o:e};let ar,ir;return t&&([ar,ir]=t(gt)),{render:Ea,hydrate:ar,createApp:zl(Ea,ar)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function go(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Xe(a[i]),s.el=o.el),n||go(o,s)),s.type===Gn&&(s.el=o.el)}}function Hl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Bl=e=>e.__isTeleport,Se=Symbol(void 0),Gn=Symbol(void 0),mt=Symbol(void 0),cr=Symbol(void 0),$t=[];let _e=null;function qe(e=!1){$t.push(_e=e?null:[])}function Yl(){$t.pop(),_e=$t[$t.length-1]||null}let qt=1;function Ka(e){qt+=e}function vo(e){return e.dynamicChildren=qt>0?_e||wt:null,Yl(),qt>0&&_e&&_e.push(e),e}function it(e,t,n,r,a,i){return vo(Ie(e,t,n,r,a,i,!0))}function Wl(e,t,n,r,a){return vo(ue(e,t,n,r,a,!0))}function Sr(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const Zn="__vInternal",bo=({key:e})=>e??null,Cn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ee(e)||oe(e)||L(e)?{i:Me,r:e,k:t,f:!!n}:e:null;function Ie(e,t=null,n=null,r=0,a=null,i=e===Se?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&bo(t),ref:t&&Cn(t),scopeId:Xn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Me};return s?(la(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),qt>0&&!o&&_e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_e.push(l),l}const ue=Kl;function Kl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ol)&&(e=mt),Sr(e)){const s=Pt(e,t,!0);return n&&la(s,n),qt>0&&!i&&_e&&(s.shapeFlag&6?_e[_e.indexOf(e)]=s:_e.push(s)),s.patchFlag|=-2,s}if(rf(e)&&(e=e.__vccOpts),t){t=ql(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=$n(s)),V(l)&&(qi(l)&&!R(l)&&(l=se({},l)),t.style=Wr(l))}const o=ee(e)?1:cl(e)?128:Bl(e)?64:V(e)?4:L(e)?2:0;return Ie(e,t,n,r,a,o,i,!0)}function ql(e){return e?qi(e)||Zn in e?se({},e):e:null}function Pt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Vl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&bo(s),ref:t&&t.ref?n&&a?R(a)?a.concat(Cn(t)):[a,Cn(t)]:Cn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Xl(e=" ",t=0){return ue(Gn,null,e,t)}function pn(e="",t=!1){return t?(qe(),Wl(mt,null,e)):ue(mt,null,e)}function Te(e){return e==null||typeof e=="boolean"?ue(mt):R(e)?ue(Se,null,e.slice()):typeof e=="object"?Xe(e):ue(Gn,null,String(e))}function Xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function la(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),la(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Zn in t)?t._ctx=Me:a===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),r&64?(n=16,t=[Xl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Vl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=$n([t.class,r.class]));else if(a==="style")t.style=Wr([t.style,r.style]);else if(Un(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ce(e,t,n,r=null){Oe(e,t,7,[n,r])}const Jl=ho();let Gl=0;function Zl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Jl,i={uid:Gl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new hs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:co(r,a),emitsOptions:to(r,a),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=nl.bind(null,i),e.ce&&e.ce(i),i}let Q=null;const Ct=e=>{Q=e,e.scope.on()},dt=()=>{Q&&Q.scope.off(),Q=null};function yo(e){return e.vnode.shapeFlag&4}let Xt=!1;function Ql(e,t=!1){Xt=t;const{props:n,children:r}=e.vnode,a=yo(e);Ml(e,n,a,t),Ll(e,r);const i=a?ef(e,t):void 0;return Xt=!1,i}function ef(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Xi(new Proxy(e.ctx,Pl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?nf(e):null;Ct(e),Tt();const i=Je(r,e,0,[e.props,a]);if(Nt(),dt(),Ni(i)){if(i.then(dt,dt),t)return i.then(o=>{qa(e,o,t)}).catch(o=>{Kn(o,e,0)});e.asyncDep=i}else qa(e,i,t)}else xo(e,t)}function qa(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=Vi(t)),xo(e,n)}let Xa;function xo(e,t,n){const r=e.type;if(!e.render){if(!t&&Xa&&!r.render){const a=r.template||oa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=se(se({isCustomElement:i,delimiters:s},o),l);r.render=Xa(a,c)}}e.render=r.render||Ae}Ct(e),Tt(),Cl(e),Nt(),dt()}function tf(e){return new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}})}function nf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=tf(e))},slots:e.slots,emit:e.emit,expose:t}}function fa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Vi(Xi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in zt)return zt[n](e)},has(t,n){return n in t||n in zt}}))}function rf(e){return L(e)&&"__vccOpts"in e}const ge=(e,t)=>Vs(e,t,Xt);function wo(e,t,n){const r=arguments.length;return r===2?V(t)&&!R(t)?Sr(t)?ue(e,null,[t]):ue(e,t):ue(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Sr(n)&&(n=[n]),ue(e,t,n))}const af=Symbol(""),of=()=>On(af),sf="3.2.47",lf="http://www.w3.org/2000/svg",lt=typeof document<"u"?document:null,Va=lt&&lt.createElement("template"),ff={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?lt.createElementNS(lf,e):lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Va.innerHTML=r?`<svg>${e}</svg>`:e;const s=Va.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function cf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function uf(e,t,n){const r=e.style,a=ee(n);if(n&&!a){if(t&&!ee(t))for(const i in t)n[i]==null&&Ir(r,i,"");for(const i in n)Ir(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ja=/\s*!important$/;function Ir(e,t,n){if(R(n))n.forEach(r=>Ir(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=df(e,t);Ja.test(n)?e.setProperty(It(r),n.replace(Ja,""),"important"):e[r]=n}}const Ga=["Webkit","Moz","ms"],ur={};function df(e,t){const n=ur[t];if(n)return n;let r=Et(t);if(r!=="filter"&&r in e)return ur[t]=r;r=Ri(r);for(let a=0;a<Ga.length;a++){const i=Ga[a]+r;if(i in e)return ur[t]=i}return t}const Za="http://www.w3.org/1999/xlink";function mf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Za,t.slice(6,t.length)):e.setAttributeNS(Za,t,n);else{const i=os(t);n==null||i&&!Si(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function pf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Si(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function hf(e,t,n,r){e.addEventListener(t,n,r)}function gf(e,t,n,r){e.removeEventListener(t,n,r)}function vf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=bf(t);if(r){const c=i[t]=wf(r,a);hf(e,s,c,l)}else o&&(gf(e,s,o,l),i[t]=void 0)}}const Qa=/(?:Once|Passive|Capture)$/;function bf(e){let t;if(Qa.test(e)){t={};let r;for(;r=e.match(Qa);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let dr=0;const yf=Promise.resolve(),xf=()=>dr||(yf.then(()=>dr=0),dr=Date.now());function wf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(_f(r,n.value),t,5,[r])};return n.value=e,n.attached=xf(),n}function _f(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ei=/^on[a-z]/,kf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?cf(e,r,a):t==="style"?uf(e,n,r):Un(t)?Kr(t)||vf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Af(e,t,r,a))?pf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),mf(e,t,r,a))};function Af(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ei.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ei.test(t)&&ee(n)?!1:t in e}const Of=se({patchProp:kf},ff);let ti;function Ef(){return ti||(ti=$l(Of))}const Pf=(...e)=>{const t=Ef().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Cf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Cf(e){return ee(e)?document.querySelector(e):e}function ni(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ni(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ni(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Rn(e){return Rn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rn(e)}function Sf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ri(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function If(e,t,n){return t&&ri(e.prototype,t),n&&ri(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ca(e,t){return Nf(e)||Ff(e,t)||_o(e,t)||Lf()}function en(e){return Tf(e)||Mf(e)||_o(e)||Rf()}function Tf(e){if(Array.isArray(e))return Tr(e)}function Nf(e){if(Array.isArray(e))return e}function Mf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ff(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function _o(e,t){if(e){if(typeof e=="string")return Tr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tr(e,t)}}function Tr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Rf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ai=function(){},ua={},ko={},Ao=null,Oo={mark:ai,measure:ai};try{typeof window<"u"&&(ua=window),typeof document<"u"&&(ko=document),typeof MutationObserver<"u"&&(Ao=MutationObserver),typeof performance<"u"&&(Oo=performance)}catch{}var jf=ua.navigator||{},ii=jf.userAgent,oi=ii===void 0?"":ii,Ze=ua,q=ko,si=Ao,hn=Oo;Ze.document;var Be=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",Eo=~oi.indexOf("MSIE")||~oi.indexOf("Trident/"),gn,vn,bn,yn,xn,ze="___FONT_AWESOME___",Nr=16,Po="fa",Co="svg-inline--fa",pt="data-fa-i2svg",Mr="data-fa-pseudo-element",Df="data-fa-pseudo-element-pending",da="data-prefix",ma="data-icon",li="fontawesome-i2svg",zf="async",$f=["HTML","HEAD","STYLE","SCRIPT"],So=function(){try{return!0}catch{return!1}}(),K="classic",G="sharp",pa=[K,G];function tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Vt=tn((gn={},te(gn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(gn,G,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),gn)),Jt=tn((vn={},te(vn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(vn,G,{solid:"fass",regular:"fasr",light:"fasl"}),vn)),Gt=tn((bn={},te(bn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(bn,G,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),bn)),Uf=tn((yn={},te(yn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(yn,G,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),yn)),Hf=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Io="fa-layers-text",Bf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Yf=tn((xn={},te(xn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(xn,G,{900:"fass",400:"fasr",300:"fasl"}),xn)),To=[1,2,3,4,5,6,7,8,9,10],Wf=To.concat([11,12,13,14,15,16,17,18,19,20]),Kf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zt=new Set;Object.keys(Jt[K]).map(Zt.add.bind(Zt));Object.keys(Jt[G]).map(Zt.add.bind(Zt));var qf=[].concat(pa,en(Zt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(To.map(function(e){return"".concat(e,"x")})).concat(Wf.map(function(e){return"w-".concat(e)})),Ut=Ze.FontAwesomeConfig||{};function Xf(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Vf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var Jf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Jf.forEach(function(e){var t=ca(e,2),n=t[0],r=t[1],a=Vf(Xf(n));a!=null&&(Ut[r]=a)})}var No={styleDefault:"solid",familyDefault:"classic",cssPrefix:Po,replacementClass:Co,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ut.familyPrefix&&(Ut.cssPrefix=Ut.familyPrefix);var St=O(O({},No),Ut);St.autoReplaceSvg||(St.observeMutations=!1);var I={};Object.keys(No).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){St[e]=n,Ht.forEach(function(r){return r(I)})},get:function(){return St[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){St.cssPrefix=t,Ht.forEach(function(n){return n(I)})},get:function(){return St.cssPrefix}});Ze.FontAwesomeConfig=I;var Ht=[];function Gf(e){return Ht.push(e),function(){Ht.splice(Ht.indexOf(e),1)}}var Ke=Nr,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zf(e){if(!(!e||!Be)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var Qf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qt(){for(var e=12,t="";e-- >0;)t+=Qf[Math.random()*62|0];return t}function Mt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ha(e){return e.classList?Mt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Mo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ec(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Mo(e[n]),'" ')},"").trim()}function Qn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ga(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function tc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function nc(e){var t=e.transform,n=e.width,r=n===void 0?Nr:n,a=e.height,i=a===void 0?Nr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Eo?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var rc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Fo(){var e=Po,t=Co,n=I.cssPrefix,r=I.replacementClass,a=rc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var fi=!1;function mr(){I.autoAddCss&&!fi&&(Zf(Fo()),fi=!0)}var ac={mixout:function(){return{dom:{css:Fo,insertCss:mr}}},hooks:function(){return{beforeDOMElementCreation:function(){mr()},beforeI2svg:function(){mr()}}}},$e=Ze||{};$e[ze]||($e[ze]={});$e[ze].styles||($e[ze].styles={});$e[ze].hooks||($e[ze].hooks={});$e[ze].shims||($e[ze].shims=[]);var ke=$e[ze],Ro=[],ic=function e(){q.removeEventListener("DOMContentLoaded",e),Ln=1,Ro.map(function(t){return t()})},Ln=!1;Be&&(Ln=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Ln||q.addEventListener("DOMContentLoaded",ic));function oc(e){Be&&(Ln?setTimeout(e,0):Ro.push(e))}function nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Mo(e):"<".concat(t," ").concat(ec(r),">").concat(i.map(nn).join(""),"</").concat(t,">")}function ci(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var sc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},pr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?sc(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,t[c],c,t);return u};function lc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Fr(e){var t=lc(e);return t.length===1?t[0].toString(16):null}function fc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ui(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Rr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ui(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,ui(t)):ke.styles[e]=O(O({},ke.styles[e]||{}),i),e==="fas"&&Rr("fa",t)}var wn,_n,kn,yt=ke.styles,cc=ke.shims,uc=(wn={},te(wn,K,Object.values(Gt[K])),te(wn,G,Object.values(Gt[G])),wn),va=null,Lo={},jo={},Do={},zo={},$o={},dc=(_n={},te(_n,K,Object.keys(Vt[K])),te(_n,G,Object.keys(Vt[G])),_n);function mc(e){return~qf.indexOf(e)}function pc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!mc(a)?a:null}var Uo=function(){var t=function(i){return pr(yt,function(o,s,l){return o[l]=pr(s,i,{}),o},{})};Lo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),jo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),$o=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in yt||I.autoFetchSvg,r=pr(cc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Do=r.names,zo=r.unicodes,va=er(I.styleDefault,{family:I.familyDefault})};Gf(function(e){va=er(e.styleDefault,{family:I.familyDefault})});Uo();function ba(e,t){return(Lo[e]||{})[t]}function hc(e,t){return(jo[e]||{})[t]}function ct(e,t){return($o[e]||{})[t]}function Ho(e){return Do[e]||{prefix:null,iconName:null}}function gc(e){var t=zo[e],n=ba("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qe(){return va}var ya=function(){return{prefix:null,iconName:null,rest:[]}};function er(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=Vt[r][e],i=Jt[r][e]||Jt[r][a],o=e in ke.styles?e:null;return i||o||null}var di=(kn={},te(kn,K,Object.keys(Gt[K])),te(kn,G,Object.keys(Gt[G])),kn);function tr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,K,"".concat(I.cssPrefix,"-").concat(K)),te(t,G,"".concat(I.cssPrefix,"-").concat(G)),t),o=null,s=K;(e.includes(i[K])||e.some(function(c){return di[K].includes(c)}))&&(s=K),(e.includes(i[G])||e.some(function(c){return di[G].includes(c)}))&&(s=G);var l=e.reduce(function(c,u){var m=pc(I.cssPrefix,u);if(yt[u]?(u=uc[s].includes(u)?Uf[s][u]:u,o=u,c.prefix=u):dc[s].indexOf(u)>-1?(o=u,c.prefix=er(u,{family:s})):m?c.iconName=m:u!==I.replacementClass&&u!==i[K]&&u!==i[G]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var h=o==="fa"?Ho(c.iconName):{},_=ct(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||_||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!yt.far&&yt.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},ya());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===G&&(yt.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qe()||"fas"),l}var vc=function(){function e(){Sf(this,e),this.definitions={}}return If(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Rr(s,o[s]);var l=Gt[K][s];l&&Rr(l,o[s]),Uo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),mi=[],xt={},Ot={},bc=Object.keys(Ot);function yc(e,t){var n=t.mixoutsTo;return mi=e,xt={},Object.keys(Ot).forEach(function(r){bc.indexOf(r)===-1&&delete Ot[r]}),mi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Rn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xt[o]||(xt[o]=[]),xt[o].push(i[o])})}r.provides&&r.provides(Ot)}),n}function Lr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ht(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ot[e]?Ot[e].apply(null,t):void 0}function jr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qe();if(t)return t=ct(n,t)||t,ci(Bo.definitions,n,t)||ci(ke.styles,n,t)}var Bo=new vc,xc=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,ht("noAuto")},wc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Be?(ht("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,oc(function(){kc({autoReplaceSvgRoot:n}),ht("watch",t)})}},_c={icon:function(t){if(t===null)return null;if(Rn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=er(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(Hf))){var a=tr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qe(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Qe();return{prefix:i,iconName:ct(i,t)||t}}}},pe={noAuto:xc,config:I,dom:wc,parse:_c,library:Bo,findIconDefinition:jr,toHtml:nn},kc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(ke.styles).length>0||I.autoFetchSvg)&&Be&&I.autoReplaceSvg&&pe.dom.i2svg({node:r})};function nr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Be){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ac(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ga(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Qn(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Oc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function xa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,_=h===void 0?!1:h,M=r.found?r:n,C=M.width,D=M.height,x=a==="fak",P=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(he){return m.classes.indexOf(he)===-1}).filter(function(he){return he!==""||!!he}).concat(m.classes).join(" "),E={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:P,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(D)})},j=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(C/D*16*.0625,"em")}:{};_&&(E.attributes[pt]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(u||Qt())},children:[l]}),delete E.attributes.title);var H=O(O({},E),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},j),m.styles)}),le=r.found&&n.found?Ue("generateAbstractMask",H)||{children:[],attributes:{}}:Ue("generateAbstractIcon",H)||{children:[],attributes:{}},ne=le.children,ve=le.attributes;return H.children=ne,H.attributes=ve,s?Oc(H):Ac(H)}function pi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[pt]="");var u=O({},o.styles);ga(a)&&(u.transform=nc({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=Qn(u);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Ec(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Qn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var hr=ke.styles;function Dr(e){var t=e[0],n=e[1],r=e.slice(4),a=ca(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Pc={found:!1,width:512,height:512};function Cc(e,t){!So&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=Qe()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=Ho(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&hr[t]&&hr[t][e]){var o=hr[t][e];return r(Dr(o))}Cc(e,t),r(O(O({},Pc),{},{icon:I.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var hi=function(){},$r=I.measurePerformance&&hn&&hn.mark&&hn.measure?hn:{mark:hi,measure:hi},Dt='FA "6.4.0"',Sc=function(t){return $r.mark("".concat(Dt," ").concat(t," begins")),function(){return Yo(t)}},Yo=function(t){$r.mark("".concat(Dt," ").concat(t," ends")),$r.measure("".concat(Dt," ").concat(t),"".concat(Dt," ").concat(t," begins"),"".concat(Dt," ").concat(t," ends"))},wa={begin:Sc,end:Yo},Sn=function(){};function gi(e){var t=e.getAttribute?e.getAttribute(pt):null;return typeof t=="string"}function Ic(e){var t=e.getAttribute?e.getAttribute(da):null,n=e.getAttribute?e.getAttribute(ma):null;return t&&n}function Tc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Nc(){if(I.autoReplaceSvg===!0)return In.replace;var e=In[I.autoReplaceSvg];return e||In.replace}function Mc(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function Fc(e){return q.createElement(e)}function Wo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Mc:Fc:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Wo(o,{ceFn:r}))}),a}function Rc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var In={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Wo(a),n)}),n.getAttribute(pt)===null&&I.keepOriginalSource){var r=q.createComment(Rc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ha(n).indexOf(I.replacementClass))return In.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return nn(s)}).join(`
`);n.setAttribute(pt,""),n.innerHTML=o}};function vi(e){e()}function Ko(e,t){var n=typeof t=="function"?t:Sn;if(e.length===0)n();else{var r=vi;I.mutateApproach===zf&&(r=Ze.requestAnimationFrame||vi),r(function(){var a=Nc(),i=wa.begin("mutate");e.map(a),i(),n()})}}var _a=!1;function qo(){_a=!0}function Ur(){_a=!1}var jn=null;function bi(e){if(si&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Sn:t,r=e.nodeCallback,a=r===void 0?Sn:r,i=e.pseudoElementsCallback,o=i===void 0?Sn:i,s=e.observeMutationsRoot,l=s===void 0?q:s;jn=new si(function(c){if(!_a){var u=Qe();Mt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!gi(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&gi(m.target)&&~Kf.indexOf(m.attributeName))if(m.attributeName==="class"&&Ic(m.target)){var h=tr(ha(m.target)),_=h.prefix,M=h.iconName;m.target.setAttribute(da,_||u),M&&m.target.setAttribute(ma,M)}else Tc(m.target)&&a(m.target)})}}),Be&&jn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Lc(){jn&&jn.disconnect()}function jc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Dc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=tr(ha(e));return a.prefix||(a.prefix=Qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=hc(a.prefix,e.innerText)||ba(a.prefix,Fr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function zc(e){var t=Mt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||Qt()):(t["aria-hidden"]="true",t.focusable="false")),t}function $c(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Dc(e),r=n.iconName,a=n.prefix,i=n.rest,o=zc(e),s=Lr("parseNodeAttributes",{},e),l=t.styleParser?jc(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Uc=ke.styles;function Xo(e){var t=I.autoReplaceSvg==="nest"?yi(e,{styleParser:!1}):yi(e);return~t.extra.classes.indexOf(Io)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var et=new Set;pa.map(function(e){et.add("fa-".concat(e))});Object.keys(Vt[K]).map(et.add.bind(et));Object.keys(Vt[G]).map(et.add.bind(et));et=en(et);function xi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Be)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(li,"-").concat(m))},a=function(m){return n.remove("".concat(li,"-").concat(m))},i=I.autoFetchSvg?et:pa.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Uc));i.includes("fa")||i.push("fa");var o=[".".concat(Io,":not([").concat(pt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(pt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Mt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=wa.begin("onTree"),c=s.reduce(function(u,m){try{var h=Xo(m);h&&u.push(h)}catch(_){So||_.name==="MissingIcon"&&console.error(_)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(h){Ko(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function Hc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xo(e).then(function(n){n&&Ko([n],t)})}function Bc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:jr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:jr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Yc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,h=m===void 0?null:m,_=n.titleId,M=_===void 0?null:_,C=n.classes,D=C===void 0?[]:C,x=n.attributes,P=x===void 0?{}:x,E=n.styles,j=E===void 0?{}:E;if(t){var H=t.prefix,le=t.iconName,ne=t.icon;return nr(O({type:"icon"},t),function(){return ht("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(h?P["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(M||Qt()):(P["aria-hidden"]="true",P.focusable="false")),xa({icons:{main:Dr(ne),mask:l?Dr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:le,transform:O(O({},Fe),a),symbol:o,title:h,maskId:u,titleId:M,extra:{attributes:P,styles:j,classes:D}})})}},Wc={mixout:function(){return{icon:Bc(Yc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=xi,n.nodeCallback=Hc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return xi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(_,M){Promise.all([zr(a,s),u.iconName?zr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var D=ca(C,2),x=D[0],P=D[1];_([n,xa({icons:{main:x,mask:P},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(M)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Qn(s);l.length>0&&(a.style=l);var c;return ga(o)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Kc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return nr({type:"layer"},function(){ht("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(en(i)).join(" ")},children:o}]})}}}},qc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return nr({type:"counter",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),Ec({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(en(s))}})})}}}},Xc={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,_=h===void 0?{}:h;return nr({type:"text",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),pi({content:n,transform:O(O({},Fe),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(I.cssPrefix,"-layers-text")].concat(en(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Eo){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,pi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Vc=new RegExp('"',"ug"),wi=[1105920,1112319];function Jc(e){var t=e.replace(Vc,""),n=fc(t,0),r=n>=wi[0]&&n<=wi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Fr(a?t[0]:t),isSecondary:r||a}}function _i(e,t){var n="".concat(Df).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Mt(e.children),o=i.filter(function(ne){return ne.getAttribute(Mr)===t})[0],s=Ze.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Bf),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?G:K,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Jt[h][l[2].toLowerCase()]:Yf[h][c],M=Jc(m),C=M.value,D=M.isSecondary,x=l[0].startsWith("FontAwesome"),P=ba(_,C),E=P;if(x){var j=gc(C);j.iconName&&j.prefix&&(P=j.iconName,_=j.prefix)}if(P&&!D&&(!o||o.getAttribute(da)!==_||o.getAttribute(ma)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var H=$c(),le=H.extra;le.attributes[Mr]=t,zr(P,_).then(function(ne){var ve=xa(O(O({},H),{},{icons:{main:ne,mask:ya()},prefix:_,iconName:E,extra:le,watchable:!0})),he=q.createElement("svg");t==="::before"?e.insertBefore(he,e.firstChild):e.appendChild(he),he.outerHTML=ve.map(function(Re){return nn(Re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Gc(e){return Promise.all([_i(e,"::before"),_i(e,"::after")])}function Zc(e){return e.parentNode!==document.head&&!~$f.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Mr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ki(e){if(Be)return new Promise(function(t,n){var r=Mt(e.querySelectorAll("*")).filter(Zc).map(Gc),a=wa.begin("searchPseudoElements");qo(),Promise.all(r).then(function(){a(),Ur(),t()}).catch(function(){a(),Ur(),n()})})}var Qc={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ki,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;I.searchPseudoElements&&ki(a)}}},Ai=!1,eu={mixout:function(){return{dom:{unwatch:function(){qo(),Ai=!0}}}},hooks:function(){return{bootstrap:function(){bi(Lr("mutationObserverCallbacks",{}))},noAuto:function(){Lc()},watch:function(n){var r=n.observeMutationsRoot;Ai?Ur():bi(Lr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Oi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},tu={mixout:function(){return{parse:{transform:function(n){return Oi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Oi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:h};return{tag:"g",attributes:O({},_.outer),children:[{tag:"g",attributes:O({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),_.path)}]}]}}}},gr={x:0,y:0,width:"100%",height:"100%"};function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function nu(e){return e.tag==="g"?e.children:[e]}var ru={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?tr(a.split(" ").map(function(o){return o.trim()})):ya();return i.prefix||(i.prefix=Qe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,h=o.icon,_=tc({transform:l,containerWidth:m,iconWidth:c}),M={tag:"rect",attributes:O(O({},gr),{},{fill:"white"})},C=u.children?{children:u.children.map(Ei)}:{},D={tag:"g",attributes:O({},_.inner),children:[Ei(O({tag:u.tag,attributes:O(O({},u.attributes),_.path)},C))]},x={tag:"g",attributes:O({},_.outer),children:[D]},P="mask-".concat(s||Qt()),E="clip-".concat(s||Qt()),j={tag:"mask",attributes:O(O({},gr),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,x]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:nu(h)},j]};return r.push(H,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(P,")")},gr)}),{children:r,attributes:a}}}},au={provides:function(t){var n=!1;Ze.matchMedia&&(n=Ze.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},iu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ou=[ac,Wc,Kc,qc,Xc,Qc,eu,tu,ru,au,iu];yc(ou,{mixoutsTo:pe});pe.noAuto;var Vo=pe.config,su=pe.library;pe.dom;var Dn=pe.parse;pe.findIconDefinition;pe.toHtml;var lu=pe.icon;pe.layer;var fu=pe.text;pe.counter;function Pi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pi(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zn(e){return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zn(e)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function cu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function uu(e,t){if(e==null)return{};var n=cu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Hr(e){return du(e)||mu(e)||pu(e)||hu()}function du(e){if(Array.isArray(e))return Br(e)}function mu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pu(e,t){if(e){if(typeof e=="string")return Br(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Br(e,t)}}function Br(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Jo={exports:{}};(function(e){(function(t){var n=function(x,P,E){if(!c(P)||m(P)||h(P)||_(P)||l(P))return P;var j,H=0,le=0;if(u(P))for(j=[],le=P.length;H<le;H++)j.push(n(x,P[H],E));else{j={};for(var ne in P)Object.prototype.hasOwnProperty.call(P,ne)&&(j[x(ne,E)]=n(x,P[ne],E))}return j},r=function(x,P){P=P||{};var E=P.separator||"_",j=P.split||/(?=[A-Z])/;return x.split(j).join(E)},a=function(x){return M(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(P,E){return E?E.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var P=a(x);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(x,P){return r(x,P).toLowerCase()},s=Object.prototype.toString,l=function(x){return typeof x=="function"},c=function(x){return x===Object(x)},u=function(x){return s.call(x)=="[object Array]"},m=function(x){return s.call(x)=="[object Date]"},h=function(x){return s.call(x)=="[object RegExp]"},_=function(x){return s.call(x)=="[object Boolean]"},M=function(x){return x=x-0,x===x},C=function(x,P){var E=P&&"process"in P?P.process:P;return typeof E!="function"?x:function(j,H){return E(j,x,H)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,P){return n(C(a,P),x)},decamelizeKeys:function(x,P){return n(C(o,P),x,P)},pascalizeKeys:function(x,P){return n(C(i,P),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(gu)})(Jo);var vu=Jo.exports,bu=["class","style"];function yu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=vu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function xu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ka(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ka(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=xu(u);break;case"style":l.style=yu(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=uu(n,bu);return wo(e.tag,we(we(we({},t),{},{class:a.class,style:we(we({},a.style),o)},a.attrs),s),r)}var Go=!1;try{Go=!0}catch{}function wu(){if(!Go&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Bt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?fe({},e,t):{}}function _u(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},fe(t,"fa-".concat(e.size),e.size!==null),fe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),fe(t,"fa-pull-".concat(e.pull),e.pull!==null),fe(t,"fa-swap-opacity",e.swapOpacity),fe(t,"fa-bounce",e.bounce),fe(t,"fa-shake",e.shake),fe(t,"fa-beat",e.beat),fe(t,"fa-fade",e.fade),fe(t,"fa-beat-fade",e.beatFade),fe(t,"fa-flash",e.flash),fe(t,"fa-spin-pulse",e.spinPulse),fe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ci(e){if(e&&zn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Dn.icon)return Dn.icon(e);if(e===null)return null;if(zn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ku=Vn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ge(function(){return Ci(t.icon)}),i=ge(function(){return Bt("classes",_u(t))}),o=ge(function(){return Bt("transform",typeof t.transform=="string"?Dn.transform(t.transform):t.transform)}),s=ge(function(){return Bt("mask",Ci(t.mask))}),l=ge(function(){return lu(a.value,we(we(we(we({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});En(l,function(u){if(!u)return wu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ge(function(){return l.value?ka(l.value.abstract[0],{},r):null});return function(){return c.value}}});Vn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Vo.familyPrefix,i=ge(function(){return["".concat(a,"-layers")].concat(Hr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return wo("div",{class:i.value},r.default?r.default():[])}}});Vn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Vo.familyPrefix,i=ge(function(){return Bt("classes",[].concat(Hr(t.counter?["".concat(a,"-layers-counter")]:[]),Hr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ge(function(){return Bt("transform",typeof t.transform=="string"?Dn.transform(t.transform):t.transform)}),s=ge(function(){var c=fu(t.value.toString(),we(we({},o.value),i.value)),u=c.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=ge(function(){return ka(s.value,{},r)});return function(){return l.value}}});var Au={prefix:"fas",iconName:"forward-fast",icon:[512,512,[9197,"fast-forward"],"f050","M18.4 445c11.2 5.3 24.5 3.6 34.1-4.4L224 297.7V416c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4L448 297.7V416c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32V214.3L276.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S224 83.6 224 96V214.3L52.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S0 83.6 0 96V416c0 12.4 7.2 23.7 18.4 29z"]},Ou={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"]};const Zo=e=>(rl("data-v-e0a840a3"),e=e(),al(),e),Eu=Zo(()=>Ie("span",null,":",-1)),Pu=Zo(()=>Ie("span",null,":",-1)),Cu={key:1,class:"poetry"},Su={key:2,class:"final-poetry"},Iu=Vn({__name:"App",setup(e){su.add(Ou,Au);const t=new Date("May 4, 2023").getTime(),n=Wn({h1:"0",h2:"0",m1:"0",m2:"0",s1:"0",s2:"0",status:0,poetryText:""});var r=["Cara Claretta,","Tanti Auguri!!!","Tutto ciò che vorrei è essere con te","su una spiaggia a mezzanotte con la luna piena","(Anche se penso che forse farebbe un po' freddino)","(Comunque mi impegnerei a tutti i costi per tenerti al caldino)","(Portere due piumini e qualche bel cuscino)","(Su cui poggiar la testa durante il massaggino)","(Ma se vuoi anche un bel grattino...","... dovrai togliere il pylino!)","Cara Claretta, vorrei essere con te","In terrazza con il mare e un bicchierin di avena","o su un pontile con una zeppola con l'amarena","O in qualche posto, in tutto il mondo!","Mi basta essere con te","Cara Claretta, ti voglio tanto bene","Il tuo Jack ❤️"],a=0,i=15,o=70,s=function(u){let m,h=u.length,_=0,M=0,C=!0,D=setInterval(function(){if(C)M>=u[_].length&&(++a,a==i&&(C=!1,a=0));else if(M==0&&(C=!0,_++,M=0,_>=h)){clearInterval(D),n.status=2;return}m=u[_].slice(0,M),a==0&&(C?M++:M--),n.poetryText=m},o)};const l=function(){let u=t-Date.now();const m=1e3,h=m*60,_=h*60,M=_*24,C=Math.floor(u%M/_),D=Math.floor(u%_/h),x=Math.floor(u%h/m);n.h1=C>9?C.toString()[0]:"0",n.h2=C.toString()[C.toString().length-1],n.m1=D>9?D.toString()[0]:"0",n.m2=D.toString()[D.toString().length-1],n.s1=x>9?x.toString()[0]:"0",n.s2=x.toString()[x.toString().length-1]},c=function(){n.status=1,s(r)};return oo(()=>{if(t-Date.now()<0){n.status=2;return}t-Date.now()>0&&l();const u=setInterval(function(){t-Date.now()<0?(clearInterval(u),n.status=1,s(r)):l()},1e3)}),(u,m)=>(qe(),it("main",null,[n.status!=2?(qe(),it("div",{key:0,class:$n(["countdown",{ended:n.status!=0,running:n.status==0}])},[Ie("span",null,Ye(n.h1),1),Ie("span",null,Ye(n.h2),1),Eu,Ie("span",null,Ye(n.m1),1),Ie("span",null,Ye(n.m2),1),Pu,Ie("span",null,Ye(n.s1),1),Ie("span",null,Ye(n.s2),1)],2)):pn("",!0),n.status==1?(qe(),it("div",Cu,Ye(n.poetryText),1)):pn("",!0),n.status==2?(qe(),it("div",Su,[(qe(!0),it(Se,null,El(_r(r),(h,_)=>(qe(),it("p",{class:"word poetry",key:_},Ye(h),1))),128))])):pn("",!0),n.status==2?(qe(),it("button",{key:3,onClick:c,class:"controller"},[ue(_r(ku),{icon:["fas","rotate-right"]})])):pn("",!0)]))}});const Tu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Nu=Tu(Iu,[["__scopeId","data-v-e0a840a3"]]);Pf(Nu).mount("#app");
