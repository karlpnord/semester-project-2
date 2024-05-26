export function displayMessage(message) {
  const newEle = document.createElement('div');
  newEle.textContent = message;
  newEle.classList.add('text-center', 'fw-bold', 'text-danger');
  return newEle;
}
