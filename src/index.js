// console.log(data);
const cards = document.querySelector('.cards')

//You can start simple and just render a single 
//pokemon card from the first element
// console.log(data.length);
// console.log(Object.keys(data[0]));

function showCards() {
    // loop through all the pokemon    
    for (p = 0; p < data.length; p++) {
        // console.log(data[p].name)
        // console.log(data[p].stats)
        // console.log(data[p].sprites.other["official-artwork"].front_default)
    
    // create a card
        const card = document.createElement('card')
    
    // add a card
        card.classList.add('card')
    
    // add a name
        const name = document.createElement('h2')
        name.classList.add('card--title')
        name.innerText = data[p].name.toUpperCase()
        card.append(name)

    // add image
        const image = document.createElement('img')
        image.classList.add('card--img')
        var image_url = data[p].sprites.other["official-artwork"].front_default
        image.width="256"
        image.src = image_url
        card.appendChild(image)

    // add stats
        for (i = 0; i < data[p].stats.length -1; i++) {
            // console.log(data[p].stats[i].stat.name)
            // console.log(data[p].stats[i].base_stat)
            const list = document.createElement('ul')
            list.classList.add('card--text')
            card.appendChild(list)
            // inside the list, add skills
            const skills = document.createElement('li')
            skills.innerText = data[p].stats[i].stat.name.toUpperCase() + ": " + data[p].stats[i].base_stat
            list.appendChild(skills)
        }
    // add the cards to the page
        cards.append(card)

}
}

showCards()