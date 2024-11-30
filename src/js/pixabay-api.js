import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function searchImages(searchWord) {
  const API_KEY = '47381737-77b313e1304caa98d6d0e16f2';

  if (!searchWord) {
    iziToast.warning({
      title: 'Caution',
      position: 'bottomRight',
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
      console.log(response);

      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}
