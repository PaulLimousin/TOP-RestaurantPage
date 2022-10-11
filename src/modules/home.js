let createHome = () => {
  let home = document.createElement("div");
  home.classList.add("home");
  let homeTitle = document.createElement("h1");
  homeTitle.textContent = "Venez découvrir notre savoureuse cuisine !";
  home.appendChild(homeTitle);
  let homeSecondTitle = document.createElement("h2");
  homeSecondTitle.textContent = "Fait Maison et avec Amour !";
  home.appendChild(homeSecondTitle);
  let homeButton = document.createElement("button");
  homeButton.textContent = "Réserver";
  home.appendChild(homeButton);
  return home;
};
export default createHome;
