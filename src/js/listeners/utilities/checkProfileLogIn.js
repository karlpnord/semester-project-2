import { displayMessage } from './displayMessage.js';

export function checkIfLoggedIn(page) {
  const profile = localStorage.getItem('profile');
  const content = document.querySelectorAll('section');

  if (!profile) {
    content.forEach((section) => {
      section.innerHTML = '';
    });

    let string = '';
    if (page === 'profile') {
      string = 'You have to be logged in to view your profile!';
    }
    if (page === 'create') {
      string = 'You have to be logged in to add a listing!';
    }

    const main = document.querySelector('main');
    const message = displayMessage(string);
    document.querySelector('footer').classList.add('fixed-bottom');
    message.classList.add('mt-6', 'fs-3');
    main.append(message);
    return false;
  } else {
    return true;
  }
}
