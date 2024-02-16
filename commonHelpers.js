import{i as L,S as b,a as f}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const s={form:document.querySelector(".user-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};function v(){s.loader.classList.remove("hidden")}function p(){s.loader.classList.add("hidden")}const y="Sorry, there are no images matching your search query. Please try again!",S="We're sorry, but you've reached the end of search results.",q="Please enter correct information.";function l(e){L.error({message:e,position:"topRight"})}let u;function h(e){const o=e.hits.map(w).join("");u=e.totalHits,u>m&&s.btnLoad.classList.remove("hidden"),e.hits.length?(s.galleryList.insertAdjacentHTML("beforeend",o),new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):l(y)}function w(e){return`<li class="gallery-item">
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
      </li>`}const m=15;let c=1,i;async function P(e){if(e.preventDefault(),s.btnLoad.classList.add("hidden"),s.galleryList.innerHTML="",c=1,i=e.target.elements.input.value.trim(),i)try{const o=await g(i);return h(o)}catch{l(y)}finally{p(),s.form.reset()}else s.form.elements.input.value="",l(q)}async function g(e){v();const o="42220995-e7901b62efa710cae16c4a0a7";f.defaults.baseURL="https://pixabay.com/api/";const n=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,a=`?key=${o}&${n}`,t={params:{per_page:m,page:c}};return(await f.get(a,t)).data}async function $(){c+=1;const e=Math.ceil(u/m);if(c>e)s.btnLoad.classList.add("hidden"),l(S);else{const o=await g(i),n=h(o);return p(),n}}s.form.addEventListener("submit",P);s.btnLoad.addEventListener("click",$);
//# sourceMappingURL=commonHelpers.js.map
