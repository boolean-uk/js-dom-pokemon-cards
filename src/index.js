
//get from html
const cardList = document.querySelector('.cards')

function renderCards() {
    for(let i = 0; i < data.length; i++) {
        // Get the current task and create the initial div that gets pushed to the cardList
        const card = data[i]
        const cardDiv = document.createElement('div')
        // Create elements for each part of the cardDiv for the task
        const image = document.createElement('img')
        const heading = document.createElement('h2')
        const statsList = document.createElement('ul')
        const gamesSection = document.createElement('section')
        
        console.log(cardDiv) //just for checking
        //classNames so thay can get used by other files
        cardDiv.className = 'card'
        heading.className = 'card--title'
        statsList.className = 'card--stat'

        //get stats from data.js
        const stats = [
            { name: 'HP', value: card.stats[0].base_stat },
            { name: 'ATTACK', value: card.stats[1].base_stat },
            { name: 'DEFENSE', value: card.stats[2].base_stat },
            { name: 'SPECIAL-ATTACK', value: card.stats[3].base_stat },
            { name: 'SPECIAL-DEFENSE', value: card.stats[4].base_stat },
            { name: 'SPEED', value: card.stats[5].base_stat }
        ];


        //create a 'p' for each of the elements in stats, give them a name and append
        stats.forEach(stat => {
            const statElement = document.createElement('p');
            statElement.textContent = `${stat.name}: ${stat.value}`;
            statElement.className = 'stat-item';
            statsList.appendChild(statElement)
        })
        

        //image config
        image.className = 'card--img'
        image.src = card.sprites.front_default
        image.alt = card.name
        image.width = 200
        image.height = 200

        //games (extension) config, creating a heading for the games to show up before the list itself
        gamesSection.className = 'card--games'
        const gamesHeading = document.createElement('h2')
        gamesHeading.textContent = 'Games:'
        const gamesList = document.createElement('ul')
        gamesList.className = 'card--games-list'

        // creating an element for each here as well, ad appending to the list
        card.game_indices.forEach(game => {
            const gameElement = document.createElement('li');
            let gameName = cap(game.version.name)
            gameElement.textContent = `${gameName}`;
            gameElement.className = 'game-item';
            gameElement
            gamesList.appendChild(gameElement)
        })

       



        // Set the innerText of the pokemon names and capitalize
        let name = cap(card.name)
        heading.innerText = name

    
        cardDiv.appendChild(heading)
        cardDiv.appendChild(image)
        cardDiv.appendChild(statsList)
        cardDiv.appendChild(gamesHeading)
        cardDiv.appendChild(gamesList)

        cardList.appendChild(cardDiv)
        
    }
 
    
}
function cap(str) { //from my functions tasks
    firstLet = str[0]
    let newLet = firstLet.toUpperCase()
    const result = newLet + str.slice(1);
    return result
  }
function main() {
    console.log("running...");
    renderCards()
}
main();