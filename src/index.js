
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


//Root elements
const cardListUL = document.querySelector(".cards")

//Build card
function createCards(index){
    //Get one card
    const card = data[index] 
    //Create <li> tag
    const cardLi = document.createElement('li')
    //Set the class for the <li> tag
    cardLi.setAttribute('class', 'card')
    //Create title for the card
    const cardTitle = document.createElement('h2')
    //Class for title
    cardTitle.setAttribute('class','card--title')
    //Set the title
    cardTitle.innerText = card.name
    //Create img
    const cardImg = document.createElement('img')
    //Set up img
    cardImg.setAttribute('width',256)
    cardImg.setAttribute('class','card--img')
    //Find the img
    cardImg.setAttribute('src',card.sprites.other["official-artwork"].front_default)
    //Create card text
    const statsList = createCardText(card)
    //Add content to card
    cardLi.appendChild(cardTitle)
    cardLi.appendChild(cardImg)
    cardLi.appendChild(statsList)
    cardListUL.appendChild(cardLi)
    

}

function createCardText(card){
    const cardUL = document.createElement('ul')
    cardUL.setAttribute('class','card--text')
    
    for(let i = 0; i < card.stats.length; i++){
        //<li> tag
        const statsLi = document.createElement('li')
        //Empty string
        let statText = ''
        //Get the name of the stat and set to uppercase
        statText += card.stats[i].stat.name.toUpperCase()
        statText += ': '
        statText += card.stats[i].base_stat
        //Add the text to the list tag
        statsLi.innerText = statText
        cardUL.appendChild(statsLi)
    }
    return cardUL
}

function renderAllCards(){
    //Reset the list
    cardListUL.innerHTML = ''
    //Loop for every card
    for (let i = 0; i < data.length; i++){
        createCards(i)
    }
}
//Main
function main(){
    renderAllCards()
}
main()