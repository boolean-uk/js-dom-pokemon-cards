
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

cards = document.querySelector('.cards')

for (let i = 0; i < data.length; i++) {
    const card = document.createElement('li')
    card.classList.add('card')

    const header = document.createElement('h2')
    header.classList.add('card--title')
    header.innerText = data[i].name.charAt(0).toUpperCase()
    + data[i].name.substring(1) 

    const image = document.createElement('img')
    image.width = "256"
    image.classList.add('card--img')
    image.setAttribute('src', data[i].sprites.other["official-artwork"].front_default)

    const stats = document.createElement('ul')
    stats.classList.add('card--text')

    for (let j = 0; j < data[i].stats.length; j++) {
        const stat = document.createElement('li')
        stat.innerText =  data[i].stats[j].stat.name.toUpperCase()
        + ": " + data[i].stats[j].base_stat

        stats.append(stat)
    }

    card.append(header)
    card.append(image)
    card.append(stats)

    cards.append(card)
}