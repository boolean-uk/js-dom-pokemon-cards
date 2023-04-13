
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
const cardList = document.querySelector('.cards')
for(let i = 0; i < data.length; i++) {
    const card = document.createElement('li')
    card.classList.add('card')

    const title = document.createElement('h2')
    title.classList.add('card--title')
    title.innerText=data[i].name
    card.append(title)

    const image = document.createElement('img')
    image.setAttribute('width', "256")
    image.classList.add("card--img")
    image.setAttribute('src', data[i].sprites.front_default)
    card.append(image)

    const listOfStats = document.createElement('ul')
    listOfStats.classList.add('card--text')
    for(let j = 0; j < data[i].stats.length; j++){
        const statElementOfList = document.createElement('li')
        statElementOfList.innerText=data[i].stats[j].stat.name.toUpperCase() + '; ' + data[i].stats[j].base_stat
        listOfStats.append(statElementOfList)
    }
    card.append(listOfStats)
    

    cardList.append(card)
}