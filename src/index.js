
console.log(data);

const target = document.querySelector('ul.cards')

const getName = (pokemon) => {
    return capatilize(pokemon.name)
}

const capatilize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const createName = (pokemon) => {
    const element = document.createElement('h2')
    element.innerText = getName(pokemon)
    return element
}

const getImg = (pokemon) => {
    return pokemon.sprites.other['official-artwork'].front_default
}

const createImg = (pokemon) => {
    const element = document.createElement('img')
    element.setAttribute('width', '256')
    element.setAttribute('class', 'card--img')
    element.setAttribute('src', getImg(pokemon))
    return element
}

const createStats = (pokemon) => {
    const ul = document.createElement('ul')
    ul.setAttribute('class', 'card--text')
    pokemon.stats.forEach(element => {
        const li = document.createElement('li')
        li.innerText = `${element.stat.name.toUpperCase()}: ${element.base_stat}`
        ul.append(li)
    })
    return ul
}

const createFound = (pokemon) => {
    const details = document.createElement('details')
    const summary = document.createElement('summary')
    summary.innerText = 'Found in Version'
    details.append(summary)
    pokemon.game_indices.forEach(element => {
        const p = document.createElement('p')
        p.innerText = capatilize(element.version.name)
        details.append(p)
    })
    return details
}

const populateList = (data) => {
    data.forEach(pokemon => {
        const card = document.createElement('li')
        card.setAttribute('class', 'card')
        const title = createName(pokemon)
        card.append(title)
        const img = createImg(pokemon)
        card.append(img)
        const ul = createStats(pokemon)
        card.append(ul)
        const details = createFound(pokemon)
        card.append(details)
        target.append(card)
    })
}

populateList(data)

console.log(data[0]);
