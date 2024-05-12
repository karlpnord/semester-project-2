export function showListings(listings) {
  const container = document.querySelector('#listingsContainer');
  container.innerHTML = '';

  listings.forEach((listing) => {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col-md-6', 'col-xl-4');
    container.appendChild(colDiv);

    const card = document.createElement('div');
    card.classList.add('card', 'shadow', 'h-100');
    colDiv.appendChild(card);

    const cardImg = document.createElement('img');
    cardImg.classList.add('card-img-top', 'pb-1');
    if (!listing.media[0]) {
      cardImg.src = '../../images/card-sample-image.png';
    } else {
      cardImg.src = listing.media[0].url;
    }
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'd-flex', 'flex-column');
    card.append(cardImg, cardBody);

    const title = document.createElement('h2');
    title.classList.add('card-title', 'fs-3');
    title.textContent = listing.title;
    const text = document.createElement('p');
    text.classList.add('card-text');
    text.textContent = listing.description;
    const endsAt = document.createElement('h3');
    endsAt.classList.add('card-bid', 'fs-4', 'flex-grow-1');
    endsAt.textContent = listing.endsAt.substring(0, 10);
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('d-flex', 'justify-content-between', 'gap-4', 'mt-4');
    cardBody.append(title, text, endsAt, btnDiv);

    const favBtn = document.createElement('button');
    favBtn.classList.add(
      'btn',
      'btn-outline-primary',
      'rounded-pill',
      'w-50',
      'px-0',
      'd-flex',
      'align-items-center',
      'justify-content-center',
      'gap-1',
    );
    const favIcon = document.createElement('i');
    favIcon.classList.add('fa-regular', 'fa-heart');
    const favText = document.createElement('span');
    favText.textContent = 'Favorite';
    favBtn.append(favIcon, favText);

    const bidBtn = document.createElement('button');
    bidBtn.classList.add('btn', 'btn-primary', 'rounded-pill', 'w-50', 'px-0');
    bidBtn.textContent = 'Bid Now';

    btnDiv.append(favBtn, bidBtn);
  });
}
