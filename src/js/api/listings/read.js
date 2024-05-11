import { API_BASE_URL } from '../../api/constants.js';
import { showListings } from '../../views/listingsPage.js';

export async function getListings(limit = 30, page = 1) {
  const response = await fetch(
    `${API_BASE_URL}auction/listings?sort=endsAt&sortOrder=asc&_active=true&limit=${limit}&page=${page}&_bids=true`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const json = await response.json();

  if (response.ok) {
    console.log(json.data);
    console.log(json.meta);
    showListings(json.data);
    return json;
  }
}
