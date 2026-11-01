/* empty css                      */import{a as h,S as y,i as l}from"./assets/vendor-CqoLp5UU.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const v="https://pixabay.com/api/",b="YOUR_PIXABAY_API_KEY";function L(n){const o={key:b,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};return h.get(v,{params:o}).then(r=>r.data)}const f=document.querySelector(".gallery"),u=document.querySelector(".loader-container"),p=new y(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",animationSpeed:250,showCounter:!0});function c(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function q(n){const o=n.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:a,comments:d,downloads:m})=>{const g=c(e);return`
          <li class="gallery-item">
            <a
              class="gallery-link"
              href="${c(s)}"
            >
              <img
                class="gallery-image"
                src="${c(r)}"
                alt="${g}"
                loading="lazy"
              />

              <div class="image-info">
                <div class="info-item">
                  <span class="info-label">Likes</span>
                  <span class="info-value">${t}</span>
                </div>

                <div class="info-item">
                  <span class="info-label">Views</span>
                  <span class="info-value">${a}</span>
                </div>

                <div class="info-item">
                  <span class="info-label">Comments</span>
                  <span class="info-value">${d}</span>
                </div>

                <div class="info-item">
                  <span class="info-label">Downloads</span>
                  <span class="info-value">${m}</span>
                </div>
              </div>
            </a>
          </li>
        `}).join("");f.insertAdjacentHTML("beforeend",o),p.refresh()}function S(){f.innerHTML="",p.refresh()}function P(){u.classList.remove("is-hidden")}function C(){u.classList.add("is-hidden")}const O=document.querySelector(".form"),I=document.querySelector(".search-input");let i=0;O.addEventListener("submit",w);function w(n){n.preventDefault();const o=I.value.trim();if(o===""){l.warning({message:"Please enter a search query!",position:"topRight",color:"orange"});return}const r=++i;S(),P(),L(o).then(s=>{if(r===i){if(s.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",iconColor:"#ffffff",closeOnClick:!0,timeout:5e3});return}q(s.hits)}}).catch(()=>{r===i&&l.error({message:"Unable to load images. Please check your connection and try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",iconColor:"#ffffff",closeOnClick:!0,timeout:5e3})}).finally(()=>{r===i&&C()})}
//# sourceMappingURL=index.js.map
