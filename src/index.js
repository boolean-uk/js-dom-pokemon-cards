
//You can start simple and just render a single 
//pokemon card from the first element
const cardUl = document.querySelector(".cards");
let nrClicks = 0

function NextImage(card, image) {
    nrClicks += 1
    let keyNamme = ''
    
    let counter = 0
    for (const [key, value] of Object.entries(card.sprites)) {
        counter += 1

        if (counter === nrClicks) {
            if (card.sprites[key] === null || card.sprites[key] === undefined || typeof card.sprites[key] === Object) {
                nrClicks += 1
                continue
            }
            keyNamme = key
        }
    }
    
    image.setAttribute('src', card.sprites[keyNamme])
}

function renderCards() {
    for (let i = 0; i < data.length; i++) {
        const card = data[i];

        const button = document.createElement('button')
        button.innerText = "Next Image"
        
        const cardLi = document.createElement('li');
        cardLi.setAttribute('class', 'card')
        
        const h2 = document.createElement('h2')
        h2.setAttribute('class', 'card--title')
        h2.innerText = card.name.charAt(0).toUpperCase() + card.name.slice(1);
        
        const image = document.createElement('img')
        image.setAttribute('width', '256')
        image.setAttribute('class', 'card--img')
        image.setAttribute('src', card.sprites.other["official-artwork"].front_default)
        button.addEventListener('click', (event) => NextImage(card, image))

        const textUl = document.createElement('ul')
        textUl.setAttribute('class', 'card--text')
        const statLi = document.createElement('li')
        const statLi2 = document.createElement('li')
        const statLi3 = document.createElement('li')
        const statLi4 = document.createElement('li')
        const statLi5 = document.createElement('li')
        const statLi6 = document.createElement('li')
    
        statLi.innerText = "HP: " + card.stats[0].base_stat
        statLi2.innerText = "ATTACK: " + card.stats[1].base_stat
        statLi3.innerText = "DEFENSE: " + card.stats[2].base_stat
        statLi4.innerText = "SPECIAL-ATTACK: " + card.stats[3].base_stat
        statLi5.innerText = "SPECIAL-DEFENSE: " + card.stats[4].base_stat
        statLi6.innerText = "SPEED: " + card.stats[5].base_stat
    
        textUl.appendChild(statLi)
        textUl.appendChild(statLi2)
        textUl.appendChild(statLi3)
        textUl.appendChild(statLi4)
        textUl.appendChild(statLi5)
        textUl.appendChild(statLi6)

        cardLi.appendChild(h2)
        cardLi.appendChild(image)
        cardLi.appendChild(textUl)
        cardUl.appendChild(button)
        cardUl.appendChild(cardLi)
    }
}

function main() {
renderCards()
}

main()