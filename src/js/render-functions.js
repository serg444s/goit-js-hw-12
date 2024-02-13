import { refs } from './refs';
import { onError } from './iziToasts';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImg } from './pixabay-api';
import { loaderOn } from './loader';
import { loaderOff } from './loader';

export function onFormSubmit(event) {
  event.preventDefault();
  loaderOn();
  refs.galleryList.innerHTML = '';

  const userSearch = event.currentTarget.elements.input.value.trim();
  fetchImg(userSearch).then(makeGalleryItem).catch(onError).finally(loaderOff);
  refs.form.reset();
}

export function makeGalleryItem(response) {
  const result = response.hits.map(makeMarcup).join('');

  if (response.hits.length) {
    refs.galleryList.innerHTML = result;
    let lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
    lightbox.refresh();
  } else {
    onError();
  }
}

export function makeMarcup(image) {
  return `<li class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-link">
          <img
            src="${image.webformatURL}"
            class="gallery-image"
            alt="${image.tags}"
          />
        </a>
        <div class="modat-text">
        
            <div class="modal-element"><p>Likes</p><span>${image.likes}</span></div>
            <div class="modal-element"><p>Views</p><span>${image.views}</span></div>
            <div class="modal-element"><p>Comments</p><span>${image.comments}</span></div>
            <div class="modal-element"><p>Downloads</p><span>${image.downloads}</span></div>
        </div>
      </li>`;
}
