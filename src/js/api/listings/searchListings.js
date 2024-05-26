import { API_BASE_URL } from '../constants.js';
import { showListings } from '../../views/listingsPage.js';
import { checkButtons } from '../../listeners/utilities/pageButtons.js';
import { displayMessage } from '../../listeners/utilities/displayMessage.js';

export async function searchListing(limit = 18, page = 1, searchValue) {
  const response = await fetch(
    `${API_BASE_URL}auction/listings/search?q=${searchValue}&sort=endsAt&sortOrder=asc&_active=true&limit=${limit}&page=${page}&_bids=true`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  const json = await response.json();

  if (response.ok) {
    if (json.data.length === 0) {
      const message = displayMessage('No listings found!');
      document.querySelector('#listingsContainer').textContent = '';
      document.querySelector('#listingsContainer').appendChild(message);
      return json;
    }
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
