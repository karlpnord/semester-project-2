import { API_BASE_URL } from '../constants.js';
import { API_KEY } from '../constants.js';
import { profilePage } from '../../views/profilePage.js';

export async function getUserProfile() {
  const token = JSON.parse(localStorage.getItem('token'));
  const profile = JSON.parse(localStorage.getItem('profile'));
  const response = await fetch(
    `${API_BASE_URL}auction/profiles/${profile.name}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Noroff-API-Key': API_KEY,
      },
      method: 'GET',
    },
  );

  const json = await response.json();

  if (response.ok) {
    profilePage(json.data);
    return json;
  }
  //document.querySelector('.error-container').textContent =
  //json.errors[0].message;
}
