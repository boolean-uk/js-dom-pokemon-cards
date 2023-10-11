
// const cards = document.querySelector('.cards')
console.log(data);

// You can start simple and just render a single 
// pokemon card from the first element
const cards = document.querySelector('.cards')
data.forEach((eachPokemon) => {
    const list = document.createElement('li')
    list.setAttribute('class', 'card')
    
    const heading = document.createElement('h2')
    heading.setAttribute('class', 'card--title')
    heading.innerText = eachPokemon.name
    
    const image = document.createElement('img')
    const imageSRC = image.setAttribute('src', `${eachPokemon.sprites.other['official-artwork'].front_default}`)
    image.setAttribute('class', `${imageSRC} card--img`)
    
    const cardTExt = document.createElement('ul')
    cardTExt.setAttribute('class', 'card--text')

    eachPokemon.stats.forEach((dataStat) => {
    const listOfCradText = document.createElement('li')
    listOfCradText.innerText = `${dataStat.stat.name.toUpperCase()}: ${dataStat.base_stat}`

    cardTExt.append(listOfCradText)
    })

    
    list.append(heading)
    list.append(image)
    list.append(cardTExt)
    
    cards.append(list)
    console.log(cards)
})  




