document.addEventListener('DOMContentLoaded', function() {
    const parent = document.querySelector('.cards');
    //console.log(data);

    //You can start simple and just render a single 
    //pokemon card from the first element
    // console.log(data);
    data.forEach((pokemon) => {
        
        const listItem = document.createElement('li')
        listItem.classList.add("card")
        
        // Generate header of card
        const header = document.createElement('h2')
        header.classList.add("card--title")
        let name = pokemon.name
        header.innerHTML = name.charAt(0).toUpperCase() + name.slice(1)
        listItem.appendChild(header)

        // Generate the card image
        const image = document.createElement('img')
        image.width = "256"
        image.classList.add("card--img")
        image.src = pokemon.sprites.other["official-artwork"].front_default
        header.appendChild(image)
        
        // Generate the card list
        const cardStats = document.createElement('ul')
        cardStats.classList.add("card--text")
        listItem.appendChild(cardStats)
        
        // Generate the stats within the list
        pokemon.stats.forEach((key) => {
            const stat = document.createElement('li')
            stat.innerHTML = `${key.stat.name.toUpperCase()}: ${key.base_stat}`
            cardStats.appendChild(stat)
        })
        
        const accordian = document.createElement("button")
        accordian.classList.add("accordion")
        accordian.innerHTML = "Appeared in"
        accordian.addEventListener("click", function() {
            accordian.classList.toggle("active")
            let displayStyle = this.childNodes[1].style
            if (displayStyle.display === "block") {
                displayStyle.display = "none"
            }  else {
                displayStyle.display = "block"
            }
        })
        listItem.appendChild(accordian)

        const accordianPanel = document.createElement("div")
        accordianPanel.classList.add("panel")
        accordian.appendChild(accordianPanel)

        const accordianList = document.createElement("ul")
        accordianPanel.appendChild(accordianList)

        pokemon.game_indices.forEach((game) => {
            const appearance = document.createElement("li")
            let name = game.version.name.charAt(0).toUpperCase() + game.version.name.slice(1)
            appearance.innerHTML = `${name}`
            accordianList.appendChild(appearance)
        })

        parent.appendChild(listItem)
    })
});