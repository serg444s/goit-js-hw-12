import{i as c,S as u,a as l}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const n={form:document.querySelector(".user-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader")};function d(){n.loader.classList.remove("hidden")}function m(){n.loader.classList.add("hidden")}const p="Sorry, there are no images matching your search query. Please try again!";function f(){c.error({message:p,position:"topRight"})}function y(e){const o=e.hits.map(g).join("");e.hits.length?(n.galleryList.innerHTML=o,new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):f()}function g(e){return`<li class="gallery-item">
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
      </li>`}let h=1;async function L(e){e.preventDefault(),d(),n.galleryList.innerHTML="";const o=e.currentTarget.elements.input.value.trim();try{const s=await v(o);return await y(s)}catch{}finally{m(),n.form.reset()}}async function v(e){const o="42220995-e7901b62efa710cae16c4a0a7";l.defaults.baseURL="https://pixabay.com/api/";const s=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,a=`?key=${o}&${s}`;return(await l.get(a,{params:{per_page:15,page:h,_limit:15}})).data}n.form.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
