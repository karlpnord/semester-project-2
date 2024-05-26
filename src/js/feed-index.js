import { logout } from './api/auth/logout.js';
import { getListings } from './api/listings/read.js';
import { pagination } from './listeners/listings/pagination.js';
import { changeToSignIn } from './listeners/utilities/changeToSignIn.js';
import { footerUserData } from './listeners/utilities/footerUserData.js';
import { searchListingsListener } from './listeners/listings/searchListings.js';

document.querySelector('#logOutBtn').onclick = function () {
  logout();
};

getListings();
footerUserData();

searchListingsListener();

const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

nextBtn.addEventListener('click', pagination);
prevBtn.addEventListener('click', pagination);

const profile = JSON.parse(localStorage.getItem('profile'));
if (!profile) {
  changeToSignIn();
}
