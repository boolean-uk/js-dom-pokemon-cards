
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

    // append h2 to li
    pokemonElement.append(pokemonName)


    // append li to cardlist
    cardList.append(pokemonElement)
}