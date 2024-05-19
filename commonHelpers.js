import{S as h,i as c}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="43948978-860dfecfaa788bc4b5c828749",p="https://pixabay.com/api/",y=(r="pug")=>{const s=new URLSearchParams({key:f,query:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${s}`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})};let m;const u=r=>r.map(({webformatURL:s,largeImageURL:i,tags:l,likes:e,views:t,comments:o,downloads:d})=>`
            <li class="item-list">
            <a href="${i}" class="item-list-link">
            <img class="item-list-img"  height="152"
            width="300" src="${s}" alt="${l}">
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
            <p class="item-list-text">${d}</p>
            </div>
            </div>
            </li>
            `).join("");m=new h(".item-list-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});m.refresh();console.log("🚀 ~ createMarkupItem ~ createMarkupItem:",u);const g=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery"),n=document.querySelector(".js-loader");function L(r){r.preventDefault();const s=r.target.elements.searchKeyword.value.trim();if(s===""){a.innerHTML="",r.target.reset(),c.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}a.innerHTML="",n.classList.remove("is-hidden"),y(s).then(i=>{i.total===0&&c.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),a.innerHTML=u(i.hits)}).catch(i=>console.log(i)).finally(()=>{r.target.reset(),n.classList.add("is-hidden")})}g.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
