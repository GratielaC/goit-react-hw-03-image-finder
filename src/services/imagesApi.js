import axios from 'axios';

const apiKey = '47560942-b54dc62ba92e3f3e1c57b8e2c';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=20`;
  const response = await axios.get(url);
  return response.data;
}