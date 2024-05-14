import { logout } from './api/auth/logout.js';
import { getListings } from './api/listings/read.js';
import { pagination } from './listeners/listings/pagination.js';

document.querySelector('#logOutBtn').onclick = function () {
  logout();
};

getListings();

const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

nextBtn.addEventListener('click', pagination);
prevBtn.addEventListener('click', pagination);