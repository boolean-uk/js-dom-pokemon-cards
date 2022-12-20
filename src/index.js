
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const pokemonUL = document.querySelector(".cards")

//about 50lines of code expected- 

for(let i=0; i < data.length; i++) {
    const pokemonObj = data[i]
    
    const pokemonLi = document.createElement('li')
    pokemonLi.setAttribute('class', 'card')
    pokemonUL.append(pokemonLi)
    
    const pokemonName = document.createElement('h2')
    pokemonName.setAttribute('class', 'card--title')
    pokemonName.innerText = pokemonObj.name
    pokemonLi.append(pokemonName)

    

    //create the card HTML elements
    //append/stitch them together
    //add the li to the ul
}