import { API_KEY } from '../constants.js';

export async function userBid(url, data) {
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': API_KEY,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });

  const json = await response.json();

  if (response.ok) {
    location.reload();
    return json;
  }
  document.querySelector('.error-container').textContent =
    json.errors[0].message;
}
