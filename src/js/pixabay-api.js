const API_KEY = '43173042-04092544e8d4f8f0c3df25e51';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotosByQuery = (query = 'pug') => {
  const searchParams = new URLSearchParams({
    key: API_KEY ,
    query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};