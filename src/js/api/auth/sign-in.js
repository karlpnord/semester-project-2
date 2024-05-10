export async function signIn(url, data) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });

  const json = await response.json();

  if (response.ok) {
    const { accessToken, ...profile } = json.data;
    localStorage.setItem('token', JSON.stringify(accessToken));
    localStorage.setItem('profile', JSON.stringify(profile));
    return json;
  }
  document.querySelector('.error-container').textContent =
    json.errors[0].message;
}
