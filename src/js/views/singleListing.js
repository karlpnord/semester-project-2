import { timeUntilDeadline } from '../listeners/utilities/endsAt.js';
import { displayMessage } from '../listeners/utilities/displayMessage.js';
import { findHighestBid } from '../listeners/utilities/highestBid.js';

export function renderSingleListing(data) {
  document.querySelector('#listingContent').classList.remove('d-none');
  document.querySelector('.loader').classList.add('d-none');

  document.querySelector('#listingTitle').textContent = data.title;
  document.querySelector('#listingDesc').textContent = data.description;

  const image = document.querySelector('#listingImg');
  if (!data.media[0]) {
    image.src = '../../images/card-sample-image.png';
  } else {
    image.src = data.media[0].url;
  }

  document.querySelector('#listingDate').textContent = timeUntilDeadline(
    data.endsAt,
  );

  if (timeUntilDeadline(data.endsAt) === 'Listing expired') {
    const message = displayMessage(
      'Listing has expired and cannot be bid on anymore!',
    );
    document.querySelector('#bidAmountInput').disabled = true;
    document.querySelector('form').appendChild(message);
  }

  const bid = findHighestBid(data.bids);
  document.querySelector('#highestBid').textContent = ' ' + bid;
}
