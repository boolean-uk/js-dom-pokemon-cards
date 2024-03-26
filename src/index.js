for (let i = 0; i < data.length; i++){
  const pokemon = data[i];

  const pokemonImage = pokemon.sprites.other['official-artwork'].front_default;
  const pokemonStats = pokemon.stats
  const theGameIndices = pokemon.game_indices 

  
 
  
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

  // This is to call the function to display the statsi earlier declare
  
  displayStats(pokemonStats)
  
  function displayStats(pokemonStats) {
    const ul = document.createElement('ul')
    
  
    //loop the items
    for (let i = 0; i < pokemonStats.length; i++) {
      const li = document.createElement('li')
      li.classList.add('card--text')
      li.textContent = `${pokemonStats[i].stat.name.toUpperCase()}: ${pokemonStats[i].base_stat}`
      ul.append(li)
    }
  
    // Append the ul element to the listItem
    listItem.append(ul);
    
  }
  
  const cardsFinalDisplay = document.querySelector('.cards')
  cardsFinalDisplay.append(listItem)
  

  //trying the extension 

}




