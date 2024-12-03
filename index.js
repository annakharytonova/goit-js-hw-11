import{i as a,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();function p(o){const r=document.querySelector(".gallery-list");if(!r){console.error("Gallery element not found in the DOM.");return}r.innerHTML="";const n=o.map(({webformatURL:t,largeImageURL:e,tags:i,likes:s,views:u,comments:d,downloads:f})=>`<li class="gallery-item">
        <a href="${e}" class="gallery-link">
          <img src="${t}" alt="${i}" width="360px" loading="lazy" />
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
      </li>`).join("");r.innerHTML=n}function h(o){const r="47381737-77b313e1304caa98d6d0e16f2";if(!o.trim()){a.warning({title:"Caution",position:"bottomRight",backgroundColor:"#FF0000",message:"Please enter a search word!"});return}const n=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${n}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}).then(t=>{if(console.log("data.hits",t.hits),p(t.hits),g(),t.hits.length===0){a.show({title:"No results",position:"topRight",backgroundColor:"#cd0d0d",message:"Sorry, there are no images matching your search query. Please, try again!"});return}}).catch(t=>{console.log(t.message)})}function g(){new m(".gallery-list a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8})}const c=document.querySelector("form"),y=c.querySelector("input");c.addEventListener("submit",v);const l=document.querySelector(".gallery-list");function v(o){o.preventDefault();const r=y.value.trim();L(),w(),h(r)}function L(){const o=document.querySelector(".gallery-list");o&&(o.innerHTML="")}function w(){l&&(l.innerHTML='<p class="loading">Loading images, please wait...</p>')}
//# sourceMappingURL=index.js.map
