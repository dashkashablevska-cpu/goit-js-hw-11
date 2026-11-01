import './css/styles.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const searchInput = document.querySelector('.search-input');

let activeRequestId = 0;

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (query === '') {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
      color: 'orange',
    });

    return;
  }

  const currentRequestId = ++activeRequestId;

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (currentRequestId !== activeRequestId) {
        return;
      }

      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          messageColor: '#ffffff',
          iconColor: '#ffffff',
          closeOnClick: true,
          timeout: 5000,
        });

        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      if (currentRequestId !== activeRequestId) {
        return;
      }

      iziToast.error({
        message:
          'Unable to load images. Please check your connection and try again!',
        position: 'topRight',
        backgroundColor: '#ef4040',
        messageColor: '#ffffff',
        iconColor: '#ffffff',
        closeOnClick: true,
        timeout: 5000,
      });
    })
    .finally(() => {
      if (currentRequestId === activeRequestId) {
        hideLoader();
      }
    });
}
