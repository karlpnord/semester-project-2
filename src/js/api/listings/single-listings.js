import { API_KEY } from '../constants.js';

export async function singleListing(url) {
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': API_KEY,
    },
    method: 'GET',
  });

  console.log(response);
  const json = await response.json();

  if (response.ok) {
    console.log(json);
    return json;
  }
}
