import { logout } from './api/auth/logout.js';

document.querySelector('#logOutBtn').onclick = function () {
  logout();
};
