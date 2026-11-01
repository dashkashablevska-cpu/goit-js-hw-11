import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-container');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  animationSpeed: 250,
  showCounter: true,
});

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function createGallery(images) {
  const markup = images
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
        const description = escapeHTML(tags);

        return `
          <li class="gallery-item">
            <a
              class="gallery-link"
              href="${escapeHTML(largeImageURL)}"
            >
              <img
                class="gallery-image"
                src="${escapeHTML(webformatURL)}"
                alt="${description}"
                loading="lazy"
              />

              <div class="image-info">
                <div class="info-item">
                  <span class="info-label">Likes</span>
                  <span class="info-value">${likes}</span>
                </div>

                <div class="info-item">
                  <span class="info-label">Views</span>
                  <span class="info-value">${views}</span>
                </div>

                <div class="info-item">
                  <span class="info-label">Comments</span>
                  <span class="info-value">${comments}</span>
                </div>

                <div class="info-item">
                  <span class="info-label">Downloads</span>
                  <span class="info-value">${downloads}</span>
                </div>
              </div>
            </a>
          </li>
        `;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
  lightbox.refresh();
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}
