import{S as d,i as a}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="43173042-04092544e8d4f8f0c3df25e51",h="https://pixabay.com/api/",p=(r="pug")=>{const i=new URLSearchParams({key:f,query:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${i}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})};let n;const y=r=>{r.map(({webformatURL:i,largeImageURL:s,tags:l,likes:e,views:t,comments:o,downloads:u})=>`
        <li class="item-list">
        <a href="${s}" class="item-list-link">
        <img class="item-list-img" src="${i}" alt="${l}">
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
            `).join(""),n=new d(".item-list-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),n.refresh()},g=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),m=document.querySelector(".js-loader");function L(r){r.preventDefault();const i=r.target.elements.searchKeyword.value.trim();if(i===""){c.innerHTML="",r.target.reset(),a.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}c.innerHTML="",m.classList.remove("is-hidden"),p(i).then(s=>{s.total===0&&a.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),c.innerHTML=y(s.results)}).catch(s=>console.log(s)).finally(()=>{r.target.reset(),m.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
