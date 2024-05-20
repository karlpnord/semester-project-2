import { searchListing } from '../../api/listings/searchListings.js';

export function searchListingsListener() {
  const form = document.querySelector('#searchForm');
  form.addEventListener('submit', () => {
    event.preventDefault();
    const searchValue = document.querySelector('#searchInput').value;
    searchListing(18, 1, searchValue);
  });
}
