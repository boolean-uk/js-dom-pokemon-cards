for (let i = 0; i < data.length; i++) {
  const pokemon = data[i];

  const listItem = document.createElement("li");
  listItem.classList.add("card");

  const h2 = document.createElement("h2");
  h2.classList.add("card--title");
  h2.innerText = pokemon.name;

  listItem.append(h2);

  const image = document.createElement("img");
  image.classList.add("card--img");

  image.setAttribute("width", 256);
  image.setAttribute(
    "src",
    pokemon.sprites.other["official-artwork"].front_default
  );

  listItem.append(image);

  const nestedListItem = document.createElement("li");
  const statsArr = pokemon.stats;

  for (let j = 0; j < statsArr.length; j++) {
    const name = pokemon.stats[j].stat.name.toUpperCase();
    const value = pokemon.stats[j].base_stat;

    const p = document.createElement("p");
    p.innerText = `${name}: ${value}`;
    nestedListItem.append(p);
  }

  const cardText = document.createElement("ul");
  cardText.classList.add("card--text");
  cardText.append(nestedListItem);
  listItem.append(cardText);

  const ul = document.querySelector(".cards");

  ul.append(listItem);
}
