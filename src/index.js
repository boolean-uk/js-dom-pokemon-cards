console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

// SELECTED ROOT ELEMENTS
//const taskListUL = document.querySelector("#task-list");
const cardListUL = document.querySelector(".cards");

function createCard(pokemon) {
  // create an input of type checkbox
  const pk = document.createElement("div");

  pk.setAttribute("name", "value");

  const img = document.createElement("img");

  img.setAttribute("width", "256");
  img.setAttribute("class", "card--img");
  const ul = document.createElement("ul");

  ul.setAttribute("class", "card--text");

  img.setAttribute("src", pokemon.sprites.front_default);

  for (let i = 0; i < 6; i++) {
    const li = document.createElement("li");
    li.innerText =
      pokemon.stats[i].stat.name + " : " + pokemon.stats[i].base_stat;

    ul.setAttribute("li", li);
    ul.appendChild(li);
  }

  pk.appendChild(img);
  pk.appendChild(ul);

  return pk;
}

function renderTasks() {
  console.log("calling renderTasks()");
  // reset my task list completely
  cardListUL.innerHTML = "";

  // for each task in my data, create a new li element
  for (let i = 0; i < data.length; i++) {
    const pokemon = data[i];

    const divel = document.createElement("div");
    divel.setAttribute("id", "div-class");
    const pokemonh2 = document.createElement("p");

    pokemonh2.innerText = pokemon.name;

    pokemonh2.setAttribute("id", "card--title");
    // create the <li></li>
    const pokemonLi = document.createElement("li");

    const pokeCard = createCard(pokemon, pokemonLi);
    // compose the taskLi with any child elements
    pokemonLi.appendChild(pokeCard);
    pokemonh2.appendChild(pokemonLi);
    divel.appendChild(pokemonh2);
    // add the list element inside the taskListUL
    cardListUL.appendChild(divel);
  }
}

// INITIAL RENDER
function main() {
  console.log("running main()");
  renderTasks();
}

main();
