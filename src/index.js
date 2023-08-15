
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
const container = document.querySelector('.cards')





function showOne () {

    // making the DOM empty
    container.innerHTML = ''
    
    
    // loop to show all pokemon
    for (let i = 0; i <= data.length; i++) {

        const names = data[i].name
        // making the card in js
        const list = document.createElement('li')
        list.classList.add('card')

        // adding h2 in dom
        const titles = document.createElement('h2')
        titles.classList.add('card--title')
        titles.innerText = names.charAt(0).toUpperCase() + names.slice(1)

        // adding card class and pokemon name to DOM 
        container.append(list)
        list.append(titles)

        // img
        const pokeImage = document.createElement('img')
        pokeImage.classList.add('card--img')
        pokeImage.src = data[i].sprites.other["official-artwork"].front_default
        list.append(pokeImage)
        pokeImage.width = 265

        
        // stats
        const statList = document.createElement('ul')
        statList.classList.add('card--text')
        list.append(statList)

        // hp
        const hp = data[i].stats[0].base_stat
        const statHp = document.createElement('li')
        statHp.innerHTML = 'HP:' + hp
       
        statList.append(statHp)
    
        // attack
        const attack = data[i].stats[1].base_stat
        const statAtt = document.createElement('li')
        statAtt.innerHTML = 'ATTACK: ' + attack
        statList.append(statAtt)
        
        
        //defense 
        const defense = data[i].stats[2].base_stat
        const statDef = document.createElement('li')
        statDef.innerHTML = 'DEFENSE: ' + defense
        statList.append(statDef)

        // special-attack
        const specialAtt = data[i].stats[3].base_stat
        const statSpecAt = document.createElement('li')
        statSpecAt.innerHTML = 'SPECIAL-ATTACK: ' + specialAtt
        statList.append(statSpecAt)

        // special-defense

       const specialDef = data[i].stats[4].base_stat
        const stateSpecDef = document.createElement('li')
        stateSpecDef.innerHTML = 'SPECIAL-DEFENSE: ' + specialDef
        statList.append(stateSpecDef)

        //speed
       const speed = data[i].stats[5].base_stat
        const statSpe = document.createElement('li')
        statSpe.innerHTML = 'SPEED:' + speed
       
        statList.append(statSpe)

    }  
}

showOne()




//<li class="card">
  //<h2 class="card--title">Bulbasaur</h2>
  //<img
    //width="256"
    //class="card--img"
    //src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  ///>
  //<ul class="card--text">
    //<li>HP: 45</li>
    //<li>ATTACK: 49</li>
    //<li>DEFENSE: 49</li>
    //<li>SPECIAL-ATTACK: 65</li>
    //<li>SPECIAL-DEFENSE: 65</li>
    //<li>SPEED: 45</li>
  //</ul>
//</li>