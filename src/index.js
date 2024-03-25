
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0].game_indices[0].version.name);

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
        newImage.src = data[i].sprites.other["official-artwork"].front_default
        newLi.append(newImage)

        const newUl = document.createElement('ul')
        newUl.classList.add('card--text')
        newLi.append(newUl)
        
        for (let j = 0; j < 6; j++) {
            const statsLi = document.createElement('li')
            statsLi.innerText = data[i].stats[j].stat.name.toUpperCase() + ': ' + data[i].stats[j].base_stat
            newUl.append(statsLi)
        }

        cards[0].append(newLi)
    }
    
}

newCard()