import { API_BASE_URL } from '../../api/constants.js';

export async function getListings(limit = 20, page = 5) {
  const response = await fetch(
    `${API_BASE_URL}auction/listings?limit=${limit}&page=${page}&_active=true`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const json = await response.json();

  if (response.ok) {
    console.log(json);
    return json;
  }
}
