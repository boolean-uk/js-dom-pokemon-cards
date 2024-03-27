const pokemon = data
// console.log(pokemon[0].sprites.other)

const cardsList = document.querySelector('.cards')



function render() {
  pokemon.forEach((key) => {
    const listElement = document.createElement('li')
    listElement.style.listStyleType = 'none'
    listElement.classList.add('card')

    const h2 = document.createElement('h2')
    h2.classList.add('card--title')
    h2.innerText = key.name

    const image = document.createElement('img')
    image.setAttribute('width',256)
    let currentImage = key.sprites.other["official-artwork"].front_default
    image.classList.add('card--img')
    let togglePicture = true

    image.setAttribute('src',currentImage)

    image.addEventListener('click', (event) =>{
      if(togglePicture) {
        
        image.setAttribute('src',key.sprites.other.dream_world.front_default)
        togglePicture = false
      }else {
        image.setAttribute('src',currentImage)
        togglePicture = true
      }
      
    })
    const ul = document.createElement('ul')
    ul.classList.add('card--text')
    
    key.stats.forEach((attr) => {
      const liText = document.createElement('li')
      liText.style.listStyleType = 'none'
      liText.innerText = `${attr.stat.name}: ${attr.base_stat}`
      ul.append(liText)
    })

    const section = document.createElement('section')
    section.classList.add('card--text')
    const gamesInfoTitle = document.createElement('h3')
    key.game_indices.forEach((games) => {
      const liText = document.createElement('li')
      liText.style.listStyleType = 'none'
      liText.innerText =` '${games.version.name}' played in '${games.game_index}' games.`
      section.append(liText)
    })
    
    
    listElement.append(h2)
    listElement.append(image)
    listElement.append(ul)
    listElement.append(section)
    cardsList.append(listElement)

    console.log(cardsList)
  }) 
}
render()