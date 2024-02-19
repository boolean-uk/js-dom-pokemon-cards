// Define the data
document.addEventListener("DOMContentLoaded", function () {
  data.forEach(function (pokemon) {
    const card = document.createElement("li");
    card.classList.add("card");

    // Define a function to get the base stat value
    function getBaseStat(statName) {
      const stat = pokemon.stats.find((stat) => stat.stat.name === statName);
      return stat ? stat.base_stat : null;
    }

    // Set the innerHTML of the card
    card.innerHTML = `
        <h2 class="card--title">${pokemon.name}</h2>
        <img class="card--img" src="${
          pokemon.sprites.other["official-artwork"].front_default
        }" alt="${pokemon.name}" />
        <ul class="card--text">
          <li>HP: ${getBaseStat("hp")}</li>
          <li>Attack: ${getBaseStat("attack")}</li>
          <li>Defense: ${getBaseStat("defense")}</li>
          <li>Special Attack: ${getBaseStat("special-attack")}</li>
          <li>Special Defense: ${getBaseStat("special-defense")}</li>
          <li>Speed: ${getBaseStat("speed")}</li>
        </ul>
      `;

    // Append the card to the .cards element
    document.querySelector(".cards").appendChild(card);
  });
});
