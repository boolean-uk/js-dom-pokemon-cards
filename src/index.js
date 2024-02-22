// console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
//console.log(data[0]); 


const cards = document.querySelector('.cards')

function drawCard()
{
    console.log(data[0])
    for(const pokemon of data) {
        const card = document.createElement('li')
        card.classList.add('card')

        const title = document.createElement('h2')
        title.classList.add('card--title')
        title.innerText = pokemon.name

        const image = document.createElement('img');
        image.classList.add('card--img')
        image.setAttribute('src', pokemon.sprites.other["official-artwork"].front_default)
        image.setAttribute('width', '256')

        const stats = document.createElement('ul')
        stats.classList.add('card--text')
        for (const stat of pokemon.stats) {
            const statItem = document.createElement('li')
            statItem.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
            stats.appendChild(statItem);
        }


        card.appendChild(title)
        card.appendChild(image)
        card.appendChild(stats)

        cards.appendChild(card);
    }
}

drawCard()