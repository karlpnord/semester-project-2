import { checkboxChecked } from '../utilities/checkbox.js';
import { API_BASE_URL } from '../../api/constants.js';
import { createListing } from '../../api/listings/create.js';

export function createListingListener() {
  const form = document.querySelector('#createForm');
  const url = `${API_BASE_URL}auction/listings`;
  checkboxChecked();

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const images = document.querySelector('#mediaInput').value;
    let media = [];
    if (images) {
      const imgArray = images.split(' ');
      for (let i = 0; i < imgArray.length; i++) {
        media.push({ url: imgArray[i], alt: 'listing image' });
      }
    }

    const tags = document.querySelector('#tagsInput').value;
    let seperateTags = [];
    if (tags) {
      seperateTags = tags.split(' ');
    }

    const inputData = {
      title: document.querySelector('#titleInput').value,
      description: document.querySelector('#descInput').value,
      endsAt: document.querySelector('#dueDateInput').value,
      media: media,
      tags: seperateTags,
    };
    createListing(url, inputData);
    document.querySelector('.success-container').textContent =
      'Listing successfully created';
  });
}

// https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_1280.png
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fbackground-mesh-triangle-polygon-1409125%2F&psig=AOvVaw3g3xM1kVMBjq6pR32ghKzr&ust=1715771060340000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjYgbf_jIYDFQAAAAAdAAAAABAE
