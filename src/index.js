console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

// SELECTED ROOT ELEMENTS
//const taskListUL = document.querySelector("#task-list");
const cardListUL = document.querySelector(".cards");

function toUpper(text) {
  return text.toUpperCase();
}

function createCard(pokemon) {
  const pk = document.createElement("div");

  pk.setAttribute("name", "value");

  const img = document.createElement("img");

  img.setAttribute("width", "256");
  img.setAttribute("class", "card--img");
  const ul = document.createElement("ul");

  ul.setAttribute("class", "card--text");

  img.setAttribute("src", pokemon.sprites.front_default);

  for (let i = 0; i < 6; i++) {
    const li = document.createElement("p");

    li.innerText =
      toUpper(pokemon.stats[i].stat.name) + " : " + pokemon.stats[i].base_stat;

    ul.setAttribute("p", li);
    ul.appendChild(li);
  }

  const li2 = document.createElement("p");

  for (let i = 0; i < pokemon.game_indices.length; i++) {
    if (i === 0) {
      li2.innerText += "GAMES : " + pokemon.game_indices[i].version.name;
    } else {
      li2.innerText += ", " + pokemon.game_indices[i].version.name;
    }
    ul.setAttribute("p", li2);
    ul.appendChild(li2);
  }

  pk.appendChild(img);
  pk.appendChild(ul);

  return pk;
}

function capitalize(text) {
  return text.replace(/\b\w/g, function (m) {
    return m.toUpperCase();
  });
}

function renderTasks() {
  console.log("calling renderTasks()");
  // reset my task list completely
  cardListUL.innerHTML = "";

  // for each task in my data, create a new li element
  for (let i = 0; i < data.length; i++) {
    const pokemon = data[i];

    const divel = document.createElement("div");
    divel.setAttribute("class", "card");
    const pokemonh2 = document.createElement("h2");

    pokemonh2.innerText = capitalize(pokemon.name);

    pokemonh2.setAttribute("id", "card--title");
    // create the <li></li>
    const pokemonLi = document.createElement("ul");

    const pokeCard = createCard(pokemon, pokemonLi);
    // compose the taskLi with any child elements
    pokemonLi.appendChild(pokeCard);

    divel.appendChild(pokemonh2);
    divel.appendChild(pokemonLi);

    cardListUL.appendChild(divel);
  }
}

// INITIAL RENDER
function main() {
  console.log("running main()");
  renderTasks();
}

main();
