export function profilePage(data) {
  document.querySelector('#profileName').textContent = data.name;
  document.querySelector('#profileEmail').textContent = data.email;
  document.querySelector('#profileCredits').textContent =
    `Credits: ${data.credits}`;
  document.querySelector('#profileImage').src = data.avatar.url;
}
