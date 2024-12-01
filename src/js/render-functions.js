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
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
            <p><b>Likes:</b> ${likes}</p>
            <p><b>Views:</b> ${views}</p>
            <p><b>Comments:</b> ${comments}</p>
            <p><b>Downloads:</b> ${downloads}</p>
          </div>
      </li>`;
      }
    )
    .join('');

  gallery.innerHTML = markup;
}
