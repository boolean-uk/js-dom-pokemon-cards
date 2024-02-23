const container = document.querySelector('.cards')


function drawCards(dataObj){
    const card = document.createElement('li')
    card.classList = "card"
    
    //creating title
    const title = document.createElement('h2')
    title.classList = "card--title"
    let name = dataObj.name.substring(0,1).toUpperCase() + dataObj.name.substring(1)
    title.innerHTML = name;
    card.appendChild(title)
    
    //getting img
    const slideshow = document.createElement('div')
    slideshow.classList = 'slideshow'
    const imgArray = [
        dataObj.sprites.other['official-artwork'].front_default,
        dataObj.sprites.other.dream_world.front_default, 
        dataObj.sprites.back_default,
        dataObj.sprites.back_shiny,
        dataObj.sprites.front_default, 
        dataObj.sprites.front_shiny
    ]
    for(let i = 0; i<imgArray.length; i++){
        if(imgArray[i] !== null){
            const img = document.createElement('img')
            img.id=i
            img.width = "256"
            
            img.classList = (i==0) ? "card--img" : "card--img hide"
            img.src = imgArray[i]
            slideshow.appendChild(img)
        }

    }
   
    card.appendChild(slideshow)

    //adding card content
    const list = document.createElement('ul')
    list.classList = "card--text"
    dataObj.stats.forEach( element =>{
        let listelement = document.createElement('li');
    listelement.innerHTML = element.stat.name.toUpperCase() +": " + element.base_stat ;
    list.appendChild(listelement)
    })
    
    card.appendChild(list)
    card.addEventListener('click', ()=>{
        
        let images = card.querySelectorAll('.card--img');
        for(let i = 0; i< images.length; i++){
            if(!images[i].className.includes('hide') && i=== images.length-1){
                images[i].classList = "card--img hide";
                images[0].classList = "card--img";
                break
                
            }else if(!images[i].className.includes('hide')){
                images[i].classList = "card--img hide";
                images[i+1].classList = "card--img";
                break
            }
        }
    })
   
   
     const gameDiv = AddGames(dataObj)
   // shuffleSlideshow(dataObj)


   card.appendChild(gameDiv)
    container.appendChild(card)
    

    

    
}

function AddGames(pokemon){
    let games = document.createElement('div')
    const versionArr = ['Generation-i', 'Generation-ii', 'Generation-iii', 'Generation-iv' ]

    for(let i = 0; i<versionArr.length; i++){
        let version = document.createElement('h5')
        version.innerHTML = versionArr[i]
        version.classList = 'card--text'
        let list= document.createElement('ul')
        Object.getOwnPropertyNames(pokemon.sprites.versions[versionArr[i].toLowerCase()]).forEach(key=>{
            if(key!== 'icons'){
            let game = document.createElement('li')
            game.innerHTML = key.substring(0,1).toUpperCase() + key.substring(1);
            list.appendChild(game)}
        })    
 
        games.appendChild(version)
        games.appendChild(list)

   }
 
    return games;
}


//drawCards
data.forEach(object => { 
    drawCards(object)
});


