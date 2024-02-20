//You can start simple and just render a single
//pokemon card from the first element

console.log(data);
console.log(data[0]);

const cardListUL = document.querySelector("#cards-list");

function renderCards() {
  cardListUL.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const pokemon = data[i];
    const pokemonLi = document.createElement("li");

    pokemonLi.classList.add("card");

    const name = document.createElement("h2");
    name.textContent = pokemon.name;

    const img = document.createElement("img");
    img.width = 256;
    img.classList.add("card--img");
    img.src = pokemon.sprites.other["official-artwork"].front_default;

    const statsLi = document.createElement("ul");
    statsLi.classList.add("card--text");

    const hp = document.createElement("li");
    hp.textContent = `HP: ${pokemon.stats[0].base_stat}`;
    statsLi.appendChild(hp);

    const attack = document.createElement("li");
    attack.textContent = `ATTACK: ${pokemon.stats[1].base_stat}`;
    statsLi.appendChild(attack);

    const defense = document.createElement("li");
    defense.textContent = `DEFENSE: ${pokemon.stats[2].base_stat}`;
    statsLi.appendChild(defense);

    const special_attack = document.createElement("li");
    special_attack.textContent = `SPECIAL ATTACK: ${pokemon.stats[3].base_stat}`;
    statsLi.appendChild(special_attack);

    const special_defense = document.createElement("li");
    special_defense.textContent = `SPECIAL DEFENSE: ${pokemon.stats[4].base_stat}`;
    statsLi.appendChild(special_defense);

    const speed = document.createElement("li");
    speed.textContent = `SPEED: ${pokemon.stats[5].base_stat}`;
    statsLi.appendChild(speed);

    pokemonLi.appendChild(name);
    pokemonLi.appendChild(img);
    pokemonLi.appendChild(statsLi);
    cardListUL.appendChild(pokemonLi);
  }
}

function main() {
  renderCards();
}

main();
