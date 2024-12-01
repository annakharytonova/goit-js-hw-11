import { searchImages } from './js/pixabay-api';

const form = document.querySelector('form');
const input = form.querySelector('input');
form.addEventListener('submit', handleSubmit);
const gallery = document.querySelector('.gallery-list');

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
    gallery.innerHTML = '<p class="loading">Loading images, please wait...</p>';
  }
}
