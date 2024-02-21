
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


window.onload = function() {
    const cardsContainer = document.querySelector('.cards');
    data.forEach(pokemon => {
        // Create the card container
        const card = document.createElement('div');
        card.className = 'card';

        // Create the title element
        const title = document.createElement('h2');
        title.textContent = pokemon.name;
        title.className = 'card--title';

        // Create the image element
        const image = document.createElement('img');
        image.src = pokemon.sprites.other['official-artwork'].front_default;
        image.alt = pokemon.name;
        image.className = 'card--img';
        // Append all elements to the card container
        card.appendChild(title);
        card.appendChild(image);
        // Create the stats paragraphs
        for(let i = 0; i < pokemon.stats.length; i++){
            const stats = document.createElement('p');
            stats.textContent = `${pokemon.stats[i].stat.name}: ${pokemon.stats[i].base_stat}`;
            stats.className = 'card--text';
            card.appendChild(stats);
        }
        document.body.appendChild(card);
        cardsContainer.appendChild(card);

    });
}