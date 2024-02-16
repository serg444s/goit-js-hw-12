import{i as L,S as b,a as f}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const s={form:document.querySelector(".user-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};function v(){s.loader.classList.remove("hidden")}function p(){s.loader.classList.add("hidden")}const y="Sorry, there are no images matching your search query. Please try again!",S="We're sorry, but you've reached the end of search results.";function u(e){L.error({message:e,position:"topRight"})}let c;function h(e){const o=e.hits.map(q).join("");c=e.totalHits,c>m&&s.btnLoad.classList.remove("hidden"),e.hits.length?(s.galleryList.insertAdjacentHTML("beforeend",o),new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):u(y)}function q(e){return`<li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
          <img
            src="${e.webformatURL}"
            class="gallery-image"
            alt="${e.tags}"
          />
        </a>
        <div class="modat-text">
        
            <div class="modal-element"><p>Likes</p><span>${e.likes}</span></div>
            <div class="modal-element"><p>Views</p><span>${e.views}</span></div>
            <div class="modal-element"><p>Comments</p><span>${e.comments}</span></div>
            <div class="modal-element"><p>Downloads</p><span>${e.downloads}</span></div>
        </div>
      </li>`}const m=15;let i=1,d;async function w(e){e.preventDefault(),s.btnLoad.classList.add("hidden"),s.galleryList.innerHTML="",i=1,d=e.target.elements.input.value.trim();try{const o=await g(d);return h(o)}catch{u(y)}finally{p(),s.form.reset()}}async function g(e){v();const o="42220995-e7901b62efa710cae16c4a0a7";f.defaults.baseURL="https://pixabay.com/api/";const n=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,a=`?key=${o}&${n}`,t={params:{per_page:m,page:i}};return(await f.get(a,t)).data}async function $(){i+=1;const e=Math.ceil(c/m);if(i>e)s.btnLoad.classList.add("hidden"),u(S);else{const o=await g(d),n=h(o);return p(),n}}s.form.addEventListener("submit",w);s.btnLoad.addEventListener("click",$);
//# sourceMappingURL=commonHelpers.js.map
