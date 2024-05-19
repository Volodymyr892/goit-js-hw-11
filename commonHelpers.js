import{i as n}from"./assets/vendor-482df00d.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="43948978-860dfecfaa788bc4b5c828749",f="https://pixabay.com/api/",h=(r="pug")=>{const i=new URLSearchParams({key:d,query:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${i}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})},m=r=>r.map(({webformatURL:i,largeImageURL:s,tags:l,likes:e,views:t,comments:o,downloads:u})=>`
            <li class="item-list">
            <a href="${s}" class="item-list-link">
            <img class="item-list-img"  height="152"
            width="300" src="${i}" alt="${l}">
        </a>
        <div class='markup-info'>
        <div class="item-list-info-text">
        <h3 class="item-list-title">Likes</h3>
        <p class="item-list-text">${e}</p>
        </div>
        <div class="item-list-info-text">
        <h3 class="item-list-title">Views</h3>
        <p class="item-list-text">${t}</p>
        </div>
        <div class="item-list-info-text">
        <h3 class="item-list-title">Comments</h3>
        <p class="item-list-text">${o}</p>
        </div>
            <div class="item-list-info-text">
            <h3 class="item-list-title">Downloads</h3>
            <p class="item-list-text">${u}</p>
            </div>
            </div>
            </li>
            `).join("");console.log("🚀 ~ createMarkupItem ~ createMarkupItem:",m);const p=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),a=document.querySelector(".js-loader");function y(r){r.preventDefault();const i=r.target.elements.searchKeyword.value.trim();if(i===""){c.innerHTML="",r.target.reset(),n.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}c.innerHTML="",a.classList.remove("is-hidden"),h(i).then(s=>{s.total===0&&n.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),c.innerHTML=m(s.hits)}).catch(s=>console.log(s)).finally(()=>{r.target.reset(),a.classList.add("is-hidden")})}p.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
