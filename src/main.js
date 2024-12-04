import { searchImages } from './js/pixabay-api';

const form = document.querySelector('form');
const input = form.querySelector('input');
form.addEventListener('submit', handleSubmit);
const gallery = document.querySelector('.gallery-list');

const loader = document.querySelector('.loader');

function handleSubmit(event) {
  event.preventDefault();
  const inputValue = input.value.trim();

  clearGallery();
  showLoading();

  searchImages(inputValue);
}

function clearGallery() {
  const gallery = document.querySelector('.gallery-list');
  if (gallery) {
    gallery.innerHTML = '';
  }
}

function showLoading() {
  if (gallery) {
    loader.classList.remove('is-hidden');
  }
}
