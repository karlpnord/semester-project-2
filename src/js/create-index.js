import { createListingListener } from './listeners/listings/createListing.js';
import { checkIfLoggedIn } from './listeners/utilities/checkProfileLogIn.js';
import { logout } from './api/auth/logout.js';

const check = checkIfLoggedIn('create');
if (check) {
  createListingListener();
}

document.querySelector('#logOutBtn').onclick = function () {
  logout();
};
