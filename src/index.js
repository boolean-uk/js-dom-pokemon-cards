// console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
//console.log(data[0]); 


const cards = document.querySelector('.cards')

function drawCard()
{
    console.log(data[0])
    for(const pokemon of data) {

        // Making the card as list item
        const card = document.createElement('li')
        card.classList.add('card')

            // Pokemon name
            const name = document.createElement('h2')
            name.classList.add('card--title')
            name.innerText = pokemon.name
            
            // Pokemon images
            const images = []
            images.push(pokemon.sprites.other["official-artwork"].front_default)
            images.push(pokemon.sprites.other.dream_world.front_default)
            for (const generation in pokemon.sprites.versions) {
                for (const version in pokemon.sprites.versions[generation]) {
                    const frontDefault = pokemon.sprites.versions[generation][version].front_default;
                    // Check if front_default exists for this version
                    if (frontDefault) {
                        images.push(frontDefault);
                    }
                }
            }
            
            console.log(images)
            // Pokemon image
            const image = document.createElement('img')
            image.classList.add('card--img')
            image.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)
            image.setAttribute('width', '256')
            image.addEventListener('click', () => toggleImage(event, images))
            
            // Pokemon stats
            const statTitle = document.createElement('h3')
            statTitle.classList.add('card--smallertext')
            statTitle.innerText = 'Stats'

            const stats = document.createElement('ul')
            stats.classList.add('card--text')
            for (const stat of pokemon.stats) {
                const statItem = document.createElement('li')
                statItem.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
                stats.appendChild(statItem);
            }

            // Pokemon games appeared in
            const gamesTitle = document.createElement('h3')
            gamesTitle.classList.add('card--smallertext')
            gamesTitle.innerText = 'Appears in'

            const games = document.createElement('ul')
            games.classList.add('card--text')
            for (const game of pokemon.game_indices) {
                const gameItem = document.createElement('li')
                gameItem.textContent = `${game.version.name}`
                games.appendChild(gameItem)
            }


        // Appending children to the card
        card.appendChild(name)
        card.appendChild(image)
        card.appendChild(statTitle)
        card.appendChild(stats)
        card.appendChild(gamesTitle)
        card.appendChild(games)
        
        //Appending the card to the cards
        cards.appendChild(card);
    }
}

function toggleImage(event, images) {
    const image = event.target
    let currentIndex = images.indexOf(image.getAttribute('src'))
    let nextIndex = (currentIndex + 1) % images.length
    image.setAttribute('src', images[nextIndex])
}

drawCard()