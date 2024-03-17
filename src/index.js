//You can start simple and just render a single 
//pokemon card from the first element

const outerContainer = document.querySelector('.cards');

data.forEach((pokemon, index) => {
    const sprites = GetSprites(pokemon);

    const container = document.createElement('li');
    const header = document.createElement('h2');
    header.classList.add('card--title');
    header.innerText = pokemon.name;
    container.append(header);
    
    const img = document.createElement('img');
    img.width = '256';
    img.classList.add('card--img');
    img.src = pokemon.sprites.other["official-artwork"].front_default;
    let imgIndex = 0;
    img.addEventListener('click', function(){
        if (imgIndex >= sprites.length){
            imgIndex = 0;
        }
        img.src = sprites[imgIndex];
        imgIndex++;
    })
    container.append(img);

    const textContainer = document.createElement('ul');
    textContainer.classList.add('card--text');
    pokemon.stats.forEach((stat) => {
        const text = document.createElement('li');
        text.innerText = `${stat.stat.name}: ${stat.base_stat}`;
        textContainer.append(text);
    })
    container.append(textContainer)

    const gamesHeader = document.createElement('h4')
    gamesHeader.innerText = 'Appeared in the following games'
    container.append(gamesHeader)

    const gamesContainer = document.createElement('div');
    gamesContainer.classList.add('card--gameslist');    

    pokemon.game_indices.forEach((element) => {
        const text = document.createElement('p');        
        text.style.margin = '5px 0px 5px 10px';
        text.innerText = `${element.version.name}`;
        gamesContainer.append(text);
    });
    container.append(gamesContainer);
    outerContainer.append(container);
});


function GetSprites(pokemon){
    const spriteDefaults = GetDefaultSprites(pokemon.sprites);
    const spriteVersions = GetVersionSprites(pokemon.sprites.versions);
    const spriteDreamWorld = GetDreamWorldSprites(pokemon.sprites.other.dream_world);
    const spriteArtwork = GetArtworkSprites(pokemon.sprites.other["official-artwork"]);

    let sprites = spriteDefaults.concat(spriteDreamWorld).concat(spriteArtwork).concat(spriteVersions);
    sprites = sprites.filter(s => typeof s !== 'object');
    return sprites;
}

function GetVersionSprites(versions){
    let images = [];
    const generations = Object.keys(versions);
    generations.forEach((gen) => {  
        const genObj = versions[gen];
        const keys = Object.keys(genObj);
        keys.forEach((key) => {
            const targetObj = genObj[key];
            const imgValues = Object.values(targetObj);
            const imgValuesFiltered = imgValues.filter((i) => i !== null);
            images = images.concat(imgValuesFiltered);        
        })
    })
    return images;
}

function GetDefaultSprites(sprites){
    let images = [];
    const imgValues = Object.values(sprites);
    imgValues.forEach((value) => {
        if (typeof value === 'object' || value === null) return;
        images.push(value);
    })
    return images;
}

function GetDreamWorldSprites(sprites){
    const imgValues = Object.values(sprites);
    const imgValuesFiltered = imgValues.filter((i) => i !== null);
    return imgValuesFiltered;
}

function GetArtworkSprites(sprites){
    const imgValues = Object.values(sprites);
    const imgValuesFiltered = imgValues.filter((i) => i !== null);
    return imgValuesFiltered;
}

