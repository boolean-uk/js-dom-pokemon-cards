
// console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
// console.log(data[0]);


const pokemonCardGrid = document.querySelector('.cards');

data.forEach(pokemon => {

    // ELEMENTS
    const individualCard = document.createElement('div')

    const pokemonName = document.createElement('h2');
    const pokemonImage = document.createElement('img');
    const pokemonStats = document.createElement('ul');
    const versionHeader = document.createElement('h3')
    const pokemonVersions = document.createElement('ul')

    // UPDATE INFO
    pokemonName.innerText = pokemon.name;
    pokemonImage.src = pokemon.sprites.other["official-artwork"].front_default;
    versionHeader.innerText = 'Games Featured In:'

    // UPDATE CLASSES
    individualCard.setAttribute('class', 'card');
    pokemonName.setAttribute('class', 'card--title');
    pokemonImage.setAttribute('class', 'card--img');

    pokemonStats.setAttribute('class', 'card--text');

    versionHeader.setAttribute('class', 'card--title')
    pokemonVersions.setAttribute('class', 'card--text');

    // STATS
    pokemon.stats.forEach(value => {
        const singleStat = document.createElement('li');
        singleStat.innerText = `${value.stat.name}: ${value.base_stat}`;
        pokemonStats.append(singleStat);
    })

    // OTHER STYLING
    pokemonName.style.textTransform = 'capitalize'
    pokemonImage.width = '256'

    pokemonStats.style.listStyle = 'none'
    pokemonStats.style.textTransform = 'uppercase'

    versionHeader.style.textAlign = 'center'
    pokemonVersions.style.listStyle = 'none'
    pokemonVersions.style.textTransform = 'uppercase'
    pokemonVersions.style.textAlign = 'center'

    // VERSIONS
    pokemon.game_indices.forEach(index => {
        const versionItems = document.createElement('li')
        versionItems.innerText = index.version.name

        pokemonVersions.append(versionItems)
    })

    // APPEND TO INDIVIDUAL CARDS
    individualCard.append(pokemonName);
    individualCard.append(pokemonImage);
    individualCard.append(pokemonStats);
    individualCard.append(versionHeader)
    individualCard.append(pokemonVersions)

    // APPEND TO CARD GRID
    pokemonCardGrid.append(individualCard);
})