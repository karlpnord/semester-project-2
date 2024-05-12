import { getListings } from './read.js';

export function locatePage() {
  const data = JSON.parse(localStorage.getItem('pageInfo'));

  if (event.currentTarget.dataset.value === 'next') {
    getListings(30, data.nextPage);
  } else {
    getListings(30, data.previousPage);
  }

  scroll(0, 0);
  localStorage.removeItem('pageInfo');
}
