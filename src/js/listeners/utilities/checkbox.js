export function checkboxChecked() {
  const registerCheck = document.querySelector('#checkboxValidate');
  const submitBtn = document.querySelector('#submitBtn');

  registerCheck.addEventListener('change', () => {
    if (registerCheck.checked) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  });
}
