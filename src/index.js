
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element

console.log(data[0]);

// select where the html should be inserted
const pokedex = document.querySelector('.cards')

// loop through the data to look at each pokemon in the list
for (let i = 0; i < data.length; i++) {
    // create the card
    const pokeCard = document.createElement('li')
        pokeCard.style.listStyle = 'none'
        pokeCard.setAttribute('class', 'card')
        pokedex.append(pokeCard)

    // input the pokemon name
    const pokeName = document.createElement('h2')
        pokeName.setAttribute('class', 'card--title')
        pokeName.innerText = data[i]['name'].charAt(0).toUpperCase() + data[i]['name'].slice(1)
        pokeCard.append(pokeName)

    // input the pokemon picture
    const pokePic = document.createElement('img')
        pokePic.setAttribute('width', '256')
        pokePic.setAttribute('class', 'card--img')
        pokePic.setAttribute('src', data[i].sprites.other["official-artwork"].front_default)
        pokeCard.append(pokePic)

    // input the pokemon stats
    const pokeStats = document.createElement('ul')
        pokeStats.setAttribute('class', 'card--text')
        pokeStats.style.listStyle = 'none'
        pokeCard.append(pokeStats)
            for (let j = 0; j < data[j].stats.length; j++) {
                const pokeStatName = data[j].stats[j].stat.name
                const pokeStatAmount = data[j].stats[j].base_stat
                const statContainer = document.createElement('li')
                statContainer.innerText = `${pokeStatName}: ${pokeStatAmount}`.toUpperCase()
                pokeStats.append(statContainer)
            }
}
