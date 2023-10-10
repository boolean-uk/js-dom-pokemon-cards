console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
const cards = document.querySelector("ul");
cards.setAttribute("class", "cards");
for (let i = 0; i < data.length; i++) {
  const pokemon__Obj = data[i];

  //create the card HTML elements
  const card = document.createElement("li");
  card.setAttribute("class", "card");
  cards.append(card);

  const h2 = document.createElement("h2");
  h2.setAttribute("class", "card--title");
  h2.innerText = data[i].name;
  card.appendChild(h2);

  const img = document.createElement("img");
  img.setAttribute("class", "card--img");
  img.src = data[i].sprites.other["official-artwork"].front_default;
  img.setAttribute("width", "256");
  card.appendChild(img);

  //features
  const features = document.createElement("ul");
  features.setAttribute("class", "card--text");
  card.append(features);

  const hp = document.createElement("li");
  hp.innerText = "HP: " + data[i].stats[0].base_stat;
  features.append(hp);

  const attack = document.createElement("li");
  attack.innerText = "ATTACK: " + data[i].stats[1].base_stat;
  features.append(attack);

  const defense = document.createElement("li");
  defense.innerText = "DEFENSE: " + data[i].stats[2].base_stat;
  features.append(defense);

  const specialAttack = document.createElement("li");
  specialAttack.innerText = "SPECIAL - ATTACK : " + data[i].stats[3].base_stat;
  features.append(specialAttack);

  const specialDefense = document.createElement("li");
  specialDefense.innerText =
    "SPECIAL - DEFENSE : " + data[i].stats[4].base_stat;
  features.append(specialDefense);

  const speed = document.createElement("li");
  speed.innerText = "SPEED : " + data[i].stats[5].base_stat;
  features.append(speed);
}
console.log(data[0]);
