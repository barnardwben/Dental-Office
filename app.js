// DOM VARIABLES
const cardContainer = document.querySelector(".card-container");
const serviceInfo = document.querySelector(".first-ani");
const serviceInfoTwo = document.querySelector(".second-ani");
const navbar = document.querySelector(".navbar");
//Event Listeners
window.addEventListener("scroll", () => {
  if (window.scrollY > 35) {
    navbar.classList.add("navbarScroll");
  }
  if (window.scrollY < 35) {
    navbar.classList.remove("navbarScroll");
  }
  if (window.scrollY > 1220) {
    serviceInfo.classList.add("appearing");
    serviceInfo.classList.remove("hide");
  }
  if (window.scrollY > 1920) {
    console.log("working");
    serviceInfoTwo.classList.add("appearing");
    serviceInfoTwo.classList.remove("hide");
  } else if (window.scrollY < 10) {
    serviceInfo.classList.remove("appearing");
    serviceInfo.classList.add("hide");
    serviceInfoTwo.classList.remove("appearing");
    serviceInfoTwo.classList.add("hide");
  }
});
// CARD CLASS
class Card {
  constructor(id, title, icon, description) {
    this.id = id;
    this.title = title;
    this.icon = icon;
    this.description = description;
  }
}

let cardOne = new Card(
  "cardOne",
  `Hygienic <br> Habits`,
  "images/chair.png",
  "At our office, we like to maintain a prestine environment for our patients. We work to provide you a clean and comfortable visit so that your mind can be at ease."
);
let cardTwo = new Card(
  "cardTwo",
  `Conscious <br> Care`,
  "images/teeth.png",
  "It's important to us that our patients don't take their dental health for granted. That is why we take it into our hands to ensure you're getting the optimum care your teeth deserve."
);
let cardThree = new Card(
  "cardThree",
  `Open <br> Mindedness`,
  "images/door.png",
  "We understand that choosing where to go for your dental care is a big decision. We encourage you to stop by our office so that we can greet you with welcoming hands. Our doors are always open."
);

let cardArr = [cardOne, cardTwo, cardThree];

for (card of cardArr) {
  const { id, title, icon, description } = card;
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card-template");
  cardDiv.innerHTML = `
      <div key=${id} class='icon-container'>
        <img src=${icon} alt='Dental Card Icon' class='card-icon'>
      </div>
      <section class='card-text'>
        <h3>${title}</h3>
        <p>${description}</p>
      </section>
        `;
  cardContainer.appendChild(cardDiv);
  // Adding an Event Listener to the card elements
  window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
      cardDiv.classList.add("appearing");
      cardDiv.classList.remove("hide");
    } else if (window.scrollY < 10) {
      cardDiv.classList.remove("appearing");
      cardDiv.classList.add("hide");
    }
  });
}
