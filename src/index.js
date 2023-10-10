
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

function card(element) {

    // Li element inside of Ul
    const cardLi = document.createElement('li')
    cardLi.setAttribute('class', 'card')

    title(element, cardLi)
    img(element, cardLi)
    listCharacteristics(element, cardLi)


    // Append the LI inside of the Ul - selecting the UL and then appending to UL
    const cardUl = document.body.querySelector('ul') 
    cardUl.append(cardLi)

}

function title(element, cardLi) {
    const titleHeader = document.createElement('h2')
    let name = data[element].name
    titleHeader.innerText = name;
    titleHeader.setAttribute('class', 'card--title')
    cardLi.append(titleHeader)

}

function img(element, cardLi) {
    const pokemonImage = document.createElement('img')
    const imgSrc = data[element].sprites.other["official-artwork"].front_default
    pokemonImage.setAttribute('class', 'card--img')
    pokemonImage.setAttribute('width', '256')
    pokemonImage.setAttribute('src', `${imgSrc}`)

    cardLi.append(pokemonImage)
}

function listCharacteristics(element, cardLi) {
    const stats = data[element].stats
    const pokemonCharateristics = document.createElement('ul')
    pokemonCharateristics.setAttribute('class', 'card--text')

    for (let i = 0; i < stats.length; i++) {
        const statName = document.createElement('li')
        statName.innerText = `${stats[i].stat.name}: ${stats[i].base_stat}`
        pokemonCharateristics.append(statName)

    }
    cardLi.append(pokemonCharateristics)
}

function render(element) {
    for (let i = 0; i < data.length; i++) {
        card(i)
    }
}

render()