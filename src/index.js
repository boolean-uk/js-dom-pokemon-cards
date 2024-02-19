const cards = document.querySelector('.cards');
// Add an extra section to each card that contains information about which games each pokemon appeared in.
data.forEach(pokemon => {
    console.log(pokemon.name)
    const card = document.createElement('li');
    card.classList.add('card');
    card.style.listStyle = 'none';
    card.innerHTML = `
        <h2 class="card--title">${pokemon.name}</h2>
        <img
            width="256"
            class="card--img"
            src="${pokemon.sprites.other['official-artwork'].front_default}"
        />
        <ul class="card--text">
            <li>HP: ${pokemon.stats[0].base_stat}</li>
            <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
            <li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
            <li>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</li>
            <li>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</li>
            <li>SPEED: ${pokemon.stats[5].base_stat}</li>
        </ul>
        <h3>Appeared in:</h3>
        <ul>
            ${pokemon.game_indices.map(game => `<li><a href=${game.version.url}>Pokemon ${capitalize(game.version.name)}</a></li>`).join('')}
        </ul>
    `;
    cards.appendChild(card);
});

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}