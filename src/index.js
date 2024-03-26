for (let i = 0; i < data.length; i++){
  const pokemon = data[i];

  const pokemonImage = pokemon.sprites.other['official-artwork'].front_default;
  const pokemonStats = pokemon.stats
  
  // <li class="card">
  const listItem = document.createElement('li')
  listItem.classList.add('card')
  
  // <h2 class="card--title">Bulbasaur</h2>
  const h2 = document.createElement('h2')
  h2.classList.add('card--title')
  h2.innerText = pokemon.name;
  
  // append the h2 to the <li>
  listItem.append(h2)
  
  const image = document.createElement('img')
  image.classList.add('card--img')
  image.setAttribute('width', 256)
  image.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default)
  
  listItem.append(image)
  
  //Declaring the stats here
  const statsList = [
    { name: 'HP', value: 45 },
    { name: 'ATTACK', value: 49 },
    { name: 'DEFENSE', value: 49 },
    { name: 'SPECIAL-ATTACK', value: 65 },
    { name: 'SPECIAL-DEFENSE', value: 65 },
    { name: 'SPEED', value: 45 }
  ];
  
  // This is to call the function to display the statsi earlier declare
  displayStats(statsList);
  
  function displayStats(statsList) {
    const ul = document.createElement('ul')
  
    //I looped to create list items
    for (let i = 0; i < statsList.length; i++) {
      const li = document.createElement('li')
      li.textContent = `${statsList[i].name}: ${statsList[i].value}`
      ul.append(li);
    }
  
    // Append the ul element to the listItem
    listItem.append(ul);
  }
  
  const cardsFinalDisplay = document.querySelector('.cards')
  cardsFinalDisplay.append(listItem)
  

}

const pokemon = data[0]



