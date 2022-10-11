import pizza1Imported from "../images/pizzas/pizza1.png";
import pizza2Imported from "../images/pizzas/pizza2.png";
import pizza3Imported from "../images/pizzas/pizza3.png";
import pizza4Imported from "../images/pizzas/pizza4.png";
import pizza5Imported from "../images/pizzas/pizza5.png";
import pizza6Imported from "../images/pizzas/pizza6.png";
import pizza7Imported from "../images/pizzas/pizza7.png";
import pizza8Imported from "../images/pizzas/pizza8.png";

let imagePizzaArray = [];
let titlePizzaArray = [
  "Titre1",
  "Titre",
  "Titre",
  "Titre",
  "Titre",
  "Titre",
  "Titre",
  "Titre",
];
let descriptionPizzaArray = [
  "Description1",
  "Description",
  "Description",
  "Description",
  "Description",
  "Description",
  "Description",
  "Description",
];

imagePizzaArray.push(pizza1Imported);
imagePizzaArray.push(pizza2Imported);
imagePizzaArray.push(pizza3Imported);
imagePizzaArray.push(pizza4Imported);
imagePizzaArray.push(pizza5Imported);
imagePizzaArray.push(pizza6Imported);
imagePizzaArray.push(pizza7Imported);
imagePizzaArray.push(pizza8Imported);

let createMenu = () => {
  let menu = document.createElement("div");
  menu.classList.add("menu");

  for (let i = 0; i < 8; i++) {
    let menuCard = document.createElement("div");
    menuCard.classList.add("menuCard");
    menuCard.appendChild(createMenuImage(imagePizzaArray[i]));
    let cardTitle = document.createElement("h2");
    cardTitle.textContent = titlePizzaArray[i];
    menuCard.appendChild(cardTitle);
    let cardDescription = document.createElement("p");
    cardDescription.textContent = descriptionPizzaArray[i];
    menuCard.appendChild(cardDescription);
    menu.appendChild(menuCard);
  }
  return menu;
};

let createMenuImage = (index) => {
  let pizza = new Image();
  pizza.src = index;
  return pizza;
};

export default createMenu;
