import { getUserProfile } from './api/profile/getUserProfile.js';
import { getUserListings } from './api/profile/getUserListings.js';
import { logout } from './api/auth/logout.js';
import { checkIfLoggedIn } from './listeners/utilities/checkProfileLogIn.js';
import { updateAvatarListener } from './listeners/profile/updateAvatar.js';
import { changeToSignIn } from './listeners/utilities/changeToSignIn.js';

const check = checkIfLoggedIn('profile');

if (check) {
  getUserProfile();
  getUserListings();
  updateAvatarListener();
} else {
  changeToSignIn();
}

document.querySelector('#logOutBtn').onclick = function () {
  logout();
};
