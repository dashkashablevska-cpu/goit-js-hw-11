import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'PASTE_YOUR_REAL_PIXABAY_KEY_HERE';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}
