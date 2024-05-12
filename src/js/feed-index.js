import { logout } from './api/auth/logout.js';
import { getListings } from './api/listings/read.js';
import { locatePage } from './listeners/listings/pagination.js';

document.querySelector('#logOutBtn').onclick = function () {
  logout();
};

getListings();

const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

nextBtn.addEventListener('click', locatePage);
prevBtn.addEventListener('click', locatePage);
