import{i as u,S as d,a as l}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const n={form:document.querySelector(".user-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader")};function m(){n.loader.classList.remove("hidden")}function f(){n.loader.classList.add("hidden")}const p="Sorry, there are no images matching your search query. Please try again!";function c(){u.error({message:p,position:"topRight"})}function y(t){const o=t.hits.map(g).join("");t.hits.length?(n.galleryList.innerHTML=o,new d(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()):c()}function g(t){return`<li class="gallery-item">
        <a href="${t.largeImageURL}" class="gallery-link">
          <img
            src="${t.webformatURL}"
            class="gallery-image"
            alt="${t.tags}"
          />
        </a>
        <div class="modat-text">
        
            <div class="modal-element"><p>Likes</p><span>${t.likes}</span></div>
            <div class="modal-element"><p>Views</p><span>${t.views}</span></div>
            <div class="modal-element"><p>Comments</p><span>${t.comments}</span></div>
            <div class="modal-element"><p>Downloads</p><span>${t.downloads}</span></div>
        </div>
      </li>`}function h(t){t.preventDefault(),m(),n.galleryList.innerHTML="";const o=t.currentTarget.elements.input.value.trim();L(o).then(y).catch(c).finally(f),n.form.reset()}function L(t){const o="42220995-e7901b62efa710cae16c4a0a7";l.defaults.baseURL="https://pixabay.com/api/";const s=`q=${t}&image_type=photo&orientation=horizontal&safesearch=true`,a=`?key=${o}&${s}`;let e=1;return console.log(e),l.get(a,{params:{per_page:15,page:e,_limit:15}}).then(r=>r.data)}n.form.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
