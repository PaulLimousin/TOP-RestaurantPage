import "../style/css/normalize.css";
import "../style/css/style.css";
import "../images/background-image.jpg";
import createHome from "./home.js";
import createMenu from "./menu.js";
import createReservation from "./reservation.js";

let createHeader = () => {
  let header = document.createElement("header");
  let headerTitle = document.createElement("h1");
  headerTitle.textContent = "Tasty Pizza";
  header.appendChild(headerTitle);
  header.appendChild(createNav());
  return header;
};
let createNav = () => {
  let nav = document.createElement("nav");
  let homeButton = document.createElement("button");
  homeButton.textContent = "Accueil";
  nav.appendChild(homeButton);
  homeButton.addEventListener("click", () => {
    displayHome();
  });
  let menuButton = document.createElement("button");
  menuButton.textContent = "Carte";
  nav.appendChild(menuButton);
  menuButton.addEventListener("click", () => {
    displayMenu();
  });
  let reservationButton = document.createElement("button");
  reservationButton.textContent = "Réservation";
  nav.appendChild(reservationButton);
  reservationButton.addEventListener("click", () => {
    displayReservation();
  });
  return nav;
};
let createMain = () => {
  let main = document.createElement("main");
  return main;
};
let createWebsite = () => {
  let content = document.querySelector("body");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  let main = document.querySelector("main");
  main.appendChild(createHome());
};
// *********** DISPLAY FUNCTIONS ***********
let removeMain = () => {
  let main = document.querySelector("main");
  main.textContent = "";
};
let displayHome = () => {
  removeMain();
  let main = document.querySelector("main");
  main.appendChild(createHome());
};
let displayMenu = () => {
  removeMain();
  let main = document.querySelector("main");
  main.appendChild(createMenu());
};
let displayReservation = () => {
  removeMain();
  let main = document.querySelector("main");
  main.appendChild(createReservation());
};
export { createWebsite, displayReservation };
