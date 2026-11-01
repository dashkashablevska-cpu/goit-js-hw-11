import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50211368-d1aa9070356270e914db47fc3';

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
