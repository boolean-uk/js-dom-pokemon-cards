
console.log(data);
const cards = document.querySelector('.cards')
const button = document.getElementById('toggleButton')

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

function createCard () {

    cards.innerHTML = ''

    for (let i = 0; i < data.length; i++) {
        const list = document.createElement('li')
        list.classList.add('card')
        
        const title = document.createElement('h2')
        title.classList.add('card--title')
        title.innerText = data[i].name

        const image = document.createElement('img')
        image.width = '256'
        image.classList.add('card--img')
        image.src = data[i].sprites.other["official-artwork"].front_default

        const cardText = document.createElement('ul')
        cardText.classList.add('card--text')

        const statsInfo = data[i].stats.map(stat => ({name: stat.stat.name.toUpperCase(), base_stat: stat.base_stat}))

        const el1 = document.createElement('li')
        const el2 = document.createElement('li')
        const el3 = document.createElement('li')
        const el4 = document.createElement('li')
        const el5 = document.createElement('li')
        const el6 = document.createElement('li')

        el1.innerText = statsInfo[0].name + ': ' + statsInfo[0].base_stat

        el2.innerText = statsInfo[1].name + ': ' + statsInfo[1].base_stat

        el3.innerText = statsInfo[2].name + ': ' + statsInfo[2].base_stat

        el4.innerText = statsInfo[3].name + ': ' + statsInfo[3].base_stat

        el5.innerText = statsInfo[4].name + ': ' + statsInfo[4].base_stat

        el6.innerText = statsInfo[5].name + ': ' + statsInfo[5].base_stat

        cardText.append(el1)
        cardText.append(el2)
        cardText.append(el3)
        cardText.append(el4)
        cardText.append(el5)
        cardText.append(el6)

        const games = document.createElement('p')
        games.classList.add('games')
        games.innerText = 'Played Games:'

        const cardText2 = document.createElement('ul')
        cardText2.classList.add('card--text')

        const gamesInfo = data[i].game_indices.map(game => ({name: game.version.name.toUpperCase()}))
        console.log(gamesInfo)

        const gameEl = []

        for (let j = 0; j < gamesInfo.length; j++) {
            gameEl.push(document.createElement('li'))
        }
        
        gamesInfo.forEach(game => {
            for (let k = 0; k < gamesInfo.length; k++) {
                gameEl[k].innerText = gamesInfo[k].name
                cardText2.append(gameEl[k])
            }
        })

        const images = []
        images.push(data[i].sprites.back_default)
        images.push(data[i].sprites.back_shiny)
        images.push(data[i].sprites.front_default)
        images.push(data[i].sprites.front_shiny)

        const button = document.createElement('button')
        button.classList.add('button')
        button.innerText = 'Toggle'

        button.addEventListener('click', function() {
            const randomIndex = Math.floor(Math.random() * images.length)
            const randomImage = images[randomIndex]

            image.src = randomImage
        })

        list.append(title)
        list.append(image)
        list.append(cardText)
        list.append(games)
        list.append(cardText2)
        list.append(button)

        cards.append(list)
    }
}
createCard()