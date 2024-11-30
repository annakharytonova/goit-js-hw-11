// render-functions.js

// // Функція для рендерингу картинок у галерею
// export const renderImages = images => {
//   const gallery = document.querySelector('.gallery');
//   gallery.innerHTML = ''; // Очищаємо галерею перед рендерингом нових картинок

//   images.forEach(image => {
//     const imageElement = document.createElement('img');
//     imageElement.src = image.webformatURL;
//     imageElement.alt = image.tags;
//     imageElement.classList.add('gallery-item');
//     gallery.appendChild(imageElement);
//   });
// };

// // Функція для показу повідомлення про помилку
// export const showError = message => {
//   const errorMessage = document.querySelector('.error-message');
//   errorMessage.textContent = message;
//   errorMessage.classList.add('visible');
// };

iziToast.show({
  position: 'bottomRight',
  backgroundColor: '#FF0000',
  position: 'bottomRight',
  message: `Sorry, there are no images matching your search query. Please, try again!`,
});
