export function checkIfLoggedIn(page) {
  const profile = localStorage.getItem('profile');
  const content = document.querySelectorAll('section');

  if (!profile) {
    content.forEach((section) => {
      section.innerHTML = '';
    });

    const main = document.querySelector('main');
    const newDiv = document.createElement('div');
    document.querySelector('footer').classList.add('fixed-bottom');
    newDiv.classList.add(
      'text-danger',
      'fw-bold',
      'text-center',
      'fs-2',
      'mt-6',
    );

    if (page === 'profile') {
      newDiv.textContent = 'You have to be logged in to view your profile!';
    }

    if (page === 'create') {
      newDiv.textContent = 'You have to be logged in to add a listing!';
    }

    main.append(newDiv);
    return false;
  } else {
    return true;
  }
}
