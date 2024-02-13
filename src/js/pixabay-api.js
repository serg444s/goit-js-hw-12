import { refs } from './refs';
import { loaderOn } from './loader';
import { loaderOff } from './loader';
import { makeGalleryItem } from './render-functions';
import { onError } from './iziToasts';
import axios from 'axios';

export function onFormSubmit(event) {
  event.preventDefault();
  loaderOn();
  refs.galleryList.innerHTML = '';

  const userSearch = event.currentTarget.elements.input.value.trim();
  fetchImg(userSearch).then(makeGalleryItem).catch(onError).finally(loaderOff);
  refs.form.reset();
}

export function fetchImg(input) {
  const API_KEY = '42220995-e7901b62efa710cae16c4a0a7';
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const parameters = `q=${input}&image_type=photo&orientation=horizontal&safesearch=true`;
  const URL = `?key=${API_KEY}&${parameters}`;
  let count = 1;
  console.log(count);

  return axios
    .get(URL, {
      params: {
        per_page: 15,
        page: count,
        _limit: 15,
      },
    })
    .then(response => {
      return response.data;
    });
}
