export async function register(url, data) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application-json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });

  console.log(response);

  if (response.ok) {
    return await response.json();
  }
}
