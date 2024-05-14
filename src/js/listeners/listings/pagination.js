import { getListings } from '../../api/listings/read.js';

export function pagination() {
  const data = JSON.parse(localStorage.getItem('pageInfo'));

  if (event.currentTarget.dataset.value === 'next') {
    getListings(18, data.nextPage);
  } else {
    getListings(18, data.previousPage);
  }

  scroll(0, 0);
  localStorage.removeItem('pageInfo');
}
