import{i as h,$ as m,d as _,r as y,F as g,L as b,s as v,R as w,g as x,o as B,c,a as s,u as f,b as D,e as L,f as r,t as p,h as k,j as A}from"./vendor.ebba72de.js";const E=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};E();var F="/notiflow.png";h({apiKey:"AIzaSyAD_UkpbYiFiBVppR4RpSIIc2NJ6sb_-bU",authDomain:"notiflow-24b2e.firebaseapp.com",projectId:"notiflow-24b2e",storageBucket:"notiflow-24b2e.appspot.com",messagingSenderId:"701917023498",appId:"1:701917023498:web:261a05a6bcbff561637ef3",measurementId:"G-0NDCE11S3R"});const I=m(),N={class:"w-full h-full"},R=s("div",{class:"h-16 bg-white border-b border-gray-100"},[s("div",{class:"container mx-auto max-w-5xl flex justify-between items-center"},[s("div",{class:"p-4 h-16"},[s("img",{src:F,class:"h-full"})]),s("a",{class:"p-4",href:"https://github.com/distbe/notiflow-landing",target:"_blank"},[s("div",{class:"w-6 h-6"},[s("svg",{class:"w-full h-full",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})])])])])],-1),S={class:"container mx-auto max-w-5xl p-4"},O={key:0,class:"space-y-2 py-4"},U=s("div",{class:"text-center text-gray-400"},"\uC120\uD0DD\uB41C \uCC44\uB110\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. URL\uC744 \uB2E4\uC2DC \uD55C\uBC88 \uD655\uC778\uD574\uC8FC\uC138\uC694.",-1),j=s("div",{class:"text-center"},"(\uC608) https://notiflow.dist.be/?channel=abcdefg",-1),M=[U,j],J={key:1,class:"space-y-2 py-4"},P=s("div",{class:"text-center text-gray-400"},"\uC218\uC2E0\uB41C \uBA54\uC2DC\uC9C0 \uB85C\uADF8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. URL\uC744 \uB2E4\uC2DC \uD55C\uBC88 \uD655\uC778\uD574\uC8FC\uC138\uC694.",-1),$=[P],q={key:2,class:"flex flex-col-reverse font-mono gap-y-3"},z={class:"text-sm text-gray-400"},H={class:"text-sm whitespace-pre-line break-all"},K=_({setup(C){const a=y([]),{searchParams:i}=new URL(location.href),n=i.get("channel");if(n){const e=new Date,t=g(w(I,`channels/${n}/logs`),b("created",">=",v.fromDate(e))),o=x(t,u=>{u.docChanges().forEach(l=>{if(l.type==="added"){const d=l.doc.data();a.value.push({body:JSON.parse(d.body),created:d.created})}})});B(()=>{o()})}return(e,t)=>(r(),c("div",N,[R,s("div",S,[f(n)?a.value.length===0?(r(),c("div",J,$)):(r(),c("div",q,[(r(!0),c(D,null,L(a.value,(o,u)=>(r(),c("div",{key:u},[s("div",z,p(f(k)(o.created.seconds*1e3,"yyyy-MM-dd HH:mm:ss")),1),s("div",H,p(JSON.stringify(o.body,null,"  ").replace(/ /g,"\xA0")),1)]))),128))])):(r(),c("div",O,M))])]))}});A(K).mount("#app");