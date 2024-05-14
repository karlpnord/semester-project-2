export function profilePage(data) {
  document.querySelector('.loader').classList.add('d-none');
  document.querySelector('#profileContainer').classList.remove('d-none');
  document.querySelector('#profileName').textContent = data.name;
  document.querySelector('#profileEmail').textContent = data.email;
  document.querySelector('#profileCredits').textContent =
    `Credits: ${data.credits}`;
  document.querySelector('#profileImage').src = data.avatar.url;
}
