
console.log(data);

function createCard() {
    const card = document.createElement('li')
    card.classList.add('card')
    return card
}

function addCardHeader(name) {
    const header = document.createElement('h2')
    header.classList.add('card--title')
    header.innerText = name.charAt(0).toUpperCase()
    + name.substring(1)
    return header
}

function addCardImage(sprites) {
    const image = document.createElement('img')
    image.setAttribute('width', 256)
    image.classList.add('card--img')
    image.setAttribute('src', sprites.other["official-artwork"].front_default) // data[i].sprites.other["official-artwork"].front_default)
    
    image.addEventListener("mouseenter", (event) => addImageSlider(event, image, sprites))
    image.addEventListener("mouseout", () => {
        setTimeout( () => {image.setAttribute('src', sprites.other["official-artwork"].front_default)}, 1001)
    })
    return image
}

function addImageSlider(event, image, sprites) {
    const images = getAllImages(sprites)
    image.setAttribute('src', images[1])
    // TODO: make this work
    // images.forEach ( item => {
    //     setTimeout(() => {image.setAttribute('src', item)}, 1000)
    // })
}

function getAllImages(sprites) {
    const images = []
    if (sprites.front_default) 
        images.push(sprites.front_default)
    // if (sprites.front_female) 
    //     images.push(sprites.front_female)
    // if (sprites.front_shiny) 
    //     images.push(sprites.front_shiny)
    if (sprites.other.dream_world.front_default)
        images.push(sprites.other.dream_world.front_default)
    // if (sprites.other["official-artwork"].front_default)
    //     images.push(sprites.other["official-artwork"].front_default)
    return images
}

function addStatsSection(dataStats) {
    const stats = document.createElement('ul')
    stats.classList.add('card--text')
    
    for (let j = 0; j < dataStats.length; j++) {
        const stat = document.createElement('li')
        stat.innerText =  dataStats[j].stat.name.toUpperCase()
        + ": " + dataStats[j].base_stat

        stats.append(stat)
    }
    return stats
}

function addGameVersions(game_indices) {
    const games = document.createElement('p')
    games.classList.add('card--text')
    games.innerText = 'APPEARED IN: '

    for (let j = 0; j < game_indices.length -1; j++) {
        games.innerText += game_indices[j].version.name + ", ";
    }
    games.innerText += game_indices[game_indices.length -1].version.name
    return games
}

function render() {
    const cards = document.querySelector('.cards')
    data.forEach( (element) => {
        const card = createCard()
        card.append(addCardHeader(element.name))
        card.append(addCardImage(element.sprites))
        card.append(addStatsSection(element.stats))
        card.append(addGameVersions(element.game_indices))
        cards.append(card)
    })
}

render()