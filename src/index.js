
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


function pokemonCard(element) {
    const cardLi = document.createAttribute('li')
    newCard.setAttribute('class', 'card')

    title(element, cardLi);
    Img(element, cardLi);
    listCharacteristics(element, cardLi);

    const cardUl = document.body.querySelector('ul');
    cardUl.append(cardLi)
}

function title(element, cardLi) {
    const titleHeader = document.createElement('h2')
    let name = data[element].name
    titleHeader.innerText = name
    titleHeader.setAttribute('class', 'card--title')
    cardLi.append(titleHeader)
}

function img(element, cardLi) {
    const cardImg = document.createElement('img')
    let imgSrc = data[element].sprites.other["oficial-artwork"].front_default
    cardImg.setAttribute('class', 'card--img')
    cardImg.setAttribute('width', '256')
    cardImg.setAttribute('src',`$(imgSrc)`)
    cardLi.append(cardImg)
}

function listCharacteristics(element, cardLi) {
    const stats = data[element].stats
    const cardCharacteristics = document.createElement('ul')
    cardCharacteristics.setAttribute('class', 'card--text')

    for (let i = 0; i < stats.lenght; i++) {
        const statName = document.createElement('li')
        statName.innerText = `${stats[i].stat.name}: ${stats[i].base_stat}`
        cardCharacteristics.append(statName)
    }
    cardLi.append(cardCharacteristics)
}

function render(element) {
    for (let i = 0; i < data.lenght; i++) {
        card(i)
    }
}
render()