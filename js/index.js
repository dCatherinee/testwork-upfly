const formButton = document.querySelector(".intro__btn");
const formButtonClose = document.querySelector(".form__close-btn");
const form = document.querySelector(".form__wrapper");

formButton.addEventListener("click", () => {
  form.classList.remove("visually-hidden");
});

formButtonClose.addEventListener("click", () => {
  form.classList.add("visually-hidden");
});

const navBurger = document.querySelector(".header-nav__burger");
const nav = document.querySelector(".header__nav");
const socialMedia = document.querySelector(".social-media");
const navLogo = document.querySelector(".header-nav__logo");
const navBtnClose = document.querySelector(".header-nav__btn-close");

const introImg = document.querySelector(".intro__image");

window.addEventListener("resize", function () {
  if (this.window.innerWidth <= 768) {
    navBurger.classList.remove("visually-hidden");
    nav.classList.add("visually-hidden");
    socialMedia.classList.remove("visually-hidden");

    introImg.classList.add("visually-hidden");
  } else {
    navBurger.classList.add("visually-hidden");
    nav.classList.remove("visually-hidden");
    socialMedia.classList.add("visually-hidden");

    introImg.classList.remove("visually-hidden");
  }
});

navBurger.addEventListener("click", function () {
  nav.classList.remove("visually-hidden");
  navLogo.classList.remove("visually-hidden");
  navBtnClose.classList.remove("visually-hidden");
});

navBtnClose.addEventListener("click", function () {
  nav.classList.add("visually-hidden");
  navLogo.classList.add("visually-hidden");
  navBtnClose.classList.add("visually-hidden");
});
