import{o as _,c as u,a as d,b as p,r as f,d as h,e as v,z as E}from"./vendor.8115e11f.js";const y=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};y();var L=(a,i)=>{const n=a.__vccOpts||a;for(const[t,e]of i)n[t]=e;return n};const g={},N={class:"w-screen h-screen flex justify-center items-center flex-col"},O={class:"w-[85%] h-[90%] bg-white max-w-[900px]"};function P(a,i){const n=f("router-view");return _(),u("div",N,[d("div",O,[p(n)])])}var A=L(g,[["render",P]]);const R="modulepreload",c={},S="/statistics/",s=function(i,n){return!n||n.length===0?i():Promise.all(n.map(t=>{if(t=`${S}${t}`,t in c)return;c[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":R,e||(r.as="script",r.crossOrigin=""),r.href=t,document.head.appendChild(r),e)return new Promise((l,m)=>{r.addEventListener("load",l),r.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>i())},V=[{path:"/",name:"Home",component:()=>s(()=>import("./Home.effc8f03.js"),["assets/Home.effc8f03.js","assets/Home.29669ee5.css","assets/Button.3af1f703.js","assets/vendor.8115e11f.js"])},{path:"/Random",name:"Random",component:()=>s(()=>import("./Random.5468baf0.js"),["assets/Random.5468baf0.js","assets/Button.3af1f703.js","assets/vendor.8115e11f.js"])},{path:"/Uniform",name:"Uniform",component:()=>s(()=>import("./Uniform.46c55036.js"),["assets/Uniform.46c55036.js","assets/Button.3af1f703.js","assets/vendor.8115e11f.js"])},{path:"/Normal",name:"Normal",component:()=>s(()=>import("./Normal.32037924.js"),["assets/Normal.32037924.js","assets/Button.3af1f703.js","assets/vendor.8115e11f.js"])},{path:"/NormalSimulation",name:"NormalSimulation",component:()=>s(()=>import("./NormalSimulation.43f34931.js"),["assets/NormalSimulation.43f34931.js","assets/Button.3af1f703.js","assets/vendor.8115e11f.js","assets/index.15c82977.js"])},{path:"/StandardNormal",name:"StandardNormal",component:()=>s(()=>import("./StandardNormal.01fbd667.js"),["assets/StandardNormal.01fbd667.js","assets/Button.3af1f703.js","assets/vendor.8115e11f.js"])},{path:"/Coin",name:"Coin",component:()=>s(()=>import("./Coin.4e0f6d2a.js"),["assets/Coin.4e0f6d2a.js","assets/Button.3af1f703.js","assets/vendor.8115e11f.js","assets/index.15c82977.js"])},{path:"/NegativeBinomial",name:"NegativeBinomial",component:()=>s(()=>import("./NegativeBinomial.4142a65d.js"),["assets/NegativeBinomial.4142a65d.js","assets/Button.3af1f703.js","assets/vendor.8115e11f.js"])},{path:"/NBSimulation",name:"NBSimulation",component:()=>s(()=>import("./NBSimulation.c21bded2.js"),["assets/NBSimulation.c21bded2.js","assets/Button.3af1f703.js","assets/vendor.8115e11f.js","assets/index.15c82977.js"])}],I=h({mode:"history",routes:V});v(A).use(I).use(E).mount("#app");export{L as _};
