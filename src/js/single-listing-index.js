import { API_BASE_URL } from './api/constants.js';
import { singleListing } from './api/listings/single-listings.js';
import { logout } from './api/auth/logout.js';
import { changeToSignIn } from './listeners/utilities/changeToSignIn.js';
import { displayMessage } from './listeners/utilities/displayMessage.js';

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

const url = `${API_BASE_URL}auction/listings/${id}/?_seller=true&_bids=true`;

singleListing(url);

document.querySelector('#logOutBtn').onclick = function () {
  logout();
};

const profile = JSON.parse(localStorage.getItem('profile'));
if (!profile) {
  changeToSignIn();
  const message = displayMessage(
    'You have to be logged in to bid on auction listings!',
  );
  document.querySelector('form').appendChild(message);
}
