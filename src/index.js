const cards = document.querySelector('.cards')
const display = () => {

data.forEach(pokemon => {
    const card = document.createElement('li')
    card.classList.add('card')

    const title = document.createElement('h2')
    const image = document.createElement('img')

    title.textContent = pokemon.name
    image.src = pokemon.sprites.front_default

    card.appendChild(title)
    card.appendChild(image)

    image.classList.add('card--img')
    pokemon.stats.forEach(stat => {
        const cardText = document.createElement('ul')
        cardText.classList.add('card--text')
        cardText.textContent = `${stat.stat.name}: ${stat.base_stat}`
        card.appendChild(cardText)
    })
    cards.appendChild(card)
})
}

display()
