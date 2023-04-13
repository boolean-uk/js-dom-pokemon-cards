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
function createImage(sprites, card, id) {
  const image = document.createElement("img");
  image.classList.add("card--img");
  image.setAttribute("src", sprites.other["official-artwork"].front_default);
  image.setAttribute("width", 256);
  image.setAttribute("id", id)
  image.addEventListener("click", e=>toggleFunction(e, id))
  card.append(image);
  return image;
}
function toggleFunction (e, id) {
if (e.target.getAttribute('src') === data[e.target.getAttribute('id') - 1].sprites.other["official-artwork"].front_default) {
  e.target.setAttribute("src", data[e.target.getAttribute('id') - 1].sprites.other.dream_world.front_default)
} else {
  e.target.setAttribute("src", data[e.target.getAttribute('id') - 1].sprites.other["official-artwork"].front_default)
}
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
function createGameList (games, card) {
  const details = document.createElement('details')
  details.classList.add('card--text')
  const summary = document.createElement('summary')
  details.append(summary)
  summary.innerText = 'Appearing in Games:'
for (let i = 0; i < games.length; i++) {
  let gameName = games[i].version.name
  gameName = gameName[0].toUpperCase() + gameName.slice(1)
  const gameVersion = document.createElement('li')
  gameVersion.innerText = `Pokemon ${gameName}`
  details.append(gameVersion)
}
card.append(details)
}
function render() {
  const allCards = document.querySelector(".cards");
  data.forEach((index) => {
    const newCard = createNewCardElement();
    createHeading(index.name, newCard);
    const image = createImage(index.sprites, newCard, index.id);
    createdDescription(index.stats, newCard);
    createGameList(index.game_indices, newCard)
    allCards.append(newCard);
  });
}

render();
