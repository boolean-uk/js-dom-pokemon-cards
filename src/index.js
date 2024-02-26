
// Selected Root Elements
const cardListUL = document.querySelector(".cards");

function renderCards() {
  cardListUL.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const card = data[i];
    const cardLi = document.createElement("li");
    cardLi.setAttribute("class", "card");

    const name = document.createElement("h2");
    name.setAttribute("class", "card--title");
    name.innerText = card.name;
    cardLi.appendChild(name);

    const image = document.createElement("img");
    image.setAttribute("width", 256);
    image.setAttribute("class", "card--img");
    image.setAttribute(
      "src",
      data[i].sprites.other["official-artwork"].front_default
    );
    cardLi.appendChild(image);

    const detailList = document.createElement("ul");
    detailList.setAttribute("class", "card--text");

    const hp = document.createElement("li");
    hp.innerText = "HP: " + card.stats[0].base_stat;
    detailList.appendChild(hp);

    const attack = document.createElement("li");
    attack.innerText = "ATTACK: " + card.stats[1].base_stat;
    detailList.appendChild(attack);

    const defense = document.createElement("li");
    defense.innerText = "DEFENSE: " + card.stats[2].base_stat;
    detailList.appendChild(defense);

    const specialAttack = document.createElement("li");
    specialAttack.innerText = "SPECIAL-ATTACK: " + card.stats[3].base_stat;
    detailList.appendChild(specialAttack);

    const specialDefense = document.createElement("li");
    specialDefense.innerText = "SPECIAL-DEFENSE: " + card.stats[4].base_stat;
    detailList.appendChild(specialDefense);

    const speed = document.createElement("li");
    speed.innerText = "SPEED: " + card.stats[5].base_stat;
    detailList.appendChild(speed);

    const types = document.createElement("li");
    const typesText = card.types.map(type => type.type.name).join(", ");
    types.innerText = "Types: " + typesText;
    detailList.appendChild(types);

    cardLi.appendChild(detailList);

    cardListUL.appendChild(cardLi);
  }
}

function main() {
  renderCards();
}

main();
