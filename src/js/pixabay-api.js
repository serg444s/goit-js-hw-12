import { refs } from './refs';
import { loaderOn } from './loader';
import { loaderOff } from './loader';
import { makeGalleryItem } from './render-functions';
import { onError } from './iziToasts';
import axios from 'axios';

let count = 1;

export async function onFormSubmit(event) {
  event.preventDefault();
  loaderOn();
  refs.galleryList.innerHTML = '';
  const userSearch = event.currentTarget.elements.input.value.trim();
  try {
    const result = await fetchImg(userSearch);
    const item = await makeGalleryItem(result);
    return item;
  } catch (error) {
    onError;
  } finally {
    loaderOff();
    refs.form.reset();
  }
}

export async function fetchImg(input) {
  const API_KEY = '42220995-e7901b62efa710cae16c4a0a7';
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const parameters = `q=${input}&image_type=photo&orientation=horizontal&safesearch=true`;
  const URL = `?key=${API_KEY}&${parameters}`;

  const response = await axios.get(URL, {
    params: {
      per_page: 15,
      page: count,
      _limit: 15,
    },
  });

  return response.data;
}
