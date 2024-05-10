import { API_BASE_URL } from '../../api/constants.js';
import { signIn } from '../../api/auth/sign-in.js';

export function signInListener() {
  const url = `${API_BASE_URL}auth/login`;
  const form = document.querySelector('#registerForm');

  form.addEventListener('submit', (event) => {
    document.querySelector('.error-container').textContent = '';
    event.preventDefault();

    const inputData = {
      email: document.querySelector('#emailInput').value,
      password: document.querySelector('#passwordInput').value,
    };
    signIn(url, inputData);
  });
}
