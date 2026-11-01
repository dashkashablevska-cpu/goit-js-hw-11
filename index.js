/* empty css                      */import{a as b,S as v,i}from"./assets/vendor-CqoLp5UU.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const L="https://pixabay.com/api/",S="PASTE_YOUR_REAL_PIXABAY_KEY_HERE";function q(r){const o={key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};return b.get(L,{params:o}).then(s=>s.data)}const u=document.querySelector(".gallery"),d=document.querySelector(".loader-container"),p=new v(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",animationSpeed:250,showCounter:!0});function l(r){return String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function P(r){const o=r.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:a,comments:g,downloads:h})=>{const y=l(e);return`
          <li class="gallery-item">
            <a
              class="gallery-link"
              href="${l(n)}"
            >
              <img
                class="gallery-image"
                src="${l(s)}"
                alt="${y}"
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
                  <span class="info-value">${g}</span>
                </div>

                <div class="info-item">
                  <span class="info-label">Downloads</span>
                  <span class="info-value">${h}</span>
                </div>
              </div>
            </a>
          </li>
        `}).join("");u.insertAdjacentHTML("beforeend",o),p.refresh()}function C(){u.innerHTML="",p.refresh()}function E(){d.classList.remove("is-hidden")}function O(){d.classList.add("is-hidden")}const m=document.querySelector(".form"),c=document.querySelector(".search-input"),f=m.querySelector('button[type="submit"]');m.addEventListener("submit",_);function _(r){r.preventDefault();const o=c.value.trim();if(o===""){i.warning({message:"Please enter a search query!",position:"topRight",color:"orange"});return}C(),E(),f.disabled=!0,c.disabled=!0,q(o).then(s=>{if(s.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",iconColor:"#ffffff",closeOnClick:!0,timeout:5e3});return}P(s.hits)}).catch(()=>{i.error({message:"Unable to load images. Please check your connection and try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",iconColor:"#ffffff",closeOnClick:!0,timeout:5e3})}).finally(()=>{O(),f.disabled=!1,c.disabled=!1})}
//# sourceMappingURL=index.js.map
