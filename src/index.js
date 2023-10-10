
// const cards = document.querySelector('.cards')
console.log(data);

// You can start simple and just render a single 
// pokemon card from the first element
const cards = document.querySelector('.cards')
data.forEach((each) => {
    const list = document.createElement('li')
    list.setAttribute('class', 'card')
    
    const heading = document.createElement('h2')
    heading.setAttribute('class', 'card--title')
    heading.innerText = each.name
    
    const image = document.createElement('img')
    const imageSRC = image.setAttribute('src', `${each.sprites.front_default}`)
    image.setAttribute('class', `${imageSRC} card--img`)
    
    const cardTExt = document.createElement('ul')
    cardTExt.setAttribute('class', 'card--text')

    // const statList = forEach((stat) => {
    //     const listOfCradText = document.createElement('li' * 6)

        
    // })
    const listOfCradText = document.createElement('li' * 6)
    listOfCradText.innerText = each.stats

    cardTExt.append(listOfCradText)
    
    list.append(heading)
    list.append(image)
    list.append(cardTExt)
    
    cards.append(list)
    console.log(cards)
})  




