export function createMarkup(arr) {
  const gallery = document.querySelector('.gallery-list');
  if (!gallery) {
    console.error('Gallery element not found in the DOM.');
    return;
  }
  gallery.innerHTML = '';

  const markup = arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" width="360px" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <h4>Likes:</h4>
            <p>${likes}</p>
          </div>
          <div class="info-item">
            <h4>Views:</h4>
            <p>${views}</p>
          </div>
          <div class="info-item">
            <h4>Comments:</h4>
            <p>${comments}</p>
          </div>
          <div class="info-item">
            <h4>Downloads:</h4>
            <p>${downloads}</p>
          </div>
        </div>
      </li>`;
      }
    )
    .join('');

  gallery.innerHTML = markup;
}
