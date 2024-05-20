export function locateToRegister() {
  const locateBtn = document.querySelectorAll('.locateToRegister');

  locateBtn.forEach((btn) => {
    btn.onclick = function () {
      window.location.href = '/register/index.html';
    };
  });
}
