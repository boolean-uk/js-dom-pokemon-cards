
console.log(data);

//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0]);
const cardsList = document.querySelector('.cards')

for(let i=0;i<data.length; i++){
    const pokemonListItem = document.createElement('li')
    pokemonListItem.classList.add('card')

    const pokemonName = document.createElement('h2')
    pokemonName.innerText = data[i].name
    pokemonName.classList.add('card--title')

    pokemonListItem.append(pokemonName)

    const pokemonImg = document.createElement('img')
    pokemonImg.setAttribute("width", "256")
    pokemonImg.classList.add('card--img')
    pokemonImg.setAttribute("src", data[i].sprites.other["official-artwork"].front_default)

    pokemonListItem.append(pokemonImg)

    cardsList.append(pokemonListItem)
    const pokemonStatList = document.createElement('ul')
    pokemonStatList.classList.add('card--text')
    pokemonListItem.append(pokemonStatList)
    for (j = 0; j < data[i].stats.length; j++ ) {
      const statListItem = document.createElement('li')
      statListItem.innerHTML = data[i].stats[j].stat.name.toUpperCase() + ":  " + data[i].stats[j].base_stat
      pokemonStatList.append(statListItem)
    }

    const pokemonGameInfoList= document.createElement('ul')
    pokemonListItem.append(pokemonGameInfoList)

    for (j = 0; j < data[i].game_indices.length; j++ ) {
        const gameListItem = document.createElement('li')
        console.log(data[i].game_indices[j])
        gameListItem.innerHTML = data[i].game_indices[j].version.name
        pokemonGameInfoList.append(gameListItem)
      }

}
