function createCardElement (pokemonData, cardsContainer) {
  
        // const pokemonData = data[index];
    
        const listElement = document.createElement('li')
        listElement.classList.add('card')
        cardsContainer.append(listElement)
    
        const headingElement = document.createElement('h2')
        headingElement.classList.add('card--title')
        listElement.append(headingElement)
    
        createImageElement(pokemonData,listElement) 
    
    
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

    createGamesListElement(pokemonData, listElement)
    }
function createImageElement(pokemonData, listElement) {
     
    const imgElemenet = document.createElement('img')
    imgElemenet.classList.add('card--img')
    imgElemenet.src = pokemonData.sprites.other["official-artwork"]["front_default"]
    imgElemenet.width = 256
    imgElemenet.setAttribute("id", pokemonData.id)
    imgElemenet.addEventListener("click", e =>toggleBetweenImages(e))
    listElement.append(imgElemenet)
}

function toggleBetweenImages(e) {
    console.log(data[e.target.getAttribute('id') - 1])
    if (e.target.getAttribute('src')  === 
    data[e.target.getAttribute('id') - 1].sprites.other["official-artwork"].front_default) {
        e.target.setAttribute("src", data[e.target.getAttribute('id') - 1].sprites.other.dream_world.front_default)

    }else {

        e.target.setAttribute("src", data[e.target.getAttribute('id') - 1].sprites.other["official-artwork"].front_default)
      }
}

function createGamesListElement (pokemonData,listElement) {
    const games = pokemonData.game_indices
    const detailsElement = document.createElement('details')
    detailsElement.classList.add('card--text')
    const summaryElement = document.createElement('summary')
    detailsElement.append(summaryElement)
    summaryElement.textContent = 'Appears in:'
    for (let i = 0; i < games.length; i++) {
        const gameName = `Pokemon ` + capitalizeFirstLetter(games[i].version.name);
        const gameElement = document.createElement('li')
        gameElement.innerText = gameName
        detailsElement.append(gameElement)        
    }
    listElement.append(detailsElement)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 
function render() {
    const cardsContainer = document.querySelector('.cards')
    data.forEach((pokemonData) => {
        createCardElement(pokemonData, cardsContainer)
    });

}

render()

// console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
// console.log(data[0]);
