import{i as L,S as b,a as u}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const s={form:document.querySelector(".user-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};function v(){s.loader.classList.remove("hidden")}function m(){s.loader.classList.add("hidden")}const f="Sorry, there are no images matching your search query. Please try again!",S="We're sorry, but you've reached the end of search results.";function d(e){L.error({message:e,position:"topRight"})}let p;function y(e){const o=e.hits.map(q).join("");p=e.totalHits,e.hits.length?(s.galleryList.insertAdjacentHTML("beforeend",o),s.btnLoad.classList.remove("hidden"),new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):d(f)}function q(e){return`<li class="gallery-item">
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
      </li>`}const h=15;let i=1,c;async function w(e){e.preventDefault(),s.btnLoad.classList.add("hidden"),s.galleryList.innerHTML="",i=1,c=e.target.elements.input.value.trim();try{const o=await g(c);return y(o)}catch{d(f)}finally{m(),s.form.reset()}}async function g(e){v();const o="42220995-e7901b62efa710cae16c4a0a7";u.defaults.baseURL="https://pixabay.com/api/";const n=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,a=`?key=${o}&${n}`,t={params:{per_page:h,page:i}};return(await u.get(a,t)).data}async function $(){i+=1;const e=Math.ceil(p/h);if(i>e)s.btnLoad.classList.add("hidden"),d(S);else{const o=await g(c),n=y(o);return m(),n}}s.form.addEventListener("submit",w);s.btnLoad.addEventListener("click",$);
//# sourceMappingURL=commonHelpers.js.map
