
//console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
//console.log(data[0]);
const pokemonListUL = document.querySelector("#card_list")


function makeAllCards(pokemonDataList) {

    pokemonListUL.innerHTML = ""
    

    for(const pokemon of pokemonDataList) {
        createCard(pokemon)
    }
}

function createCard(pokemonDataObject) {
    const newCard = document.createElement('li')
    newCard.classList.add("card", 'no-list-style');

    const cardHeading = document.createElement('h2')
    cardHeading.classList.add('card--text')
    
    cardHeading.textContent = pokemonDataObject.name.charAt(0).toUpperCase() + pokemonDataObject.name.slice(1)

    const cardImage = document.createElement('img')
    cardImage.setAttribute('src', pokemonDataObject.sprites.front_default)
    cardImage.classList.add('card--img')
    cardImage.addEventListener('mouseenter', function() {
        cardImage.setAttribute('src', pokemonDataObject.sprites.front_shiny)
    })
    cardImage.addEventListener('mouseleave', function() {
        cardImage.setAttribute('src', pokemonDataObject.sprites.front_default)
    })
    

    const cardStatList = document.createElement('ul')
    for(const stat of pokemonDataObject.stats) {
        const statListItem = document.createElement('li')
        statListItem.classList.add('card--text', 'no-list-style')
        statListItem.textContent =  stat.stat.name.toUpperCase() + ": " + stat.base_stat
        cardStatList.appendChild(statListItem)
    }

    const cardAppearedInP = document.createElement('p')
    cardAppearedInP.classList.add('card--text', 'no-list-style')

    for(const appearance of pokemonDataObject.game_indices) {
        cardAppearedInP.textContent += `${appearance.version.name}, `
    }

    newCard.appendChild(cardHeading)
    newCard.appendChild(cardImage)
    newCard.appendChild(cardStatList)
    newCard.appendChild(cardAppearedInP)

    pokemonListUL.appendChild(newCard)
}


function main() {
    makeAllCards(data)
}

main()