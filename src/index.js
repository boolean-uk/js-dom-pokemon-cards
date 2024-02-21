function renderCards() {
        // Get the cards container
    const cardsContainer = document.querySelector('.cards')

    // Loop through the data array
    for (let i = 0; i < data.length; i++) {
        // Get the current pokemon
        const pokemon = data[i]

        // Create a new card list item
        const cardItem = document.createElement('li')
        cardItem.className = 'card'

        // Create a new heading element
        const heading = document.createElement('h2');
        heading.className = 'card--title'
        heading.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

        // Create a new image element
        const image = document.createElement('img')
        image.width = 256
        image.className = 'card--img'
        image.src = pokemon.sprites.other['official-artwork'].front_default
        image.alt = pokemon.name

        // Create a new unordered list element for stats
        const statsList = document.createElement('ul')
        statsList.className = 'card--text'

        // Iterate over the stats and create list items
        const stats = [
            { name: 'HP', value: pokemon.stats[0].base_stat },
            { name: 'ATTACK', value: pokemon.stats[1].base_stat },
            { name: 'DEFENSE', value: pokemon.stats[2].base_stat },
            { name: 'SPECIAL-ATTACK', value: pokemon.stats[3].base_stat },
            { name: 'SPECIAL-DEFENSE', value: pokemon.stats[4].base_stat },
            { name: 'SPEED', value: pokemon.stats[5].base_stat }
        ];

        stats.forEach(stat => {
            const statItem = document.createElement('li')
            statItem.textContent = `${stat.name}: ${stat.value}`
            statsList.appendChild(statItem)
        });

        // Create a new section for games
        const gamesSection = document.createElement('section')
        gamesSection.className = 'card--games'
        const gamesHeading = document.createElement('p')
        gamesHeading.textContent = 'Appeared in Games:'
        const gamesList = document.createElement('ul')
        gamesList.className = 'card--games-list'

        // Iterate over the game_indices and create list items
        pokemon.game_indices.forEach(gameIndex => {
            const gameListItem = document.createElement('li')
            gameListItem.textContent = gameIndex.version.name.charAt(0).toUpperCase() + gameIndex.version.name.slice(1)
            gamesList.appendChild(gameListItem)
        });

        // Append games heading and list to the games section
        gamesSection.appendChild(gamesHeading);
        gamesSection.appendChild(gamesList);

        // Append the heading, image, stats list, and games section to the card
        cardItem.appendChild(heading);
        cardItem.appendChild(image);
        cardItem.appendChild(statsList);
        cardItem.appendChild(gamesSection);

        // Append the card to the cards container
        cardsContainer.appendChild(cardItem);
    }
}

function main() {
    renderCards()
}

main()

// console.log(data);

// //You can start simple and just render a single 
// //pokemon card from the first element
// console.log(data[0]);
