function newCard() {
    for (let i = 0; i < data.length; i++) {
        const cards = document.getElementsByClassName('cards')

        const newLi = addNewLi()

        const newHeader = addNewHeader()
        newHeader.innerText = data[i].name
        newLi.append(newHeader)

        const newImage = addImage()
        newImage.src = data[i].sprites.other["official-artwork"].front_default 
        newLi.append(newImage)

        const newUl = addNewUl()
        newLi.append(newUl)
        
        for (let j = 0; j < data[i].stats.length; j++) {
            const statsLi = document.createElement('li')
            statsLi.innerText = data[i].stats[j].stat.name.toUpperCase() + ': ' + data[i].stats[j].base_stat
            newUl.append(statsLi)
        }

        const h3 = addGamesHeader()
        newLi.append(h3)

        const gamesUl = addGames()
        newLi.append(gamesUl)

        for (let k = 0; k < data[i].game_indices.length; k++) {
            const gamesLi = document.createElement('li')
            gamesLi.innerText = data[i].game_indices[k].version.name
            gamesUl.append(gamesLi)
        }

        cards[0].append(newLi)

        let indexNumber = -1
        const spritesList = JSON.parse(JSON.stringify(data[i].sprites))
        delete spritesList.versions
        delete spritesList.other
        console.log(spritesList)
        newLi.addEventListener('click', () => {
            indexNumber += 1
            console.log(indexNumber)
            console.log(Object.keys(spritesList)[indexNumber])
            
            if (spritesList[Object.keys(spritesList)[indexNumber]] !== null) {
                newImage.setAttribute('src', spritesList[Object.keys(spritesList)[indexNumber]])

                if (indexNumber > Object.keys(spritesList).length) {
                    newImage.setAttribute('src', data[i].sprites.other["official-artwork"].front_default)
                    indexNumber = -1
                }
            } else {
                if (indexNumber > Object.keys(spritesList).length) {
                    newImage.setAttribute('src', data[i].sprites.other["official-artwork"].front_default)
                    indexNumber = -1
                } else {
                    indexNumber += 1

                    newImage.setAttribute('src', spritesList[Object.keys(spritesList)[indexNumber]])
                }
            }
            })
    }
}

function addNewLi() {
    const newLi = document.createElement('li')
    newLi.classList.add('card')

    return newLi
}

function addNewHeader() {
    const newHeader = document.createElement('h2')
    newHeader.classList.add('card--title')

    return newHeader
}

function addImage() {
    const newImage = document.createElement('img')
    newImage.classList.add('card--img')
    newImage.style.width = '256px'

    return newImage
}

function addNewUl() {
    const newUl = document.createElement('ul')
    newUl.classList.add('card--text')

    return newUl
}

function addGamesHeader() {
    const h3 = document.createElement('h3')
    h3.innerText = 'Games'

    return h3
}

function addGames() {
    const gamesUl = document.createElement('ul')
    gamesUl.classList.add('games')

    return gamesUl
}

newCard()