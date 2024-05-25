import { API_KEY } from '../constants.js';

export async function createListing(url, data) {
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': API_KEY,
    },
    method: 'POST',
    body: JSON.stringify(data),
  });

  const json = await response.json();

  if (response.ok) {
    return json;
  }
  document.querySelector('.error-container').textContent =
    json.errors[0].message;
}
