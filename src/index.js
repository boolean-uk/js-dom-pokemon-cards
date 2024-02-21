const cards = document.querySelector('.cards')
const container = document.querySelector('.btn-container')
const display = () => {

data.forEach(pokemon => {
    const card = document.createElement('li')
    card.classList.add('card')

    const title = document.createElement('h2')
    const image = document.createElement('img')

    title.textContent = pokemon.name
    image.src = pokemon.sprites.other["official-artwork"].front_default

    card.appendChild(title)
    card.appendChild(image)

    // Adding stats to card in list
    image.classList.add('card--img')
    pokemon.stats.forEach(stat => {
        const cardText = document.createElement('ul')
        cardText.classList.add('card--text')
        cardText.textContent = `${stat.stat.name}: ${stat.base_stat}`
        card.appendChild(cardText)
    })

    // find games pokemon appeared in
    const games = [];
    pokemon.game_indices.forEach(game => {
        games.push(game.version.name)
    })
    
    // Add games to p tag
    const p = document.createElement('p')
    p.classList.add('games--p')
    p.textContent = "Appeared in: "
    games.forEach(g => {
       p.textContent += `${g} `
    })

    card.appendChild(p)
    cards.appendChild(card)

    // Create array of image src 
    const images = Object.values(pokemon.sprites).filter((i) => i != null)
    for (let i = 0; i < images.length; i++){
        const arr = []
        if (images[i].other === "object"){
            delete images[i];
        }
    }

    // Deciding image in array
    let counter = 0;
    const clickable = document.getElementById('title')

    // Change image to src from array
    clickable.addEventListener('click', e => {
        image.src = images[counter]
        console.log(images[counter])
        counter++
        if (counter >= images.length){
            counter = 0;
            image.src = pokemon.sprites.other["official-artwork"].front_default

        }
    })
})
}

display()
