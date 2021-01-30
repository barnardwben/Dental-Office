// DOM VARIABLES
const cardContainer = document.querySelector(".card-container");
const serviceInfo = document.querySelector(".first-ani");
const serviceInfoTwo = document.querySelector(".second-ani");
const navbar = document.querySelector(".navbar");
const toggleBtn = document.querySelector(".navbar-toggler");
const fqaContainer = document.querySelector(".fqa-right");
const qnaContainerZero = document.querySelector("#ani-zero");
const qnaContainerOne = document.querySelector("#ani-one");
const qnaContainerTwo = document.querySelector("#ani-two");
const qnaContainerThree = document.querySelector("#ani-three");
const qnaContainerFour = document.querySelector("#ani-four");

//Event Listeners
// ADDING VISIBILITY TO NAV MENU WHEN scrollY is below 35 & BURGER BTN IS CLICKED
toggleBtn.addEventListener("click", () => {
  if (!toggleBtn.classList.contains("collapsed")) {
    navbar.classList.add("nav-menu-open");
  } else {
    navbar.classList.remove("nav-menu-open");
  }
});

window.addEventListener("scroll", () => {
  // ADDING & REMOVING VISIBILITY TO NAV MENU WHEN scrollY is ABOVE AND BELOW 35
  if (window.scrollY > 35) {
    navbar.classList.add("navbarScroll");
  }
  if (window.scrollY < 35) {
    navbar.classList.remove("navbarScroll");
  }
  // ADDING ANIMATIONS TO SERVICES SECTION LIST
  if (window.innerWidth > 1200 && window.scrollY > 1050) {
    serviceInfo.classList.add("appearing");
    serviceInfo.classList.remove("hide");
  }
  if (window.innerWidth > 810 && window.scrollY > 1130) {
    serviceInfo.classList.add("appearing");
    serviceInfo.classList.remove("hide");
  }
  if (window.innerWidth > 300 && window.scrollY > 1900) {
    serviceInfo.classList.add("appearing");
    serviceInfo.classList.remove("hide");
  }
  if (window.innerWidth > 1200 && window.scrollY > 1620) {
    serviceInfoTwo.classList.add("appearing");
    serviceInfoTwo.classList.remove("hide");
  }
  if (window.innerWidth > 810 && window.scrollY > 2580) {
    serviceInfoTwo.classList.add("appearing");
    serviceInfoTwo.classList.remove("hide");
  }
  if (window.innerWidth > 600 && window.scrollY > 3400) {
    serviceInfoTwo.classList.add("appearing");
    serviceInfoTwo.classList.remove("hide");
  }
  if (
    window.innerWidth > 300 &&
    window.innerWidth < 600 &&
    window.scrollY > 2840
  ) {
    serviceInfoTwo.classList.add("appearing");
    serviceInfoTwo.classList.remove("hide");
  } else if (window.scrollY < 10) {
    serviceInfo.classList.remove("appearing");
    serviceInfo.classList.add("hide");
    serviceInfoTwo.classList.remove("appearing");
    serviceInfoTwo.classList.add("hide");
  }
  console.log(window.scrollY);
  console.log(window.innerWidth);
  if (window.innerWidth > 1400 && window.scrollY > 2500) {
    qnaContainerZero.classList.add("qnaAniZero");

    qnaContainerOne.classList.add("qnaAniOne");

    qnaContainerTwo.classList.add("qnaAniTwo");

    qnaContainerThree.classList.add("qnaAniThree");

    qnaContainerFour.classList.add("qnaAniFour");
    setTimeout(() => {
      qnaContainerZero.classList.remove("hideqna");
      qnaContainerOne.classList.remove("hideqna");
      qnaContainerTwo.classList.remove("hideqna");
      qnaContainerThree.classList.remove("hideqna");
      qnaContainerFour.classList.remove("hideqna");
    }, 0500);
  } else if (window.innerWidth > 1090 && window.scrollY > 2300) {
    qnaContainerZero.classList.add("qnaAniZero");

    qnaContainerOne.classList.add("qnaAniOne");

    qnaContainerTwo.classList.add("qnaAniTwo");

    qnaContainerThree.classList.add("qnaAniThree");

    qnaContainerFour.classList.add("qnaAniFour");
    setTimeout(() => {
      qnaContainerZero.classList.remove("hideqna");
      qnaContainerOne.classList.remove("hideqna");
      qnaContainerTwo.classList.remove("hideqna");
      qnaContainerThree.classList.remove("hideqna");
      qnaContainerFour.classList.remove("hideqna");
    }, 0500);
  } else if (window.innerWidth > 900 && window.scrollY > 4900) {
    qnaContainerZero.classList.add("qnaAniZero");
    qnaContainerOne.classList.add("qnaAniOne");
    qnaContainerTwo.classList.add("qnaAniTwo");
    qnaContainerThree.classList.add("qnaAniThree");
    qnaContainerFour.classList.add("qnaAniFour");
    setTimeout(() => {
      qnaContainerZero.classList.remove("hideqna");
      qnaContainerOne.classList.remove("hideqna");
      qnaContainerTwo.classList.remove("hideqna");
      qnaContainerThree.classList.remove("hideqna");
      qnaContainerFour.classList.remove("hideqna");
    }, 0500);
  } else if (window.innerWidth > 600 && window.scrollY > 4300) {
    qnaContainerZero.classList.add("qnaAniZero");

    qnaContainerOne.classList.add("qnaAniOne");

    qnaContainerTwo.classList.add("qnaAniTwo");

    qnaContainerThree.classList.add("qnaAniThree");

    qnaContainerFour.classList.add("qnaAniFour");
    setTimeout(() => {
      qnaContainerZero.classList.remove("hideqna");
      qnaContainerOne.classList.remove("hideqna");
      qnaContainerTwo.classList.remove("hideqna");
      qnaContainerThree.classList.remove("hideqna");
      qnaContainerFour.classList.remove("hideqna");
    }, 0500);
  } else if (window.innerWidth > 490 && window.scrollY > 3900) {
    qnaContainerZero.classList.add("qnaAniZero");

    qnaContainerOne.classList.add("qnaAniOne");

    qnaContainerTwo.classList.add("qnaAniTwo");

    qnaContainerThree.classList.add("qnaAniThree");

    qnaContainerFour.classList.add("qnaAniFour");
    setTimeout(() => {
      qnaContainerZero.classList.remove("hideqna");
      qnaContainerOne.classList.remove("hideqna");
      qnaContainerTwo.classList.remove("hideqna");
      qnaContainerThree.classList.remove("hideqna");
      qnaContainerFour.classList.remove("hideqna");
    }, 0500);
  } else if (window.innerWidth > 340 && window.scrollY > 4100) {
    qnaContainerZero.classList.add("qnaAniZero");

    qnaContainerOne.classList.add("qnaAniOne");

    qnaContainerTwo.classList.add("qnaAniTwo");

    qnaContainerThree.classList.add("qnaAniThree");

    qnaContainerFour.classList.add("qnaAniFour");
    setTimeout(() => {
      qnaContainerZero.classList.remove("hideqna");
      qnaContainerOne.classList.remove("hideqna");
      qnaContainerTwo.classList.remove("hideqna");
      qnaContainerThree.classList.remove("hideqna");
      qnaContainerFour.classList.remove("hideqna");
    }, 0500);
  } else if (window.scrollY < 100) {
    qnaContainerZero.classList.remove("qnaAniZero");
    qnaContainerZero.classList.add("hideqna");
    qnaContainerOne.classList.remove("qnaAniOne");
    qnaContainerOne.classList.add("hideqna");
    qnaContainerTwo.classList.remove("qnaAniTwo");
    qnaContainerTwo.classList.add("hideqna");
    qnaContainerThree.classList.remove("qnaAniThree");
    qnaContainerThree.classList.add("hideqna");
    qnaContainerFour.classList.remove("qnaAniFour");
    qnaContainerFour.classList.add("hideqna");
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

// STORING CARD CLASSES INTO AN ARRAY TO LOOP OVER LATER
let cardArr = [cardOne, cardTwo, cardThree];

// LOOPING OVER ARRAY TO DISPLAY IT IN OUR HTML
for (card of cardArr) {
  const { id, title, icon, description } = card;
  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card-template");
  cardDiv.classList.add("hide");

  cardDiv.innerHTML = `
      <div key=${id} class='icon-container'>
        <img src=${icon} alt='Dental Card Icon' class='card-icon'>
      </div>
      <section class='card-text'>
        <h3 class='card-title'>${title}</h3>
        <p>${description}</p>
      </section>
        `;
  cardContainer.appendChild(cardDiv);
  // Adding An Event Listener & Animation To Card Elements
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

let plusMinusBtns = document.querySelectorAll(".qna-container");

plusMinusBtns.forEach((plusMinus) => {
  plusMinus.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-plus")) {
      e.target.classList.add("hide-me");
      e.target.nextElementSibling.classList.remove("hide-me");
      if (
        e.target.parentElement.parentElement.nextElementSibling.classList.contains(
          "hide-answer"
        )
      ) {
        e.target.parentElement.parentElement.nextElementSibling.classList.remove(
          "hide-answer"
        );
      }
    } else if (e.target.classList.contains("fa-minus")) {
      e.target.classList.add("hide-me");
      e.target.previousElementSibling.classList.remove("hide-me");
      if (
        !e.target.parentElement.parentElement.nextElementSibling.classList.contains(
          "hide-answer"
        )
      ) {
        e.target.parentElement.parentElement.nextElementSibling.classList.add(
          "hide-answer"
        );
      }
    }
  });
});
