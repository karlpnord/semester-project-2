import { profilePage } from '../../views/profilePage.js';
import { API_KEY } from '../constants.js';

export async function avatar(url, data) {
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': API_KEY,
    },
    method: 'PUT',
    body: JSON.stringify(data),
  });

  const json = await response.json();

  if (response.ok) {
    profilePage(json.data);
    return json;
  }

  document.querySelector('.error-container').textContent =
    'An error occurred when updating your avatar, please try again.';
}
