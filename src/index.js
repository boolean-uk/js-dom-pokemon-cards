function renderPokemonCards() {
    const pokemonCards = data.map((pokemon, index) => {
      const images = Object.values(pokemon.sprites.other).map(sprite => sprite.front_default);
      const cardId = `card-${index}`;
      const pokemonCard = `
        <li class="card" id="${cardId}" data-index="${index}">
          <h2 class="card--title">${pokemon.name}</h2>
          <img class="card--img" src="${images[0]}" alt="${pokemon.name}" width="256"/>
          <ul class="card--text">
            <li>HP: ${pokemon.stats[0].base_stat}</li>
            <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
            <li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
            <li>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</li>
            <li>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</li>
            <li>SPEED: ${pokemon.stats[5].base_stat}</li>
          </ul>
          <div class="card--games">
            <h2>Appears in:</h2>
            <ul>
              ${pokemon.game_indices.map((gameIndex) => `<li>${gameIndex.version.name}</li>`).join("")}
            </ul>
          </div>
        </li>
      `;
      return pokemonCard;
    });
  
    const cardsContainer = document.querySelector(".cards");
    cardsContainer.innerHTML = pokemonCards.join("");
  
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      let currentIndex = 0;
      setInterval(() => {
        const cardImg = card.querySelector(".card--img");
        const index = card.getAttribute("data-index");
        const images = Object.values(data[index].sprites.other).map(sprite => sprite.front_default);
        const nextImg = images[(currentIndex + 1) % images.length];
        cardImg.setAttribute("src", nextImg);
        currentIndex = (currentIndex + 1) % images.length;
    }, 1000);
    });
  }
  

  window.addEventListener('load', () => {
    renderPokemonCards();
  });
  
  