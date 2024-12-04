import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './render-functions.js';

export function searchImages(searchWord) {
  const API_KEY = '47381737-77b313e1304caa98d6d0e16f2';

  if (!searchWord.trim()) {
    iziToast.warning({
      title: 'Caution',
      position: 'topRight',
      backgroundColor: '#FF0000',
      message: 'Please enter a search word!',
    });
    return;
  }
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      hideLoading();
      console.log('data.hits', data.hits);

      if (data.hits.length === 0) {
        iziToast.show({
          title: 'No results',
          position: 'topRight',
          backgroundColor: '#cd0d0d',
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
        });
        return;
      }

      createMarkup(data.hits);
      initializeLightbox();
    })
    .catch(error => {
      hideLoading();
      console.log(error.message);
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        backgroundColor: '#cd0d0d',
        message: `${error.message}`,
      });
    });
}

function initializeLightbox() {
  let lightbox = new SimpleLightbox('.gallery-list a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.8,
  });
}

function hideLoading() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('is-hidden');
  }
}
