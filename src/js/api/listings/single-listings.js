import { API_KEY } from '../constants.js';
import { renderSingleListing } from '../../views/singleListing.js';
import { viewBids } from '../../views/viewBids.js';

export async function singleListing(url) {
  const token = JSON.parse(localStorage.getItem('token'));
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': API_KEY,
    },
    method: 'GET',
  });

  const json = await response.json();

  if (response.ok) {
    renderSingleListing(json.data);
    viewBids(json.data);
    return json;
  }
  console.log(json.errors[0].message);
}
