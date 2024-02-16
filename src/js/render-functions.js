import { refs } from './refs';
import { onError } from './iziToasts';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { perPage } from './pixabay-api';
import { MESSAGE } from './iziToasts';

export let totalHits;

export let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function makeGalleryItem(response) {
  const result = response.hits.map(makeMarcup).join('');
  totalHits = response.totalHits;
  if (totalHits > perPage) {
    refs.btnLoad.classList.remove('hidden');
  }
  if (response.hits.length) {
    refs.galleryList.insertAdjacentHTML('beforeend', result);
  } else {
    onError(MESSAGE);
  }

  lightbox.refresh();
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
