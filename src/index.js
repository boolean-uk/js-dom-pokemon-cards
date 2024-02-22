console.log(data);


function renderCards() {
  
    document.addEventListener('DOMContentLoaded', function() {
        const cards = data
        const cardListUL = document.querySelector('.cards')
        
        // Name of card with image
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i]
          const cardLi = document.createElement('div')
          cardLi.classList.add('card')
          cardLi.innerHTML = `<h2>${capitaliseWord(card.name)}</h2>`
          cardLi.innerHTML += `<img class="card--img" src="${card.sprites.front_default}" alt="Pokemon">`

          // Stats of card
          for (let j = 0; j < card.stats.length; j++) {
            const stat = card.stats[j]
            cardLi.innerHTML += `<p class="card--text" >${stat.stat.name.toUpperCase()}: ${stat.base_stat}</p>`
          }
          
          // cardLi.innerHTML += `</ul>`
          cardListUL.appendChild(cardLi)
        }
      })

}


// Minor functions
function capitaliseWord(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }


// Intial Render
function main() {
    renderCards()
}
main()