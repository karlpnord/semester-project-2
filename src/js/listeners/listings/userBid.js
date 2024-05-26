import { API_BASE_URL } from '../../api/constants.js';
import { checkboxChecked } from '../utilities/checkbox.js';
import { userBid } from '../../api/listings/userBid.js';

export function userBidListener(listingId) {
  const url = `${API_BASE_URL}auction/listings/${listingId}/bids`;
  checkboxChecked();
  const form = document.querySelector('#bidForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const amountInput = document.querySelector('#bidAmountInput').value;

    const inputData = {
      amount: parseInt(amountInput),
    };
    userBid(url, inputData);
  });
}
