export function viewBids(data) {
  const bidContainer = document.querySelector('#collapseBids');
  bidContainer.classList.add(
    'd-flex',
    'flex-column',
    'view-bids-container',
    'mx-auto',
    'rounded',
    'pt-4',
  );

  bidContainer.classList.add('collapsed');
  const btnIcon = document.querySelector('#viewBidBtnIcon');

  document.querySelector('#viewBidBtn').addEventListener('click', () => {
    bidContainer.classList.toggle('collapsed');
    btnIcon.classList.toggle('fa-chevron-down');
    btnIcon.classList.toggle('fa-chevron-up');
  });

  if (data.bids.length === 0) {
    const message = document.createElement('div');
    message.textContent = 'No active bids yet!';
    message.classList.add('text-center', 'bg-white', 'p-3', 'fw-semibold');
    bidContainer.appendChild(message);
  } else {
    data.bids.forEach((bid) => {
      const bidDiv = document.createElement('div');
      bidDiv.classList.add(
        'd-flex',
        'justify-content-between',
        'rounded',
        'p-3',
        'border',
        'border-light',
        'bg-white',
      );

      const bidName = document.createElement('h3');
      bidName.classList.add('fs-6', 'mb-0', 'fw-semibold');
      bidName.textContent = bid.bidder.name;

      const bidAmount = document.createElement('h4');
      bidAmount.classList.add('fs-6', 'mb-0', 'text-primary', 'fw-semibold');
      bidAmount.textContent = `Amount: ${bid.amount}`;

      bidDiv.append(bidName, bidAmount);
      bidContainer.appendChild(bidDiv);
    });
  }
}
