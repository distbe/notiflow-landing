function Gr(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const rf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",of=Gr(rf);function xa(e){return!!e||e===""}function Wr(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=vt(s)?cf(s):Wr(s);if(r)for(const i in r)t[i]=r[i]}return t}else{if(vt(e))return e;if(pt(e))return e}}const af=/;(?![^(]*\))/g,lf=/:(.+)/;function cf(e){const t={};return e.split(af).forEach(n=>{if(n){const s=n.split(lf);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Yr(e){let t="";if(vt(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const s=Yr(e[n]);s&&(t+=s+" ")}else if(pt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const pw=e=>e==null?"":V(e)||pt(e)&&(e.toString===ka||!$(e.toString))?JSON.stringify(e,Ra,2):String(e),Ra=(e,t)=>t&&t.__v_isRef?Ra(e,t.value):Je(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:La(t)?{[`Set(${t.size})`]:[...t.values()]}:pt(t)&&!V(t)&&!Fa(t)?String(t):t,J={},Qe=[],Jt=()=>{},uf=()=>!1,hf=/^on[^a-z]/,As=e=>hf.test(e),Xr=e=>e.startsWith("onUpdate:"),_t=Object.assign,Oa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ff=Object.prototype.hasOwnProperty,H=(e,t)=>ff.call(e,t),V=Array.isArray,Je=e=>_s(e)==="[object Map]",La=e=>_s(e)==="[object Set]",$=e=>typeof e=="function",vt=e=>typeof e=="string",Qr=e=>typeof e=="symbol",pt=e=>e!==null&&typeof e=="object",Ma=e=>pt(e)&&$(e.then)&&$(e.catch),ka=Object.prototype.toString,_s=e=>ka.call(e),df=e=>_s(e).slice(8,-1),Fa=e=>_s(e)==="[object Object]",Jr=e=>vt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Cs=Gr(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ss=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},pf=/-(\w)/g,Ze=Ss(e=>e.replace(pf,(t,n)=>n?n.toUpperCase():"")),gf=/\B([A-Z])/g,tn=Ss(e=>e.replace(gf,"-$1").toLowerCase()),Pa=Ss(e=>e.charAt(0).toUpperCase()+e.slice(1)),Zr=Ss(e=>e?`on${Pa(e)}`:""),Rn=(e,t)=>!Object.is(e,t),ti=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ns=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},mf=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ua;const yf=()=>Ua||(Ua=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ce;const Ds=[];class vf{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ce&&(this.parent=Ce,this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}}on(){this.active&&(Ds.push(this),Ce=this)}off(){this.active&&(Ds.pop(),Ce=Ds[Ds.length-1])}stop(t){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function wf(e,t){t=t||Ce,t&&t.active&&t.effects.push(e)}const ei=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Va=e=>(e.w&me)>0,$a=e=>(e.n&me)>0,Ef=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=me},Tf=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Va(r)&&!$a(r)?r.delete(e):t[n++]=r,r.w&=~me,r.n&=~me}t.length=n}},ni=new WeakMap;let On=0,me=1;const si=30,Ln=[];let Se;const Ne=Symbol(""),ri=Symbol("");class ii{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],wf(this,s)}run(){if(!this.active)return this.fn();if(!Ln.includes(this))try{return Ln.push(Se=this),If(),me=1<<++On,On<=si?Ef(this):ja(this),this.fn()}finally{On<=si&&Tf(this),me=1<<--On,De(),Ln.pop();const t=Ln.length;Se=t>0?Ln[t-1]:void 0}}stop(){this.active&&(ja(this),this.onStop&&this.onStop(),this.active=!1)}}function ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let en=!0;const oi=[];function nn(){oi.push(en),en=!1}function If(){oi.push(en),en=!0}function De(){const e=oi.pop();en=e===void 0?!0:e}function Bt(e,t,n){if(!Ba())return;let s=ni.get(e);s||ni.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=ei()),qa(r)}function Ba(){return en&&Se!==void 0}function qa(e,t){let n=!1;On<=si?$a(e)||(e.n|=me,n=!Va(e)):n=!e.has(Se),n&&(e.add(Se),Se.deps.push(e))}function ce(e,t,n,s,r,i){const o=ni.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&V(e))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),t){case"add":V(e)?Jr(n)&&a.push(o.get("length")):(a.push(o.get(Ne)),Je(e)&&a.push(o.get(ri)));break;case"delete":V(e)||(a.push(o.get(Ne)),Je(e)&&a.push(o.get(ri)));break;case"set":Je(e)&&a.push(o.get(Ne));break}if(a.length===1)a[0]&&ai(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ai(ei(l))}}function ai(e,t){for(const n of V(e)?e:[...e])(n!==Se||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const bf=Gr("__proto__,__v_isRef,__isVue"),Ha=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Qr)),Af=li(),_f=li(!1,!0),Cf=li(!0),Ka=Sf();function Sf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=z(this);for(let i=0,o=this.length;i<o;i++)Bt(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(z)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){nn();const s=z(this)[t].apply(this,n);return De(),s}}),e}function li(e=!1,t=!1){return function(s,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_raw"&&i===(e?t?qf:tl:t?Za:Ja).get(s))return s;const o=V(s);if(!e&&o&&H(Ka,r))return Reflect.get(Ka,r,i);const a=Reflect.get(s,r,i);return(Qr(r)?Ha.has(r):bf(r))||(e||Bt(s,"get",r),t)?a:Ut(a)?!o||!Jr(r)?a.value:a:pt(a)?e?el(a):hi(a):a}}const Nf=za(),Df=za(!0);function za(e=!1){return function(n,s,r,i){let o=n[s];if(!e&&(r=z(r),o=z(o),!V(n)&&Ut(o)&&!Ut(r)))return o.value=r,!0;const a=V(n)&&Jr(s)?Number(s)<n.length:H(n,s),l=Reflect.set(n,s,r,i);return n===z(i)&&(a?Rn(r,o)&&ce(n,"set",s,r):ce(n,"add",s,r)),l}}function xf(e,t){const n=H(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&ce(e,"delete",t,void 0),s}function Rf(e,t){const n=Reflect.has(e,t);return(!Qr(t)||!Ha.has(t))&&Bt(e,"has",t),n}function Of(e){return Bt(e,"iterate",V(e)?"length":Ne),Reflect.ownKeys(e)}const Ga={get:Af,set:Nf,deleteProperty:xf,has:Rf,ownKeys:Of},Lf={get:Cf,set(e,t){return!0},deleteProperty(e,t){return!0}},Mf=_t({},Ga,{get:_f,set:Df}),ci=e=>e,xs=e=>Reflect.getPrototypeOf(e);function Rs(e,t,n=!1,s=!1){e=e.__v_raw;const r=z(e),i=z(t);t!==i&&!n&&Bt(r,"get",t),!n&&Bt(r,"get",i);const{has:o}=xs(r),a=s?ci:n?di:Mn;if(o.call(r,t))return a(e.get(t));if(o.call(r,i))return a(e.get(i));e!==r&&e.get(t)}function Os(e,t=!1){const n=this.__v_raw,s=z(n),r=z(e);return e!==r&&!t&&Bt(s,"has",e),!t&&Bt(s,"has",r),e===r?n.has(e):n.has(e)||n.has(r)}function Ls(e,t=!1){return e=e.__v_raw,!t&&Bt(z(e),"iterate",Ne),Reflect.get(e,"size",e)}function Wa(e){e=z(e);const t=z(this);return xs(t).has.call(t,e)||(t.add(e),ce(t,"add",e,e)),this}function Ya(e,t){t=z(t);const n=z(this),{has:s,get:r}=xs(n);let i=s.call(n,e);i||(e=z(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?Rn(t,o)&&ce(n,"set",e,t):ce(n,"add",e,t),this}function Xa(e){const t=z(this),{has:n,get:s}=xs(t);let r=n.call(t,e);r||(e=z(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&ce(t,"delete",e,void 0),i}function Qa(){const e=z(this),t=e.size!==0,n=e.clear();return t&&ce(e,"clear",void 0,void 0),n}function Ms(e,t){return function(s,r){const i=this,o=i.__v_raw,a=z(o),l=t?ci:e?di:Mn;return!e&&Bt(a,"iterate",Ne),o.forEach((c,u)=>s.call(r,l(c),l(u),i))}}function ks(e,t,n){return function(...s){const r=this.__v_raw,i=z(r),o=Je(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=r[e](...s),u=n?ci:t?di:Mn;return!t&&Bt(i,"iterate",l?ri:Ne),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function ye(e){return function(...t){return e==="delete"?!1:this}}function kf(){const e={get(i){return Rs(this,i)},get size(){return Ls(this)},has:Os,add:Wa,set:Ya,delete:Xa,clear:Qa,forEach:Ms(!1,!1)},t={get(i){return Rs(this,i,!1,!0)},get size(){return Ls(this)},has:Os,add:Wa,set:Ya,delete:Xa,clear:Qa,forEach:Ms(!1,!0)},n={get(i){return Rs(this,i,!0)},get size(){return Ls(this,!0)},has(i){return Os.call(this,i,!0)},add:ye("add"),set:ye("set"),delete:ye("delete"),clear:ye("clear"),forEach:Ms(!0,!1)},s={get(i){return Rs(this,i,!0,!0)},get size(){return Ls(this,!0)},has(i){return Os.call(this,i,!0)},add:ye("add"),set:ye("set"),delete:ye("delete"),clear:ye("clear"),forEach:Ms(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ks(i,!1,!1),n[i]=ks(i,!0,!1),t[i]=ks(i,!1,!0),s[i]=ks(i,!0,!0)}),[e,n,t,s]}const[Ff,Pf,Uf,Vf]=kf();function ui(e,t){const n=t?e?Vf:Uf:e?Pf:Ff;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(H(n,r)&&r in s?n:s,r,i)}const $f={get:ui(!1,!1)},jf={get:ui(!1,!0)},Bf={get:ui(!0,!1)},Ja=new WeakMap,Za=new WeakMap,tl=new WeakMap,qf=new WeakMap;function Hf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kf(e){return e.__v_skip||!Object.isExtensible(e)?0:Hf(df(e))}function hi(e){return e&&e.__v_isReadonly?e:fi(e,!1,Ga,$f,Ja)}function zf(e){return fi(e,!1,Mf,jf,Za)}function el(e){return fi(e,!0,Lf,Bf,tl)}function fi(e,t,n,s,r){if(!pt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=Kf(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function sn(e){return nl(e)?sn(e.__v_raw):!!(e&&e.__v_isReactive)}function nl(e){return!!(e&&e.__v_isReadonly)}function sl(e){return sn(e)||nl(e)}function z(e){const t=e&&e.__v_raw;return t?z(t):e}function rl(e){return Ns(e,"__v_skip",!0),e}const Mn=e=>pt(e)?hi(e):e,di=e=>pt(e)?el(e):e;function il(e){Ba()&&(e=z(e),e.dep||(e.dep=ei()),qa(e.dep))}function ol(e,t){e=z(e),e.dep&&ai(e.dep)}function Ut(e){return Boolean(e&&e.__v_isRef===!0)}function gw(e){return Gf(e,!1)}function Gf(e,t){return Ut(e)?e:new Wf(e,t)}class Wf{constructor(t,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:z(t),this._value=n?t:Mn(t)}get value(){return il(this),this._value}set value(t){t=this._shallow?t:z(t),Rn(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:Mn(t),ol(this))}}function Yf(e){return Ut(e)?e.value:e}const Xf={get:(e,t,n)=>Yf(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Ut(r)&&!Ut(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function al(e){return sn(e)?e:new Proxy(e,Xf)}class Qf{constructor(t,n,s){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new ii(t,()=>{this._dirty||(this._dirty=!0,ol(this))}),this.__v_isReadonly=s}get value(){const t=z(this);return il(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Jf(e,t){let n,s;const r=$(e);return r?(n=e,s=Jt):(n=e.get,s=e.set),new Qf(n,s,r||!s)}Promise.resolve();function Zf(e,t,...n){const s=e.vnode.props||J;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=s[u]||J;p?r=n.map(m=>m.trim()):d&&(r=n.map(mf))}let a,l=s[a=Zr(t)]||s[a=Zr(Ze(t))];!l&&i&&(l=s[a=Zr(tn(t))]),l&&zt(l,e,6,r);const c=s[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,zt(c,e,6,r)}}function ll(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!$(e)){const l=c=>{const u=ll(c,t,!0);u&&(a=!0,_t(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(s.set(e,null),null):(V(i)?i.forEach(l=>o[l]=null):_t(o,i),s.set(e,o),o)}function pi(e,t){return!e||!As(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,tn(t))||H(e,t))}let ee=null,cl=null;function Fs(e){const t=ee;return ee=e,cl=e&&e.type.__scopeId||null,t}function td(e,t=ee,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Ll(-1);const i=Fs(t),o=e(...r);return Fs(i),s._d&&Ll(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function gi(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:p,setupState:m,ctx:A,inheritAttrs:M}=e;let S,k;const lt=Fs(e);try{if(n.shapeFlag&4){const Z=r||s;S=re(u.call(Z,Z,d,i,m,p,A)),k=l}else{const Z=t;S=re(Z.length>1?Z(i,{attrs:l,slots:a,emit:c}):Z(i,null)),k=t.props?l:ed(l)}}catch(Z){kn.length=0,Ks(Z,e,1),S=Me(ve)}let nt=S;if(k&&M!==!1){const Z=Object.keys(k),{shapeFlag:Dt}=nt;Z.length&&Dt&(1|6)&&(o&&Z.some(Xr)&&(k=nd(k,o)),nt=rn(nt,k))}return n.dirs&&(nt.dirs=nt.dirs?nt.dirs.concat(n.dirs):n.dirs),n.transition&&(nt.transition=n.transition),S=nt,Fs(lt),S}const ed=e=>{let t;for(const n in e)(n==="class"||n==="style"||As(n))&&((t||(t={}))[n]=e[n]);return t},nd=(e,t)=>{const n={};for(const s in e)(!Xr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function sd(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ul(s,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==s[p]&&!pi(c,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ul(s,o,c):!0:!!o;return!1}function ul(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!pi(n,i))return!0}return!1}function rd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const id=e=>e.__isSuspense;function od(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):op(e)}function ad(e,t){if(wt){let n=wt.provides;const s=wt.parent&&wt.parent.provides;s===n&&(n=wt.provides=Object.create(s)),n[e]=t}}function mi(e,t,n=!1){const s=wt||ee;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&$(t)?t.call(s.proxy):t}}function ld(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gl(()=>{e.isMounted=!0}),ml(()=>{e.isUnmounting=!0}),e}const Kt=[Function,Array],cd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kt,onEnter:Kt,onAfterEnter:Kt,onEnterCancelled:Kt,onBeforeLeave:Kt,onLeave:Kt,onAfterLeave:Kt,onLeaveCancelled:Kt,onBeforeAppear:Kt,onAppear:Kt,onAfterAppear:Kt,onAppearCancelled:Kt},setup(e,{slots:t}){const n=Yd(),s=ld();let r;return()=>{const i=t.default&&dl(t.default(),!0);if(!i||!i.length)return;const o=z(e),{mode:a}=o,l=i[0];if(s.isLeaving)return vi(l);const c=fl(l);if(!c)return vi(l);const u=yi(c,o,s,n);wi(c,u);const d=n.subTree,p=d&&fl(d);let m=!1;const{getTransitionKey:A}=c.type;if(A){const M=A();r===void 0?r=M:M!==r&&(r=M,m=!0)}if(p&&p.type!==ve&&(!Le(c,p)||m)){const M=yi(p,o,s,n);if(wi(p,M),a==="out-in")return s.isLeaving=!0,M.afterLeave=()=>{s.isLeaving=!1,n.update()},vi(l);a==="in-out"&&c.type!==ve&&(M.delayLeave=(S,k,lt)=>{const nt=hl(s,p);nt[String(p.key)]=p,S._leaveCb=()=>{k(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=lt})}return l}}},ud=cd;function hl(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function yi(e,t,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:A,onBeforeAppear:M,onAppear:S,onAfterAppear:k,onAppearCancelled:lt}=t,nt=String(e.key),Z=hl(n,e),Dt=(X,yt)=>{X&&zt(X,s,9,yt)},Zt={mode:i,persisted:o,beforeEnter(X){let yt=a;if(!n.isMounted)if(r)yt=M||a;else return;X._leaveCb&&X._leaveCb(!0);const dt=Z[nt];dt&&Le(e,dt)&&dt.el._leaveCb&&dt.el._leaveCb(),Dt(yt,[X])},enter(X){let yt=l,dt=c,Yt=u;if(!n.isMounted)if(r)yt=S||l,dt=k||c,Yt=lt||u;else return;let $t=!1;const Xt=X._enterCb=Ge=>{$t||($t=!0,Ge?Dt(Yt,[X]):Dt(dt,[X]),Zt.delayedLeave&&Zt.delayedLeave(),X._enterCb=void 0)};yt?(yt(X,Xt),yt.length<=1&&Xt()):Xt()},leave(X,yt){const dt=String(e.key);if(X._enterCb&&X._enterCb(!0),n.isUnmounting)return yt();Dt(d,[X]);let Yt=!1;const $t=X._leaveCb=Xt=>{Yt||(Yt=!0,yt(),Xt?Dt(A,[X]):Dt(m,[X]),X._leaveCb=void 0,Z[dt]===e&&delete Z[dt])};Z[dt]=e,p?(p(X,$t),p.length<=1&&$t()):$t()},clone(X){return yi(X,t,n,s)}};return Zt}function vi(e){if(Ps(e))return e=rn(e),e.children=null,e}function fl(e){return Ps(e)?e.children?e.children[0]:void 0:e}function wi(e,t){e.shapeFlag&6&&e.component?wi(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function dl(e,t=!1){let n=[],s=0;for(let r=0;r<e.length;r++){const i=e[r];i.type===se?(i.patchFlag&128&&s++,n=n.concat(dl(i.children,t))):(t||i.type!==ve)&&n.push(i)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function mw(e){return $(e)?{setup:e,name:e.name}:e}const Ei=e=>!!e.type.__asyncLoader,Ps=e=>e.type.__isKeepAlive;function hd(e,t){pl(e,"a",t)}function fd(e,t){pl(e,"da",t)}function pl(e,t,n=wt){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}e()});if(Us(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Ps(r.parent.vnode)&&dd(s,t,n,r),r=r.parent}}function dd(e,t,n,s){const r=Us(t,e,s,!0);yl(()=>{Oa(s[t],r)},n)}function Us(e,t,n=wt,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;nn(),on(n);const a=zt(t,n,e,o);return ke(),De(),a});return s?r.unshift(i):r.push(i),i}}const ue=e=>(t,n=wt)=>(!Hs||e==="sp")&&Us(e,t,n),pd=ue("bm"),gl=ue("m"),gd=ue("bu"),md=ue("u"),ml=ue("bum"),yl=ue("um"),yd=ue("sp"),vd=ue("rtg"),wd=ue("rtc");function Ed(e,t=wt){Us("ec",e,t)}let Ti=!0;function Td(e){const t=El(e),n=e.proxy,s=e.ctx;Ti=!1,t.beforeCreate&&vl(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:A,activated:M,deactivated:S,beforeDestroy:k,beforeUnmount:lt,destroyed:nt,unmounted:Z,render:Dt,renderTracked:Zt,renderTriggered:X,errorCaptured:yt,serverPrefetch:dt,expose:Yt,inheritAttrs:$t,components:Xt,directives:Ge,filters:Aa}=t;if(c&&Id(c,s,null,e.appContext.config.unwrapInjectedRef),o)for(const ot in o){const tt=o[ot];$(tt)&&(s[ot]=tt.bind(n))}if(r){const ot=r.call(n,n);pt(ot)&&(e.data=hi(ot))}if(Ti=!0,i)for(const ot in i){const tt=i[ot],ae=$(tt)?tt.bind(n,n):$(tt.get)?tt.get.bind(n,n):Jt,Hr=!$(tt)&&$(tt.set)?tt.set.bind(n):Jt,Dn=Jf({get:ae,set:Hr});Object.defineProperty(s,ot,{enumerable:!0,configurable:!0,get:()=>Dn.value,set:We=>Dn.value=We})}if(a)for(const ot in a)wl(a[ot],s,n,ot);if(l){const ot=$(l)?l.call(n):l;Reflect.ownKeys(ot).forEach(tt=>{ad(tt,ot[tt])})}u&&vl(u,e,"c");function Pt(ot,tt){V(tt)?tt.forEach(ae=>ot(ae.bind(n))):tt&&ot(tt.bind(n))}if(Pt(pd,d),Pt(gl,p),Pt(gd,m),Pt(md,A),Pt(hd,M),Pt(fd,S),Pt(Ed,yt),Pt(wd,Zt),Pt(vd,X),Pt(ml,lt),Pt(yl,Z),Pt(yd,dt),V(Yt))if(Yt.length){const ot=e.exposed||(e.exposed={});Yt.forEach(tt=>{Object.defineProperty(ot,tt,{get:()=>n[tt],set:ae=>n[tt]=ae})})}else e.exposed||(e.exposed={});Dt&&e.render===Jt&&(e.render=Dt),$t!=null&&(e.inheritAttrs=$t),Xt&&(e.components=Xt),Ge&&(e.directives=Ge)}function Id(e,t,n=Jt,s=!1){V(e)&&(e=Ii(e));for(const r in e){const i=e[r];let o;pt(i)?"default"in i?o=mi(i.from||r,i.default,!0):o=mi(i.from||r):o=mi(i),Ut(o)&&s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[r]=o}}function vl(e,t,n){zt(V(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function wl(e,t,n,s){const r=s.includes(".")?Wl(n,s):()=>n[s];if(vt(e)){const i=t[e];$(i)&&ki(r,i)}else if($(e))ki(r,e.bind(n));else if(pt(e))if(V(e))e.forEach(i=>wl(i,t,n,s));else{const i=$(e.handler)?e.handler.bind(n):t[e.handler];$(i)&&ki(r,i,e)}}function El(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!r.length&&!n&&!s?l=t:(l={},r.length&&r.forEach(c=>Vs(l,c,o,!0)),Vs(l,t,o)),i.set(t,l),l}function Vs(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Vs(e,i,n,!0),r&&r.forEach(o=>Vs(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=bd[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const bd={data:Tl,props:xe,emits:xe,methods:xe,computed:xe,beforeCreate:xt,created:xt,beforeMount:xt,mounted:xt,beforeUpdate:xt,updated:xt,beforeDestroy:xt,beforeUnmount:xt,destroyed:xt,unmounted:xt,activated:xt,deactivated:xt,errorCaptured:xt,serverPrefetch:xt,components:xe,directives:xe,watch:_d,provide:Tl,inject:Ad};function Tl(e,t){return t?e?function(){return _t($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function Ad(e,t){return xe(Ii(e),Ii(t))}function Ii(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function xt(e,t){return e?[...new Set([].concat(e,t))]:t}function xe(e,t){return e?_t(_t(Object.create(null),e),t):t}function _d(e,t){if(!e)return t;if(!t)return e;const n=_t(Object.create(null),e);for(const s in t)n[s]=xt(e[s],t[s]);return n}function Cd(e,t,n,s=!1){const r={},i={};Ns(i,js,1),e.propsDefaults=Object.create(null),Il(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:zf(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Sd(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=z(r),[l]=e.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];const m=t[p];if(l)if(H(i,p))m!==i[p]&&(i[p]=m,c=!0);else{const A=Ze(p);r[A]=bi(l,a,A,m,e,!1)}else m!==i[p]&&(i[p]=m,c=!0)}}}else{Il(e,t,r,i)&&(c=!0);let u;for(const d in a)(!t||!H(t,d)&&((u=tn(d))===d||!H(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=bi(l,a,d,void 0,e,!0)):delete r[d]);if(i!==a)for(const d in i)(!t||!H(t,d))&&(delete i[d],c=!0)}c&&ce(e,"set","$attrs")}function Il(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Cs(l))continue;const c=t[l];let u;r&&H(r,u=Ze(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:pi(e.emitsOptions,l)||c!==s[l]&&(s[l]=c,o=!0)}if(i){const l=z(n),c=a||J;for(let u=0;u<i.length;u++){const d=i[u];n[d]=bi(r,l,d,c[d],e,!H(c,d))}}return o}function bi(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=H(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&$(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(on(r),s=c[n]=l.call(null,t),ke())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===tn(n))&&(s=!0))}return s}function bl(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let l=!1;if(!$(e)){const u=d=>{l=!0;const[p,m]=bl(d,t,!0);_t(o,p),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return s.set(e,Qe),Qe;if(V(i))for(let u=0;u<i.length;u++){const d=Ze(i[u]);Al(d)&&(o[d]=J)}else if(i)for(const u in i){const d=Ze(u);if(Al(d)){const p=i[u],m=o[d]=V(p)||$(p)?{type:p}:p;if(m){const A=Sl(Boolean,m.type),M=Sl(String,m.type);m[0]=A>-1,m[1]=M<0||A<M,(A>-1||H(m,"default"))&&a.push(d)}}}const c=[o,a];return s.set(e,c),c}function Al(e){return e[0]!=="$"}function _l(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Cl(e,t){return _l(e)===_l(t)}function Sl(e,t){return V(t)?t.findIndex(n=>Cl(n,e)):$(t)&&Cl(t,e)?0:-1}const Nl=e=>e[0]==="_"||e==="$stable",Ai=e=>V(e)?e.map(re):[re(e)],Nd=(e,t,n)=>{const s=td((...r)=>Ai(t(...r)),n);return s._c=!1,s},Dl=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Nl(r))continue;const i=e[r];if($(i))t[r]=Nd(r,i,s);else if(i!=null){const o=Ai(i);t[r]=()=>o}}},xl=(e,t)=>{const n=Ai(t);e.slots.default=()=>n},Dd=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=z(t),Ns(t,"_",n)):Dl(t,e.slots={})}else e.slots={},t&&xl(e,t);Ns(e.slots,js,1)},xd=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=J;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(_t(r,t),!n&&a===1&&delete r._):(i=!t.$stable,Dl(t,r)),o=t}else t&&(xl(e,t),o={default:1});if(i)for(const a in r)!Nl(a)&&!(a in o)&&delete r[a]};function Re(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(nn(),zt(l,n,8,[e.el,a,e,t]),De())}}function Rl(){return{app:null,config:{isNativeTag:uf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rd=0;function Od(e,t){return function(s,r=null){r!=null&&!pt(r)&&(r=null);const i=Rl(),o=new Set;let a=!1;const l=i.app={_uid:Rd++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:lp,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(l,...u)):$(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,d){if(!a){const p=Me(s,r);return p.appContext=i,u&&t?t(p,c):e(p,c,d),a=!0,l._container=c,c.__vue_app__=l,xi(p.component)||p.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}const Rt=od;function Ld(e){return Md(e)}function Md(e,t){const n=yf();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=Jt,cloneNode:A,insertStaticContent:M}=e,S=(h,f,g,v=null,y=null,I=null,_=!1,E=null,T=!!f.dynamicChildren)=>{if(h===f)return;h&&!Le(h,f)&&(v=bs(h),ge(h,y,I,!0),h=null),f.patchFlag===-2&&(T=!1,f.dynamicChildren=null);const{type:w,ref:R,shapeFlag:D}=f;switch(w){case Ci:k(h,f,g,v);break;case ve:lt(h,f,g,v);break;case Si:h==null&&nt(f,g,v,_);break;case se:Ge(h,f,g,v,y,I,_,E,T);break;default:D&1?Zt(h,f,g,v,y,I,_,E,T):D&6?Aa(h,f,g,v,y,I,_,E,T):(D&64||D&128)&&w.process(h,f,g,v,y,I,_,E,T,Ye)}R!=null&&y&&_i(R,h&&h.ref,I,f||h,!f)},k=(h,f,g,v)=>{if(h==null)s(f.el=a(f.children),g,v);else{const y=f.el=h.el;f.children!==h.children&&c(y,f.children)}},lt=(h,f,g,v)=>{h==null?s(f.el=l(f.children||""),g,v):f.el=h.el},nt=(h,f,g,v)=>{[h.el,h.anchor]=M(h.children,f,g,v)},Z=({el:h,anchor:f},g,v)=>{let y;for(;h&&h!==f;)y=p(h),s(h,g,v),h=y;s(f,g,v)},Dt=({el:h,anchor:f})=>{let g;for(;h&&h!==f;)g=p(h),r(h),h=g;r(f)},Zt=(h,f,g,v,y,I,_,E,T)=>{_=_||f.type==="svg",h==null?X(f,g,v,y,I,_,E,T):Yt(h,f,y,I,_,E,T)},X=(h,f,g,v,y,I,_,E)=>{let T,w;const{type:R,props:D,shapeFlag:O,transition:P,patchFlag:q,dirs:st}=h;if(h.el&&A!==void 0&&q===-1)T=h.el=A(h.el);else{if(T=h.el=o(h.type,I,D&&D.is,D),O&8?u(T,h.children):O&16&&dt(h.children,T,null,v,y,I&&R!=="foreignObject",_,E),st&&Re(h,null,v,"created"),D){for(const et in D)et!=="value"&&!Cs(et)&&i(T,et,null,D[et],I,h.children,v,y,le);"value"in D&&i(T,"value",null,D.value),(w=D.onVnodeBeforeMount)&&ne(w,v,h)}yt(T,h,h.scopeId,_,v)}st&&Re(h,null,v,"beforeMount");const Q=(!y||y&&!y.pendingBranch)&&P&&!P.persisted;Q&&P.beforeEnter(T),s(T,f,g),((w=D&&D.onVnodeMounted)||Q||st)&&Rt(()=>{w&&ne(w,v,h),Q&&P.enter(T),st&&Re(h,null,v,"mounted")},y)},yt=(h,f,g,v,y)=>{if(g&&m(h,g),v)for(let I=0;I<v.length;I++)m(h,v[I]);if(y){let I=y.subTree;if(f===I){const _=y.vnode;yt(h,_,_.scopeId,_.slotScopeIds,y.parent)}}},dt=(h,f,g,v,y,I,_,E,T=0)=>{for(let w=T;w<h.length;w++){const R=h[w]=E?we(h[w]):re(h[w]);S(null,R,f,g,v,y,I,_,E)}},Yt=(h,f,g,v,y,I,_)=>{const E=f.el=h.el;let{patchFlag:T,dynamicChildren:w,dirs:R}=f;T|=h.patchFlag&16;const D=h.props||J,O=f.props||J;let P;(P=O.onVnodeBeforeUpdate)&&ne(P,g,f,h),R&&Re(f,h,g,"beforeUpdate");const q=y&&f.type!=="foreignObject";if(w?$t(h.dynamicChildren,w,E,g,v,q,I):_||ae(h,f,E,null,g,v,q,I,!1),T>0){if(T&16)Xt(E,f,D,O,g,v,y);else if(T&2&&D.class!==O.class&&i(E,"class",null,O.class,y),T&4&&i(E,"style",D.style,O.style,y),T&8){const st=f.dynamicProps;for(let Q=0;Q<st.length;Q++){const et=st[Q],Qt=D[et],Xe=O[et];(Xe!==Qt||et==="value")&&i(E,et,Qt,Xe,y,h.children,g,v,le)}}T&1&&h.children!==f.children&&u(E,f.children)}else!_&&w==null&&Xt(E,f,D,O,g,v,y);((P=O.onVnodeUpdated)||R)&&Rt(()=>{P&&ne(P,g,f,h),R&&Re(f,h,g,"updated")},v)},$t=(h,f,g,v,y,I,_)=>{for(let E=0;E<f.length;E++){const T=h[E],w=f[E],R=T.el&&(T.type===se||!Le(T,w)||T.shapeFlag&(6|64))?d(T.el):g;S(T,w,R,null,v,y,I,_,!0)}},Xt=(h,f,g,v,y,I,_)=>{if(g!==v){for(const E in v){if(Cs(E))continue;const T=v[E],w=g[E];T!==w&&E!=="value"&&i(h,E,w,T,_,f.children,y,I,le)}if(g!==J)for(const E in g)!Cs(E)&&!(E in v)&&i(h,E,g[E],null,_,f.children,y,I,le);"value"in v&&i(h,"value",g.value,v.value)}},Ge=(h,f,g,v,y,I,_,E,T)=>{const w=f.el=h?h.el:a(""),R=f.anchor=h?h.anchor:a("");let{patchFlag:D,dynamicChildren:O,slotScopeIds:P}=f;P&&(E=E?E.concat(P):P),h==null?(s(w,g,v),s(R,g,v),dt(f.children,g,R,y,I,_,E,T)):D>0&&D&64&&O&&h.dynamicChildren?($t(h.dynamicChildren,O,g,y,I,_,E),(f.key!=null||y&&f===y.subTree)&&Ol(h,f,!0)):ae(h,f,g,R,y,I,_,E,T)},Aa=(h,f,g,v,y,I,_,E,T)=>{f.slotScopeIds=E,h==null?f.shapeFlag&512?y.ctx.activate(f,g,v,_,T):qr(f,g,v,y,I,_,T):Pt(h,f,T)},qr=(h,f,g,v,y,I,_)=>{const E=h.component=Wd(h,v,y);if(Ps(h)&&(E.ctx.renderer=Ye),Xd(E),E.asyncDep){if(y&&y.registerDep(E,ot),!h.el){const T=E.subTree=Me(ve);lt(null,T,f,g)}return}ot(E,h,f,g,y,I,_)},Pt=(h,f,g)=>{const v=f.component=h.component;if(sd(h,f,g))if(v.asyncDep&&!v.asyncResolved){tt(v,f,g);return}else v.next=f,rp(v.update),v.update();else f.component=h.component,f.el=h.el,v.vnode=f},ot=(h,f,g,v,y,I,_)=>{const E=()=>{if(h.isMounted){let{next:R,bu:D,u:O,parent:P,vnode:q}=h,st=R,Q;T.allowRecurse=!1,R?(R.el=q.el,tt(h,R,_)):R=q,D&&ti(D),(Q=R.props&&R.props.onVnodeBeforeUpdate)&&ne(Q,P,R,q),T.allowRecurse=!0;const et=gi(h),Qt=h.subTree;h.subTree=et,S(Qt,et,d(Qt.el),bs(Qt),h,y,I),R.el=et.el,st===null&&rd(h,et.el),O&&Rt(O,y),(Q=R.props&&R.props.onVnodeUpdated)&&Rt(()=>ne(Q,P,R,q),y)}else{let R;const{el:D,props:O}=f,{bm:P,m:q,parent:st}=h,Q=Ei(f);if(T.allowRecurse=!1,P&&ti(P),!Q&&(R=O&&O.onVnodeBeforeMount)&&ne(R,st,f),T.allowRecurse=!0,D&&zr){const et=()=>{h.subTree=gi(h),zr(D,h.subTree,h,y,null)};Q?f.type.__asyncLoader().then(()=>!h.isUnmounted&&et()):et()}else{const et=h.subTree=gi(h);S(null,et,g,v,h,y,I),f.el=et.el}if(q&&Rt(q,y),!Q&&(R=O&&O.onVnodeMounted)){const et=f;Rt(()=>ne(R,st,et),y)}f.shapeFlag&256&&h.a&&Rt(h.a,y),h.isMounted=!0,f=g=v=null}},T=new ii(E,()=>jl(h.update),h.scope),w=h.update=T.run.bind(T);w.id=h.uid,T.allowRecurse=w.allowRecurse=!0,w()},tt=(h,f,g)=>{f.component=h;const v=h.vnode.props;h.vnode=f,h.next=null,Sd(h,f.props,v,g),xd(h,f.children,g),nn(),Mi(void 0,h.update),De()},ae=(h,f,g,v,y,I,_,E,T=!1)=>{const w=h&&h.children,R=h?h.shapeFlag:0,D=f.children,{patchFlag:O,shapeFlag:P}=f;if(O>0){if(O&128){Dn(w,D,g,v,y,I,_,E,T);return}else if(O&256){Hr(w,D,g,v,y,I,_,E,T);return}}P&8?(R&16&&le(w,y,I),D!==w&&u(g,D)):R&16?P&16?Dn(w,D,g,v,y,I,_,E,T):le(w,y,I,!0):(R&8&&u(g,""),P&16&&dt(D,g,v,y,I,_,E,T))},Hr=(h,f,g,v,y,I,_,E,T)=>{h=h||Qe,f=f||Qe;const w=h.length,R=f.length,D=Math.min(w,R);let O;for(O=0;O<D;O++){const P=f[O]=T?we(f[O]):re(f[O]);S(h[O],P,g,null,y,I,_,E,T)}w>R?le(h,y,I,!0,!1,D):dt(f,g,v,y,I,_,E,T,D)},Dn=(h,f,g,v,y,I,_,E,T)=>{let w=0;const R=f.length;let D=h.length-1,O=R-1;for(;w<=D&&w<=O;){const P=h[w],q=f[w]=T?we(f[w]):re(f[w]);if(Le(P,q))S(P,q,g,null,y,I,_,E,T);else break;w++}for(;w<=D&&w<=O;){const P=h[D],q=f[O]=T?we(f[O]):re(f[O]);if(Le(P,q))S(P,q,g,null,y,I,_,E,T);else break;D--,O--}if(w>D){if(w<=O){const P=O+1,q=P<R?f[P].el:v;for(;w<=O;)S(null,f[w]=T?we(f[w]):re(f[w]),g,q,y,I,_,E,T),w++}}else if(w>O)for(;w<=D;)ge(h[w],y,I,!0),w++;else{const P=w,q=w,st=new Map;for(w=q;w<=O;w++){const jt=f[w]=T?we(f[w]):re(f[w]);jt.key!=null&&st.set(jt.key,w)}let Q,et=0;const Qt=O-q+1;let Xe=!1,Sa=0;const xn=new Array(Qt);for(w=0;w<Qt;w++)xn[w]=0;for(w=P;w<=D;w++){const jt=h[w];if(et>=Qt){ge(jt,y,I,!0);continue}let te;if(jt.key!=null)te=st.get(jt.key);else for(Q=q;Q<=O;Q++)if(xn[Q-q]===0&&Le(jt,f[Q])){te=Q;break}te===void 0?ge(jt,y,I,!0):(xn[te-q]=w+1,te>=Sa?Sa=te:Xe=!0,S(jt,f[te],g,null,y,I,_,E,T),et++)}const Na=Xe?kd(xn):Qe;for(Q=Na.length-1,w=Qt-1;w>=0;w--){const jt=q+w,te=f[jt],Da=jt+1<R?f[jt+1].el:v;xn[w]===0?S(null,te,g,Da,y,I,_,E,T):Xe&&(Q<0||w!==Na[Q]?We(te,g,Da,2):Q--)}}},We=(h,f,g,v,y=null)=>{const{el:I,type:_,transition:E,children:T,shapeFlag:w}=h;if(w&6){We(h.component.subTree,f,g,v);return}if(w&128){h.suspense.move(f,g,v);return}if(w&64){_.move(h,f,g,Ye);return}if(_===se){s(I,f,g);for(let D=0;D<T.length;D++)We(T[D],f,g,v);s(h.anchor,f,g);return}if(_===Si){Z(h,f,g);return}if(v!==2&&w&1&&E)if(v===0)E.beforeEnter(I),s(I,f,g),Rt(()=>E.enter(I),y);else{const{leave:D,delayLeave:O,afterLeave:P}=E,q=()=>s(I,f,g),st=()=>{D(I,()=>{q(),P&&P()})};O?O(I,q,st):st()}else s(I,f,g)},ge=(h,f,g,v=!1,y=!1)=>{const{type:I,props:_,ref:E,children:T,dynamicChildren:w,shapeFlag:R,patchFlag:D,dirs:O}=h;if(E!=null&&_i(E,null,g,h,!0),R&256){f.ctx.deactivate(h);return}const P=R&1&&O,q=!Ei(h);let st;if(q&&(st=_&&_.onVnodeBeforeUnmount)&&ne(st,f,h),R&6)sf(h.component,g,v);else{if(R&128){h.suspense.unmount(g,v);return}P&&Re(h,null,f,"beforeUnmount"),R&64?h.type.remove(h,f,g,y,Ye,v):w&&(I!==se||D>0&&D&64)?le(w,f,g,!1,!0):(I===se&&D&(128|256)||!y&&R&16)&&le(T,f,g),v&&_a(h)}(q&&(st=_&&_.onVnodeUnmounted)||P)&&Rt(()=>{st&&ne(st,f,h),P&&Re(h,null,f,"unmounted")},g)},_a=h=>{const{type:f,el:g,anchor:v,transition:y}=h;if(f===se){nf(g,v);return}if(f===Si){Dt(h);return}const I=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:_,delayLeave:E}=y,T=()=>_(g,I);E?E(h.el,I,T):T()}else I()},nf=(h,f)=>{let g;for(;h!==f;)g=p(h),r(h),h=g;r(f)},sf=(h,f,g)=>{const{bum:v,scope:y,update:I,subTree:_,um:E}=h;v&&ti(v),y.stop(),I&&(I.active=!1,ge(_,h,f,g)),E&&Rt(E,f),Rt(()=>{h.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},le=(h,f,g,v=!1,y=!1,I=0)=>{for(let _=I;_<h.length;_++)ge(h[_],f,g,v,y)},bs=h=>h.shapeFlag&6?bs(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),Ca=(h,f,g)=>{h==null?f._vnode&&ge(f._vnode,null,null,!0):S(f._vnode||null,h,f,null,null,null,g),Hl(),f._vnode=h},Ye={p:S,um:ge,m:We,r:_a,mt:qr,mc:dt,pc:ae,pbc:$t,n:bs,o:e};let Kr,zr;return t&&([Kr,zr]=t(Ye)),{render:Ca,hydrate:Kr,createApp:Od(Ca,Kr)}}function _i(e,t,n,s,r=!1){if(V(e)){e.forEach((p,m)=>_i(p,t&&(V(t)?t[m]:t),n,s,r));return}if(Ei(s)&&!r)return;const i=s.shapeFlag&4?xi(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=e,c=t&&t.r,u=a.refs===J?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(vt(c)?(u[c]=null,H(d,c)&&(d[c]=null)):Ut(c)&&(c.value=null)),vt(l)){const p=()=>{u[l]=o,H(d,l)&&(d[l]=o)};o?(p.id=-1,Rt(p,n)):p()}else if(Ut(l)){const p=()=>{l.value=o};o?(p.id=-1,Rt(p,n)):p()}else $(l)&&Ee(l,a,12,[o,u])}function ne(e,t,n,s=null){zt(e,t,7,[n,s])}function Ol(e,t,n=!1){const s=e.children,r=t.children;if(V(s)&&V(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=we(r[i]),a.el=o.el),n||Ol(o,a))}}function kd(e){const t=e.slice(),n=[0];let s,r,i,o,a;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(r=n[n.length-1],e[r]<c){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Fd=e=>e.__isTeleport,Pd=Symbol(),se=Symbol(void 0),Ci=Symbol(void 0),ve=Symbol(void 0),Si=Symbol(void 0),kn=[];let Oe=null;function yw(e=!1){kn.push(Oe=e?null:[])}function Ud(){kn.pop(),Oe=kn[kn.length-1]||null}let $s=1;function Ll(e){$s+=e}function Vd(e){return e.dynamicChildren=$s>0?Oe||Qe:null,Ud(),$s>0&&Oe&&Oe.push(e),e}function vw(e,t,n,s,r,i){return Vd(kl(e,t,n,s,r,i,!0))}function $d(e){return e?e.__v_isVNode===!0:!1}function Le(e,t){return e.type===t.type&&e.key===t.key}const js="__vInternal",Ml=({key:e})=>e!=null?e:null,Bs=({ref:e})=>e!=null?vt(e)||Ut(e)||$(e)?{i:ee,r:e}:e:null;function kl(e,t=null,n=null,s=0,r=null,i=e===se?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ml(t),ref:t&&Bs(t),scopeId:cl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Ni(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=vt(n)?8:16),$s>0&&!o&&Oe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Oe.push(l),l}const Me=jd;function jd(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Pd)&&(e=ve),$d(e)){const a=rn(e,t,!0);return n&&Ni(a,n),a}if(tp(e)&&(e=e.__vccOpts),t){t=Bd(t);let{class:a,style:l}=t;a&&!vt(a)&&(t.class=Yr(a)),pt(l)&&(sl(l)&&!V(l)&&(l=_t({},l)),t.style=Wr(l))}const o=vt(e)?1:id(e)?128:Fd(e)?64:pt(e)?4:$(e)?2:0;return kl(e,t,n,s,r,o,i,!0)}function Bd(e){return e?sl(e)||js in e?_t({},e):e:null}function rn(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=e,a=t?Hd(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Ml(a),ref:t&&t.ref?n&&r?V(r)?r.concat(Bs(t)):[r,Bs(t)]:Bs(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==se?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),el:e.el,anchor:e.anchor}}function qd(e=" ",t=0){return Me(Ci,null,e,t)}function re(e){return e==null||typeof e=="boolean"?Me(ve):V(e)?Me(se,null,e.slice()):typeof e=="object"?we(e):Me(Ci,null,String(e))}function we(e){return e.el===null||e.memo?e:rn(e)}function Ni(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(s&(1|64)){const r=t.default;r&&(r._c&&(r._d=!1),Ni(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(js in t)?t._ctx=ee:r===3&&ee&&(ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:ee},n=32):(t=String(t),s&64?(n=16,t=[qd(t)]):n=8);e.children=t,e.shapeFlag|=n}function Hd(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Yr([t.class,s.class]));else if(r==="style")t.style=Wr([t.style,s.style]);else if(As(r)){const i=t[r],o=s[r];i!==o&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function ww(e,t,n,s){let r;const i=n&&n[s];if(V(e)||vt(e)){r=new Array(e.length);for(let o=0,a=e.length;o<a;o++)r[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i&&i[o])}else if(pt(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=t(e[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Di=e=>e?Fl(e)?xi(e)||e.proxy:Di(e.parent):null,qs=_t(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Di(e.parent),$root:e=>Di(e.root),$emit:e=>e.emit,$options:e=>El(e),$forceUpdate:e=>()=>jl(e.update),$nextTick:e=>np.bind(e.proxy),$watch:e=>ap.bind(e)}),Kd={get({_:e},t){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 0:return s[t];case 1:return r[t];case 3:return n[t];case 2:return i[t]}else{if(s!==J&&H(s,t))return o[t]=0,s[t];if(r!==J&&H(r,t))return o[t]=1,r[t];if((c=e.propsOptions[0])&&H(c,t))return o[t]=2,i[t];if(n!==J&&H(n,t))return o[t]=3,n[t];Ti&&(o[t]=4)}}const u=qs[t];let d,p;if(u)return t==="$attrs"&&Bt(e,"get",t),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==J&&H(n,t))return o[t]=3,n[t];if(p=l.config.globalProperties,H(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;if(r!==J&&H(r,t))r[t]=n;else if(s!==J&&H(s,t))s[t]=n;else if(H(e.props,t))return!1;return t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return n[o]!==void 0||e!==J&&H(e,o)||t!==J&&H(t,o)||(a=i[0])&&H(a,o)||H(s,o)||H(qs,o)||H(r.config.globalProperties,o)}},zd=Rl();let Gd=0;function Wd(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||zd,i={uid:Gd++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,update:null,scope:new vf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bl(s,r),emitsOptions:ll(s,r),emit:null,emitted:null,propsDefaults:J,inheritAttrs:s.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Zf.bind(null,i),e.ce&&e.ce(i),i}let wt=null;const Yd=()=>wt||ee,on=e=>{wt=e,e.scope.on()},ke=()=>{wt&&wt.scope.off(),wt=null};function Fl(e){return e.vnode.shapeFlag&4}let Hs=!1;function Xd(e,t=!1){Hs=t;const{props:n,children:s}=e.vnode,r=Fl(e);Cd(e,n,r,t),Dd(e,s);const i=r?Qd(e,t):void 0;return Hs=!1,i}function Qd(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=rl(new Proxy(e.ctx,Kd));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?Zd(e):null;on(e),nn();const i=Ee(s,e,0,[e.props,r]);if(De(),ke(),Ma(i)){if(i.then(ke,ke),t)return i.then(o=>{Pl(e,o,t)}).catch(o=>{Ks(o,e,0)});e.asyncDep=i}else Pl(e,i,t)}else Vl(e,t)}function Pl(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pt(t)&&(e.setupState=al(t)),Vl(e,n)}let Ul;function Vl(e,t,n){const s=e.type;if(!e.render){if(!t&&Ul&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,c=_t(_t({isCustomElement:i,delimiters:a},o),l);s.render=Ul(r,c)}}e.render=s.render||Jt}on(e),nn(),Td(e),De(),ke()}function Jd(e){return new Proxy(e.attrs,{get(t,n){return Bt(e,"get","$attrs"),t[n]}})}function Zd(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=Jd(e))},slots:e.slots,emit:e.emit,expose:t}}function xi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(al(rl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qs)return qs[n](e)}}))}function tp(e){return $(e)&&"__vccOpts"in e}function Ee(e,t,n,s){let r;try{r=s?e(...s):e()}catch(i){Ks(i,t,n)}return r}function zt(e,t,n,s){if($(e)){const i=Ee(e,t,n,s);return i&&Ma(i)&&i.catch(o=>{Ks(o,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(zt(e[i],t,n,s));return r}function Ks(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ee(l,null,10,[e,o,a]);return}}ep(e,n,r,s)}function ep(e,t,n,s=!0){console.error(e)}let zs=!1,Ri=!1;const qt=[];let he=0;const Fn=[];let Pn=null,an=0;const Un=[];let Te=null,ln=0;const $l=Promise.resolve();let Oi=null,Li=null;function np(e){const t=Oi||$l;return e?t.then(this?e.bind(this):e):t}function sp(e){let t=he+1,n=qt.length;for(;t<n;){const s=t+n>>>1;Vn(qt[s])<e?t=s+1:n=s}return t}function jl(e){(!qt.length||!qt.includes(e,zs&&e.allowRecurse?he+1:he))&&e!==Li&&(e.id==null?qt.push(e):qt.splice(sp(e.id),0,e),Bl())}function Bl(){!zs&&!Ri&&(Ri=!0,Oi=$l.then(Kl))}function rp(e){const t=qt.indexOf(e);t>he&&qt.splice(t,1)}function ql(e,t,n,s){V(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&n.push(e),Bl()}function ip(e){ql(e,Pn,Fn,an)}function op(e){ql(e,Te,Un,ln)}function Mi(e,t=null){if(Fn.length){for(Li=t,Pn=[...new Set(Fn)],Fn.length=0,an=0;an<Pn.length;an++)Pn[an]();Pn=null,an=0,Li=null,Mi(e,t)}}function Hl(e){if(Un.length){const t=[...new Set(Un)];if(Un.length=0,Te){Te.push(...t);return}for(Te=t,Te.sort((n,s)=>Vn(n)-Vn(s)),ln=0;ln<Te.length;ln++)Te[ln]();Te=null,ln=0}}const Vn=e=>e.id==null?1/0:e.id;function Kl(e){Ri=!1,zs=!0,Mi(e),qt.sort((n,s)=>Vn(n)-Vn(s));const t=Jt;try{for(he=0;he<qt.length;he++){const n=qt[he];n&&n.active!==!1&&Ee(n,null,14)}}finally{he=0,qt.length=0,Hl(),zs=!1,Oi=null,(qt.length||Fn.length||Un.length)&&Kl(e)}}const zl={};function ki(e,t,n){return Gl(e,t,n)}function Gl(e,t,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=J){const a=wt;let l,c=!1,u=!1;if(Ut(e)?(l=()=>e.value,c=!!e._shallow):sn(e)?(l=()=>e,s=!0):V(e)?(u=!0,c=e.some(sn),l=()=>e.map(k=>{if(Ut(k))return k.value;if(sn(k))return cn(k);if($(k))return Ee(k,a,2)})):$(e)?t?l=()=>Ee(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),zt(e,a,3,[p])}:l=Jt,t&&s){const k=l;l=()=>cn(k())}let d,p=k=>{d=S.onStop=()=>{Ee(k,a,4)}};if(Hs)return p=Jt,t?n&&zt(t,a,3,[l(),u?[]:void 0,p]):l(),Jt;let m=u?[]:zl;const A=()=>{if(!!S.active)if(t){const k=S.run();(s||c||(u?k.some((lt,nt)=>Rn(lt,m[nt])):Rn(k,m)))&&(d&&d(),zt(t,a,3,[k,m===zl?void 0:m,p]),m=k)}else S.run()};A.allowRecurse=!!t;let M;r==="sync"?M=A:r==="post"?M=()=>Rt(A,a&&a.suspense):M=()=>{!a||a.isMounted?ip(A):A()};const S=new ii(l,M);return t?n?A():m=S.run():r==="post"?Rt(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&Oa(a.scope.effects,S)}}function ap(e,t,n){const s=this.proxy,r=vt(e)?e.includes(".")?Wl(s,e):()=>s[e]:e.bind(s,s);let i;$(t)?i=t:(i=t.handler,n=t);const o=wt;on(this);const a=Gl(r,i.bind(s),n);return o?on(o):ke(),a}function Wl(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function cn(e,t){if(!pt(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ut(e))cn(e.value,t);else if(V(e))for(let n=0;n<e.length;n++)cn(e[n],t);else if(La(e)||Je(e))e.forEach(n=>{cn(n,t)});else if(Fa(e))for(const n in e)cn(e[n],t);return e}const lp="3.2.19",cp="http://www.w3.org/2000/svg",un=typeof document!="undefined"?document:null,Yl=new Map,up={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?un.createElementNS(cp,e):un.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>un.createTextNode(e),createComment:e=>un.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>un.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s){const r=n?n.previousSibling:t.lastChild;let i=Yl.get(e);if(!i){const o=un.createElement("template");if(o.innerHTML=s?`<svg>${e}</svg>`:e,i=o.content,s){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}Yl.set(e,i)}return t.insertBefore(i.cloneNode(!0),n),[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function hp(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function fp(e,t,n){const s=e.style,r=s.display;if(!n)e.removeAttribute("style");else if(vt(n))t!==n&&(s.cssText=n);else{for(const i in n)Fi(s,i,n[i]);if(t&&!vt(t))for(const i in t)n[i]==null&&Fi(s,i,"")}"_vod"in e&&(s.display=r)}const Xl=/\s*!important$/;function Fi(e,t,n){if(V(n))n.forEach(s=>Fi(e,t,s));else if(t.startsWith("--"))e.setProperty(t,n);else{const s=dp(e,t);Xl.test(n)?e.setProperty(tn(s),n.replace(Xl,""),"important"):e[s]=n}}const Ql=["Webkit","Moz","ms"],Pi={};function dp(e,t){const n=Pi[t];if(n)return n;let s=Ze(t);if(s!=="filter"&&s in e)return Pi[t]=s;s=Pa(s);for(let r=0;r<Ql.length;r++){const i=Ql[r]+s;if(i in e)return Pi[t]=i}return t}const Jl="http://www.w3.org/1999/xlink";function pp(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Jl,t.slice(6,t.length)):e.setAttributeNS(Jl,t,n);else{const i=of(t);n==null||i&&!xa(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function gp(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"){e._value=n;const a=n==null?"":n;e.value!==a&&(e.value=a),n==null&&e.removeAttribute(t);return}if(n===""||n==null){const a=typeof e[t];if(a==="boolean"){e[t]=xa(n);return}else if(n==null&&a==="string"){e[t]="",e.removeAttribute(t);return}else if(a==="number"){try{e[t]=0}catch(l){}e.removeAttribute(t);return}}try{e[t]=n}catch(a){}}let Gs=Date.now,Zl=!1;if(typeof window!="undefined"){Gs()>document.createEvent("Event").timeStamp&&(Gs=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Zl=!!(e&&Number(e[1])<=53)}let Ui=0;const mp=Promise.resolve(),yp=()=>{Ui=0},vp=()=>Ui||(mp.then(yp),Ui=Gs());function wp(e,t,n,s){e.addEventListener(t,n,s)}function Ep(e,t,n,s){e.removeEventListener(t,n,s)}function Tp(e,t,n,s,r=null){const i=e._vei||(e._vei={}),o=i[t];if(s&&o)o.value=s;else{const[a,l]=Ip(t);if(s){const c=i[t]=bp(s,r);wp(e,a,c,l)}else o&&(Ep(e,a,o,l),i[t]=void 0)}}const tc=/(?:Once|Passive|Capture)$/;function Ip(e){let t;if(tc.test(e)){t={};let n;for(;n=e.match(tc);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[tn(e.slice(2)),t]}function bp(e,t){const n=s=>{const r=s.timeStamp||Gs();(Zl||r>=n.attached-1)&&zt(Ap(s,n.value),t,5,[s])};return n.value=e,n.attached=vp(),n}function Ap(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s(r))}else return t}const ec=/^on[a-z]/,_p=(e,t,n,s,r=!1,i,o,a,l)=>{t==="class"?hp(e,s,r):t==="style"?fp(e,n,s):As(t)?Xr(t)||Tp(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cp(e,t,s,r))?gp(e,t,s,i,o,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),pp(e,t,s,r))};function Cp(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&ec.test(t)&&$(n)):t==="spellcheck"||t==="draggable"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ec.test(t)&&vt(n)?!1:t in e}const Sp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ud.props;const Np=_t({patchProp:_p},up);let nc;function Dp(){return nc||(nc=Ld(Np))}const Ew=(...e)=>{const t=Dp().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=xp(s);if(!r)return;const i=t._component;!$(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function xp(e){return vt(e)?document.querySelector(e):e}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Rp(e,t,n,s){function r(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function a(u){try{c(s.next(u))}catch(d){o(d)}}function l(u){try{c(s.throw(u))}catch(d){o(d)}}function c(u){u.done?i(u.value):r(u.value).then(a,l)}c((s=s.apply(e,t||[])).next())})}function Op(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},s,r,i,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(u){return l([c,u])}}function l(c){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,r&&(i=c[0]&2?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(u){c=[6,u],r=0}finally{s=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Vi(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],s=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&s>=e.length&&(e=void 0),{value:e&&e[s++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ws(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var s=n.call(e),r,i=[],o;try{for(;(t===void 0||t-- >0)&&!(r=s.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(o)throw o.error}}return i}function sc(e,t,n){if(n||arguments.length===2)for(var s=0,r=t.length,i;s<r;s++)(i||!(s in t))&&(i||(i=Array.prototype.slice.call(t,0,s)),i[s]=t[s]);return e.concat(i||Array.prototype.slice.call(t))}/**
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
 */class Lp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function Ys(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mp(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ys())}function kp(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Fp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pp(){return Ys().indexOf("Electron/")>=0}function Up(){const e=Ys();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Vp(){return Ys().indexOf("MSAppHost/")>=0}/**
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
 */const $p="FirebaseError";class $i extends Error{constructor(t,n,s){super(n);this.code=t,this.customData=s,this.name=$p,Object.setPrototypeOf(this,$i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rc.prototype.create)}}class rc{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?jp(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new $i(r,a,s)}}function jp(e,t){return e.replace(Bp,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Bp=/\{\$([^}]+)}/g;function ji(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(ic(i)&&ic(o)){if(!ji(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ic(e){return e!==null&&typeof e=="object"}/**
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
 */function $n(e){return e&&e._delegate?e._delegate:e}var Xs=function(){function e(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},e.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},e.prototype.setServiceProps=function(t){return this.serviceProps=t,this},e.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},e}();/**
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
 */var Fe="[DEFAULT]";/**
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
 */var qp=function(){function e(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(t){var n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){var s=new Lp;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch(i){}}return this.instancesDeferred.get(n).promise},e.prototype.getImmediate=function(t){var n,s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error("Service "+this.name+" is not available")}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(t){var n,s;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,!!this.shouldAutoInitialize()){if(Kp(t))try{this.getOrInitializeService({instanceIdentifier:Fe})}catch(d){}try{for(var r=Vi(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var o=Ws(i.value,2),a=o[0],l=o[1],c=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:c});l.resolve(u)}catch(d){}}}catch(d){n={error:d}}finally{try{i&&!i.done&&(s=r.return)&&s.call(r)}finally{if(n)throw n.error}}}},e.prototype.clearInstance=function(t){t===void 0&&(t=Fe),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},e.prototype.delete=function(){return Rp(this,void 0,void 0,function(){var t;return Op(this,function(n){switch(n.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(sc(sc([],Ws(t.filter(function(s){return"INTERNAL"in s}).map(function(s){return s.INTERNAL.delete()}))),Ws(t.filter(function(s){return"_delete"in s}).map(function(s){return s._delete()}))))];case 1:return n.sent(),[2]}})})},e.prototype.isComponentSet=function(){return this.component!=null},e.prototype.isInitialized=function(t){return t===void 0&&(t=Fe),this.instances.has(t)},e.prototype.getOptions=function(t){return t===void 0&&(t=Fe),this.instancesOptions.get(t)||{}},e.prototype.initialize=function(t){var n,s;t===void 0&&(t={});var r=t.options,i=r===void 0?{}:r,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var l=Vi(this.instancesDeferred.entries()),c=l.next();!c.done;c=l.next()){var u=Ws(c.value,2),d=u[0],p=u[1],m=this.normalizeInstanceIdentifier(d);o===m&&p.resolve(a)}}catch(A){n={error:A}}finally{try{c&&!c.done&&(s=l.return)&&s.call(l)}finally{if(n)throw n.error}}return a},e.prototype.onInit=function(t,n){var s,r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&t(o,r),function(){i.delete(t)}},e.prototype.invokeOnInitCallbacks=function(t,n){var s,r,i=this.onInitCallbacks.get(n);if(!!i)try{for(var o=Vi(i),a=o.next();!a.done;a=o.next()){var l=a.value;try{l(t,n)}catch(c){}}}catch(c){s={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(s)throw s.error}}},e.prototype.getOrInitializeService=function(t){var n=t.instanceIdentifier,s=t.options,r=s===void 0?{}:s,i=this.instances.get(n);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Hp(n),options:r}),this.instances.set(n,i),this.instancesOptions.set(n,r),this.invokeOnInitCallbacks(i,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,i)}catch(o){}return i||null},e.prototype.normalizeInstanceIdentifier=function(t){return t===void 0&&(t=Fe),this.component?this.component.multipleInstances?t:Fe:t},e.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},e}();function Hp(e){return e===Fe?void 0:e}function Kp(e){return e.instantiationMode==="EAGER"}/**
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
 */var zp=function(){function e(t){this.name=t,this.providers=new Map}return e.prototype.addComponent=function(t){var n=this.getProvider(t.name);if(n.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);n.setComponent(t)},e.prototype.addOrOverwriteComponent=function(t){var n=this.getProvider(t.name);n.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},e.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var n=new qp(t,this);return this.providers.set(t,n),n},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();/**
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
 */var G;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(G||(G={}));const Gp={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Wp=G.INFO,Yp={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Xp=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Yp[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class oc{constructor(t){this.name=t,this._logLevel=Wp,this._logHandler=Xp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Gp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}/**
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
 */class Qp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jp(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ac="@firebase/app",Zp="0.7.2";/**
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
 */const Bi=new oc("@firebase/app"),tg="@firebase/app-compat",eg="@firebase/analytics-compat",ng="@firebase/analytics",sg="@firebase/app-check-compat",rg="@firebase/app-check",ig="@firebase/auth",og="@firebase/auth-compat",ag="@firebase/database",lg="@firebase/database-compat",cg="@firebase/functions",ug="@firebase/functions-compat",hg="@firebase/installations",fg="@firebase/installations-compat",dg="@firebase/messaging",pg="@firebase/messaging-compat",gg="@firebase/performance",mg="@firebase/performance-compat",yg="@firebase/remote-config",vg="@firebase/remote-config-compat",wg="@firebase/storage",Eg="@firebase/storage-compat",Tg="@firebase/firestore",Ig="@firebase/firestore-compat",bg="firebase",Ag="9.1.1";/**
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
 */const lc="[DEFAULT]",_g={[ac]:"fire-core",[tg]:"fire-core-compat",[ng]:"fire-analytics",[eg]:"fire-analytics-compat",[rg]:"fire-app-check",[sg]:"fire-app-check-compat",[ig]:"fire-auth",[og]:"fire-auth-compat",[ag]:"fire-rtdb",[lg]:"fire-rtdb-compat",[cg]:"fire-fn",[ug]:"fire-fn-compat",[hg]:"fire-iid",[fg]:"fire-iid-compat",[dg]:"fire-fcm",[pg]:"fire-fcm-compat",[gg]:"fire-perf",[mg]:"fire-perf-compat",[yg]:"fire-rc",[vg]:"fire-rc-compat",[wg]:"fire-gcs",[Eg]:"fire-gcs-compat",[Tg]:"fire-fst",[Ig]:"fire-fst-compat","fire-js":"fire-js",[bg]:"fire-js-all"};/**
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
 */const Qs=new Map,qi=new Map;function Cg(e,t){try{e.container.addComponent(t)}catch(n){Bi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Hi(e){const t=e.name;if(qi.has(t))return Bi.debug(`There were multiple attempts to register component ${t}.`),!1;qi.set(t,e);for(const n of Qs.values())Cg(n,e);return!0}function Sg(e,t){return e.container.getProvider(t)}/**
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
 */const Ng={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Js=new rc("app","Firebase",Ng);/**
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
 */class Dg{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Js.create("app-deleted",{appName:this._name})}}/**
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
 */const xg=Ag;function Tw(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:lc,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Js.create("bad-app-name",{appName:String(s)});const r=Qs.get(s);if(r){if(ji(e,r.options)&&ji(n,r.config))return r;throw Js.create("duplicate-app",{appName:s})}const i=new zp(s);for(const a of qi.values())i.addComponent(a);const o=new Dg(e,n,i);return Qs.set(s,o),o}function Rg(e=lc){const t=Qs.get(e);if(!t)throw Js.create("no-app",{appName:e});return t}function Zs(e,t,n){var s;let r=(s=_g[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Bi.warn(a.join(" "));return}Hi(new Xs(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */function Og(e){Hi(new Xs("platform-logger",t=>new Qp(t),"PRIVATE")),Zs(ac,Zp,e),Zs("fire-js","")}Og();var Lg=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},N,Ki=Ki||{},F=Lg||self;function tr(){}function zi(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function jn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Mg(e){return Object.prototype.hasOwnProperty.call(e,Gi)&&e[Gi]||(e[Gi]=++kg)}var Gi="closure_uid_"+(1e9*Math.random()>>>0),kg=0;function Fg(e,t,n){return e.call.apply(e.bind,arguments)}function Pg(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function Et(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=Fg:Et=Pg,Et.apply(null,arguments)}function er(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Tt(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Ie(){this.s=this.s,this.o=this.o}var Ug=0,Vg={};Ie.prototype.s=!1;Ie.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Ug!=0)){var e=Mg(this);delete Vg[e]}};Ie.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const cc=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},uc=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<s;i++)i in r&&t.call(n,r[i],i,e)};function $g(e){t:{var t=Rm;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let r=0;r<n;r++)if(r in s&&t.call(void 0,s[r],r,e)){t=r;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function hc(e){return Array.prototype.concat.apply([],arguments)}function Wi(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function nr(e){return/^[\s\xa0]*$/.test(e)}var fc=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ot(e,t){return e.indexOf(t)!=-1}function Yi(e,t){return e<t?-1:e>t?1:0}var Lt;t:{var dc=F.navigator;if(dc){var pc=dc.userAgent;if(pc){Lt=pc;break t}}Lt=""}function Xi(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function gc(e){const t={};for(const n in e)t[n]=e[n];return t}var mc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yc(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<mc.length;i++)n=mc[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Qi(e){return Qi[" "](e),e}Qi[" "]=tr;function jg(e){var t=Hg;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Bg=Ot(Lt,"Opera"),hn=Ot(Lt,"Trident")||Ot(Lt,"MSIE"),vc=Ot(Lt,"Edge"),Ji=vc||hn,wc=Ot(Lt,"Gecko")&&!(Ot(Lt.toLowerCase(),"webkit")&&!Ot(Lt,"Edge"))&&!(Ot(Lt,"Trident")||Ot(Lt,"MSIE"))&&!Ot(Lt,"Edge"),qg=Ot(Lt.toLowerCase(),"webkit")&&!Ot(Lt,"Edge");function Ec(){var e=F.document;return e?e.documentMode:void 0}var sr;t:{var Zi="",to=function(){var e=Lt;if(wc)return/rv:([^\);]+)(\)|;)/.exec(e);if(vc)return/Edge\/([\d\.]+)/.exec(e);if(hn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(qg)return/WebKit\/(\S+)/.exec(e);if(Bg)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(to&&(Zi=to?to[1]:""),hn){var eo=Ec();if(eo!=null&&eo>parseFloat(Zi)){sr=String(eo);break t}}sr=Zi}var Hg={};function Kg(){return jg(function(){let e=0;const t=fc(String(sr)).split("."),n=fc("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Yi(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Yi(r[2].length==0,i[2].length==0)||Yi(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var no;if(F.document&&hn){var Tc=Ec();no=Tc||parseInt(sr,10)||void 0}else no=void 0;var zg=no,Gg=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{F.addEventListener("test",tr,t),F.removeEventListener("test",tr,t)}catch(n){}return e}();function Ct(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ct.prototype.h=function(){this.defaultPrevented=!0};function Bn(e,t){if(Ct.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(wc){t:{try{Qi(t.nodeName);var r=!0;break t}catch(i){}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Wg[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Bn.Z.h.call(this)}}Tt(Bn,Ct);var Wg={2:"touch",3:"pen",4:"mouse"};Bn.prototype.h=function(){Bn.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var qn="closure_listenable_"+(1e6*Math.random()|0),Yg=0;function Xg(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=r,this.key=++Yg,this.ca=this.fa=!1}function rr(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function ir(e){this.src=e,this.g={},this.h=0}ir.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=ro(e,t,s,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Xg(t,this.src,i,!!s,r),t.fa=n,e.push(t)),t};function so(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=cc(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(rr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ro(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==s)return r}return-1}var io="closure_lm_"+(1e6*Math.random()|0),oo={};function Ic(e,t,n,s,r){if(s&&s.once)return Ac(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ic(e,t[i],n,s,r);return null}return n=uo(n),e&&e[qn]?e.N(t,n,jn(s)?!!s.capture:!!s,r):bc(e,t,n,!1,s,r)}function bc(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=jn(r)?!!r.capture:!!r,a=lo(e);if(a||(e[io]=a=new ir(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=Qg(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Gg||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Cc(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Qg(){function e(n){return t.call(e.src,e.listener,n)}var t=Jg;return e}function Ac(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ac(e,t[i],n,s,r);return null}return n=uo(n),e&&e[qn]?e.O(t,n,jn(s)?!!s.capture:!!s,r):bc(e,t,n,!0,s,r)}function _c(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)_c(e,t[i],n,s,r);else s=jn(s)?!!s.capture:!!s,n=uo(n),e&&e[qn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=ro(i,n,s,r),-1<n&&(rr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=lo(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ro(t,n,s,r)),(n=-1<e?t[e]:null)&&ao(n))}function ao(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[qn])so(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Cc(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=lo(t))?(so(n,e),n.h==0&&(n.src=null,t[io]=null)):rr(e)}}}function Cc(e){return e in oo?oo[e]:oo[e]="on"+e}function Jg(e,t){if(e.ca)e=!0;else{t=new Bn(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&ao(e),e=n.call(s,t)}return e}function lo(e){return e=e[io],e instanceof ir?e:null}var co="__closure_events_fn_"+(1e9*Math.random()>>>0);function uo(e){return typeof e=="function"?e:(e[co]||(e[co]=function(t){return e.handleEvent(t)}),e[co])}function gt(){Ie.call(this),this.i=new ir(this),this.P=this,this.I=null}Tt(gt,Ie);gt.prototype[qn]=!0;gt.prototype.removeEventListener=function(e,t,n,s){_c(this,e,t,n,s)};function It(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Ct(t,e);else if(t instanceof Ct)t.target=t.target||e;else{var r=t;t=new Ct(s,e),yc(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=or(o,s,!0,t)&&r}if(o=t.g=e,r=or(o,s,!0,t)&&r,r=or(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=or(o,s,!1,t)&&r}gt.prototype.M=function(){if(gt.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)rr(n[s]);delete e.g[t],e.h--}}this.I=null};gt.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};gt.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function or(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&so(e.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var ho=F.JSON.stringify;function Zg(){var e=Nc;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class tm{constructor(){this.h=this.g=null}add(t,n){const s=Sc.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Sc=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new em,e=>e.reset());class em{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function nm(e){F.setTimeout(()=>{throw e},0)}function fo(e,t){po||sm(),go||(po(),go=!0),Nc.add(e,t)}var po;function sm(){var e=F.Promise.resolve(void 0);po=function(){e.then(rm)}}var go=!1,Nc=new tm;function rm(){for(var e;e=Zg();){try{e.h.call(e.g)}catch(n){nm(n)}var t=Sc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}go=!1}function ar(e,t){gt.call(this),this.h=e||1,this.g=t||F,this.j=Et(this.kb,this),this.l=Date.now()}Tt(ar,gt);N=ar.prototype;N.da=!1;N.S=null;N.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),It(this,"tick"),this.da&&(mo(this),this.start()))}};N.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function mo(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}N.M=function(){ar.Z.M.call(this),mo(this),delete this.g};function yo(e,t,n){if(typeof e=="function")n&&(e=Et(e,n));else if(e&&typeof e.handleEvent=="function")e=Et(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:F.setTimeout(e,t||0)}function Dc(e){e.g=yo(()=>{e.g=null,e.i&&(e.i=!1,Dc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class im extends Ie{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Dc(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hn(e){Ie.call(this),this.h=e,this.g={}}Tt(Hn,Ie);var xc=[];function Rc(e,t,n,s){Array.isArray(n)||(n&&(xc[0]=n.toString()),n=xc);for(var r=0;r<n.length;r++){var i=Ic(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Oc(e){Xi(e.g,function(t,n){this.g.hasOwnProperty(n)&&ao(t)},e),e.g={}}Hn.prototype.M=function(){Hn.Z.M.call(this),Oc(this)};Hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function lr(){this.g=!0}lr.prototype.Aa=function(){this.g=!1};function om(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function am(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function fn(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+cm(e,n)+(s?" "+s:"")})}function lm(e,t){e.info(function(){return"TIMEOUT: "+t})}lr.prototype.info=function(){};function cm(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ho(n)}catch(a){return t}}var Pe={},Lc=null;function cr(){return Lc=Lc||new gt}Pe.Ma="serverreachability";function Mc(e){Ct.call(this,Pe.Ma,e)}Tt(Mc,Ct);function Kn(e){const t=cr();It(t,new Mc(t,e))}Pe.STAT_EVENT="statevent";function kc(e,t){Ct.call(this,Pe.STAT_EVENT,e),this.stat=t}Tt(kc,Ct);function Mt(e){const t=cr();It(t,new kc(t,e))}Pe.Na="timingevent";function Fc(e,t){Ct.call(this,Pe.Na,e),this.size=t}Tt(Fc,Ct);function zn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){e()},t)}var ur={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Pc={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function vo(){}vo.prototype.h=null;function Uc(e){return e.h||(e.h=e.i())}function Vc(){}var Gn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function wo(){Ct.call(this,"d")}Tt(wo,Ct);function Eo(){Ct.call(this,"c")}Tt(Eo,Ct);var To;function hr(){}Tt(hr,vo);hr.prototype.g=function(){return new XMLHttpRequest};hr.prototype.i=function(){return{}};To=new hr;function Wn(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new Hn(this),this.P=um,e=Ji?125:void 0,this.W=new ar(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new $c}function $c(){this.i=null,this.g="",this.h=!1}var um=45e3,Io={},fr={};N=Wn.prototype;N.setTimeout=function(e){this.P=e};function bo(e,t,n){e.K=1,e.v=yr(fe(t)),e.s=n,e.U=!0,jc(e,null)}function jc(e,t){e.F=Date.now(),Yn(e),e.A=fe(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),Xc(n.h,"t",s),e.C=0,n=e.l.H,e.h=new $c,e.g=wu(e.l,n?t:null,!e.s),0<e.O&&(e.L=new im(Et(e.Ia,e,e.g),e.O)),Rc(e.V,e.g,"readystatechange",e.gb),t=e.H?gc(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Kn(1),om(e.j,e.u,e.A,e.m,e.X,e.s)}N.gb=function(e){e=e.target;const t=this.L;t&&de(e)==3?t.l():this.Ia(e)};N.Ia=function(e){try{if(e==this.g)t:{const u=de(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>u)&&(u!=3||Ji||this.g&&(this.h.h||this.g.ga()||lu(this.g)))){this.I||u!=4||t==7||(t==8||0>=d?Kn(3):Kn(2)),dr(this);var n=this.g.ba();this.N=n;e:if(Bc(this)){var s=lu(this.g);e="";var r=s.length,i=de(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ue(this),Xn(this);var o="";break e}this.h.i=new F.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,am(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nr(a)){var c=a;break e}}c=null}if(n=c)fn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ao(this,n);else{this.i=!1,this.o=3,Mt(12),Ue(this),Xn(this);break t}}this.U?(qc(this,u,o),Ji&&this.i&&u==3&&(Rc(this.V,this.W,"tick",this.fb),this.W.start())):(fn(this.j,this.m,o,null),Ao(this,o)),u==4&&Ue(this),this.i&&!this.I&&(u==4?gu(this.l,this):(this.i=!1,Yn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Mt(12)):(this.o=0,Mt(13)),Ue(this),Xn(this)}}}catch(u){}finally{}};function Bc(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function qc(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=hm(e,n),r==fr){t==4&&(e.o=4,Mt(14),s=!1),fn(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Io){e.o=4,Mt(15),fn(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else fn(e.j,e.m,r,null),Ao(e,r);Bc(e)&&r!=fr&&r!=Io&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Mt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ko(t),t.L=!0,Mt(11))):(fn(e.j,e.m,n,"[Invalid Chunked Response]"),Ue(e),Xn(e))}N.fb=function(){if(this.g){var e=de(this.g),t=this.g.ga();this.C<t.length&&(dr(this),qc(this,e,t),this.i&&e!=4&&Yn(this))}};function hm(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?fr:(n=Number(t.substring(n,s)),isNaN(n)?Io:(s+=1,s+n>t.length?fr:(t=t.substr(s,n),e.C=s+n,t)))}N.cancel=function(){this.I=!0,Ue(this)};function Yn(e){e.Y=Date.now()+e.P,Hc(e,e.P)}function Hc(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=zn(Et(e.eb,e),t)}function dr(e){e.B&&(F.clearTimeout(e.B),e.B=null)}N.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(lm(this.j,this.A),this.K!=2&&(Kn(3),Mt(17)),Ue(this),this.o=2,Xn(this)):Hc(this,this.Y-e)};function Xn(e){e.l.G==0||e.I||gu(e.l,e)}function Ue(e){dr(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,mo(e.W),Oc(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ao(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||So(n.i,e))){if(n.I=e.N,!e.J&&So(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch(c){s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0)t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)br(n),Tr(n);else break t;Mo(n),Mt(18)}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=zn(Et(n.ab,n),6e3));if(1>=Zc(n.i)&&n.ka){try{n.ka()}catch(c){}n.ka=void 0}}else je(n,11)}else if((e.J||n.g==e)&&br(n),!nr(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const d=c[4];d!=null&&(n.za=d,n.h.info("SVER="+n.za));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=e.g;if(m){const A=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var i=s.i;!i.g&&(Ot(A,"spdy")||Ot(A,"quic")||Ot(A,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(No(i,i.h),i.h=null))}if(s.D){const M=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;M&&(s.sa=M,rt(s.F,s.D,M))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=vu(s,s.H?s.la:null,s.W),o.J){tu(s.i,o);var a=o,l=s.K;l&&a.setTimeout(l),a.B&&(dr(a),Yn(a)),s.g=o}else du(s);0<n.l.length&&Ir(n)}else c[0]!="stop"&&c[0]!="close"||je(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?je(n,7):Oo(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}Kn(4)}catch(c){}}function fm(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(zi(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function _o(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(zi(e)||typeof e=="string")uc(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(zi(e)||typeof e=="string"){n=[];for(var s=e.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,e)n[s++]=r;s=fm(e),r=s.length;for(var i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}}function dn(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof dn)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}N=dn.prototype;N.R=function(){Co(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};N.T=function(){return Co(this),this.g.concat()};function Co(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Ve(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)s=e.g[t],Ve(r,s)||(e.g[n++]=s,r[s]=1),t++;e.g.length=n}}N.get=function(e,t){return Ve(this.h,e)?this.h[e]:t};N.set=function(e,t){Ve(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};N.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);e.call(t,i,r,this)}};function Ve(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Kc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function dm(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function $e(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof $e){this.g=t!==void 0?t:e.g,pr(this,e.j),this.s=e.s,gr(this,e.i),mr(this,e.m),this.l=e.l,t=e.h;var n=new Zn;n.i=t.i,t.g&&(n.g=new dn(t.g),n.h=t.h),zc(this,n),this.o=e.o}else e&&(n=String(e).match(Kc))?(this.g=!!t,pr(this,n[1]||"",!0),this.s=Qn(n[2]||""),gr(this,n[3]||"",!0),mr(this,n[4]),this.l=Qn(n[5]||"",!0),zc(this,n[6]||"",!0),this.o=Qn(n[7]||"")):(this.g=!!t,this.h=new Zn(null,this.g))}$e.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Jn(t,Gc,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Jn(t,Gc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(Jn(n,n.charAt(0)=="/"?vm:ym,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Jn(n,Em)),e.join("")};function fe(e){return new $e(e)}function pr(e,t,n){e.j=n?Qn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function gr(e,t,n){e.i=n?Qn(t,!0):t}function mr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function zc(e,t,n){t instanceof Zn?(e.h=t,Tm(e.h,e.g)):(n||(t=Jn(t,wm)),e.h=new Zn(t,e.g))}function rt(e,t,n){e.h.set(t,n)}function yr(e){return rt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function pm(e){return e instanceof $e?fe(e):new $e(e,void 0)}function gm(e,t,n,s){var r=new $e(null,void 0);return e&&pr(r,e),t&&gr(r,t),n&&mr(r,n),s&&(r.l=s),r}function Qn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Jn(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,mm),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function mm(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Gc=/[#\/\?@]/g,ym=/[#\?:]/g,vm=/[#\?]/g,wm=/[#\?@]/g,Em=/#/g;function Zn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function be(e){e.g||(e.g=new dn,e.h=0,e.i&&dm(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}N=Zn.prototype;N.add=function(e,t){be(this),this.i=null,e=pn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Wc(e,t){be(e),t=pn(e,t),Ve(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ve(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Co(e)))}function Yc(e,t){return be(e),t=pn(e,t),Ve(e.g.h,t)}N.forEach=function(e,t){be(this),this.g.forEach(function(n,s){uc(n,function(r){e.call(t,r,s,this)},this)},this)};N.T=function(){be(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var r=e[s],i=0;i<r.length;i++)n.push(t[s]);return n};N.R=function(e){be(this);var t=[];if(typeof e=="string")Yc(this,e)&&(t=hc(t,this.g.get(pn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=hc(t,e[n])}return t};N.set=function(e,t){return be(this),this.i=null,e=pn(this,e),Yc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};N.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function Xc(e,t,n){Wc(e,t),0<n.length&&(e.i=null,e.g.set(pn(e,t),Wi(n)),e.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),e.push(o)}}return this.i=e.join("&")};function pn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Tm(e,t){t&&!e.j&&(be(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Wc(this,s),Xc(this,r,n))},e)),e.j=t}var Im=class{constructor(e,t){this.h=e,this.g=t}};function Qc(e){this.l=e||bm,F.PerformanceNavigationTiming?(e=F.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(F.g&&F.g.Ea&&F.g.Ea()&&F.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bm=10;function Jc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Zc(e){return e.h?1:e.g?e.g.size:0}function So(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function No(e,t){e.g?e.g.add(t):e.h=t}function tu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Qc.prototype.cancel=function(){if(this.i=eu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function eu(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Wi(e.i)}function Do(){}Do.prototype.stringify=function(e){return F.JSON.stringify(e,void 0)};Do.prototype.parse=function(e){return F.JSON.parse(e,void 0)};function Am(){this.g=new Do}function _m(e,t,n){const s=n||"";try{_o(e,function(r,i){let o=r;jn(r)&&(o=ho(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Cm(e,t){const n=new lr;if(F.Image){const s=new Image;s.onload=er(vr,n,s,"TestLoadImage: loaded",!0,t),s.onerror=er(vr,n,s,"TestLoadImage: error",!1,t),s.onabort=er(vr,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=er(vr,n,s,"TestLoadImage: timeout",!1,t),F.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function vr(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch(i){}}function ts(e){this.l=e.$b||null,this.j=e.ib||!1}Tt(ts,vo);ts.prototype.g=function(){return new wr(this.l,this.j)};ts.prototype.i=function(e){return function(){return e}}({});function wr(e,t){gt.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=xo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Tt(wr,gt);var xo=0;N=wr.prototype;N.open=function(e,t){if(this.readyState!=xo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ns(this)};N.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||F).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,es(this)),this.readyState=xo};N.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof F.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;nu(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function nu(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}N.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?es(this):ns(this),this.readyState==3&&nu(this)}};N.Ua=function(e){this.g&&(this.response=this.responseText=e,es(this))};N.Ta=function(e){this.g&&(this.response=e,es(this))};N.ha=function(){this.g&&es(this)};function es(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ns(e)}N.setRequestHeader=function(e,t){this.v.append(e,t)};N.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ns(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Sm=F.JSON.parse;function ct(e){gt.call(this),this.headers=new dn,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=su,this.K=this.L=!1}Tt(ct,gt);var su="",Nm=/^https?$/i,Dm=["POST","PUT"];N=ct.prototype;N.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():To.g(),this.C=this.u?Uc(this.u):Uc(To),this.g.onreadystatechange=Et(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){ru(this,i);return}e=n||"";const r=new dn(this.headers);s&&_o(s,function(i,o){r.set(o,i)}),s=$g(r.T()),n=F.FormData&&e instanceof F.FormData,!(0<=cc(Dm,t))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{au(this),0<this.B&&((this.K=xm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.pa,this)):this.A=yo(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){ru(this,i)}};function xm(e){return hn&&Kg()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Rm(e){return e.toLowerCase()=="content-type"}N.pa=function(){typeof Ki!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,It(this,"timeout"),this.abort(8))};function ru(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,iu(e),Er(e)}function iu(e){e.D||(e.D=!0,It(e,"complete"),It(e,"error"))}N.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,It(this,"complete"),It(this,"abort"),Er(this))};N.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Er(this,!0)),ct.Z.M.call(this)};N.Fa=function(){this.s||(this.F||this.v||this.l?ou(this):this.cb())};N.cb=function(){ou(this)};function ou(e){if(e.h&&typeof Ki!="undefined"&&(!e.C[1]||de(e)!=4||e.ba()!=2)){if(e.v&&de(e)==4)yo(e.Fa,0,e);else if(It(e,"readystatechange"),de(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(Kc)[1]||null;if(!r&&F.self&&F.self.location){var i=F.self.location.protocol;r=i.substr(0,i.length-1)}s=!Nm.test(r?r.toLowerCase():"")}n=s}if(n)It(e,"complete"),It(e,"success");else{e.m=6;try{var o=2<de(e)?e.g.statusText:""}catch(l){o=""}e.j=o+" ["+e.ba()+"]",iu(e)}}finally{Er(e)}}}}function Er(e,t){if(e.g){au(e);const n=e.g,s=e.C[0]?tr:null;e.g=null,e.C=null,t||It(e,"ready");try{n.onreadystatechange=s}catch(r){}}}function au(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(F.clearTimeout(e.A),e.A=null)}function de(e){return e.g?e.g.readyState:0}N.ba=function(){try{return 2<de(this)?this.g.status:-1}catch(e){return-1}};N.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}};N.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Sm(t)}};function lu(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case su:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}N.Da=function(){return this.m};N.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Om(e){let t="";return Xi(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ro(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Om(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):rt(e,t,n))}function ss(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function cu(e){this.za=0,this.l=[],this.h=new lr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ss("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ss("baseRetryDelayMs",5e3,e),this.$a=ss("retryDelaySeedMs",1e4,e),this.Ya=ss("forwardChannelMaxRetries",2,e),this.ra=ss("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Qc(e&&e.concurrentRequestLimit),this.Ca=new Am,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}N=cu.prototype;N.ma=8;N.G=1;function Oo(e){if(uu(e),e.G==3){var t=e.V++,n=fe(e.F);rt(n,"SID",e.J),rt(n,"RID",t),rt(n,"TYPE","terminate"),rs(e,n),t=new Wn(e,e.h,t,void 0),t.K=2,t.v=yr(fe(n)),n=!1,F.navigator&&F.navigator.sendBeacon&&(n=F.navigator.sendBeacon(t.v.toString(),"")),!n&&F.Image&&(new Image().src=t.v,n=!0),n||(t.g=wu(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Yn(t)}yu(e)}N.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}};function Tr(e){e.g&&(ko(e),e.g.cancel(),e.g=null)}function uu(e){Tr(e),e.u&&(F.clearTimeout(e.u),e.u=null),br(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&F.clearTimeout(e.m),e.m=null)}function Lo(e,t){e.l.push(new Im(e.Za++,t)),e.G==3&&Ir(e)}function Ir(e){Jc(e.i)||e.m||(e.m=!0,fo(e.Ha,e),e.C=0)}function Lm(e,t){return Zc(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=zn(Et(e.Ha,e,t),mu(e,e.C)),e.C++,!0)}N.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new Wn(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=gc(i),yc(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=fu(this,r,t),n=fe(this.F),rt(n,"RID",e),rt(n,"CVER",22),this.D&&rt(n,"X-HTTP-Session-Id",this.D),rs(this,n),this.o&&i&&Ro(n,this.o,i),No(this.i,r),this.Ra&&rt(n,"TYPE","init"),this.ja?(rt(n,"$req",t),rt(n,"SID","null"),r.$=!0,bo(r,n,null)):bo(r,n,t),this.G=2}}else this.G==3&&(e?hu(this,e):this.l.length==0||Jc(this.i)||hu(this))};function hu(e,t){var n;t?n=t.m:n=e.V++;const s=fe(e.F);rt(s,"SID",e.J),rt(s,"RID",n),rt(s,"AID",e.U),rs(e,s),e.o&&e.s&&Ro(s,e.o,e.s),n=new Wn(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=fu(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),No(e.i,n),bo(n,s,t)}function rs(e,t){e.j&&_o({},function(n,s){rt(t,s,n)})}function fu(e,t,n){n=Math.min(e.l.length,n);var s=e.j?Et(e.j.Oa,e.j,e):null;t:{var r=e.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=i,0>c)i=Math.max(0,r[l].h-100),a=!1;else try{_m(u,o,"req"+c+"_")}catch(d){s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function du(e){e.g||e.u||(e.Y=1,fo(e.Ga,e),e.A=0)}function Mo(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=zn(Et(e.Ga,e),mu(e,e.A)),e.A++,!0)}N.Ga=function(){if(this.u=null,pu(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=zn(Et(this.bb,this),e)}};N.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Mt(10),Tr(this),pu(this))};function ko(e){e.B!=null&&(F.clearTimeout(e.B),e.B=null)}function pu(e){e.g=new Wn(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=fe(e.oa);rt(t,"RID","rpc"),rt(t,"SID",e.J),rt(t,"CI",e.N?"0":"1"),rt(t,"AID",e.U),rs(e,t),rt(t,"TYPE","xmlhttp"),e.o&&e.s&&Ro(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=yr(fe(t)),n.s=null,n.U=!0,jc(n,e)}N.ab=function(){this.v!=null&&(this.v=null,Tr(this),Mo(this),Mt(19))};function br(e){e.v!=null&&(F.clearTimeout(e.v),e.v=null)}function gu(e,t){var n=null;if(e.g==t){br(e),ko(e),e.g=null;var s=2}else if(So(e.i,t))n=t.D,tu(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=cr(),It(s,new Fc(s,n,t,r)),Ir(e)}else du(e);else if(r=t.o,r==3||r==0&&0<e.I||!(s==1&&Lm(e,t)||s==2&&Mo(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:je(e,5);break;case 4:je(e,10);break;case 3:je(e,6);break;default:je(e,2)}}}function mu(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function je(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=Et(e.jb,e);n||(n=new $e("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||pr(n,"https"),yr(n)),Cm(n.toString(),s)}else Mt(2);e.G=0,e.j&&e.j.va(t),yu(e),uu(e)}N.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Mt(2)):(this.h.info("Failed to ping google.com"),Mt(1))};function yu(e){e.G=0,e.I=-1,e.j&&((eu(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Wi(e.l),e.l.length=0),e.j.ua())}function vu(e,t,n){let s=pm(n);if(s.i!="")t&&gr(s,t+"."+s.i),mr(s,s.m);else{const r=F.location;s=gm(r.protocol,t?t+"."+r.hostname:r.hostname,+r.port,n)}return e.aa&&Xi(e.aa,function(r,i){rt(s,i,r)}),t=e.D,n=e.sa,t&&n&&rt(s,t,n),rt(s,"VER",e.ma),rs(e,s),s}function wu(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new ct(new ts({ib:!0})):new ct(e.qa),t.L=e.H,t}function Eu(){}N=Eu.prototype;N.xa=function(){};N.wa=function(){};N.va=function(){};N.ua=function(){};N.Oa=function(){};function Ar(){if(hn&&!(10<=Number(zg)))throw Error("Environmental error: no available transport.")}Ar.prototype.g=function(e,t){return new Ht(e,t)};function Ht(e,t){gt.call(this),this.g=new cu(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!nr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!nr(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new gn(this)}Tt(Ht,gt);Ht.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),fo(Et(e.hb,e,t))),Mt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=vu(e,null,e.W),Ir(e)};Ht.prototype.close=function(){Oo(this.g)};Ht.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Lo(this.g,t)}else this.v?(t={},t.__data__=ho(e),Lo(this.g,t)):Lo(this.g,e)};Ht.prototype.M=function(){this.g.j=null,delete this.j,Oo(this.g),delete this.g,Ht.Z.M.call(this)};function Tu(e){wo.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Tt(Tu,wo);function Iu(){Eo.call(this),this.status=1}Tt(Iu,Eo);function gn(e){this.g=e}Tt(gn,Eu);gn.prototype.xa=function(){It(this.g,"a")};gn.prototype.wa=function(e){It(this.g,new Tu(e))};gn.prototype.va=function(e){It(this.g,new Iu(e))};gn.prototype.ua=function(){It(this.g,"b")};Ar.prototype.createWebChannel=Ar.prototype.g;Ht.prototype.send=Ht.prototype.u;Ht.prototype.open=Ht.prototype.m;Ht.prototype.close=Ht.prototype.close;ur.NO_ERROR=0;ur.TIMEOUT=8;ur.HTTP_ERROR=6;Pc.COMPLETE="complete";Vc.EventType=Gn;Gn.OPEN="a";Gn.CLOSE="b";Gn.ERROR="c";Gn.MESSAGE="d";gt.prototype.listen=gt.prototype.N;ct.prototype.listenOnce=ct.prototype.O;ct.prototype.getLastError=ct.prototype.La;ct.prototype.getLastErrorCode=ct.prototype.Da;ct.prototype.getStatus=ct.prototype.ba;ct.prototype.getResponseJson=ct.prototype.Qa;ct.prototype.getResponseText=ct.prototype.ga;ct.prototype.send=ct.prototype.ea;var Mm=function(){return new Ar},km=function(){return cr()},Fo=ur,Fm=Pc,Pm=Pe,bu={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Um=ts,_r=Vc,Vm=ct;/**
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
 */class Vt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
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
 */let mn="9.1.0";/**
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
 */const Be=new oc("@firebase/firestore");function Au(){return Be.logLevel}function L(e,...t){if(Be.logLevel<=G.DEBUG){const n=t.map(Po);Be.debug(`Firestore (${mn}): ${e}`,...n)}}function Ae(e,...t){if(Be.logLevel<=G.ERROR){const n=t.map(Po);Be.error(`Firestore (${mn}): ${e}`,...n)}}function _u(e,...t){if(Be.logLevel<=G.WARN){const n=t.map(Po);Be.warn(`Firestore (${mn}): ${e}`,...n)}}function Po(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch(n){return e}/**
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
*/var t}/**
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
 */function j(e="Unexpected state"){const t=`FIRESTORE (${mn}) INTERNAL ASSERTION FAILED: `+e;throw Ae(t),new Error(t)}function ut(e,t){e||j()}function K(e,t){return e}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Error{constructor(t,n){super(n),this.code=t,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class $m{constructor(t,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class jm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Vt.UNAUTHENTICATED))}shutdown(){}}class Bm{constructor(t){this.t=t,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yn,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{L("FirebaseCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(L("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ut(typeof s.accessToken=="string"),new $m(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ut(t===null||typeof t=="string"),new Vt(t)}}class qm{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=Vt.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(t.Authorization=n),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class Hm{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new qm(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class Uo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.g(s),this.p=s=>n.writeSequenceNumber(s))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}/**
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
 */function Km(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */Uo.T=-1;class zm{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=Km(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function Y(e,t){return e<t?-1:e>t?1:0}function is(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
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
 */class Gt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new x(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new x(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Gt.fromMillis(Date.now())}static fromDate(t){return Gt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new Gt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Y(this.nanoseconds,t.nanoseconds):Y(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(t){this.timestamp=t}static fromTimestamp(t){return new W(t)}static min(){return new W(new Gt(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Cu(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function os(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Su(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class as{constructor(t,n,s){n===void 0?n=0:n>t.length&&j(),s===void 0?s=t.length-n:s>t.length-n&&j(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return as.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof as?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class at extends as{construct(t,n,s){return new at(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new x(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new at(n)}static emptyPath(){return new at([])}}const Gm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wt extends as{construct(t,n,s){return new Wt(t,n,s)}static isValidIdentifier(t){return Gm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Wt(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new x(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new x(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new x(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Wt(n)}static emptyPath(){return new Wt([])}}/**
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
 */class St{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new St(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new St(n)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Y(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}St.EMPTY_BYTE_STRING=new St("");const Wm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _e(e){if(ut(!!e),typeof e=="string"){let t=0;const n=Wm.exec(e);if(ut(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:ht(e.seconds),nanos:ht(e.nanos)}}function ht(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function vn(e){return typeof e=="string"?St.fromBase64String(e):St.fromUint8Array(e)}/**
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
 */function Nu(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Du(e){const t=e.mapValue.fields.__previous_value__;return Nu(t)?Du(t):t}function ls(e){const t=_e(e.mapValue.fields.__local_write_time__.timestampValue);return new Gt(t.seconds,t.nanos)}/**
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
 */function wn(e){return e==null}function Cr(e){return e===0&&1/e==-1/0}function Ym(e){return typeof e=="number"&&Number.isInteger(e)&&!Cr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */class U{constructor(t){this.path=t}static fromPath(t){return new U(at.fromString(t))}static fromName(t){return new U(at.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return t!==null&&at.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return at.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new U(new at(t.slice()))}}/**
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
 */function qe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Nu(e)?4:10:j()}function ie(e,t){const n=qe(e);if(n!==qe(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ls(e).isEqual(ls(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=_e(s.timestampValue),o=_e(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return vn(s.bytesValue).isEqual(vn(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return ht(s.geoPointValue.latitude)===ht(r.geoPointValue.latitude)&&ht(s.geoPointValue.longitude)===ht(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return ht(s.integerValue)===ht(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=ht(s.doubleValue),o=ht(r.doubleValue);return i===o?Cr(i)===Cr(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return is(e.arrayValue.values||[],t.arrayValue.values||[],ie);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Cu(i)!==Cu(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ie(i[a],o[a])))return!1;return!0}(e,t);default:return j()}}function cs(e,t){return(e.values||[]).find(n=>ie(n,t))!==void 0}function En(e,t){const n=qe(e),s=qe(t);if(n!==s)return Y(n,s);switch(n){case 0:return 0;case 1:return Y(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=ht(r.integerValue||r.doubleValue),a=ht(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return xu(e.timestampValue,t.timestampValue);case 4:return xu(ls(e),ls(t));case 5:return Y(e.stringValue,t.stringValue);case 6:return function(r,i){const o=vn(r),a=vn(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Y(o[l],a[l]);if(c!==0)return c}return Y(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=Y(ht(r.latitude),ht(i.latitude));return o!==0?o:Y(ht(r.longitude),ht(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=En(o[l],a[l]);if(c)return c}return Y(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){const o=r.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=Y(a[u],c[u]);if(d!==0)return d;const p=En(o[a[u]],l[c[u]]);if(p!==0)return p}return Y(a.length,c.length)}(e.mapValue,t.mapValue);default:throw j()}}function xu(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Y(e,t);const n=_e(e),s=_e(t),r=Y(n.seconds,s.seconds);return r!==0?r:Y(n.nanos,s.nanos)}function Vo(e){return $o(e)}function $o(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=_e(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?vn(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,U.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=$o(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${$o(s.fields[a])}`;return i+"}"}(e.mapValue):j();var t,n}function Ru(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function jo(e){return!!e&&"integerValue"in e}function Bo(e){return!!e&&"arrayValue"in e}function Ou(e){return!!e&&"nullValue"in e}function Lu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function qo(e){return!!e&&"mapValue"in e}function us(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return os(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=us(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=us(e.arrayValue.values[n]);return t}return Object.assign({},e)}/**
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
 */class pe{constructor(t){this.value=t}static empty(){return new pe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!qo(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=us(n)}setAll(t){let n=Wt.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=us(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ie(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];qo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){os(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new pe(us(this.value))}}/**
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
 */class Nt{constructor(t,n,s,r,i){this.key=t,this.documentType=n,this.version=s,this.data=r,this.documentState=i}static newInvalidDocument(t){return new Nt(t,0,W.min(),pe.empty(),0)}static newFoundDocument(t,n,s){return new Nt(t,1,n,s,0)}static newNoDocument(t,n){return new Nt(t,2,n,pe.empty(),0)}static newUnknownDocument(t,n){return new Nt(t,3,n,pe.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=pe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Nt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new Nt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xm{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.A=null}}function Mu(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Xm(e,t,n,s,r,i,o)}function Ho(e){const t=K(e);if(t.A===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Jm(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),wn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=Sr(t.startAt)),t.endAt&&(n+="|ub:",n+=Sr(t.endAt)),t.A=n}return t.A}function Qm(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Vo(s.value)}`;var s}).join(", ")}]`),wn(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: "+Sr(e.startAt)),e.endAt&&(t+=", endAt: "+Sr(e.endAt)),`Target(${t})`}function Ko(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!oy(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!ie(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Pu(e.startAt,t.startAt)&&Pu(e.endAt,t.endAt)}function zo(e){return U.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class kt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.R(t,n,s):new Zm(t,n,s):n==="array-contains"?new ny(t,s):n==="in"?new sy(t,s):n==="not-in"?new ry(t,s):n==="array-contains-any"?new iy(t,s):new kt(t,n,s)}static R(t,n,s){return n==="in"?new ty(t,s):new ey(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.P(En(n,this.value)):n!==null&&qe(this.value)===qe(n)&&this.P(En(n,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Jm(e){return e.field.canonicalString()+e.op.toString()+Vo(e.value)}class Zm extends kt{constructor(t,n,s){super(t,n,s),this.key=U.fromName(s.referenceValue)}matches(t){const n=U.comparator(t.key,this.key);return this.P(n)}}class ty extends kt{constructor(t,n){super(t,"in",n),this.keys=ku("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class ey extends kt{constructor(t,n){super(t,"not-in",n),this.keys=ku("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function ku(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>U.fromName(s.referenceValue))}class ny extends kt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Bo(n)&&cs(n.arrayValue,this.value)}}class sy extends kt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&cs(this.value.arrayValue,n)}}class ry extends kt{constructor(t,n){super(t,"not-in",n)}matches(t){if(cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!cs(this.value.arrayValue,n)}}class iy extends kt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Bo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>cs(this.value.arrayValue,s))}}class Go{constructor(t,n){this.position=t,this.before=n}}function Sr(e){return`${e.before?"b":"a"}:${e.position.map(t=>Vo(t)).join(",")}`}class hs{constructor(t,n="asc"){this.field=t,this.dir=n}}function oy(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Fu(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=U.comparator(U.fromName(o.referenceValue),n.key):s=En(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return e.before?s<=0:s<0}function Pu(e,t){if(e===null)return t===null;if(t===null||e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ie(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class fs{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.V=null,this.S=null,this.startAt,this.endAt}}function ay(e,t,n,s,r,i,o,a){return new fs(e,t,n,s,r,i,o,a)}function Wo(e){return new fs(e)}function Nr(e){return!wn(e.limit)&&e.limitType==="F"}function Dr(e){return!wn(e.limit)&&e.limitType==="L"}function Uu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Vu(e){for(const t of e.filters)if(t.v())return t.field;return null}function $u(e){return e.collectionGroup!==null}function ds(e){const t=K(e);if(t.V===null){t.V=[];const n=Vu(t),s=Uu(t);if(n!==null&&s===null)n.isKeyField()||t.V.push(new hs(n)),t.V.push(new hs(Wt.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.V.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new hs(Wt.keyField(),i))}}}return t.V}function He(e){const t=K(e);if(!t.S)if(t.limitType==="F")t.S=Mu(t.path,t.collectionGroup,ds(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of ds(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new hs(i.field,o))}const s=t.endAt?new Go(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Go(t.startAt.position,!t.startAt.before):null;t.S=Mu(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.S}function ly(e,t,n){return new fs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function xr(e,t){return Ko(He(e),He(t))&&e.limitType===t.limitType}function ju(e){return`${Ho(He(e))}|lt:${e.limitType}`}function Yo(e){return`Query(target=${Qm(He(e))}; limitType=${e.limitType})`}function Rr(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):U.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!Fu(n.startAt,ds(n),s)||n.endAt&&Fu(n.endAt,ds(n),s))}(e,t)}function Bu(e){return(t,n)=>{let s=!1;for(const r of ds(e)){const i=cy(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function cy(e,t,n){const s=e.field.isKeyField()?U.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?En(a,l):j()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return j()}}/**
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
 */function qu(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cr(t)?"-0":t}}function Hu(e){return{integerValue:""+e}}function uy(e,t){return Ym(t)?Hu(t):qu(e,t)}/**
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
 */class Or{constructor(){this._=void 0}}function hy(e,t,n){return e instanceof Xo?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Lr?Ku(e,t):e instanceof Mr?zu(e,t):function(s,r){const i=dy(s,r),o=Gu(i)+Gu(s.C);return jo(i)&&jo(s.C)?Hu(o):qu(s.N,o)}(e,t)}function fy(e,t,n){return e instanceof Lr?Ku(e,t):e instanceof Mr?zu(e,t):n}function dy(e,t){return e instanceof Qo?jo(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Xo extends Or{}class Lr extends Or{constructor(t){super(),this.elements=t}}function Ku(e,t){const n=Wu(t);for(const s of e.elements)n.some(r=>ie(r,s))||n.push(s);return{arrayValue:{values:n}}}class Mr extends Or{constructor(t){super(),this.elements=t}}function zu(e,t){let n=Wu(t);for(const s of e.elements)n=n.filter(r=>!ie(r,s));return{arrayValue:{values:n}}}class Qo extends Or{constructor(t,n){super(),this.N=t,this.C=n}}function Gu(e){return ht(e.integerValue||e.doubleValue)}function Wu(e){return Bo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function py(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Lr&&s instanceof Lr||n instanceof Mr&&s instanceof Mr?is(n.elements,s.elements,ie):n instanceof Qo&&s instanceof Qo?ie(n.C,s.C):n instanceof Xo&&s instanceof Xo}(e.transform,t.transform)}function kr(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Yu{}function gy(e,t,n){e instanceof Ju?function(s,r,i){const o=s.value.clone(),a=th(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Zo?function(s,r,i){if(!kr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=th(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Zu(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Jo(e,t,n){e instanceof Ju?function(s,r,i){if(!kr(s.precondition,r))return;const o=s.value.clone(),a=eh(s.fieldTransforms,i,r);o.setAll(a),r.convertToFoundDocument(Qu(r),o).setHasLocalMutations()}(e,t,n):e instanceof Zo?function(s,r,i){if(!kr(s.precondition,r))return;const o=eh(s.fieldTransforms,i,r),a=r.data;a.setAll(Zu(s)),a.setAll(o),r.convertToFoundDocument(Qu(r),a).setHasLocalMutations()}(e,t,n):function(s,r){kr(s.precondition,r)&&r.convertToNoDocument(W.min())}(e,t)}function Xu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&is(n,s,(r,i)=>py(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Qu(e){return e.isFoundDocument()?e.version:W.min()}class Ju extends Yu{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}}class Zo extends Yu{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Zu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function th(e,t,n){const s=new Map;ut(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,fy(o,a,n[r]))}return s}function eh(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,hy(i,o,t))}return s}/**
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
 */class my{constructor(t){this.count=t}}/**
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
 */var ft,B;function nh(e){if(e===void 0)return Ae("GRPC error has no .code"),b.UNKNOWN;switch(e){case ft.OK:return b.OK;case ft.CANCELLED:return b.CANCELLED;case ft.UNKNOWN:return b.UNKNOWN;case ft.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ft.INTERNAL:return b.INTERNAL;case ft.UNAVAILABLE:return b.UNAVAILABLE;case ft.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ft.NOT_FOUND:return b.NOT_FOUND;case ft.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ft.ABORTED:return b.ABORTED;case ft.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ft.DATA_LOSS:return b.DATA_LOSS;default:return j()}}(B=ft||(ft={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ft{constructor(t,n){this.comparator=t,this.root=n||bt.EMPTY}insert(t,n){return new Ft(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(t){return new Ft(this.comparator,this.root.remove(t,this.comparator).copy(null,null,bt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Fr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Fr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Fr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Fr(this.root,t,this.comparator,!0)}}class Fr{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class bt{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:bt.RED,this.left=r!=null?r:bt.EMPTY,this.right=i!=null?i:bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new bt(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return bt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const t=this.left.check();if(t!==this.right.check())throw j();return t+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(e,t,n,s,r){return this}insert(e,t,n){return new bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class At{constructor(t){this.comparator=t,this.data=new Ft(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new sh(this.data.getIterator())}getIteratorFrom(t){return new sh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof At)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new At(this.comparator);return n.data=t,n}}class sh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const yy=new Ft(U.comparator);function Ke(){return yy}const vy=new Ft(U.comparator);function ta(){return vy}new Ft(U.comparator);const wy=new At(U.comparator);function it(...e){let t=wy;for(const n of e)t=t.add(n);return t}const Ey=new At(Y);function rh(){return Ey}/**
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
 */class Pr{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,ps.createSynthesizedTargetChangeForCurrentChange(t,n)),new Pr(W.min(),s,rh(),Ke(),it())}}class ps{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n){return new ps(St.EMPTY_BYTE_STRING,n,it(),it(),it())}}/**
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
 */class Ur{constructor(t,n,s,r){this.k=t,this.removedTargetIds=n,this.key=s,this.$=r}}class ih{constructor(t,n){this.targetId=t,this.O=n}}class oh{constructor(t,n,s=St.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ah{constructor(){this.F=0,this.M=ch(),this.L=St.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=it(),n=it(),s=it();return this.M.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:j()}}),new ps(this.L,this.B,t,n,s)}G(){this.U=!1,this.M=ch()}H(t,n){this.U=!0,this.M=this.M.insert(t,n)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Ty{constructor(t){this.tt=t,this.et=new Map,this.nt=Ke(),this.st=lh(),this.it=new At(Y)}rt(t){for(const n of t.k)t.$&&t.$.isFoundDocument()?this.ot(n,t.$):this.at(n,t.key,t.$);for(const n of t.removedTargetIds)this.at(n,t.key,t.$)}ct(t){this.forEachTarget(t,n=>{const s=this.ut(n);switch(t.state){case 0:this.ht(n)&&s.j(t.resumeToken);break;case 1:s.X(),s.q||s.G(),s.j(t.resumeToken);break;case 2:s.X(),s.q||this.removeTarget(n);break;case 3:this.ht(n)&&(s.Z(),s.j(t.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),s.j(t.resumeToken));break;default:j()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.et.forEach((s,r)=>{this.ht(r)&&n(r)})}ft(t){const n=t.targetId,s=t.O.count,r=this.dt(n);if(r){const i=r.target;if(zo(i))if(s===0){const o=new U(i.path);this.at(n,o,Nt.newNoDocument(o,W.min()))}else ut(s===1);else this.wt(n)!==s&&(this.lt(n),this.it=this.it.add(n))}}_t(t){const n=new Map;this.et.forEach((i,o)=>{const a=this.dt(o);if(a){if(i.current&&zo(a.target)){const l=new U(a.target.path);this.nt.get(l)!==null||this.gt(o,l)||this.at(o,l,Nt.newNoDocument(l,t))}i.K&&(n.set(o,i.W()),i.G())}});let s=it();this.st.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.dt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))});const r=new Pr(t,n,this.it,this.nt,s);return this.nt=Ke(),this.st=lh(),this.it=new At(Y),r}ot(t,n){if(!this.ht(t))return;const s=this.gt(t,n.key)?2:0;this.ut(t).H(n.key,s),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(t))}at(t,n,s){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,n)?r.H(n,1):r.J(n),this.st=this.st.insert(n,this.yt(n).delete(t)),s&&(this.nt=this.nt.insert(n,s))}removeTarget(t){this.et.delete(t)}wt(t){const n=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let n=this.et.get(t);return n||(n=new ah,this.et.set(t,n)),n}yt(t){let n=this.st.get(t);return n||(n=new At(Y),this.st=this.st.insert(t,n)),n}ht(t){const n=this.dt(t)!==null;return n||L("WatchChangeAggregator","Detected inactive target",t),n}dt(t){const n=this.et.get(t);return n&&n.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new ah),this.tt.getRemoteKeysForTarget(t).forEach(n=>{this.at(t,n,null)})}gt(t,n){return this.tt.getRemoteKeysForTarget(t).has(n)}}function lh(){return new Ft(U.comparator)}function ch(){return new Ft(U.comparator)}/**
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
 */const Iy=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),by=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Ay{constructor(t,n){this.databaseId=t,this.D=n}}function ea(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function uh(e,t){return e.D?t.toBase64():t.toUint8Array()}function gs(e){return ut(!!e),W.fromTimestamp(function(t){const n=_e(t);return new Gt(n.seconds,n.nanos)}(e))}function hh(e,t){return function(n){return new at(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function fh(e){const t=at.fromString(e);return ut(vh(t)),t}function na(e,t){const n=fh(t);if(n.get(1)!==e.databaseId.projectId)throw new x(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new x(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new U(ph(n))}function sa(e,t){return hh(e.databaseId,t)}function _y(e){const t=fh(e);return t.length===4?at.emptyPath():ph(t)}function dh(e){return new at(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ph(e){return ut(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Cy(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:j()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(l,c){return l.D?(ut(c===void 0||typeof c=="string"),St.fromBase64String(c||"")):(ut(c===void 0||c instanceof Uint8Array),St.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const c=l.code===void 0?b.UNKNOWN:nh(l.code);return new x(c,l.message||"")}(o);n=new oh(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=na(e,s.document.name),i=gs(s.document.updateTime),o=new pe({mapValue:{fields:s.document.fields}}),a=Nt.newFoundDocument(r,i,o),l=s.targetIds||[],c=s.removedTargetIds||[];n=new Ur(l,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=na(e,s.document),i=s.readTime?gs(s.readTime):W.min(),o=Nt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ur([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=na(e,s.document),i=s.removedTargetIds||[];n=new Ur([],i,r,null)}else{if(!("filter"in t))return j();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new my(r),o=s.targetId;n=new ih(o,i)}}return n}function Sy(e,t){return{documents:[sa(e,t.path)]}}function Ny(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=sa(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=sa(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(a){if(a.length===0)return;const l=a.map(c=>function(u){if(u.op==="=="){if(Lu(u.value))return{unaryFilter:{field:Tn(u.field),op:"IS_NAN"}};if(Ou(u.value))return{unaryFilter:{field:Tn(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Lu(u.value))return{unaryFilter:{field:Tn(u.field),op:"IS_NOT_NAN"}};if(Ou(u.value))return{unaryFilter:{field:Tn(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(u.field),op:Oy(u.op),value:u.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(t.filters);r&&(n.structuredQuery.where=r);const i=function(a){if(a.length!==0)return a.map(l=>function(c){return{field:Tn(c.field),direction:Ry(c.dir)}}(l))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,l){return a.D||wn(l)?l:{value:l}}(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=mh(t.startAt)),t.endAt&&(n.structuredQuery.endAt=mh(t.endAt)),n}function Dy(e){let t=_y(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ut(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=gh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new hs(In(d.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,wn(d)?null:d}(n.limit));let l=null;n.startAt&&(l=yh(n.startAt));let c=null;return n.endAt&&(c=yh(n.endAt)),ay(t,r,o,i,a,"F",l,c)}function xy(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function gh(e){return e?e.unaryFilter!==void 0?[My(e)]:e.fieldFilter!==void 0?[Ly(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>gh(t)).reduce((t,n)=>t.concat(n)):j():[]}function mh(e){return{before:e.before,values:e.position}}function yh(e){const t=!!e.before,n=e.values||[];return new Go(n,t)}function Ry(e){return Iy[e]}function Oy(e){return by[e]}function Tn(e){return{fieldPath:e.canonicalString()}}function In(e){return Wt.fromServerFormat(e.fieldPath)}function Ly(e){return kt.create(In(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return j()}}(e.fieldFilter.op),e.fieldFilter.value)}function My(e){switch(e.unaryFilter.op){case"IS_NAN":const t=In(e.unaryFilter.field);return kt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=In(e.unaryFilter.field);return kt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=In(e.unaryFilter.field);return kt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=In(e.unaryFilter.field);return kt.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return j()}}function vh(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}const ky="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new C((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):C.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):C.reject(n)}static resolve(t){return new C((n,s)=>{n(t)})}static reject(t){return new C((n,s)=>{s(t)})}static waitFor(t){return new C((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(t){let n=C.resolve(!1);for(const s of t)n=n.next(r=>r?C.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}}function ms(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Py{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&gy(i,t,s[r])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&Jo(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&Jo(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),r=s;this.applyToLocalView(r),s.isValidDocument()||r.convertToNoDocument(W.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),it())}isEqual(t){return this.batchId===t.batchId&&is(this.mutations,t.mutations,(n,s)=>Xu(n,s))&&is(this.baseMutations,t.baseMutations,(n,s)=>Xu(n,s))}}/**
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
 */class ze{constructor(t,n,s,r,i=W.min(),o=W.min(),a=St.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new ze(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new ze(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ze(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
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
 */class Uy{constructor(t){this.Wt=t}}function Vy(e){const t=Dy({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ly(t,t.limit,"L"):t}/**
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
 */class $y{constructor(){this.Gt=new jy}addToCollectionParentIndex(t,n){return this.Gt.add(n),C.resolve()}getCollectionParents(t,n){return C.resolve(this.Gt.getEntries(n))}}class jy{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new At(at.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new At(at.comparator)).toArray()}}/**
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
 */class bn{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new bn(0)}static ie(){return new bn(-1)}}/**
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
 */async function ra(e){if(e.code!==b.FAILED_PRECONDITION||e.message!==ky)throw e;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ys{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={}}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r!==void 0){for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n])}else this.inner[s]=[[t,n]]}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),!0;return!1}forEach(t){os(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Su(this.inner)}}/**
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
 */class By{constructor(){this.changes=new ys(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}getReadTime(t){const n=this.changes.get(t);return n?n.readTime:W.min()}addEntry(t,n){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:n})}removeEntry(t,n=null){this.assertNotApplied(),this.changes.set(t,{document:Nt.newInvalidDocument(t),readTime:n})}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?C.resolve(s.document):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class wh{constructor(t,n,s){this.He=t,this.In=n,this.Ht=s}An(t,n){return this.In.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.Rn(t,n,s))}Rn(t,n,s){return this.He.getEntry(t,n).next(r=>{for(const i of s)i.applyToLocalView(r);return r})}bn(t,n){t.forEach((s,r)=>{for(const i of n)i.applyToLocalView(r)})}Pn(t,n){return this.He.getEntries(t,n).next(s=>this.vn(t,s).next(()=>s))}vn(t,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.bn(n,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return U.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.Vn(t,n.path):$u(n)?this.Sn(t,n,s):this.Dn(t,n,s)}Vn(t,n){return this.An(t,new U(n)).next(s=>{let r=ta();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}Sn(t,n,s){const r=n.collectionGroup;let i=ta();return this.Ht.getCollectionParents(t,r).next(o=>C.forEach(o,a=>{const l=function(c,u){return new fs(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.Dn(t,l,s).next(c=>{c.forEach((u,d)=>{i=i.insert(u,d)})})}).next(()=>i))}Dn(t,n,s){let r,i;return this.He.getDocumentsMatchingQuery(t,n,s).next(o=>(r=o,this.In.getAllMutationBatchesAffectingQuery(t,n))).next(o=>(i=o,this.Cn(t,i,r).next(a=>{r=a;for(const l of i)for(const c of l.mutations){const u=c.key;let d=r.get(u);d==null&&(d=Nt.newInvalidDocument(u),r=r.insert(u,d)),Jo(c,d,l.localWriteTime),d.isFoundDocument()||(r=r.remove(u))}}))).next(()=>(r.forEach((o,a)=>{Rr(n,a)||(r=r.remove(o))}),r))}Cn(t,n,s){let r=it();for(const o of n)for(const a of o.mutations)a instanceof Zo&&s.get(a.key)===null&&(r=r.add(a.key));let i=s;return this.He.getEntries(t,r).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(i=i.insert(a,l))}),i))}}/**
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
 */class ia{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Nn=s,this.xn=r}static kn(t,n){let s=it(),r=it();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ia(t,n.fromCache,s,r)}}/**
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
 */class qy{$n(t){this.On=t}getDocumentsMatchingQuery(t,n,s,r){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(W.min())?this.Fn(t,n):this.On.Pn(t,r).next(i=>{const o=this.Mn(n,i);return(Nr(n)||Dr(n))&&this.Ln(n.limitType,o,r,s)?this.Fn(t,n):(Au()<=G.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yo(n)),this.On.getDocumentsMatchingQuery(t,n,s).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Mn(t,n){let s=new At(Bu(t));return n.forEach((r,i)=>{Rr(t,i)&&(s=s.add(i))}),s}Ln(t,n,s,r){if(s.size!==n.size)return!0;const i=t==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,n){return Au()<=G.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Yo(n)),this.On.getDocumentsMatchingQuery(t,n,W.min())}}/**
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
 */class Hy{constructor(t,n,s,r){this.persistence=t,this.Bn=n,this.N=r,this.Un=new Ft(Y),this.qn=new ys(i=>Ho(i),Ko),this.Kn=W.min(),this.In=t.getMutationQueue(s),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new wh(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Un))}}function Ky(e,t,n,s){return new Hy(e,t,n,s)}async function Eh(e,t){const n=K(e);let s=n.In,r=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(l=>(a=l,s=n.persistence.getMutationQueue(t),r=new wh(n.jn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(o))).next(l=>{const c=[],u=[];let d=it();for(const p of a){c.push(p.batchId);for(const m of p.mutations)d=d.add(m.key)}for(const p of l){u.push(p.batchId);for(const m of p.mutations)d=d.add(m.key)}return r.Pn(o,d).next(p=>({Wn:p,removedBatchIds:c,addedBatchIds:u}))})});return n.In=s,n.Qn=r,n.Bn.$n(n.Qn),i}function Th(e){const t=K(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.ze.getLastRemoteSnapshotVersion(n))}function zy(e,t){const n=K(e),s=t.snapshotVersion;let r=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});r=n.Un;const a=[];t.targetChanges.forEach((c,u)=>{const d=r.get(u);if(!d)return;a.push(n.ze.removeMatchingKeys(i,c.removedDocuments,u).next(()=>n.ze.addMatchingKeys(i,c.addedDocuments,u)));const p=c.resumeToken;if(p.approximateByteSize()>0){const m=d.withResumeToken(p,s).withSequenceNumber(i.currentSequenceNumber);r=r.insert(u,m),function(A,M,S){return ut(M.resumeToken.approximateByteSize()>0),A.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,m,c)&&a.push(n.ze.updateTargetData(i,m))}});let l=Ke();if(t.documentUpdates.forEach((c,u)=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(Gy(i,o,t.documentUpdates,s,void 0).next(c=>{l=c})),!s.isEqual(W.min())){const c=n.ze.getLastRemoteSnapshotVersion(i).next(u=>n.ze.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(c)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.Qn.vn(i,l)).next(()=>l)}).then(i=>(n.Un=r,i))}function Gy(e,t,n,s,r){let i=it();return n.forEach(o=>i=i.add(o)),t.getEntries(e,i).next(o=>{let a=Ke();return n.forEach((l,c)=>{const u=o.get(l),d=(r==null?void 0:r.get(l))||s;c.isNoDocument()&&c.version.isEqual(W.min())?(t.removeEntry(l,d),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c,d),a=a.insert(l,c)):L("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),a})}function Wy(e,t){const n=K(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.ze.getTargetData(s,t).next(i=>i?(r=i,C.resolve(r)):n.ze.allocateTargetId(s).next(o=>(r=new ze(t,o,0,s.currentSequenceNumber),n.ze.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Un.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(s.targetId,s),n.qn.set(t,s.targetId)),s})}async function oa(e,t,n){const s=K(e),r=s.Un.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!ms(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Un=s.Un.remove(t),s.qn.delete(r.target)}function Ih(e,t,n){const s=K(e);let r=W.min(),i=it();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=K(a),d=u.qn.get(c);return d!==void 0?C.resolve(u.Un.get(d)):u.ze.getTargetData(l,c)}(s,o,He(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.ze.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.Bn.getDocumentsMatchingQuery(o,t,n?r:W.min(),n?i:it())).next(a=>({documents:a,Gn:i})))}/**
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
 */class Yy{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,n){return C.resolve(this.Yn.get(n))}saveBundleMetadata(t,n){var s;return this.Yn.set(n.id,{id:(s=n).id,version:s.version,createTime:gs(s.createTime)}),C.resolve()}getNamedQuery(t,n){return C.resolve(this.Xn.get(n))}saveNamedQuery(t,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:Vy(s.bundledQuery),readTime:gs(s.readTime)}}(n)),C.resolve()}}/**
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
 */class aa{constructor(){this.Zn=new At(mt.ts),this.es=new At(mt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,n){const s=new mt(t,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.rs(new mt(t,n))}os(t,n){t.forEach(s=>this.removeReference(s,n))}cs(t){const n=new U(new at([])),s=new mt(n,t),r=new mt(n,t+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const n=new U(new at([])),s=new mt(n,t),r=new mt(n,t+1);let i=it();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new mt(t,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class mt{constructor(t,n){this.key=t,this.ls=n}static ts(t,n){return U.comparator(t.key,n.key)||Y(t.ls,n.ls)}static ns(t,n){return Y(t.ls,n.ls)||U.comparator(t.key,n.key)}}/**
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
 */class Xy{constructor(t,n){this.Ht=t,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new At(mt.ts)}checkEmpty(t){return C.resolve(this.In.length===0)}addMutationBatch(t,n,s,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new Py(i,n,s,r);this.In.push(o);for(const a of r)this.ds=this.ds.add(new mt(a.key,i)),this.Ht.addToCollectionParentIndex(t,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(t,n){return C.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this._s(s),i=r<0?0:r;return C.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(t){return C.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new mt(n,0),r=new mt(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this.ws(o.ls);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new At(Y);return n.forEach(r=>{const i=new mt(r,0),o=new mt(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),C.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;U.isDocumentKey(i)||(i=i.child(""));const o=new mt(new U(i),0);let a=new At(Y);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ls)),!0)},o),C.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(s=>{const r=this.ws(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){ut(this.ys(n.batchId,"removed")===0),this.In.shift();let s=this.ds;return C.forEach(n.mutations,r=>{const i=new mt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=s})}te(t){}containsKey(t,n){const s=new mt(n,0),r=this.ds.firstAfterOrEqual(s);return C.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,C.resolve()}ys(t,n){return this._s(t)}_s(t){return this.In.length===0?0:t-this.In[0].batchId}ws(t){const n=this._s(t);return n<0||n>=this.In.length?null:this.In[n]}}/**
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
 */class Qy{constructor(t,n){this.Ht=t,this.ps=n,this.docs=new Ft(U.comparator),this.size=0}addEntry(t,n,s){const r=n.key,i=this.docs.get(r),o=i?i.size:0,a=this.ps(n);return this.docs=this.docs.insert(r,{document:n.clone(),size:a,readTime:s}),this.size+=a-o,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return C.resolve(s?s.document.clone():Nt.newInvalidDocument(n))}getEntries(t,n){let s=Ke();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.clone():Nt.newInvalidDocument(r))}),C.resolve(s)}getDocumentsMatchingQuery(t,n,s){let r=Ke();const i=new U(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l,readTime:c}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;c.compareTo(s)<=0||Rr(n,l)&&(r=r.insert(l.key,l.clone()))}return C.resolve(r)}Es(t,n){return C.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Jy(this)}getSize(t){return C.resolve(this.size)}}class Jy extends By{constructor(t){super(),this.Se=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.document.isValidDocument()?n.push(this.Se.addEntry(t,r.document,this.getReadTime(s))):this.Se.removeEntry(s)}),C.waitFor(n)}getFromCache(t,n){return this.Se.getEntry(t,n)}getAllFromCache(t,n){return this.Se.getEntries(t,n)}}/**
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
 */class Zy{constructor(t){this.persistence=t,this.Ts=new ys(n=>Ho(n),Ko),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Is=0,this.As=new aa,this.targetCount=0,this.Rs=bn.se()}forEachTarget(t,n){return this.Ts.forEach((s,r)=>n(r)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Is&&(this.Is=n),C.resolve()}ae(t){this.Ts.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new bn(n),this.highestTargetId=n),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,n){return this.ae(n),this.targetCount+=1,C.resolve()}updateTargetData(t,n){return this.ae(n),C.resolve()}removeTargetData(t,n){return this.Ts.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),C.waitFor(i).next(()=>r)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,n){const s=this.Ts.get(n)||null;return C.resolve(s)}addMatchingKeys(t,n,s){return this.As.ss(n,s),C.resolve()}removeMatchingKeys(t,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.As.cs(n),C.resolve()}getMatchingKeysForTargetId(t,n){const s=this.As.hs(n);return C.resolve(s)}containsKey(t,n){return C.resolve(this.As.containsKey(n))}}/**
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
 */class tv{constructor(t,n){this.bs={},this.Le=new Uo(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new Zy(this),this.Ht=new $y,this.He=function(s,r){return new Qy(s,r)}(this.Ht,s=>this.referenceDelegate.Ps(s)),this.N=new Uy(n),this.Je=new Yy(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let n=this.bs[t.toKey()];return n||(n=new Xy(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,n,s){L("MemoryPersistence","Starting transaction:",t);const r=new ev(this.Le.next());return this.referenceDelegate.vs(),s(r).next(i=>this.referenceDelegate.Vs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ss(t,n){return C.or(Object.values(this.bs).map(s=>()=>s.containsKey(t,n)))}}class ev extends Fy{constructor(t){super(),this.currentSequenceNumber=t}}class la{constructor(t){this.persistence=t,this.Ds=new aa,this.Cs=null}static Ns(t){return new la(t)}get xs(){if(this.Cs)return this.Cs;throw j()}addReference(t,n,s){return this.Ds.addReference(s,n),this.xs.delete(s.toString()),C.resolve()}removeReference(t,n,s){return this.Ds.removeReference(s,n),this.xs.add(s.toString()),C.resolve()}markPotentiallyOrphaned(t,n){return this.xs.add(n.toString()),C.resolve()}removeTarget(t,n){this.Ds.cs(n.targetId).forEach(r=>this.xs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.xs.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}vs(){this.Cs=new Set}Vs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.xs,s=>{const r=U.fromPath(s);return this.ks(t,r).next(i=>{i||n.removeEntry(r)})}).next(()=>(this.Cs=null,n.apply(t)))}updateLimboDocument(t,n){return this.ks(t,n).next(s=>{s?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(t){return 0}ks(t,n){return C.or([()=>C.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ss(t,n)])}}class bh{constructor(){this.activeTargetIds=rh()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class nv{constructor(){this.yi=new bh,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,n,s){this.pi[t]=n}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new bh,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}/**
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
 */class sv{Ei(t){}shutdown(){}}/**
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
 */class Ah{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const rv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class iv{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}/**
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
 */class ov extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.Fi=n+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,n,s,r){const i=this.Bi(t,n);L("RestConnection","Sending: ",i,s);const o={};return this.Ui(o,r),this.qi(t,i,o,s).then(a=>(L("RestConnection","Received: ",a),a),a=>{throw _u("RestConnection",`${t} failed with error: `,a,"url: ",i,"request:",s),a})}Ki(t,n,s,r){return this.Li(t,n,s,r)}Ui(t,n){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+mn,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const s in n.authHeaders)n.authHeaders.hasOwnProperty(s)&&(t[s]=n.authHeaders[s])}Bi(t,n){const s=rv[t];return`${this.Fi}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,n,s,r){return new Promise((i,o)=>{const a=new Vm;a.listenOnce(Fm.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fo.NO_ERROR:const c=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(c)),i(c);break;case Fo.TIMEOUT:L("Connection",'RPC "'+t+'" timed out'),o(new x(b.DEADLINE_EXCEEDED,"Request time out"));break;case Fo.HTTP_ERROR:const u=a.getStatus();if(L("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const d=a.getResponseJson().error;if(d&&d.status&&d.message){const p=function(m){const A=m.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(A)>=0?A:b.UNKNOWN}(d.status);o(new x(p,d.message))}else o(new x(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new x(b.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{L("Connection",'RPC "'+t+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,s,15)})}ji(t,n){const s=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Mm(),i=km(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Um({})),this.Ui(o.initMessageHeaders,n),Mp()||Fp()||Pp()||Up()||Vp()||kp()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");L("Connection","Creating WebChannel: "+a,o);const l=r.createWebChannel(a,o);let c=!1,u=!1;const d=new iv({vi:m=>{u?L("Connection","Not sending because WebChannel is closed:",m):(c||(L("Connection","Opening WebChannel transport."),l.open(),c=!0),L("Connection","WebChannel sending:",m),l.send(m))},Vi:()=>l.close()}),p=(m,A,M)=>{m.listen(A,S=>{try{M(S)}catch(k){setTimeout(()=>{throw k},0)}})};return p(l,_r.EventType.OPEN,()=>{u||L("Connection","WebChannel transport opened.")}),p(l,_r.EventType.CLOSE,()=>{u||(u=!0,L("Connection","WebChannel transport closed"),d.$i())}),p(l,_r.EventType.ERROR,m=>{u||(u=!0,_u("Connection","WebChannel transport errored:",m),d.$i(new x(b.UNAVAILABLE,"The operation could not be completed")))}),p(l,_r.EventType.MESSAGE,m=>{var A;if(!u){const M=m.data[0];ut(!!M);const S=M,k=S.error||((A=S[0])===null||A===void 0?void 0:A.error);if(k){L("Connection","WebChannel received error:",k);const lt=k.status;let nt=function(Dt){const Zt=ft[Dt];if(Zt!==void 0)return nh(Zt)}(lt),Z=k.message;nt===void 0&&(nt=b.INTERNAL,Z="Unknown error status: "+lt+" with message "+k.message),u=!0,d.$i(new x(nt,Z)),l.close()}else L("Connection","WebChannel received:",M),d.Oi(M)}}),p(i,Pm.STAT_EVENT,m=>{m.stat===bu.PROXY?L("Connection","Detected buffering proxy"):m.stat===bu.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}function ca(){return typeof document!="undefined"?document:null}/**
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
 */function Vr(e){return new Ay(e,!0)}class _h{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=n,this.Qi=s,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const n=Math.floor(this.zi+this.Zi()),s=Math.max(0,Date.now()-this.Ji),r=Math.max(0,n-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class av{constructor(t,n,s,r,i,o){this.Oe=t,this.er=s,this.nr=r,this.credentialsProvider=i,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new _h(t,n)}ar(){return this.state===1||this.state===2||this.state===4}cr(){return this.state===2}start(){this.state!==3?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&this.ir===null&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,n){this._r(),this.rr.cancel(),this.sr++,t!==3?this.rr.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Ae(n.toString()),Ae("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):n&&n.code===b.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(n)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),n=this.sr;this.credentialsProvider.getToken().then(s=>{this.sr===n&&this.yr(s)},s=>{t(()=>{const r=new x(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.pr(r)})})}yr(t){const n=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si(()=>{n(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(s=>{n(()=>this.pr(s))}),this.stream.onMessage(s=>{n(()=>this.onMessage(s))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(t){return L("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(3,t)}gr(t){return n=>{this.Oe.enqueueAndForget(()=>this.sr===t?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lv extends av{constructor(t,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",n,s,i),this.N=r}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const n=Cy(this.N,t),s=function(r){if(!("targetChange"in r))return W.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?W.min():i.readTime?gs(i.readTime):W.min()}(t);return this.listener.Tr(n,s)}Ir(t){const n={};n.database=dh(this.N),n.addTarget=function(r,i){let o;const a=i.target;return o=zo(a)?{documents:Sy(r,a)}:{query:Ny(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=uh(r,i.resumeToken):i.snapshotVersion.compareTo(W.min())>0&&(o.readTime=ea(r,i.snapshotVersion.toTimestamp())),o}(this.N,t);const s=xy(this.N,t);s&&(n.labels=s),this.wr(n)}Ar(t){const n={};n.database=dh(this.N),n.removeTarget=t,this.wr(n)}}/**
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
 */class cv extends class{}{constructor(t,n,s){super(),this.credentials=t,this.nr=n,this.N=s,this.Dr=!1}Cr(){if(this.Dr)throw new x(b.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,n,s){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Li(t,n,s,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new x(b.UNKNOWN,r.toString())})}Ki(t,n,s){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Ki(t,n,s,r)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),r):new x(b.UNKNOWN,r.toString())})}terminate(){this.Dr=!0}}class uv{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){this.Nr===0&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(t){this.state==="Online"?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,t==="Online"&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(Ae(n),this.$r=!1):L("OnlineStateTracker",n)}Br(){this.kr!==null&&(this.kr.cancel(),this.kr=null)}}/**
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
 */class hv{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei(o=>{s.enqueueAndForget(async()=>{ws(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=K(a);l.Kr.add(4),await vs(l),l.Wr.set("Unknown"),l.Kr.delete(4),await $r(l)}(this))})}),this.Wr=new uv(s,r)}}async function $r(e){if(ws(e))for(const t of e.jr)await t(!0)}async function vs(e){for(const t of e.jr)await t(!1)}function Ch(e,t){const n=K(e);n.qr.has(t.targetId)||(n.qr.set(t.targetId,t),fa(n)?ha(n):An(n).cr()&&ua(n,t))}function Sh(e,t){const n=K(e),s=An(n);n.qr.delete(t),s.cr()&&Nh(n,t),n.qr.size===0&&(s.cr()?s.lr():ws(n)&&n.Wr.set("Unknown"))}function ua(e,t){e.Gr.Y(t.targetId),An(e).Ir(t)}function Nh(e,t){e.Gr.Y(t),An(e).Ar(t)}function ha(e){e.Gr=new Ty({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.qr.get(t)||null}),An(e).start(),e.Wr.Or()}function fa(e){return ws(e)&&!An(e).ar()&&e.qr.size>0}function ws(e){return K(e).Kr.size===0}function Dh(e){e.Gr=void 0}async function fv(e){e.qr.forEach((t,n)=>{ua(e,t)})}async function dv(e,t){Dh(e),fa(e)?(e.Wr.Lr(t),ha(e)):e.Wr.set("Unknown")}async function pv(e,t,n){if(e.Wr.set("Online"),t instanceof oh&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.qr.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.qr.delete(o),s.Gr.removeTarget(o))}(e,t)}catch(s){L("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await xh(e,s)}else if(t instanceof Ur?e.Gr.rt(t):t instanceof ih?e.Gr.ft(t):e.Gr.ct(t),!n.isEqual(W.min()))try{const s=await Th(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Gr._t(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.qr.get(l);c&&r.qr.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const l=r.qr.get(a);if(!l)return;r.qr.set(a,l.withResumeToken(St.EMPTY_BYTE_STRING,l.snapshotVersion)),Nh(r,a);const c=new ze(l.target,a,1,l.sequenceNumber);ua(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){L("RemoteStore","Failed to raise snapshot:",s),await xh(e,s)}}async function xh(e,t,n){if(!ms(t))throw t;e.Kr.add(1),await vs(e),e.Wr.set("Offline"),n||(n=()=>Th(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),e.Kr.delete(1),await $r(e)})}async function gv(e,t){const n=K(e);t?(n.Kr.delete(2),await $r(n)):t||(n.Kr.add(2),await vs(n),n.Wr.set("Unknown"))}function An(e){return e.zr||(e.zr=function(t,n,s){const r=K(t);return r.Cr(),new lv(n,r.nr,r.credentials,r.N,s)}(e.datastore,e.asyncQueue,{Si:fv.bind(null,e),Ci:dv.bind(null,e),Tr:pv.bind(null,e)}),e.jr.push(async t=>{t?(e.zr.hr(),fa(e)?ha(e):e.Wr.set("Unknown")):(await e.zr.stop(),Dh(e))})),e.zr}/**
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
 */class da{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new da(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rh(e,t){if(Ae("AsyncQueue",`${t}: ${e}`),ms(e))return new x(b.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class _n{constructor(t){this.comparator=t?(n,s)=>t(n,s)||U.comparator(n.key,s.key):(n,s)=>U.comparator(n.key,s.key),this.keyedMap=ta(),this.sortedSet=new Ft(this.comparator)}static emptySet(t){return new _n(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof _n)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new _n;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
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
 */class Oh{constructor(){this.Jr=new Ft(U.comparator)}track(t){const n=t.doc.key,s=this.Jr.get(n);s?t.type!==0&&s.type===3?this.Jr=this.Jr.insert(n,t):t.type===3&&s.type!==1?this.Jr=this.Jr.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Jr=this.Jr.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Jr=this.Jr.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Jr=this.Jr.remove(n):t.type===1&&s.type===2?this.Jr=this.Jr.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Jr=this.Jr.insert(n,{type:2,doc:t.doc}):j():this.Jr=this.Jr.insert(n,t)}Yr(){const t=[];return this.Jr.inorderTraversal((n,s)=>{t.push(s)}),t}}class Cn{constructor(t,n,s,r,i,o,a,l){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(t,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Cn(t,n,_n.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class mv{constructor(){this.Xr=void 0,this.listeners=[]}}class yv{constructor(){this.queries=new ys(t=>ju(t),xr),this.onlineState="Unknown",this.Zr=new Set}}async function vv(e,t){const n=K(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new mv),r)try{i.Xr=await n.onListen(s)}catch(o){const a=Rh(o,`Initialization of query '${Yo(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.eo(n.onlineState),i.Xr&&t.no(i.Xr)&&pa(n)}async function wv(e,t){const n=K(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Ev(e,t){const n=K(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.no(r)&&(s=!0);o.Xr=r}}s&&pa(n)}function Tv(e,t,n){const s=K(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function pa(e){e.Zr.forEach(t=>{t.next()})}class Iv{constructor(t,n,s){this.query=t,this.so=n,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=s||{}}no(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Cn(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.io?this.oo(t)&&(this.so.next(t),n=!0):this.ao(t,this.onlineState)&&(this.co(t),n=!0),this.ro=t,n}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let n=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),n=!0),n}ao(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.uo||!s)&&(!t.docs.isEmpty()||n==="Offline")}oo(t){if(t.docChanges.length>0)return!0;const n=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}co(t){t=Cn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}/**
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
 */class Lh{constructor(t){this.key=t}}class Mh{constructor(t){this.key=t}}class bv{constructor(t,n){this.query=t,this._o=n,this.mo=null,this.current=!1,this.yo=it(),this.mutatedKeys=it(),this.po=Bu(t),this.Eo=new _n(this.po)}get To(){return this._o}Io(t,n){const s=n?n.Ao:new Oh,r=n?n.Eo:this.Eo;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=Nr(this.query)&&r.size===this.query.limit?r.last():null,c=Dr(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((u,d)=>{const p=r.get(u),m=Rr(this.query,d)?d:null,A=!!p&&this.mutatedKeys.has(p.key),M=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;p&&m?p.data.isEqual(m.data)?A!==M&&(s.track({type:3,doc:m}),S=!0):this.Ro(p,m)||(s.track({type:2,doc:m}),S=!0,(l&&this.po(m,l)>0||c&&this.po(m,c)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),S=!0):p&&!m&&(s.track({type:1,doc:p}),S=!0,(l||c)&&(a=!0)),S&&(m?(o=o.add(m),i=M?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),Nr(this.query)||Dr(this.query))for(;o.size>this.query.limit;){const u=Nr(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Eo:o,Ao:s,Ln:a,mutatedKeys:i}}Ro(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const i=t.Ao.Yr();i.sort((c,u)=>function(d,p){const m=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return m(d)-m(p)}(c.type,u.type)||this.po(c.doc,u.doc)),this.bo(s);const o=n?this.Po():[],a=this.yo.size===0&&this.current?1:0,l=a!==this.mo;return this.mo=a,i.length!==0||l?{snapshot:new Cn(this.query,t.Eo,r,i,t.mutatedKeys,a===0,l,!1),vo:o}:{vo:o}}eo(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Oh,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach(n=>this._o=this._o.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this._o=this._o.delete(n)),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=it(),this.Eo.forEach(s=>{this.Vo(s.key)&&(this.yo=this.yo.add(s.key))});const n=[];return t.forEach(s=>{this.yo.has(s)||n.push(new Mh(s))}),this.yo.forEach(s=>{t.has(s)||n.push(new Lh(s))}),n}So(t){this._o=t.Gn,this.yo=it();const n=this.Io(t.documents);return this.applyChanges(n,!0)}Do(){return Cn.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,this.mo===0)}}class Av{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class _v{constructor(t){this.key=t,this.Co=!1}}class Cv{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new ys(a=>ju(a),xr),this.ko=new Map,this.$o=new Set,this.Oo=new Ft(U.comparator),this.Fo=new Map,this.Mo=new aa,this.Lo={},this.Bo=new Map,this.Uo=bn.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return this.qo===!0}}async function Sv(e,t){const n=Mv(e);let s,r;const i=n.xo.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Do();else{const o=await Wy(n.localStore,He(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Nv(n,t,s,a==="current"),n.isPrimaryClient&&Ch(n.remoteStore,o)}return r}async function Nv(e,t,n,s){e.Ko=(u,d,p)=>async function(m,A,M,S){let k=A.view.Io(M);k.Ln&&(k=await Ih(m.localStore,A.query,!1).then(({documents:Z})=>A.view.Io(Z,k)));const lt=S&&S.targetChanges.get(A.targetId),nt=A.view.applyChanges(k,m.isPrimaryClient,lt);return Uh(m,A.targetId,nt.vo),nt.snapshot}(e,u,d,p);const r=await Ih(e.localStore,t,!0),i=new bv(t,r.Gn),o=i.Io(r.documents),a=ps.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),l=i.applyChanges(o,e.isPrimaryClient,a);Uh(e,n,l.vo);const c=new Av(t,n,i);return e.xo.set(t,c),e.ko.has(n)?e.ko.get(n).push(t):e.ko.set(n,[t]),l.snapshot}async function Dv(e,t){const n=K(e),s=n.xo.get(t),r=n.ko.get(s.targetId);if(r.length>1)return n.ko.set(s.targetId,r.filter(i=>!xr(i,t))),void n.xo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await oa(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Sh(n.remoteStore,s.targetId),ga(n,s.targetId)}).catch(ra)):(ga(n,s.targetId),await oa(n.localStore,s.targetId,!0))}async function kh(e,t){const n=K(e);try{const s=await zy(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.Fo.get(i);o&&(ut(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Co=!0:r.modifiedDocuments.size>0?ut(o.Co):r.removedDocuments.size>0&&(ut(o.Co),o.Co=!1))}),await Vh(n,s,t)}catch(s){await ra(s)}}function Fh(e,t,n){const s=K(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.xo.forEach((i,o)=>{const a=o.view.eo(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=K(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.eo(o)&&(l=!0)}),l&&pa(a)}(s.eventManager,t),r.length&&s.No.Tr(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function xv(e,t,n){const s=K(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.Fo.get(t),i=r&&r.key;if(i){let o=new Ft(U.comparator);o=o.insert(i,Nt.newNoDocument(i,W.min()));const a=it().add(i),l=new Pr(W.min(),new Map,new At(Y),o,a);await kh(s,l),s.Oo=s.Oo.remove(i),s.Fo.delete(t),ma(s)}else await oa(s.localStore,t,!1).then(()=>ga(s,t,n)).catch(ra)}function ga(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ko.get(t))e.xo.delete(s),n&&e.No.jo(s,n);e.ko.delete(t),e.isPrimaryClient&&e.Mo.cs(t).forEach(s=>{e.Mo.containsKey(s)||Ph(e,s)})}function Ph(e,t){e.$o.delete(t.path.canonicalString());const n=e.Oo.get(t);n!==null&&(Sh(e.remoteStore,n),e.Oo=e.Oo.remove(t),e.Fo.delete(n),ma(e))}function Uh(e,t,n){for(const s of n)s instanceof Lh?(e.Mo.addReference(s.key,t),Rv(e,s)):s instanceof Mh?(L("SyncEngine","Document no longer in limbo: "+s.key),e.Mo.removeReference(s.key,t),e.Mo.containsKey(s.key)||Ph(e,s.key)):j()}function Rv(e,t){const n=t.key,s=n.path.canonicalString();e.Oo.get(n)||e.$o.has(s)||(L("SyncEngine","New document in limbo: "+n),e.$o.add(s),ma(e))}function ma(e){for(;e.$o.size>0&&e.Oo.size<e.maxConcurrentLimboResolutions;){const t=e.$o.values().next().value;e.$o.delete(t);const n=new U(at.fromString(t)),s=e.Uo.next();e.Fo.set(s,new _v(n)),e.Oo=e.Oo.insert(n,s),Ch(e.remoteStore,new ze(He(Wo(n.path)),s,2,Uo.T))}}async function Vh(e,t,n){const s=K(e),r=[],i=[],o=[];s.xo.isEmpty()||(s.xo.forEach((a,l)=>{o.push(s.Ko(l,t,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),r.push(c);const u=ia.kn(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.No.Tr(r),await async function(a,l){const c=K(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>C.forEach(l,d=>C.forEach(d.Nn,p=>c.persistence.referenceDelegate.addReference(u,d.targetId,p)).next(()=>C.forEach(d.xn,p=>c.persistence.referenceDelegate.removeReference(u,d.targetId,p)))))}catch(u){if(!ms(u))throw u;L("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const p=c.Un.get(d),m=p.snapshotVersion,A=p.withLastLimboFreeSnapshotVersion(m);c.Un=c.Un.insert(d,A)}}}(s.localStore,i))}async function Ov(e,t){const n=K(e);if(!n.currentUser.isEqual(t)){L("SyncEngine","User change. New user:",t.toKey());const s=await Eh(n.localStore,t);n.currentUser=t,function(r,i){r.Bo.forEach(o=>{o.forEach(a=>{a.reject(new x(b.CANCELLED,i))})}),r.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Vh(n,s.Wn)}}function Lv(e,t){const n=K(e),s=n.Fo.get(t);if(s&&s.Co)return it().add(s.key);{let r=it();const i=n.ko.get(t);if(!i)return r;for(const o of i){const a=n.xo.get(o);r=r.unionWith(a.view.To)}return r}}function Mv(e){const t=K(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=kh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=xv.bind(null,t),t.No.Tr=Ev.bind(null,t.eventManager),t.No.jo=Tv.bind(null,t.eventManager),t}class kv{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=Vr(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return Ky(this.persistence,new qy,t.initialUser,this.N)}Go(t){return new tv(la.Ns,this.N)}Wo(t){return new nv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Fv{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Fh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ov.bind(null,this.syncEngine),await gv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new yv}createDatastore(t){const n=Vr(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new ov(r));var r;return function(i,o,a){return new cv(i,o,a)}(t.credentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Fh(this.syncEngine,a,0),o=Ah.bt()?new Ah:new sv,new hv(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,l,c){const u=new Cv(s,r,i,o,a,l);return c&&(u.qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=K(t);L("RemoteStore","RemoteStore shutting down."),n.Kr.add(5),await vs(n),n.Qr.shutdown(),n.Wr.set("Unknown")}(this.remoteStore)}}/**
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
 */class Pv{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class Uv{constructor(t,n,s){this.credentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Vt.UNAUTHENTICATED,this.clientId=zm.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async r=>{L("FirestoreClient","Received user=",r.uid),await this.credentialListener(r),this.user=r})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(n){const s=Rh(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Vv(e,t){e.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Eh(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function $v(e,t){e.asyncQueue.verifyOperationInProgress();const n=await jv(e);L("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>async function(i,o){const a=K(i);a.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const l=ws(a);a.Kr.add(3),await vs(a),l&&a.Wr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Kr.delete(3),await $r(a)}(t.remoteStore,r)),e.onlineComponents=t}async function jv(e){return e.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await Vv(e,new kv)),e.offlineComponents}async function Bv(e){return e.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await $v(e,new Fv)),e.onlineComponents}async function $h(e){const t=await Bv(e),n=t.eventManager;return n.onListen=Sv.bind(null,t.syncEngine),n.onUnlisten=Dv.bind(null,t.syncEngine),n}class qv{constructor(t,n,s,r,i,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Es{constructor(t,n){this.projectId=t,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Es&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const jh=new Map;/**
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
 */function Hv(e,t,n){if(!n)throw new x(b.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Kv(e,t,n,s){if(t===!0&&s===!0)throw new x(b.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Bh(e){if(U.isDocumentKey(e))throw new x(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function jr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":j()}function ya(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new x(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jr(e);throw new x(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class qh{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new x(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Kv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class Hh{constructor(t,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qh({}),this._settingsFrozen=!1,t instanceof Es?this._databaseId=t:(this._app=t,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new x(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Es(s.options.projectId)}(t))}get app(){if(!this._app)throw new x(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new x(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qh(t),t.credentials!==void 0&&(this._credentials=function(n){if(!n)return new jm;switch(n.type){case"gapi":const s=n.client;return ut(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Hm(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new x(b.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=jh.get(t);n&&(L("ComponentProvider","Removing Datastore"),jh.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class oe{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new oe(this.firestore,t,this._key)}}class Ts{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ts(this.firestore,t,this._query)}}class Sn extends Ts{constructor(t,n,s){super(t,n,Wo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new oe(this.firestore,null,new U(t))}withConverter(t){return new Sn(this.firestore,t,this._path)}}function Iw(e,t,...n){if(e=$n(e),Hv("collection","path",t),e instanceof Hh){const s=at.fromString(t,...n);return Bh(s),new Sn(e,null,s)}{if(!(e instanceof oe||e instanceof Sn))throw new x(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(at.fromString(t,...n));return Bh(s),new Sn(e.firestore,null,s)}}/**
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
 */class zv{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new _h(this,"async_queue_retry"),this.Ea=()=>{const n=ca();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.rr.tr()};const t=ca();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const n=ca();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise(()=>{});const n=new yn;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(this.da.length!==0){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!ms(t))throw t;L("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const n=this.fa.then(()=>(this.ga=!0,t().catch(s=>{throw this.ma=s,this.ga=!1,Ae("INTERNAL UNHANDLED ERROR: ",function(r){let i=r.message||"";return r.stack&&(i=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),i}(s)),s}).then(s=>(this.ga=!1,s))));return this.fa=n,n}enqueueAfterDelay(t,n,s){this.Ta(),this.pa.indexOf(t)>-1&&(n=0);const r=da.createAndSchedule(this,t,n,s,i=>this.Ra(i));return this._a.push(r),r}Ta(){this.ma&&j()}verifyOperationInProgress(){}async ba(){let t;do t=this.fa,await t;while(t!==this.fa)}Pa(t){for(const n of this._a)if(n.timerId===t)return!0;return!1}va(t){return this.ba().then(()=>{this._a.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this._a)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ba()})}Va(t){this.pa.push(t)}Ra(t){const n=this._a.indexOf(t);this._a.splice(n,1)}}function Kh(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(e,["next","error","complete"])}class va extends Hh{constructor(t,n){super(t,n),this.type="firestore",this._queue=new zv,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||zh(this),this._firestoreClient.terminate()}}function bw(e=Rg()){return Sg(e,"firestore").getImmediate()}function Gv(e){return e._firestoreClient||zh(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function zh(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new qv(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Uv(e._credentials,e._queue,s)}/**
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
 */class Gh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new x(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Nn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Nn(St.fromBase64String(t))}catch(n){throw new x(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Nn(St.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Wh{constructor(t){this._methodName=t}}/**
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
 */class wa{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new x(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new x(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Y(this._lat,t._lat)||Y(this._long,t._long)}}/**
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
 */const Wv=/^__.*__$/;function Yh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Ea{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.N=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new Ea(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Ca({path:s,xa:!1});return r.ka(t),r}$a(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Ca({path:s,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return Ia(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(t.length===0)throw this.Fa("Document fields must not be empty");if(Yh(this.Da)&&Wv.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class Yv{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.N=s||Vr(t)}Ba(t,n,s,r=!1){return new Ea({Da:t,methodName:n,La:s,path:Wt.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Xv(e){const t=e._freezeSettings(),n=Vr(e._databaseId);return new Yv(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Qv(e,t,n,s=!1){return Ta(n,e.Ba(s?4:3,t))}function Ta(e,t){if(Xh(e=$n(e)))return Zv("Unsupported field value:",t,e),Jv(e,t);if(e instanceof Wh)return function(n,s){if(!Yh(s.Da))throw s.Fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xa&&t.Da!==4)throw t.Fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ta(o,s.Oa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=$n(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return uy(s.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Gt.fromDate(n);return{timestampValue:ea(s.N,r)}}if(n instanceof Gt){const r=new Gt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ea(s.N,r)}}if(n instanceof wa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Nn)return{bytesValue:uh(s.N,n._byteString)};if(n instanceof oe){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.Fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:hh(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Fa(`Unsupported field value: ${jr(n)}`)}(e,t)}function Jv(e,t){const n={};return Su(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):os(e,(s,r)=>{const i=Ta(r,t.Na(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Xh(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Gt||e instanceof wa||e instanceof Nn||e instanceof oe||e instanceof Wh)}function Zv(e,t,n){if(!Xh(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=jr(n);throw s==="an object"?t.Fa(e+" a custom object"):t.Fa(e+" "+s)}}const tw=new RegExp("[~\\*/\\[\\]]");function ew(e,t,n){if(t.search(tw)>=0)throw Ia(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Gh(...t.split("."))._internalPath}catch(s){throw Ia(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ia(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new x(b.INVALID_ARGUMENT,a+e+l)}/**
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
 */class Qh{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new nw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ba("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nw extends Qh{data(){return super.data()}}function ba(e,t){return typeof t=="string"?ew(e,t):t instanceof Gh?t._internalPath:t._delegate._internalPath}/**
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
 */class Is{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Jh extends Qh{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Br(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(ba("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Br extends Jh{data(t={}){return super.data(t)}}class sw{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Is(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Br(this._firestore,this._userDataWriter,s.key,s,new Is(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Br(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Is(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Br(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Is(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:rw(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function rw(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}/**
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
 */function iw(e){if(Dr(e)&&e.explicitOrderBy.length===0)throw new x(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ow{}function Aw(e,...t){for(const n of t)e=n._apply(e);return e}class aw extends ow{constructor(t,n,s){super(),this.Ka=t,this.ja=n,this.Qa=s,this.type="where"}_apply(t){const n=Xv(t.firestore),s=function(r,i,o,a,l,c,u){let d;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new x(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on FieldPath.documentId().`);if(c==="in"||c==="not-in"){tf(u,c);const m=[];for(const A of u)m.push(Zh(a,r,A));d={arrayValue:{values:m}}}else d=Zh(a,r,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||tf(u,c),d=Qv(o,i,u,c==="in"||c==="not-in");const p=kt.create(l,c,d);return function(m,A){if(A.v()){const S=Vu(m);if(S!==null&&!S.isEqual(A.field))throw new x(b.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${S.toString()}' and '${A.field.toString()}'`);const k=Uu(m);k!==null&&lw(m,A.field,k)}const M=function(S,k){for(const lt of S.filters)if(k.indexOf(lt.op)>=0)return lt.op;return null}(m,function(S){switch(S){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(A.op));if(M!==null)throw M===A.op?new x(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${A.op.toString()}' filter.`):new x(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${A.op.toString()}' filters with '${M.toString()}' filters.`)}(r,p),p}(t._query,"where",n,t.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Ts(t.firestore,t.converter,function(r,i){const o=r.filters.concat([i]);return new fs(r.path,r.collectionGroup,r.explicitOrderBy.slice(),o,r.limit,r.limitType,r.startAt,r.endAt)}(t._query,s))}}function _w(e,t,n){const s=t,r=ba("where",e);return new aw(r,s,n)}function Zh(e,t,n){if(typeof(n=$n(n))=="string"){if(n==="")throw new x(b.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!$u(t)&&n.indexOf("/")!==-1)throw new x(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(at.fromString(n));if(!U.isDocumentKey(s))throw new x(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ru(e,new U(s))}if(n instanceof oe)return Ru(e,n._key);throw new x(b.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${jr(n)}.`)}function tf(e,t){if(!Array.isArray(e)||e.length===0)throw new x(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new x(b.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function lw(e,t,n){if(!n.isEqual(t))throw new x(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class cw{convertValue(t,n="none"){switch(qe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ht(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(vn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw j()}}convertObject(t,n){const s={};return os(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new wa(ht(t.latitude),ht(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Du(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ls(t));default:return null}}convertTimestamp(t){const n=_e(t);return new Gt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=at.fromString(t);ut(vh(s));const r=new Es(s.get(1),s.get(3)),i=new U(s.popFirst(5));return r.isEqual(n)||Ae(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class ef extends cw{constructor(t){super(),this.firestore=t}convertBytes(t){return new Nn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new oe(this.firestore,null,n)}}function Cw(e,...t){var n,s,r;e=$n(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Kh(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Kh(t[o])){const d=t[o];t[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),t[o+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),t[o+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let l,c,u;if(e instanceof oe)c=ya(e.firestore,va),u=Wo(e._key.path),l={next:d=>{t[o]&&t[o](uw(c,e,d))},error:t[o+1],complete:t[o+2]};else{const d=ya(e,Ts);c=ya(d.firestore,va),u=d._query;const p=new ef(c);l={next:m=>{t[o]&&t[o](new sw(c,p,d,m))},error:t[o+1],complete:t[o+2]},iw(e._query)}return function(d,p,m,A){const M=new Pv(A),S=new Iv(p,M,m);return d.asyncQueue.enqueueAndForget(async()=>vv(await $h(d),S)),()=>{M.Xo(),d.asyncQueue.enqueueAndForget(async()=>wv(await $h(d),S))}}(Gv(c),u,a,l)}function uw(e,t,n){const s=n.docs.get(t._key),r=new ef(e);return new Jh(e,r,t._key,s,new Is(n.hasPendingWrites,n.fromCache),t.converter)}var hw;(function(e){mn=e})(xg),Hi(new Xs("firestore",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=new va(n,new Bm(e.getProvider("auth-internal")));return t=Object.assign({useFetchStreams:!0},t),s._setSettings(t),s},"PUBLIC")),Zs("@firebase/firestore","3.1.0",hw);var fw="firebase",dw="9.1.1";/**
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
 */Zs(fw,dw,"app");export{bw as $,Aw as F,_w as L,Iw as R,kl as a,se as b,vw as c,mw as d,ww as e,yw as f,Cw as g,Ew as h,Tw as i,yl as o,gw as r,pw as t};
