
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


// Selected Root Elements
const cardListUL = document.querySelector(".cards")

function renderCards() {
    // Reset all of the cards
    cardListUL.innerHTML = ""
    // Loop through the data create a new li element for each
    //for(let i = 0; i < data.length; i++) {
        // Get the current card
        const card = data[0]
        // Create a <li></li> for the card
        const cardLi = document.createElement('li')
        // Set attribute for card
        cardLi.setAttribute('class', 'card')
        // Create h2 pokemon name
        const name = document.createElement('h2')
        // Set attribute for H2
        name.setAttribute('class', 'card--title')
        // Set name
        name.innerText = card.name
        // Append name to card
        cardLi.appendChild(name)
        // Create image
        const image = document.createElement('img')
        // Set attributes for image
        image.setAttribute('width', 256)
        image.setAttribute('class', 'card--img')
        image.setAttribute('src', data[0].sprites.other.dream_world.front_default)
        // Append image to card
        cardLi.appendChild(image)
        // Create list with card details
        const detailList = document.createElement('ul')
        // Set attribute for detailList
        detailList.setAttribute('class', 'card--text')

        // Create HP 
        const hp = document.createElement('li')
        // Set HP
        hp.innerText = 'HP: ' + card.stats[0].base_stat
        // Append HP to detailList
        detailList.appendChild(hp)

        // Create ATTACK
        const attack = document.createElement('li')
        // Set ATTACK
        attack.innerText = 'ATTACK: ' + card.stats[1].base_stat
        // Append ATTACK to detailList
        detailList.appendChild(attack)

        // Create DEFENSE
        const defense = document.createElement('li')
        // Set DEFENSE
        defense.innerText = 'DEFENSE: ' + card.stats[2].base_stat
        // Append DEFENSE to detailList
        detailList.appendChild(defense)

        // Create SPECIAL-ATTACK
        const specialAttack = document.createElement('li')
        // Set SPECIAL-ATTACK
        specialAttack.innerText = 'SPECIAL-ATTACK: ' + card.stats[3].base_stat
        // Append SPECIAL-ATTACK to detailList
        detailList.appendChild(specialAttack)

        // Create SPECIAL-DEFENSE
        const specialDefense = document.createElement('li')
        // Set SPECIAL-DEFENSE
        specialDefense.innerText = 'SPECIAL-DEFENSE: ' + card.stats[4].base_stat
        // Append SPECIAL-DEFENSE to detailList
        detailList.appendChild(specialDefense)

        // Create SPEED
        const speed = document.createElement('li')
        // Set SPEED
        speed.innerText = 'SPEED: ' + card.stats[5].base_stat
        // Append SPEED to detailList
        detailList.appendChild(speed)

        // Append detailList to cardLi
        cardLi.appendChild(detailList)
        // Add the list element to the cardListUL
        cardListUL.appendChild(cardLi)
    //}
}
// Intial Render
function main() {
    renderCards()
}

main()