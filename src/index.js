
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cardList = document.querySelector('.cards')

for (let i = 0; i < data.length; i++) {
    // create an element
    const pokemonElement = document.createElement('li')
    pokemonElement.classList.add('card')
 
    // create name as an h2
    const pokemonName = document.createElement('h2')
    pokemonName.classList.add('card--title')
    pokemonName.innerText = data[i].name
    // const pokemonNameTUC = pokemonName.toUpperCase()
    // console.log(pokemonNameTUC);

    // create img
    const pokemonImage = document.createElement('img')
    pokemonImage.classList.add('card--img')
    pokemonImage.setAttribute('src', data[i].sprites.other["official-artwork"].front_default)
    pokemonImage.setAttribute('width', 256)

    // create ul
    const pokemonStatsList = document.createElement('ul')
    pokemonStatsList.classList.add("card--text")

    // create hpli inside ul
    const pokemonHp = document.createElement('li')
    pokemonHp.innerText = 'HP: ' + data[i].stats[0].base_stat

    // create ATli inside ul
    const pokemonAT = document.createElement('li')
    pokemonAT.innerText = 'ATTACK: ' + data[i].stats[1].base_stat

    // create DEFli inside ul
    const pokemonDEF = document.createElement('li')
    pokemonDEF.innerText = 'DEFENSE: ' + data[i].stats[2].base_stat

    // create SAli inside ul
    const pokemonSA = document.createElement('li')
    pokemonSA.innerText = 'SPECIAL-ATTACK: ' + data[i].stats[3].base_stat

    // create SDli inside ul
    const pokemonSD = document.createElement('li')
    pokemonSD.innerText = 'SPECIAL-DEFENSE: ' + data[i].stats[4].base_stat

    // create SPDli inside ul
    const pokemonSPD = document.createElement('li')
    pokemonSPD.innerText = 'SPEED: ' + data[i].stats[5].base_stat

    // Create p with games
    const pokemonGames = document.createElement('p')
    pokemonGames.classList.add("card--text")
    pokemonGames.innerText = 'Games included: ' 
    
    // make a loop so it includes the games
    for(let j = 0; j < data[i].game_indices.length; j++){
        pokemonGames.innerText += data[i].game_indices[j].version.name + ', '
    }

    // append li to pokemonStatsList
    pokemonStatsList.append(pokemonHp)
    pokemonStatsList.append(pokemonAT)
    pokemonStatsList.append(pokemonDEF)
    pokemonStatsList.append(pokemonSA)
    pokemonStatsList.append(pokemonSD)
    pokemonStatsList.append(pokemonSPD)

    
    // append h2 to pokemonElement
    pokemonElement.append(pokemonName)
    // append img to pokemonElement
    pokemonElement.append(pokemonImage)
    // append ul to pokemonElement
    pokemonElement.append(pokemonStatsList)
    // append p to pokemonElement
    pokemonElement.append(pokemonGames)

    
    
    // append li to cardlist
    cardList.append(pokemonElement)
    // cardList.append(pokemonImage)
}
