const body = document.body

function createAnElement(htmlTag, className, innerHTML = '') {
    const element = document.createElement(htmlTag)
    element.innerHTML = innerHTML
    if (className) element.classList.add(className)
    return element
}

function collectFrontDefaultUrls(data) {
    const urls = []
        JSON.stringify(data, (key, value) => {
            if (key === 'front_default') urls.push(value) 
            return value
        })
        return urls
}

const differentImages = data.map(collectFrontDefaultUrls)

function board() {
    body.append(createAnElement('h1', '', 'Pokemon Trading Cars'))
    const cards = createAnElement('ul', 'cards')
    body.append(cards)

    for (let i = 0; i < data.length; i++) {
        const cardType = createAnElement('li', 'card')

        const image = createAnElement('img', 'card--img')
        image.width = 256
        image.src = data[i].sprites.other['official-artwork'].front_default

        const gameList = createAnElement('ul', 'card--text')
        cardType.append(
            createAnElement('h2', 'card--title', `${data[i].name}`),
            image,
            createAnElement('h4', 'img-description', 'Click on image'),
            createAnElement('ul', 'card--text', `
            <li> HP : ${data[i].stats[0].base_stat} </li>
            <li> ATTACK : ${data[i].stats[1].base_stat} </li>
            <li> DEFENSE : ${data[i].stats[2].base_stat} </li>
            <li> SPECIAL-ATTACK: : ${data[i].stats[3].base_stat} </li>
            <li> SPECIAL-DEFENSE : ${data[i].stats[4].base_stat} </li>
            <li> SPEED : ${data[i].stats[5].base_stat} </li>
            `),
            createAnElement('h2', '', 'Battles'),
            gameList
        )
        for (let j = 0; j < data[i].game_indices.length; j++) {
            const name = createAnElement('li','', `Name : ${data[i].game_indices[j].version.name}`)
            gameList.append(name)
        }
        let count = 0
        image.addEventListener('click', function() {
            image.src = differentImages[i][count]
            if (count !== differentImages[i].length - 1) {
                count++
            } else {
                count = 0
            }
        })
        cards.append(cardType)
    }
}
board()