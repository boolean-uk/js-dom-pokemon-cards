const cardsContainer = document.querySelector('.cards')


for (let index = 0; index < data.length; index++) {
    const pokemonData = data[index];

    const listElement = document.createElement('li')
    listElement.classList.add('card')
    cardsContainer.append(listElement)

    const headingElement = document.createElement('h2')
    headingElement.classList.add('card--title')
    listElement.append(headingElement)

    const imgElemenet = document.createElement('img')
    imgElemenet.classList.add('card--img')
    imgElemenet.src = pokemonData.sprites.other["official-artwork"]["front_default"]
    imgElemenet.width = 256
    listElement.append(imgElemenet)


    const ulElement = document.createElement('ul')
    ulElement.classList.add('card--text')
    listElement.append(ulElement)


    for (let i = 0; i < pokemonData.stats.length; i++) {
        const currentStat = pokemonData.stats[i];
        const statName = currentStat.stat.name.toUpperCase()
        const statValue = currentStat.base_stat
        const liElement = document.createElement('li')
        liElement.textContent = `${statName}: ${statValue}`
        ulElement.append(liElement)        
    }   
}


console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
