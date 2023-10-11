// getting hold of the cards class for the main body which is the ul
const cards = document.querySelector('.cards')
// const ul = document.createElement('ul')



// looping through the data , getting hold of each item , by using the pokeman, assigning the name (pokeman.name) and creating an img tag 
// and also assigning it a class and width ,then we create the 
data.forEach((pokeman)  => {
    const header = document.createElement('h2')
    header.innerText = pokeman.name

    const img = document.createElement('img')
    const src = document.createElement('src')
    img.src = pokeman.sprites.other["official-artwork"].front_default
    img.style.width = '256px'
    img.className = 'card--img'

    const ul = document.createElement('ul')
    ul.className = 'card'

    ul.append(header)
    ul.append(img)


    //looping through an array of the pokeman to get the list of each  and we are creating a list tag then appending it to the ul 
    for (let i = 0; i < pokeman.stats.length; i++) {
        const li = document.createElement('li')
        li.style.margin = '10px'
        li.style.listStyle = 'none'


        li.innerText = `${pokeman.stats[i].stat.name}: ${pokeman.stats[i].base_stat}`;

        ul.append(li)
    } 


    // appending the ul the cards class of the global ul , the parent ul 
    cards.append(ul)
})
