console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);

// SELECT ROOT ELEMENT
const ulElement = document.querySelector(".cards");

function renderingCards() {
  for (const pokemon of data) {
    const liElement = createCardElement(pokemon);
    ulElement.appendChild(liElement);
  }
}

// refactored from 19-02 lession
function createCardElement(pokemon) {
  const liElement = document.createElement("li");
  liElement.className = "card";

  liElement.innerHTML = `
    <h2 class="card--title">${pokemon.name}</h2>
    <img width="256" class="card--img" src="${
      pokemon.sprites.other["official-artwork"].front_default
    }" alt="${pokemon.name}" />
    <ul class="card--text">
        <li>HP: ${pokemon.stats[0].base_stat}</li>
        <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
        <li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
        <li>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</li>
        <li>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</li>
        <li>SPEED: ${pokemon.stats[5].base_stat}</li>
    </ul>
    <!-- Extensions --->
    <p class="card--text"> Versions </p>
    <ul class="card--text">
    ${renderVersion(pokemon)}
    </ul>`;

  const imgElement = liElement.querySelector(".card--img");
  imgElement.addEventListener("click", () => {
    handleImage(pokemon);
  });

  return liElement;
}

// extension (refactor from 19-02 lession)
function renderVersion(pokemon) {
  return Object.keys(pokemon.sprites.versions)
    .map((generation) => {
      const games = pokemon.sprites.versions[generation];
      const gameName = Object.keys(games);
      return `<li>${generation}: ${gameName.join(", ")} </li>`;
    })
    .join("");
}

// extension (refactor from 19-02 lession)
function handleImage(pokemon) {
  //console.log(pokemon.name);
  const cardElement = document.querySelector(
    `.card--img[alt="${pokemon.name}"]`
  );

  //console.log(cardElement);
  const currentImgSrc = cardElement.src;
  //console.log(currentImgSrc);

  //console.log(pokemon.sprites.back_default);
  let newImgSrc = "";
  if (
    currentImgSrc === pokemon.sprites.other["official-artwork"].front_default
  ) {
    newImgSrc = pokemon.sprites.back_default;
  } else {
    newImgSrc = pokemon.sprites.other["official-artwork"].front_default;
  }

  cardElement.src = newImgSrc;
}

function main() {
  console.log("Runninv main()");
  renderingCards();

  console.log("main() done");
}
document.addEventListener("click", (event) => {
  console.log(event);
});

main();
