import { refs } from './js/refs';
import { onFormSubmit } from './js/pixabay-api';
import { onLoadClick } from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import { scroll } from './js/render-functions';

refs.form.addEventListener('submit', onFormSubmit);

refs.btnLoad.addEventListener('click', onLoadClick);

// document.addEventListener('scroll', scroll);
