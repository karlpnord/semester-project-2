import { checkboxChecked } from '../utilities/checkbox.js';
import { API_BASE_URL } from '../../api/constants.js';
import { register } from '../../api/auth/register.js';

export function registerListener() {
  const url = `${API_BASE_URL}auth/register`;
  const form = document.querySelector('#registerForm');
  checkboxChecked();

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputData = {
      name: document.querySelector('#nameInput').value,
      email: document.querySelector('#emailInput').value,
      password: document.querySelector('#passwordInput').value,
    };
    register(url, inputData);
  });
}
