// 1. Loop over the data array
// 2. For every element in the array, create an <li></li>
// 3. Add the "card" class to the <li>'s classList
// 4. Create a <h2> element
// 5. Add the "card--title" class to the <h2>'s classList
// 6. Add "Bulbasaur" to the <h2>'s innerText
// 7. Append the <h2> element to the <li> we created
// 8. Do this for every other part of the card.html template example
// 9. Append the <li> to the <ul class="cards"> element
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
function pokemonapp() {

const cards = document.querySelector('.cards')

for(let i = 0; i < 20; i++) {
    const card = document.createElement('li')
    card.classList.add('card')

    const cardtitle = document.createElement('h2')
    cardtitle.classList.add('card--title')
    // cardtitle.innerText = 'Bulbasaur'
    cardtitle.innerText = data[i].name
    // symbol.innerText = cellValues[i]
    // cellValues[i] = symbols[0]

    const cardimg = document.createElement('img')
    cardimg.classList.add('card--img')
    cardimg.width = "256"
    cardimg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (i + 1) +".png"
    // cardimg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    //data[i].sprites.other.front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    const cardtext = document.createElement('ul')
    cardtext.classList.add("card--text")

    // data[i].stats.base_stat
    const cardhp = document.createElement('li')
    cardhp.innerText = 'HP: ' + data[i].stats[0].base_stat
    const cardattk = document.createElement('li')
    cardattk.innerText = 'ATTACK: ' + data[i].stats[1].base_stat
    const carddef = document.createElement('li')
    carddef.innerText = 'DEFENSE: ' + data[i].stats[2].base_stat
    const cardspattk = document.createElement('li')
    cardspattk.innerText = 'SPECIAL-ATTACK: ' + data[i].stats[3].base_stat
    const cardspdef = document.createElement('li')
    cardspdef.innerText = 'SPECIAL-DEFENSE: ' + data[i].stats[4].base_stat
    const cardspeed = document.createElement('li')
    cardspeed.innerText = 'SPEED: ' + data[i].stats[5].base_stat

    card.append(cardtitle)
    card.append(cardimg)

    cardtext.append(cardhp)
    cardtext.append(cardattk)
    cardtext.append(carddef)
    cardtext.append(cardspattk)
    cardtext.append(cardspdef)
    cardtext.append(cardspeed)
    card.append(cardtext)

    cards.append(card)
    console.log(card);
}
}

pokemonapp()