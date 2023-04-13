function createNewCardElement() {
  const newCard = document.createElement("li");
  newCard.classList.add("card");
  return newCard;
}
function createHeading(name, card) {
  const heading = document.createElement("h2");
  heading.classList.add("card--title");
  heading.innerText = name.charAt(0).toUpperCase() + name.slice(1);
  card.append(heading);
}
function createImage(sprites, card) {
  const image = document.createElement("img");
  image.classList.add("card--img");
  image.setAttribute("src", sprites.other["official-artwork"].front_default);
  image.setAttribute("width", 256);
  card.append(image);
  return image;
}
function createdDescription(stats, card) {
  const ul = document.createElement("ul");
  ul.classList.add("card--text");
  for (let attribute = 0; attribute < stats.length; attribute++) {
    const li = document.createElement("li");
    li.innerText = `${stats[attribute].stat.name.toUpperCase()}: ${
      stats[attribute].base_stat
    }`;
    ul.append(li);
    card.append(ul);
  }
}
function render() {
  const allCards = document.querySelector(".cards");
  data.forEach((index) => {
    const newCard = createNewCardElement();
    createHeading(index.name, newCard);
    const image = createImage(index.sprites, newCard);
    createdDescription(index.stats, newCard);
    allCards.append(newCard);
  });
}

render();
