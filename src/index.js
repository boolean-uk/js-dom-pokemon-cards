const pokemonCardList = document.querySelector('.cards');

for (let i = 0; i < data.length; i++) {

    const pokemon = data[i]


    // Card Structure

    const pokemonCard = document.createElement('li');
    pokemonCard.style.listStyleType = 'none'
    pokemonCard.setAttribute('class', 'card');
    pokemonCardList.append(pokemonCard);

    // Card Title

    const pokemonCardTitle = document.createElement('h2');
    pokemonCardTitle.setAttribute('class', 'h2');
    pokemonCardTitle.innerText = pokemon.name
    pokemonCardTitle.style.textTransform = 'capitalize'
    pokemonCard.append(pokemonCardTitle);

    // Card Image

    const pokemonCardImage = document.createElement('img');
    pokemonCardImage.setAttribute('class', 'card--img', 'img')
    pokemonCardImage.setAttribute('src', pokemon.sprites.front_default);
    pokemonCard.append(pokemonCardImage)

    // Card Stats

    const pokemonCardStats = document.createElement('ul');
    pokemonCard.style.listStyleType = 'none'
    pokemonCard.setAttribute('class', 'card--text');
    pokemonCard.append(pokemonCardStats);
    for (let j = 0; j < pokemon.stats.length; j++) {
        const statName = pokemon.stats[j].stat.name
        const statNumber = pokemon.stats[j].base_stat
        const pokemonStats = document.createElement('li');
        pokemonStats.innerText = `${statName}: ${statNumber}` .toUpperCase()
        pokemonCardStats.append(pokemonStats)
    }
    

}