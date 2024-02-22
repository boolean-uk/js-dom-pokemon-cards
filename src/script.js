const createPokemon = (pokemon) => {
    const gameNames = pokemon.game_indices.map(game => game.version.name)
    const options = gameNames.map(game => `<option value="${game}">${game}</option>`).join('')
    return ` 
    <li class="card">
        <h2 class="card--title">${capitalizeFirstLetter(pokemon.name)}</h2>
        </div>
            <img
                width="256"
                class="card--img"
                src="${pokemon.sprites.other["official-artwork"].front_default}"
            />
        <ul class="card--text">
            <li>HP: ${pokemon.stats[0].base_stat}</li>
            <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
            <li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
            <li>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</li>
            <li>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</li>
            <li>SPEED: ${pokemon.stats[5].base_stat}</li>
            <p> Games: 
                <select id="games" class="card--games">
                    ${options}
                </select>
            </p>
        </ul>
    </li>`
}

const createAllPokemon =(pokemonList) => {
    return pokemonList.map(p => createPokemon(p))
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.getElementsByClassName('cards')[0].innerHTML = createAllPokemon(data).join('')
