export function footerUserData() {
  const profileData = JSON.parse(localStorage.getItem('profile'));

  if (profileData) {
    document.querySelector('#footerUser').textContent = profileData.name;
    document.querySelector('#footerAvatar').src = profileData.avatar.url;
  } else {
    const relocate = document.querySelector('#footerUserData');
    relocate.href = '../sign-in';
    relocate.textContent = 'Sign In';
    relocate.classList.add(
      'btn',
      'btn-light',
      'rounded-pill',
      'px-3',
      'text-primary',
    );
  }
}
