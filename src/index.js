console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

// select the ul to add the information to
const cards = document.querySelector(".cards");

// create a loop to go through every single pokemon
for (let i = 0; i < data.length; i++) {
  // create a li for every card/pokemon
  const card = document.createElement("li");
  // add the class card to li
  card.classList.add("card");

  // create a h2 with class card--title and add it to li
  const card__title = document.createElement("h2");
  card__title.setAttribute("class", "card--title");
  // set h2 to the name of the pokemon
  card__title.innerText = data[i].name;
  // append to li
  card.append(card__title);
  // append card to the list of cards
  cards.append(card);
  // remove the dot of the li
  cards.style.listStyleType = "none";

  // create an img and add the source and class card--img to it
  const card__img = document.createElement("img");
  card__img.setAttribute("class", "card--img");
  card__img.setAttribute(
    "src",
    data[i].sprites.other["official-artwork"].front_default
  );
  // append img to card
  card.append(card__img);
}

// create an img and add the source and class card--img to it

// create a ul with class card--text
// create a loop to add every li item to the ul
