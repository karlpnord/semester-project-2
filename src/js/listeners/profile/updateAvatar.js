import { avatar } from '../../api/profile/updateAvatar.js';
import { API_BASE_URL } from '../../api/constants.js';

export function updateAvatarListener() {
  const profile = JSON.parse(localStorage.getItem('profile'));
  const url = `${API_BASE_URL}auction/profiles/${profile.name}`;
  const form = document.querySelector('#avatarForm');
  form.addEventListener('submit', () => {
    event.preventDefault();
    const avatarURL = document.querySelector('#inputUpdateAvatar').value;
    const inputData = {
      avatar: {
        url: avatarURL,
        alt: 'profile picture',
      },
    };
    avatar(url, inputData);
    form.reset();
  });
}
