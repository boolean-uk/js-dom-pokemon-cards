const PokemonCard = (pokemon) => {
    return `
        <li class="card">
            <h2 class="card--title">${pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img
                width="256"
                class="card--img"
                id="${pokemon.name}"
                src="${getSprites(pokemon)[getSprites(pokemon).length - 1]}"
                onclick="handleClickImage(document.getElementById('${pokemon.name}'))"
            />
            <ul class="card--text">
                <li>HP: ${pokemon.stats.find(s => s.stat.name === 'hp').base_stat}</li>
                <li>ATTACK: ${pokemon.stats.find(s => s.stat.name === 'attack').base_stat}</li>
                <li>DEFENSE: ${pokemon.stats.find(s => s.stat.name === 'defense').base_stat}</li>
                <li>SPECIAL-ATTACK: ${pokemon.stats.find(s => s.stat.name === 'special-attack').base_stat}</li>
                <li>SPECIAL-DEFENSE: ${pokemon.stats.find(s => s.stat.name === 'special-defense').base_stat}</li>
                <li>SPEED: ${pokemon.stats.find(s => s.stat.name === 'speed').base_stat}</li>
            </ul>
            <h3>Appeared in games:</h3>
            <ul class="card--text">
                ${getGames(pokemon).map(g => `<li>${g.slice(0, 1).toUpperCase() + g.slice(1)}</li>`).join('')}
            </ul>
        </li>
    `;
};

const handleClickImage = (pokemonImg) => {
    let sprites = getSprites(data.find(p => p.name === pokemonImg.id));
    let index = sprites.indexOf(pokemonImg.src);
    index = (index + 1) % sprites.length;
    pokemonImg.src = sprites[index];
};

const getGames = (pokemon) => {
    let games = [];
    for (const key in pokemon.game_indices) {
        games.push(pokemon.game_indices[key].version.name);
    }
    return games;
};

const getSprites = (pokemon) => {
    let sprites = [];
    let s = pokemon.sprites;
    for (const key in s) {
        if (s[key] && typeof s[key] === 'string') {
            sprites.push(s[key]);
        }
    }

    for (const key in s.other) {
        for (const k in s.other[key]) {
            if (s.other[key][k] && typeof s.other[key][k] === 'string') {
                sprites.push(s.other[key][k]);
            }
        }
    }
    

    return sprites;
};

document.getElementsByClassName("cards")[0].innerHTML = data.map(PokemonCard).join('');
