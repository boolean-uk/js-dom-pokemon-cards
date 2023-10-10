
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

    // UPDATE INFO
    pokemonName.innerText = pokemon.name;
    pokemonImage.src = pokemon.sprites.other["official-artwork"].front_default;

    // UPDATE CLASSES
    individualCard.setAttribute('class', 'card');
    pokemonName.setAttribute('class', 'card--title');
    pokemonImage.setAttribute('class', 'card--img');
    pokemonStats.setAttribute('class', 'card--text');

    // STATS
    pokemon.stats.forEach(value => {
        const singleStat = document.createElement('li');
        console.log(singleStat)
        singleStat.innerText = `${value.stat.name}: ${value.base_stat}`;
        pokemonStats.append(singleStat);
    })

    // OTHER STYLING
    pokemonName.style.textTransform = 'capitalize'
    pokemonImage.width = '256'
    pokemonStats.style.listStyle = 'none'
    pokemonStats.style.textTransform = 'uppercase'

    // APPEND TO INDIVIDUAL CARDS
    individualCard.append(pokemonName);
    individualCard.append(pokemonImage);
    individualCard.append(pokemonStats);

    // APPEND TO CARD GRID
    pokemonCardGrid.append(individualCard);
})