
console.log(data[0]);

for (let j=0; j < data.length; j++) {
    const elementPokemon = document.querySelector('.card')
    const pName = document.createElement('h2')
    pName.classList.add("card--title")
    pName.innerText = data[j].name
    
    elementPokemon.append(pName)
    
    
    const image = document.createElement('img')
    image.classList.add("card--img")
    image.setAttribute("src", data[j].sprites.other["official-artwork"].front_default)
    elementPokemon.append(image)
    
    const text = document.createElement('ul')
    text.classList.add("card--text")
    
    for(let i=0; i<= 5; i++) {
        const stat = document.createElement('li')
        stat.append(document.createTextNode(data[j].stats[i].stat.name + data[j].stats[i].base_stat))
        text.appendChild(stat)
        elementPokemon.append(text)
    }
}











