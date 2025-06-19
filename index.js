import{a as S,S as P,i as n}from"./assets/vendor-Dy2ZTtfi.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const q="https://pixabay.com/api/",v="50824035-87dfb0469b0d9be7736d790bf";async function m(o,l=1,r=15){const s={key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:r,page:l};return await S.get(q,{params:s}).then(e=>e.data)}const g=document.querySelector(".gallery"),y=document.querySelector(".loader"),h=document.querySelector(".load-more");let M=new P(".gallery a",{captionsData:"alt",animationDelay:250,captionPosition:"bottom"});function f(o){const l=o.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:a,comments:L,downloads:w})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${s}">
        <img class="gallery-img" src="${r}" alt="${e}" width="300"/>
        <ul class="gallery-desc">
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Likes</h2>
        <p class="gallery-text">${t}</p>
        </li>
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Views</h2>
        <p class="gallery-text">${a}</p>
        </li>
         <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Comments</h2>
        <p class="gallery-text">${L}</p>
        </li>
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Downloads</h2>
        <p class="gallery-text">${w}</p>
        </li>
        </ul>
        </a>
        </li>
        `).join("");g.innerHTML=l,M.refresh()}function x(){g.innerHTML=""}function p(){y.classList.remove("hidden")}function d(){y.classList.add("hidden")}function b(){h.classList.remove("load-more-hidden")}function B(){h.classList.add("load-more-hidden")}const $=document.querySelector(".form"),E=document.querySelector(".form-input"),I=document.querySelector(".load-more");let u="",i=1;const c=15;$.addEventListener("submit",O);I.addEventListener("click",R);async function O(o){if(o.preventDefault(),E.value.trim()==="")return n.warning({message:"Please, fill in the field",position:"topRight",timeout:3e3});u=query,i=1,x(),p(),B();try{const r=await m(u,i,c);if(r.hits.length===0){n.error({message:"Sorry, no images found. Please try again!",position:"topRight",color:"red"});return}f(r.hits),r.totalHits>c&&b()}catch{n.error({message:"Something went wrong!",position:"topRight",color:"blue"})}finally{d()}}async function R(){i+=1,p(),d();try{const o=await m(u,i,c);f(o.hits);const{height:l}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:l*2,behavior:"smooth"});const r=Math.ceil(o.totalHits/c);i<r&&b()}catch{n.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"red"})}finally{d()}}
//# sourceMappingURL=index.js.map
