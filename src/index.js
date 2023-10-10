

console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);


// - Inside `index.js`, you should loop through this array and render a "card" for each pokemon type. Use the example image as a reference. 

// ## Tips
// - **Start with a single card**. Once you've got a card, think of a way to programmatically create all the others.
// - If you are struggling to create the full card layout - start simple. Try render just the name of each pokemon in a `<p>` tag. Then, add the image, then the stats, etc
// - Use functions to your advantage. Break each card into smaller parts, and think how you can turn them into functions.
// - Make sure you understand well the data structure before starting to create the cards


// CREATE THE CARD
// The card in card.html has a class of li

//<li class="card">
/* <h2 class="card--title">Bulbasaur</h2>
<img
  width="256"
  class="card--img"
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
/>
<ul class="card--text">
  <li>HP: 45</li>
  <li>ATTACK: 49</li>
  <li>DEFENSE: 49</li>
  <li>SPECIAL-ATTACK: 65</li>
  <li>SPECIAL-DEFENSE: 65</li>
  <li>SPEED: 45</li>
</ul>
</li> */


// Step 1 - card
// - create an li element
// - setAttributes ('class' 'card')
// - Add in the title, img, list of char
// - select the ul - The cards should be nested inside <ul class="cards"></ul> - this is in "index.js"
// - append

function card(element) {

    // Created LI element inside of UL
    const cardLi = document.createElement('li')
    cardLi.setAttribute('class', 'card')

    title(element, cardLi)
    img(element, cardLi)
    listCharacteristics(element, cardLi)


    // Append the LI inside of the UL - selecting the UL and then appending to UL
    const cardUl = document.body.querySelector('ul')
    cardUl.append(cardLi)

}

function title(element, cardLi) {
    const titleHeader = document.createElement('h2')
    let name = data[element].name
    titleHeader.innerText = name;
    titleHeader.setAttribute('class', 'card--title')
    cardLi.append(titleHeader)

}

function img(element, cardLi) {
    const pokemonImage = document.createElement('img')
    const imgSrc = data[element].sprites.other["official-artwork"].front_default
    pokemonImage.setAttribute('class', 'card--img')
    pokemonImage.setAttribute('width', '256')
    pokemonImage.setAttribute('src', `${imgSrc}`)

    cardLi.append(pokemonImage)
}

function listCharacteristics(element, cardLi) {
    const stats = data[element].stats
    const pokemonCharateristics = document.createElement('ul')
    pokemonCharateristics.setAttribute('class', 'card--text')

    for (let i = 0; i < stats.length; i++) {
        const statName = document.createElement('li')
        statName.innerText = `${stats[i].stat.name}: ${stats[i].base_stat}`
        pokemonCharateristics.append(statName)

    }
    cardLi.append(pokemonCharateristics)
}

function render(element) {
    for (let i = 0; i < data.length; i++) {
        card(i)
    }
}

render()


// Step 2 - Title, for example Bulbarsar
// - create the h2 element
// - grab the data from the js file
// - Assign the innerText name
// - set attribute
// - append

//Step 3 - img rendering
// create new element img
// create variable for the img src, official artwork
// set the attribute for src, class, width

// Step 4 - list of charateristis
// get the stats via the data file
// create a ul element
// set the Attributes class
// loop through the stats
// append


// step 5 - render the function

// Step 6 - call the function



