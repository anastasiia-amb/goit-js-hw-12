import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';
let currentPage = 1;
const perPage = 15;

form.addEventListener('submit', formSubmit);
loadMoreBtn.addEventListener('click', handleClick);

async function formSubmit(event) {
  event.preventDefault();

  const searchImage = formInput.value.trim();

  if (searchImage === '') {
    return iziToast.warning({
      message: 'Please, fill in the field',
      position: 'topRight',
      timeout: 3000,
    });
  }
  currentQuery = searchImage;
  currentPage = 1;
  clearGallery();
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage, perPage);

    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, no images found. Please try again!',
        position: 'topRight',
        color: 'red',
      });
      return;
    }
    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / perPage);
    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: 'All images loaded.',
        position: 'topRight',
        color: 'yellow',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong!',
      position: 'topRight',
      color: 'blue',
    });
  } finally {
    hideLoader();
  }
}

async function handleClick() {
  currentPage += 1;
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage, perPage);
    createGallery(data.hits);

    const { height: imageHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: imageHeight * 2,
      behavior: 'smooth',
    });

    const totalPages = Math.ceil(data.totalHits / perPage);
    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        color: 'yellow',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong!',
      position: 'topRight',
      color: 'red',
    });
  } finally {
    hideLoader();
  }
}
