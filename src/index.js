const pokemonListUL = document.querySelector(".cards")

function renderPokemon(){
    //reset the pokemon card
    //loop through pokemon data create new li element for each
    for(let i = 0; i < data.length; i++){
        //create a <li></li> for the pokemon
        const pokemonLi = document.createElement('li')
        pokemonLi.classList.add('card')

        //add a header
        const header = renderHeader(data[i])
        //add an image
        const image = renderImage(data[i])
        //add stats
        const stats = renderStats(data[i])
        //add game info
        const games = gameInfo(data[i])
        //put them together
        pokemonLi.appendChild(header)
        pokemonLi.appendChild(image)
        pokemonLi.appendChild(stats)
        pokemonLi.appendChild(games)


        //add the element to the pokemonListUL
        pokemonListUL.appendChild(pokemonLi)
    }

}

function renderHeader(data){
    const header = document.createElement('h2')
    header.classList.add('card--title')
    header.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1)
    return header
}

function renderImage(data){
    const image = document.createElement('img')
    image.src = data.sprites.other['official-artwork'].front_default
    image.classList.add('card--img')
    image.width = 256;
    return image
}

function renderStats(data){
    const stats = document.createElement('li')
    stats.classList.add('card--text')
        for(let i = 0; i < data.stats.length; i++){
            const statLi = document.createElement('li')
            statLi.textContent = `${data.stats[i].stat.name.toUpperCase()}: ${data.stats[i].base_stat}`
            stats.appendChild(statLi)
        }
    return stats
}

function gameInfo(data){
    const gameInfo = document.createElement('li')
    gameInfo.classList.add('card--text')
    gameInfo.textContent += 'Pokemon appears in: \n'
    for(let i = 0; i < data.game_indices.length -1; i++){
        gameInfo.textContent += `${data.game_indices[i].version.name}` + ', '
    }
    gameInfo.textContent += `${data.game_indices[data.game_indices.length -1].version.name}` + '.'
    console.log(gameInfo)
    return gameInfo
}



function main(){
    renderPokemon()
}

main()