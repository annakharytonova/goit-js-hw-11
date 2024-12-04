import{i as a,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function h(o){const i=document.querySelector(".gallery-list");if(!i){console.error("Gallery element not found in the DOM.");return}i.innerHTML="";const n=o.map(({webformatURL:t,largeImageURL:e,tags:r,likes:s,views:u,comments:d,downloads:f})=>`<li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${t}" alt="${r}" width="360px" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <h4>Likes:</h4>
            <p>${s}</p>
          </div>
          <div class="info-item">
            <h4>Views:</h4>
            <p>${u}</p>
          </div>
          <div class="info-item">
            <h4>Comments:</h4>
            <p>${d}</p>
          </div>
          <div class="info-item">
            <h4>Downloads:</h4>
            <p>${f}</p>
          </div>
        </div>
      </li>`).join("");i.innerHTML=n}function p(o){const i="47381737-77b313e1304caa98d6d0e16f2";if(!o.trim()){a.warning({title:"Caution",position:"topRight",backgroundColor:"#FF0000",message:"Please enter a search word!"});return}const n=new URLSearchParams({key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${n}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{if(l(),console.log("data.hits",t.hits),t.hits.length===0){a.show({title:"No results",position:"topRight",backgroundColor:"#cd0d0d",message:"Sorry, there are no images matching your search query. Please, try again!"});return}h(t.hits),g()}).catch(t=>{l(),console.log(t.message),a.error({title:"Error",position:"topRight",backgroundColor:"#cd0d0d",message:`${t.message}`})})}function g(){new m(".gallery-list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8})}function l(){const o=document.querySelector(".loader");o&&o.classList.add("is-hidden")}const c=document.querySelector("form"),y=c.querySelector("input");c.addEventListener("submit",S);const v=document.querySelector(".gallery-list"),L=document.querySelector(".loader");function S(o){o.preventDefault();const i=y.value.trim();b(),w(),p(i)}function b(){const o=document.querySelector(".gallery-list");o&&(o.innerHTML="")}function w(){v&&L.classList.remove("is-hidden")}
//# sourceMappingURL=index.js.map
