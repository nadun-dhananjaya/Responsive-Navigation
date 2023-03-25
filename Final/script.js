const btnMobileNav = document.querySelector("#btn-mobile-nav");
const navigation = document.querySelector("#nav-bar");

btnMobileNav.addEventListener("click", () => {
  navigation.classList.toggle("nav-open");
  btnMobileNav.classList.toggle("nav-open");
});
