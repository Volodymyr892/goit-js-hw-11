const API_KEY = ;
const BASE_URL = ;

export const fetchPhotosByQuery = (query = 'pug') => {
  const searchParams = new URLSearchParams({
    key: '43803497-a801e9cfe7ea9bdd19d306bb3',
    q: input.value,
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