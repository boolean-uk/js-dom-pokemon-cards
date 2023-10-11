console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

for (let i = 0; i < data.length; i++) {
  // selecting the ul from the html
  const ulCards = document.querySelector(".cards");
  ulCards.setAttribute("class", "cards");

  // making the card
  const liCard = document.createElement("li");
  liCard.setAttribute("class", "card");

  // card title
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "card--title"); // making the class
  h2.innerText = data[i].name; // making the card title the name of the card

  // card img
  const img = document.createElement("img");
  img.setAttribute("width", "256");
  img.setAttribute("class", "card--img");
  img.setAttribute(
    "src",
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      i + 1
    }.png`
  );

  // card ul text
  const ulText = document.createElement("ul");
  ulText.setAttribute("class", "card--text");

  // different li in the ul text
  const hp = document.createElement("li");
  hp.innerText = `HP: ${data[i].stats[0].base_stat}`;

  const attack = document.createElement("li");
  attack.innerText = `ATTACK: ${data[i].stats[1].base_stat}`;

  const defense = document.createElement("li");
  defense.innerText = `DEFENSE: ${data[i].stats[2].base_stat}`;

  const specialAttack = document.createElement("li");
  specialAttack.innerText = `SPECIAL-ATTACK: ${data[i].stats[3].base_stat}`;

  const specialDefense = document.createElement("li");
  specialDefense.innerText = `SPECIAL-DEFENSE: ${data[i].stats[4].base_stat}`;

  const speed = document.createElement("li");
  speed.innerText = `SPEED: ${data[i].stats[5].base_stat}`;

  // appending
  ulCards.append(liCard);
  liCard.append(h2, img, ulText);
  ulText.append(hp, attack, defense, specialAttack, specialDefense, speed);
}
