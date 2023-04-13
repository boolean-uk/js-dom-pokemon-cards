
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cardList = document.querySelector('.cards')

for (let i = 0; i < data.length; i++) {
    // create an element
    const pokemonElement = document.createElement('li')
    pokemonElement.classList.add('card')

    const pokemonImage = document.createElement('img')
    pokemonImage.classList.add('card--img')

    // create name as an h2
    const pokemonName = document.createElement('h2')
    pokemonName.classList.add('card--title')
    pokemonName.innerText = data[i].name

    pokemonImage.setAttribute('src', data[i].sprites.other["official-artwork"].front_default)
    pokemonElement.setAttribute('width', 256)

    // append h2 to li
    pokemonElement.append(pokemonName)
    pokemonElement.append(pokemonImage)
    


    // append li to cardlist
    cardList.append(pokemonElement)
    // cardList.append(pokemonImage)
}