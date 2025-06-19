import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50824035-87dfb0469b0d9be7736d790bf';

export async function getImagesByQuery(query, page = 1, perPage = 15) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: perPage,
    page,
  };

  return await axios.get(BASE_URL, { params }).then(response => response.data);
}
