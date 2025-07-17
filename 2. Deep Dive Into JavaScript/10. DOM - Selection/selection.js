const header = document.getElementById("page-header");
const menuItem = document.querySelectorAll(".menu__item");
const bookCards = document.querySelectorAll(".book-cards");
const bookTitle = document.querySelector(".bookshelf h2");
const cards = document.querySelectorAll(".card");
const cardAuthor = document.querySelectorAll(".card__author");


header.textContent = "Моя бібліотека";

if (menuItem.length > 0) {
  menuItem[0].classList.add("highlight");
}

bookCards.forEach((bookCard) => {
  const innerCards = document.querySelectorAll(".card");
  console.log(innerCards);

  innerCards.forEach((card) => {
    const title = card.querySelector(".card__title");
    if (title) {
      card.style.color = "green";
      card.style.fontSize = "23px";
    }
  });
});

bookTitle.textContent = "Оберіть жанр";

cards.forEach((card, index) => {
  if ((index + 1) % 2 === 0) {
    card.style.backgroundColor = "#f9f9f9";
  }
});

cardAuthor.forEach(cardTwoo => {
  if (cardTwoo.textContent.includes(2)) {
    cardTwoo.style.fontStyle = "italic";
  }
});

