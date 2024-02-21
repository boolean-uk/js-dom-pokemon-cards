
window.onload = function(){
    const container = document.querySelector('.cards');
    for(let i = 0; i < data.length; i++){
        const card = document.createElement('li')
        card.setAttribute('image-id', 0);
        card.addEventListener('click', function(){
            handleClick(this)
        })
        
        card.setAttribute('key', i);
        card.setAttribute('class', 'card')
        const header = document.createElement('h2')
        header.textContent = data[i].name.toUpperCase()
        header.setAttribute('class', 'card--title')
        card.appendChild(header)

        const image = document.createElement('img')
        image.setAttribute('class', 'card--img')
        image.setAttribute('src', data[i].sprites.other['official-artwork'].front_default)
        image.setAttribute('alt', data[i].name)
        image.setAttribute('width', '256')
        card.appendChild(image)

        const types = document.createElement('ul')
        types.setAttribute('class', 'card--text')
        for(let j = 0; j < data[i].stats.length; j++){
            const type = document.createElement('li')
            type.textContent = data[i].stats[j].stat.name.toUpperCase() + ': ' + data[i].stats[j].base_stat
            types.appendChild(type)
        }
        card.appendChild(types)
        

        const gamesHeader = document.createElement('h3')
        gamesHeader.setAttribute('class', 'card--appearances')
        gamesHeader.textContent = 'Appears in:'
        
        const games = document.createElement('ul')
        games.setAttribute('class', 'card--text')
        for(let j = 0; j < data[i].game_indices.length; j++){
            const game = document.createElement('li')
            game.textContent = data[i].game_indices[j].version.name
            games.appendChild(game)
        }
        card.addEventListener('mouseover', function(){
            card.removeChild(types)
            card.appendChild(gamesHeader)
            card.appendChild(games)
            card.style.minHeight = '1000px'
        })
        card.addEventListener('mouseleave', function(){
            card.removeChild(gamesHeader)
            card.removeChild(games)
            card.appendChild(types)
            card.style.minHeight = '400px'
        })
        container.appendChild(card)
    }

    function handleClick(card){
        const key = card.getAttribute('key')
        const img = card.querySelector('.card--img')
        const imgArray = []
        const spriteData = data[key].sprites;
        const nestedSprites = [spriteData.other.dream_world.front_default, spriteData.other['official-artwork'].front_default];

        Object.values(spriteData).forEach((spriteValue) => {
            if (typeof spriteValue === 'string') {
                imgArray.push(spriteValue);
            } 
        });
        
        imgArray.push(nestedSprites[0], nestedSprites[1]);
        
        const id = card.getAttribute('image-id');
        if(id < imgArray.length - 1){
            card.setAttribute('image-id', parseInt(id) + 1);
        } else {
            card.setAttribute('image-id', 0);

        }
        img.setAttribute('src', imgArray[card.getAttribute('image-id')]);


       

    }
    
}
