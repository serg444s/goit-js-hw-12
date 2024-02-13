import { refs } from './refs';
import { loaderOn } from './loader';
import { loaderOff } from './loader';
import { makeGalleryItem } from './render-functions';
import { onError } from './iziToasts';
import axios from 'axios';
import { MESSAGE } from './iziToasts';

let page = 1;
export let perPage = 15;

export async function onFormSubmit(event) {
  event.preventDefault();
  loaderOn();
  refs.galleryList.innerHTML = '';
  const userSearch = event.currentTarget.elements.input.value.trim();
  try {
    const result = await fetchImg(userSearch);
    const item = makeGalleryItem(result);
    page += 1;
    console.log(page);
    return item;
  } catch (error) {
    onError(MESSAGE);
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

  const config = {
    params: {
      per_page: perPage,
      page: page,
    },
  };

  const response = await axios.get(URL, config);

  return response.data;
}

// if (parseInt(data.totalHits) > 0)
//     { console.log(hit.pageURL) }
// else
//     console.log('No hits');
