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
  // remove the dot of the li
  cards.style.listStyleType = "none";

  // create a h2 with class card--title and add it to li
  const card__title = document.createElement("h2");
  card__title.setAttribute("class", "card--title");
  // set h2 to the name of the pokemon
  card__title.innerText =
    data[i].name[0].toUpperCase() + data[i].name.substring(1);

  // create an img and add the source and class card--img to it
  const card__img = document.createElement("img");
  card__img.setAttribute("class", "card--img");
  card__img.setAttribute(
    "src",
    data[i].sprites.other["official-artwork"].front_default
  );
  card__img.setAttribute("width", 256);

  // create a ul with class card--text
  const card__text = document.createElement("ul");
  card__text.setAttribute("class", "card--text");
  // remove the dot of the li
  card__text.style.listStyleType = "none";

  // create a loop to add every li item to the ul

  for (let j = 0; j < data[i].stats.length; j++) {
    // create an li element
    const stat = document.createElement("li");
    stat.style.padding = "5px";
    const stat__name = data[i].stats[j].stat.name.toUpperCase();
    const stat__value = data[i].stats[j].base_stat;
    stat.innerText = stat__name + ": " + stat__value;

    card__text.append(stat);
  }

  // create an extra div for the games the pokemon has appeared in
  const card__games = document.createElement("div");
  card__games.setAttribute("class", "card--text");
  // create a loop to add every game to the div
  for (let k = 0; k < data[i].game_indices.length; k++) {
    // create a p for every game name
    const game = document.createElement("p");
    // add game name
    const game__name = data[i].game_indices[i].version.name;
    // paste game name to the p
    game.innerText = game__name;
    console.log(game);

    card__games.append(game);
  }

  // append img to card
  card.append(card__title);
  card.append(card__img);
  card.append(card__text);
  card.append(card__games);

  // append card to the list of cards
  cards.append(card);
}
