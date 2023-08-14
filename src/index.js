const cards = document.querySelector('.cards')

//You can start simple and just render a single 
//pokemon card from the first element

for (let i = 0; i < data.length; i++) {
    const card = document.createElement('li')
    card.classList.add('card')

    const cardTitle = document.createElement('h2')
    cardTitle.classList.add('card--title')
    cardTitle.innerText = data[i].name
    card.append(cardTitle)

    const img = document.createElement('img')
    img.width = 256
    img.classList.add("card--img")
    img.src = data[i].sprites.other["official-artwork"].front_default
    card.append(img)
    
    const cardText = document.createElement('ul')
    cardText.classList.add("card--text")

    for (let j = 0; j < data[i].stats.length; j++) {
        const stat = document.createElement('li')
        stat.innerText = data[i].stats[j].stat.name.toUpperCase() + ': ' + data[i].stats[j].base_stat
        cardText.append(stat)
    }

    card.append(cardText)
    cards.append(card)
}

console.log(data[0].stats);
console.log(cards);
