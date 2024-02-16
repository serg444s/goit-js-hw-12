import{i as L,S as b,a as u}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const n={form:document.querySelector(".user-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};function v(){n.loader.classList.remove("hidden")}function m(){n.loader.classList.add("hidden")}const f="Sorry, there are no images matching your search query. Please try again!",S="We're sorry, but you've reached the end of search results.";function d(e){L.error({message:e,position:"topRight"})}let p;function y(e){const o=e.hits.map(w).join("");p=e.totalHits,e.hits.length?(n.galleryList.insertAdjacentHTML("beforeend",o),n.btnLoad.classList.remove("hidden"),new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):d(f)}function w(e){return`<li class="gallery-item">
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
      </li>`}function q(){const e=document.querySelector(".gallery-item");if(e){let o=e.getBoundingClientRect();console.log(o.height),window.scrollBy(0,o.height*2)}}const g=15;let i=1,c;async function $(e){e.preventDefault(),n.btnLoad.classList.add("hidden"),n.galleryList.innerHTML="",i=1,c=e.target.elements.input.value.trim();try{const o=await h(c);return y(o)}catch{d(f)}finally{m(),n.form.reset()}}async function h(e){v();const o="42220995-e7901b62efa710cae16c4a0a7";u.defaults.baseURL="https://pixabay.com/api/";const s=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,a=`?key=${o}&${s}`,t={params:{per_page:g,page:i}};return(await u.get(a,t)).data}async function I(){i+=1;const e=Math.ceil(p/g);if(i>e)n.btnLoad.classList.add("hidden"),d(S);else{const o=await h(c),s=y(o);return m(),s}}n.form.addEventListener("submit",$);n.btnLoad.addEventListener("click",I);document.addEventListener("scroll",q);
//# sourceMappingURL=commonHelpers.js.map
