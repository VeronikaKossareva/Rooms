document.addEventListener('DOMContentLoaded', function () {
  const roomCards = document.querySelectorAll('.rooms__card');

  roomCards.forEach(function (card) {
    const bookButton = card.querySelector('.rooms__btn');
    let isReserved = false;

    bookButton.addEventListener('click', function () {
      isReserved = true;
    });

    card.addEventListener('mouseleave', function () {
      if (isReserved) {
        card.classList.add('rooms__card-reserved');
      }
    });

    card.addEventListener('click', function (event) {
      if (card.classList.contains('rooms__card-reserved') && (event.target.matches('.rooms__pic, .rooms__descr, .rooms__title, .rooms__reserved-unreserved, .rooms__reserved-text'))) {
        isReserved = false;
        card.classList.remove('rooms__card-reserved');
      }
    });
  });
});
