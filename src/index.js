
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element

//Inside index.js, you should loop through this array and render a "card" for each pokemon type. Use the example image as a reference.

// Select ul (class=cards)
const cardList = document.querySelector('.cards')

// For every card in data
for (let i = 0; i < data.length; i++) {
    // Load data[i] into variable
    const card = data[i]
    // Create listItem(li) containing all stats & attributes
    const cardItem = document.createElement('li')
    // Set attributes to li
    cardItem.setAttribute('id', card.id)
    cardItem.setAttribute('class', "card")
    // Create header 2 item
    const cardH2 = document.createElement('h2')
    // Set attributes to h2
    cardH2.setAttribute('class', 'card--title')
    // Set stats to h2
    cardH2.innerText = card.name
    // add h2 to li
    cardItem.append(cardH2)
    // Create image item
    const cardImg = document.createElement('img')
    // Set attributes to img
    cardImg.setAttribute('width', 256)
    cardImg.setAttribute('class', "card--img")
    cardImg.setAttribute('src', card.sprites.other["official-artwork"].front_default)
    // add img to li
    cardItem.append(cardImg)
    // Create ul text item
    const cardTxt = document.createElement('ul')
    // Set attributes to ul
    cardTxt.setAttribute('class', "card--text")
    for (let i = 0; i < card.stats.length; i++){
        // Create li stat item
        const stat = document.createElement('li')
        // Set stats to li
        stat.innerText = card.stats[i].stat.name.toUpperCase() + ": " + card.stats[i].base_stat
        cardTxt.append(stat)
        cardItem.append(cardTxt)
    }
    

    // Add Li to ul on page
    cardList.appendChild(cardItem)
}