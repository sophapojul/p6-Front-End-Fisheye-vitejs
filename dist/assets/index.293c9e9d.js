const d=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};d();function a(o,r,n="",s={},e=""){const t=document.createElement(r);t.textContent=n,Object.entries(s).forEach(([c,l])=>{t.setAttribute(c,l)}),t.className=e,o.appendChild(t)}function f(o){const{id:r,name:n,portrait:s,city:e,country:t,tagline:c,price:l}=o,u=`assets/photographers/${s}`;function p(){const i=document.createElement("article");return a(i,"img","",{src:u,id:r}),a(i,"h2",n),a(i,"div",`${e}, ${t}`),a(i,"p",c),a(i,"span",`${l}\u20AC/jour`),i}return{data:o,getUserCardDOM:p}}async function h(){const r=await(await fetch("data/photographers.json")).json(),{photographers:n}=r;return n}function g(o){const r=document.querySelector(".photographer_section");o.forEach(n=>{const e=f(n).getUserCardDOM();r.appendChild(e)})}async function m(){const o=await h();g(o)}m();
