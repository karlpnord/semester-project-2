import { timeUntilDeadline } from '../listeners/utilities/endsAt.js';

export function renderSingleListing(data) {
  document.querySelector('#listingContent').classList.remove('d-none');
  document.querySelector('.loader').classList.add('d-none');

  document.querySelector('#listingTitle').textContent = data.title;
  document.querySelector('#listingDesc').textContent = data.description;
  document.querySelector('#listingImg').src = data.media[0].url;
  document.querySelector('#listingDate').textContent = timeUntilDeadline(
    data.endsAt,
  );
}
