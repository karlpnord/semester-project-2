export async function register(url, data) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });

  const json = await response.json();

  if (response.ok) {
    window.location.href = '/sign-in/index.html';
    return json;
  }
  document.querySelector('.error-container').textContent =
    json.errors[0].message;
}
