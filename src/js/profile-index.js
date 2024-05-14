import { getUserProfile } from './api/profile/getUserProfile.js';
import { getUserListings } from './api/profile/getUserListings.js';
import { logout } from './api/auth/logout.js';
import { checkIfLoggedIn } from './listeners/utilities/checkProfileLogIn.js';

const check = checkIfLoggedIn('profile');

if (check) {
  getUserProfile();
  getUserListings();
}

document.querySelector('#logOutBtn').onclick = function () {
  logout();
};
