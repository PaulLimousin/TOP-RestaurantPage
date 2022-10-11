import "../style/css/normalize.css";
import "../style/css/style.css";
import "../images/background-image.jpg";
import createHome from "./home.js";

let createHeader = () => {
  let header = document.createElement("header");
  let headerTitle = document.createElement("h1");
  headerTitle.textContent = "Tasty Food";
  header.appendChild(headerTitle);
  header.appendChild(createNav());
  return header;
};
let createNav = () => {
  let nav = document.createElement("nav");
  let homeButton = document.createElement("button");
  homeButton.textContent = "Accueil";
  nav.appendChild(homeButton);
  let menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  nav.appendChild(menuButton);
  let reservationButton = document.createElement("button");
  reservationButton.textContent = "Réservation";
  nav.appendChild(reservationButton);
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
export default createWebsite;
