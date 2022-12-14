let createReservation = () => {
  let reservation = document.createElement("div");
  reservation.classList.add("reservation");
  let reservationTitle = document.createElement("h1");
  reservationTitle.textContent = "Réservation";
  reservation.appendChild(reservationTitle);
  let form = document.createElement("form");
  reservation.appendChild(form);
  let nameLabel = document.createElement("label");
  nameLabel.textContent = "Nom";
  form.appendChild(nameLabel);
  let nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.setAttribute("required", "");
  form.appendChild(nameInput);
  let phoneLabel = document.createElement("label");
  phoneLabel.textContent = "Téléphone";
  form.appendChild(phoneLabel);
  let phoneInput = document.createElement("input");
  phoneInput.type = "tel";
  form.appendChild(phoneInput);
  let calendarLabel = document.createElement("label");
  calendarLabel.textContent = "Date";
  form.appendChild(calendarLabel);
  let calendarInput = document.createElement("input");
  calendarInput.type = "date";
  form.appendChild(calendarInput);
  let timeLabel = document.createElement("label");
  timeLabel.textContent = "Heure";
  form.appendChild(timeLabel);
  let timeInput = document.createElement("input");
  timeInput.type = "time";
  form.appendChild(timeInput);
  let numberLabel = document.createElement("label");
  numberLabel.textContent = "Nbre de couvert";
  form.appendChild(numberLabel);
  let numberInput = document.createElement("select");
  form.appendChild(numberInput);
  let number1 = document.createElement("option");
  number1.textContent = "1 - 2 personnes";
  numberInput.appendChild(number1);
  let number2 = document.createElement("option");
  number2.textContent = "3 - 4 personnes";
  numberInput.appendChild(number2);
  let number3 = document.createElement("option");
  number3.textContent = "5 - 6 personnes";
  numberInput.appendChild(number3);
  let number4 = document.createElement("option");
  number4.textContent = "7 - 8 personnes";
  numberInput.appendChild(number4);
  let number5 = document.createElement("option");
  number5.textContent = "9  ou plus";
  numberInput.appendChild(number5);
  let reservationButton = document.createElement("button");
  reservationButton.textContent = "Valider";
  reservation.appendChild(reservationButton);
  reservationButton.addEventListener("click", () => {
    if (
      nameInput.value === "" ||
      phoneInput.value === "" ||
      calendarInput.value === "" ||
      timeInput.value === ""
    ) {
      if (document.querySelector(".errorReservationMessage") !== null) {
        return;
      }
      let errorReservationMessage = document.createElement("p");
      errorReservationMessage.textContent =
        "Veuillez remplir tous les champs, merci !";
      errorReservationMessage.classList.add("errorReservationMessage");
      reservation.insertBefore(errorReservationMessage, reservationButton);
      return;
    }

    let main = document.querySelector("main");
    main.textContent = "";
    let reservationConfirmation = document.createElement("div");
    reservationConfirmation.classList.add("reservationConfirmation");
    main.appendChild(reservationConfirmation);
    let reservationConfirmationMessage = document.createElement("p");
    reservationConfirmationMessage.textContent =
      "Félicitations ! Votre réservation a été prise en compte ! ";
    reservationConfirmation.appendChild(reservationConfirmationMessage);
  });

  return reservation;
};

export default createReservation;
