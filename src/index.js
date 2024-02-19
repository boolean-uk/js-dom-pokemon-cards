console.log(data);
console.log(data[0]);

const cards = document.querySelector('.cards')

for(i=0; i < data.length; i++)
    drawCard(data[i])

function drawCard(pokemon){
    //create div with cell class
    const card = document.createElement('div')        
    card.classList.add('card')
    

    const name = document.createElement('h2')
    name.classList.add('card--title')
    name.innerText = capitalizeFirstLetter(pokemon.name)
    card.append(name)


    const image = document.createElement('img')
    image.classList.add('card--img')
    image.width = 256
    image.src = pokemon.sprites.other["official-artwork"].front_default
    card.append(image)


    const stats = document.createElement('ul')
    stats.classList.add('card--stats')

    pokemon.stats.forEach(stat => {
        let statText = document.createElement('li')
        statText.innerText = stat.stat.name.toUpperCase() + ": " + stat.base_stat
        stats.append(statText)
    });
    card.append(stats)

    cards.append(card)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}