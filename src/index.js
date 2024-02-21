const statDescriptions = {
    hp: "HP",
    attack: "ATTACK",
    defense: "DEFENSE",
    special_attack: "SPECIAL-ATTACK",
    special_defense: "SPECIAL-DEFENSE",
    speed: "SPEED",
  };
  
  const cardsContainer = document.querySelector('.cards')
  
  data.forEach(pokemon => {
    const card = document.createElement('li')
    card.classList.add('card')
  
    const title = document.createElement('h2')
    title.classList.add('card--title')
    title.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    card.appendChild(title)
  
    const image = document.createElement('img')
    image.classList.add('card--img')
    image.width = 256
    image.src = pokemon.sprites.other['official-artwork'].front_default
    card.appendChild(image)
  
    const textList = document.createElement('ul')
    textList.classList.add('card--text')
  
    Object.entries(pokemon.stats).forEach(([stat, value]) => {
      const listItem = document.createElement('li')
      listItem.textContent = `${statDescriptions[stat.toUpperCase()]}: ${value.base_stat}`
      textList.appendChild(listItem)
    })
  
    card.appendChild(textList)
    cardsContainer.appendChild(card)
  });
  