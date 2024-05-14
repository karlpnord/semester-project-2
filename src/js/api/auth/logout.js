export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('profile');
  location.window.href = '../';
}
