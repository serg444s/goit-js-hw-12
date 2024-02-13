import{i as f,S as p,a as d}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const n={form:document.querySelector(".user-form"),formInput:document.querySelector(".form-input"),btn:document.querySelector(".form-button"),galleryList:document.querySelector(".gallery"),container:document.querySelector(".container"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};function y(){n.loader.classList.remove("hidden")}function g(){n.loader.classList.add("hidden")}const u="Sorry, there are no images matching your search query. Please try again!",h="We're sorry, but you've reached the end of search results.";function l(e){f.error({message:e,position:"topRight"})}function L(e){const o=e.hits.map(b).join(""),s=Math.ceil(e.totalHits/m);e.hits.length?(n.galleryList.insertAdjacentHTML("beforeend",o),n.btnLoad.classList.remove("hidden"),new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh(),page>s&&l(h)):l(u)}function b(e){return`<li class="gallery-item">
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
      </li>`}let c=1,m=15;async function v(e){e.preventDefault(),y(),n.galleryList.innerHTML="";const o=e.currentTarget.elements.input.value.trim();try{const s=await S(o),a=L(s);return c+=1,console.log(c),a}catch{l(u)}finally{g(),n.form.reset()}}async function S(e){const o="42220995-e7901b62efa710cae16c4a0a7";d.defaults.baseURL="https://pixabay.com/api/";const s=`q=${e}&image_type=photo&orientation=horizontal&safesearch=true`,a=`?key=${o}&${s}`,t={params:{per_page:m,page:c}};return(await d.get(a,t)).data}n.form.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
