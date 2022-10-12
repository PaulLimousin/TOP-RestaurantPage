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
  "Cannibale",
  "Basquaise",
  "Pepperoni",
  "Hawaïenne",
  "Texas Grill",
  "Veggie",
  "4 Fromages",
  "Sucrée",
];
let descriptionPizzaArray = [
  "Sauce barbecue, mozzarella, poulet rôti, merguez, haché au bœuf assaisonné",
  "Sauce tomate, mozzarella, champignons de Paris, poulet rôti, duo de poivrons, tomates fraîches, oignons, origan",
  "Sauce tomate, mozzarella, pepperoni, duo de poivrons, oignons, piments jalapeños",
  "Sauce tomate, mozzarella, jambon, ananas",
  "Sauce tomate, mozzarella, bacon, haché au bœuf assaisonné*, sauce Texas grill au goût grillé, oignons frits croustillants",
  "Sauce tomate, mozzarella, tomates fraiches françaises, oignons, champignons de Paris, duo de poivrons, chèvre, roquette",
  "Sauce tomate, mozzarella, chèvre, emmental, Fourme d’Ambert AOP",
  "Chocolat noir, crumble, crème pâtissière",
];

imagePizzaArray.push(pizza2Imported);
imagePizzaArray.push(pizza3Imported);
imagePizzaArray.push(pizza4Imported);
imagePizzaArray.push(pizza5Imported);
imagePizzaArray.push(pizza6Imported);
imagePizzaArray.push(pizza7Imported);
imagePizzaArray.push(pizza8Imported);
imagePizzaArray.push(pizza1Imported);
let createMenu = () => {
  let menu = document.createElement("div");
  menu.classList.add("menu");
  let menuTitle = document.createElement("h1");
  menuTitle.textContent = "Carte";
  menu.appendChild(menuTitle);
  let menuCardContainer = document.createElement("div");
  menuCardContainer.classList.add("menuCardContainer");
  menu.appendChild(menuCardContainer);
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
    menuCardContainer.appendChild(menuCard);
  }
  return menu;
};

let createMenuImage = (index) => {
  let pizza = new Image();
  pizza.src = index;
  return pizza;
};

export default createMenu;
