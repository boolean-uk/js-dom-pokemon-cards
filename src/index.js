const cards = document.querySelector('.cards')

function showCollection() {
    for (let i = 0; i < data.length; i++){
        //Create Card Template
        const card = document.createElement('li')
        card.classList.add("card")

        //Create Card Title
        const title = document.createElement('h2')
        title.classList.add('card--title')
        title.innerText = (data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1))

        //Add Card Image
        const img = document.createElement('img')
        img.classList.add('card--img')
        img.width = 256
        img.src = data[i].sprites.other['official-artwork']['front_default']

        //Add Card Text
        const text = document.createElement('ul')
        text.classList.add('card--text')

        //Add Stats to Text
        const statsList = data[i].stats
        for (let i=0; i < statsList.length; i++) {
            const stat = document.createElement('li')
            const desc = statsList[i].stat.name.toUpperCase() + ": " + statsList[i].base_stat
            stat.innerText = desc
            //Append Elemets to Text
            text.append(stat)
        }

        //Append Elements to a Card
        card.append(title)
        card.append(img)
        card.append(text)
        //Append Cards to the Page
        cards.append(card)
    }
}

console.log(data);
console.log(data[0]);
showCollection()