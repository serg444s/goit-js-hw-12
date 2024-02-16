import{i as b,S as v,a as f}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const s={form:document.querySelector(".user-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};function S(){s.loader.classList.remove("hidden")}function p(){s.loader.classList.add("hidden")}const y="Sorry, there are no images matching your search query. Please try again!",q="We're sorry, but you've reached the end of search results.",w="Please enter correct information.";function l(e){b.error({message:e,position:"topRight"})}let u,h=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(e){const r=e.hits.map(P).join("");u=e.totalHits,u>m&&s.btnLoad.classList.remove("hidden"),e.hits.length?s.galleryList.insertAdjacentHTML("beforeend",r):l(y),h.refresh()}function P(e){return`<li class="gallery-item">
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
      </li>`}const m=15;let c,i;async function $(e){if(e.preventDefault(),s.btnLoad.classList.add("hidden"),s.galleryList.innerHTML="",c=1,i=e.target.elements.input.value.trim(),i)try{const r=await L(i);return g(r)}catch{l(y)}finally{p(),s.form.reset()}else s.form.elements.input.value="",l(w)}async function L(e){S();const r="42220995-e7901b62efa710cae16c4a0a7";f.defaults.baseURL="https://pixabay.com/api/";const n=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,a=`?key=${r}&${n}`,t={params:{per_page:m,page:c}};return(await f.get(a,t)).data}async function O(){c+=1;const e=Math.ceil(u/m);if(c>=e)s.btnLoad.classList.add("hidden"),l(q);else{const r=await L(i),n=g(r);return p(),h.refresh(),n}}s.form.addEventListener("submit",$);s.btnLoad.addEventListener("click",O);
//# sourceMappingURL=commonHelpers.js.map
