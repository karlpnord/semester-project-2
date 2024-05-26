import { API_BASE_URL } from '../../api/constants.js';
import { showListings } from '../../views/listingsPage.js';
import { checkButtons } from '../../listeners/utilities/pageButtons.js';

export async function getListings(limit = 18, page = 1) {
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
    showListings(json.data);
    checkButtons(json.meta);
    localStorage.setItem('pageInfo', JSON.stringify(json.meta));
    document.querySelector('#currentPage').textContent =
      `Page ${json.meta.currentPage} of ${json.meta.pageCount}`;
    return json;
  }
  document.querySelector('.error-container').textContent =
    json.errors[0].message;
}
