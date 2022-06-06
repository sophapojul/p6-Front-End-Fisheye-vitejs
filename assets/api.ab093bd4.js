const b=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}};b();let u=null;function y(c,n){const o=new URL(c,window.location.href);o.search=`?id=${n}`,u==null||u.closed||!Object.values(u.location).includes(`${o.search}`)?u=window.open(o):u.focus()}function t(c,n,o="",a={}){const e=document.createElement(n);return e.textContent=o,Object.entries(a).forEach(([s,i])=>e.setAttribute(s,i)),c.appendChild(e)}function $(c){const{id:n,name:o,portrait:a,city:e,country:s,tagline:i,price:p}=c,d=`assets/images/${a}`;function h(){const r=document.createElement("article");t(r,"img",null,{src:d,id:n,class:"article-img"}),t(r,"h2",o,{class:"article-title"}),t(r,"div",`${e}, ${s}`,{class:"article-location"}),t(r,"p",i,{class:"article-tagline"}),t(r,"span",`${p}\u20AC/jour`,{class:"article-price"});const l=r.firstElementChild,w="photographer.html";return l.addEventListener("click",()=>{const v=this.data.id;y(w,v)}),r}function g(){const r=document.createElement("section"),l=t(r,"div",null,{class:"bio"});return t(l,"h2",o,{class:"section-title"}),t(l,"div",`${e}, ${s}`,{class:"section-location"}),t(l,"q",i,{class:"section-tagline"}),t(r,"button","Contactez-moi",{class:"contact_button",role:"button"}),t(r,"img",null,{class:"section-img",src:d,alt:o,id:n}),r}return{data:c,getUserCardDOM:h,getOneUserCardDOM:g}}const m=document.querySelector("main"),f=t(m,"div",null,{class:"dropdown"}),L=t(m,"section",null,{class:"photograph-product"});function O(){const c=t(f,"button","Trier par",{class:"dropdown-toggle",type:"button","aria-haspopup":"true"}),n=t(c,"svg","",{width:"16",height:"11",viewBox:"0 0 16 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"});t(n,"path","",{d:"M1.88 10.5466L8 4.43996L14.12 10.5466L16 8.66663L8 0.66663L1.64355e-07 8.66663L1.88 10.5466Z",fill:"green"});const o=t(f,"ul",null,{class:"dropdown-menu active",role:"listbox","aria-expanded":"false"});t(o,"li","Popularit\xE9",{class:"option",id:"option",role:"option",tabindex:"0"}),t(o,"li","Date",{class:"option",id:"option",role:"option",tabindex:"0"}),t(o,"li","Titre",{class:"option",id:"option",role:"option",tabindex:"0"})}function P(c){const{id:n,photographerId:o,title:a,image:e,video:s,likes:i}=c,p="assets/images/heart.svg",d=`assets/images/${o}/${e}`,h=`assets/images/${o}/${s}`;function g(){const r=t(L,"article",null,{class:"product"});c.video?t(r,"video",null,{class:"product-video",controls:!0,src:h}):t(r,"img",null,{class:"product-img",src:d,alt:a,id:n});const l=t(r,"footer",null,{class:"product-footer"});return t(l,"p",a,{class:"product-title"}),t(l,"span",i,{class:"product-likes"}),t(l,"img",null,{class:"product-heart",role:"img",src:p}),r}return{data:c,getProductUserCardDOM:g}}const x=async()=>{const n=await(await fetch("api/photographers.json")).json(),{photographers:o}=n;return o},j=async()=>{const n=await(await fetch("api/photographers.json")).json(),{media:o}=n;return o};export{O as a,j as b,P as c,x as g,$ as p};