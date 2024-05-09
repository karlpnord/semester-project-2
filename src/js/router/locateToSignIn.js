export function locateToSignIn() {
  const locateBtn = document.querySelectorAll('#locateToSignIn');

  locateBtn.forEach((btn) => {
    btn.onclick = function () {
      window.location.href = '/sign-in/index.html';
    };
  });
}
