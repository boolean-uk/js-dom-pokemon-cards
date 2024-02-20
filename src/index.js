// Function to create a Pokémon card from the template
function createPokemonCard(pokemon) {
    const cardTemplate = `
        <li class="card">
            <h2 class="card--title">${pokemon.name}</h2>
            <img
                width="256"
                class="card--img"
                src="${pokemon.sprites.other['official-artwork'].front_default}"
            />
            <ul class="card--text">
                <li>HP: ${pokemon.stats[0].base_stat}</li>
                <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
                <li>SP-ATTACK: ${pokemon.stats[3].base_stat}</li>
            </ul>
            <ul class="card--text">
                <li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
                <li>SPEED: ${pokemon.stats[5].base_stat}</li>
                <li>SP-DEFENSE: ${pokemon.stats[4].base_stat}</li>
            </ul>
            <div class="card--dropdown">
                <select class="game-dropdown">
                    <p>Appears in:</p>
                    ${pokemon.game_indices.map(game => `<option>${game.version.name}</option>`).join('')}
                </select>
            </div>
            <div class="card--games hidden">
                <h3>Games appeared in:</h3>
                <ul>
                    ${pokemon.game_indices.map(game => `<li>${game.version.name}</li>`).join('')}
                </ul>
            </div>
        </li>
    `;
    return cardTemplate;
}

// Function to toggle visibility of games info
function toggleInfo(card) {
    const gamesInfo = card.querySelector('.card--games');
    gamesInfo.classList.toggle('hidden');
}

// Function to add event listener to dropdown menu
function addEventListeners() {
    const dropdowns = document.querySelectorAll('.card--dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', () => {
            const card = dropdown.parentElement.parentElement; // Get the parent card
            toggleInfo(card);
        });
    });
}


// Function to render Pokémon cards
function renderPokemonCards() {
    const cardsContainer = document.querySelector('.cards');
    data.forEach(pokemon => {
        const cardHTML = createPokemonCard(pokemon);
        cardsContainer.innerHTML += cardHTML;
    });
    addEventListeners();
}

// Render Pokémon cards when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderPokemonCards();
});