export function locateToListings() {
  const locateBtn = document.querySelectorAll('#locateToListings');

  locateBtn.forEach((btn) => {
    btn.onclick = function () {
      window.location.href = '/feed/index.html';
    };
  });
}
