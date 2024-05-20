import { createListingListener } from './listeners/listings/createListing.js';
import { checkIfLoggedIn } from './listeners/utilities/checkProfileLogIn.js';
import { logout } from './api/auth/logout.js';
import { changeToSignIn } from './listeners/utilities/changeToSignIn.js';
import { footerUserData } from './listeners/utilities/footerUserData.js';

const check = checkIfLoggedIn('create');
if (check) {
  createListingListener();
} else {
  changeToSignIn();
}

footerUserData();

document.querySelector('#logOutBtn').onclick = function () {
  logout();
};
