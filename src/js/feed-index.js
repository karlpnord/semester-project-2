import { logout } from './api/auth/logout.js';
import { getListings } from './api/listings/read.js';

document.querySelector('#logOutBtn').onclick = function () {
  logout();
};

getListings();
