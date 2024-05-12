export function checkButtons(data) {
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');
  if (data.isFirstPage) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (data.isLastPage) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}
