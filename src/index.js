
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const pokemons = document.querySelector('.cards')

for (let i = 0; i < data.length; i++) {
    const currentPokemon = data[i]

    const pokemonCard = document.createElement('li')
    pokemonCard.classList.add('card')

    // create the header
    const pokemonName = document.createElement('h2')
    pokemonName.classList.add('card--title')
    // add to inner text the name of  the pokemon with the first letter capital
    pokemonName.innerText = currentPokemon.name[0].toUpperCase() + currentPokemon.name.slice(1)
    // append the pokemonName in my card
    pokemonCard.append(pokemonName)

    // create the image
    const pokemonImg = document.createElement('img')
    pokemonImg.classList.add('card--img')
    pokemonImg.setAttribute('width', '256')
    pokemonImg.setAttribute('src', currentPokemon.sprites.other["official-artwork"].front_default)
    // append the pokemonImg in my card
    pokemonCard.append(pokemonImg)

    // create the stats 
    const pokemonStats = document.createElement('ul')
    pokemonStats.classList.add('card--text')
    const pokemonHp = document.createElement('li')
    const pokemonAttack = document.createElement('li')
    const pokemonDefense = document.createElement('li')
    const pokemonSpecialAttack = document.createElement('li')
    const pokemonSpecialDefense = document.createElement('li')
    const pokemonSpeed = document.createElement('li')
    // For each category in stats. I find the stat name and i create the propper inner text, then i add the list item to pokemon stats
    for (let k = 0; k < 6; k++) {
        if (currentPokemon.stats[k].stat.name === 'hp') {
            pokemonHp.innerText = 'HP: ' + currentPokemon.stats[k].base_stat
            pokemonStats.append(pokemonHp)
        } else if (currentPokemon.stats[k].stat.name === 'attack') {
            pokemonAttack.innerText = 'ATTACK: ' + currentPokemon.stats[k].base_stat
            pokemonStats.append(pokemonAttack)
        } else if (currentPokemon.stats[k].stat.name === 'defense') {
            pokemonDefense.innerText = 'DEFENSE: ' + currentPokemon.stats[k].base_stat
            pokemonStats.append(pokemonDefense)
        } else if (currentPokemon.stats[k].stat.name === 'special-attack') {
            pokemonSpecialAttack.innerText = 'SPECIAL-ATTACK: ' + currentPokemon.stats[k].base_stat
            pokemonStats.append(pokemonSpecialAttack)
        } else if (currentPokemon.stats[k].stat.name === 'special-defense') {
            pokemonSpecialDefense.innerText = 'SPECIAL-DEFENSE: ' + currentPokemon.stats[k].base_stat
            pokemonStats.append(pokemonSpecialDefense)
        } else {
            pokemonSpeed.innerText = 'SPEED: ' + currentPokemon.stats[k].base_stat
            pokemonStats.append(pokemonSpeed)
        }
    }
    // append the pokemonStats in my card 
    pokemonCard.append(pokemonStats)



    // append the pokemonCard to my pokemon list
    pokemons.append(pokemonCard)
}