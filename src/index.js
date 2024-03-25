
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0].sprites);

function newCard() {
    for (let i = 0; i < data.length; i++) {
        const cards = document.getElementsByClassName('cards')

        const newLi = document.createElement('li')
        newLi.classList.add('card')

        const newHeader = document.createElement('h2')
        newHeader.innerText = data[i].name
        newHeader.classList.add('card--title')
        newLi.append(newHeader)

        const newImage = document.createElement('img')
        newImage.classList.add('card--img')
        newImage.style.width = '256px'
        newImage.setAttribute('src', data[i].sprites.other["official-artwork"].front_default) 
        newLi.append(newImage)

        const newUl = document.createElement('ul')
        newUl.classList.add('card--text')
        newLi.append(newUl)
        
        for (let j = 0; j < data[i].stats.length; j++) {
            const statsLi = document.createElement('li')
            statsLi.innerText = data[i].stats[j].stat.name.toUpperCase() + ': ' + data[i].stats[j].base_stat
            newUl.append(statsLi)
        }

        const h3 = document.createElement('h3')
        h3.innerText = 'Games'
        newLi.append(h3)

        const gamesUl = document.createElement('ul')
        gamesUl.classList.add('games')
        newLi.append(gamesUl)

        for (let k = 0; k < data[i].game_indices.length; k++) {
            const gamesLi = document.createElement('li')
            gamesLi.innerText = data[i].game_indices[k].version.name
            gamesUl.append(gamesLi)
        }

        cards[0].append(newLi)

        newLi.addEventListener('click', () => {
            newImage.setAttribute('src', data[i].sprites.back_default)
            })
    }
    
}

newCard()

// function togglePicture(card) {
//     card.addEventListener('click', () => {
//         alert('something')
//     })
// }