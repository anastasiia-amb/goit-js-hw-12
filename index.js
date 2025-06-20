import{a as P,S as v,i}from"./assets/vendor-Dy2ZTtfi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const M="https://pixabay.com/api/",q="50824035-87dfb0469b0d9be7736d790bf";async function u(s,o=1,r=15){const l={key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:r};return(await P.get(M,{params:l})).data}const g=document.querySelector(".gallery"),m=document.querySelector(".loader"),f=document.querySelector(".load-more");let x=new v(".gallery a",{captionsData:"alt",animationDelay:250,captionPosition:"bottom"});function h(s){const o=s.map(({webformatURL:r,largeImageURL:l,tags:e,likes:t,views:n,comments:w,downloads:S})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${l}">
        <img class="gallery-img" src="${r}" alt="${e}" width="300"/>
        <ul class="gallery-desc">
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Likes</h2>
        <p class="gallery-text">${t}</p>
        </li>
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Views</h2>
        <p class="gallery-text">${n}</p>
        </li>
         <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Comments</h2>
        <p class="gallery-text">${w}</p>
        </li>
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Downloads</h2>
        <p class="gallery-text">${S}</p>
        </li>
        </ul>
        </a>
        </li>
        `).join("");g.insertAdjacentHTML("beforeend",o),x.refresh()}function B(){g.innerHTML=""}function y(){m.classList.remove("hidden")}function p(){m.classList.add("hidden")}function b(){f.classList.remove("hidden")}function L(){f.classList.add("hidden")}const R=document.querySelector(".form"),$=document.querySelector(".form-input"),E=document.querySelector(".load-more");let d="",a=1;const c=15;R.addEventListener("submit",O);E.addEventListener("click",A);async function O(s){s.preventDefault();const o=$.value.trim();if(o==="")return i.warning({message:"Please, fill in the field",position:"topRight",timeout:3e3});d=o,a=1,B(),y(),L();try{const r=await u(d,a,c);if(r.hits.length===0){i.error({message:"Sorry, no images found. Please try again!",position:"topRight",color:"red"});return}h(r.hits);const l=Math.ceil(r.totalHits/c);a<l?b():i.info({message:"All images loaded.",position:"topRight",color:"yellow"})}catch{i.error({message:"Something went wrong!",position:"topRight",color:"blue"})}finally{p()}}async function A(){a+=1,y(),L();try{const s=await u(d,a,c);h(s.hits);const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"});const r=Math.ceil(s.totalHits/c);a<r?b():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"yellow"})}catch{i.error({message:"Something went wrong!",position:"topRight",color:"red"})}finally{p()}}
//# sourceMappingURL=index.js.map
