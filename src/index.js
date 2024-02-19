document.addEventListener('DOMContentLoaded', function() {
    const parent = document.querySelector('.cards');
    //console.log(data);

    //You can start simple and just render a single 
    //pokemon card from the first element
    // console.log(data);
    data.forEach((pokemon) => {
        const db = pokemon
        
        const listItem = document.createElement('li')
        listItem.classList.add("card")
        
        // Generate header of card
        const header = document.createElement('h2')
        header.classList.add("card--title")
        let name = db.name
        header.innerHTML = name.charAt(0).toUpperCase() + name.slice(1)
        listItem.appendChild(header)

        // Generate the card image
        const image = document.createElement('img')
        image.width = "256"
        image.classList.add("card--img")
        image.src = db.sprites.other["official-artwork"].front_default
        header.appendChild(image)
        
        // Generate the card list
        const cardStats = document.createElement('ul')
        cardStats.classList.add("card--text")
        listItem.appendChild(cardStats)
        
        // Generate the stats within the list
        db.stats.forEach((key) => {
            const stat = document.createElement('li')
            stat.innerHTML = `${key.stat.name.toUpperCase()}: ${key.base_stat}`
            cardStats.appendChild(stat)
        })
        
        parent.appendChild(listItem)
    })
});