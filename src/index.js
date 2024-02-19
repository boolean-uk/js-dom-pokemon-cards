document.addEventListener('DOMContentLoaded', function() {
    const parent = document.querySelector('.cards');
    //console.log(data);

    //You can start simple and just render a single 
    //pokemon card from the first element
    // console.log(data);
    data.forEach((pokemon) => {
        const imagePaths = [
            pokemon.sprites.other["official-artwork"].front_default,
            pokemon.sprites.front_default,
            pokemon.sprites.front_shiny,
            pokemon.sprites.versions["generation-i"]["red-blue"].front_default,
            pokemon.sprites.versions["generation-ii"].crystal.front_default,
            pokemon.sprites.versions["generation-iii"]["ruby-sapphire"].front_default,
            pokemon.sprites.versions["generation-iv"]["diamond-pearl"].front_default,
            pokemon.sprites.versions["generation-v"]["black-white"].front_default,
            pokemon.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_default,
            pokemon.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default
        ]

        const CardImageDescription = [
            'Official artwork',
            'Default sprite',
            'Shiny sprite',
            'Gen 1: Red/Blue sprite',
            'Gen 2: Crystal sprite',
            'Gen 3: Ruby/Sapphire sprite',
            'Gen 4: Diamond/Pearl sprite',
            'Gen 5: Black/White sprite',
            'Gen 6: Omega-Ruby/Alpha-Sapphire sprite',
            'Gen 7: Ultra-Sun/Ultra-Moon sprite'
        ]

        const listItem = document.createElement('li')
        listItem.classList.add("card")
        
        // Generate header of card
        const header = document.createElement('h2')
        header.classList.add("card--title")
        let name = pokemon.name
        header.innerHTML = name.charAt(0).toUpperCase() + name.slice(1)
        listItem.appendChild(header)

        // Generate the card image
        const imageContainer = document.createElement("div")
        const imageDescription = document.createElement("p")
        const image = document.createElement('img')
        image.width = "256"
        image.classList.add("card--img")
        image.src = imagePaths[0]
        imageDescription.innerHTML = CardImageDescription[0]
        image.addEventListener("click", function() {
            let elementIndex = imagePaths.indexOf(image.src)
            image.src = imagePaths[(elementIndex + 1) % imagePaths.length]
            imageDescription.innerHTML = CardImageDescription[(elementIndex + 1) % imagePaths.length]
        })
        imageDescription.style.fontSize = 10

        imageContainer.appendChild(image)
        imageContainer.appendChild(imageDescription)
        header.appendChild(imageContainer)
        
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