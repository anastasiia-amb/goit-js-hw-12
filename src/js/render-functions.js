import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  animationDelay: 250,
  captionPosition: 'bottom',
});

export function createGallery(images) {
  const createMarkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-img" src="${webformatURL}" alt="${tags}" width="300"/>
        <ul class="gallery-desc">
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Likes</h2>
        <p class="gallery-text">${likes}</p>
        </li>
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Views</h2>
        <p class="gallery-text">${views}</p>
        </li>
         <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Comments</h2>
        <p class="gallery-text">${comments}</p>
        </li>
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Downloads</h2>
        <p class="gallery-text">${downloads}</p>
        </li>
        </ul>
        </a>
        </li>
        `
    )
    .join('');

  gallery.innerHTML = createMarkup;
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('load-more-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('load-more-hidden');
}
