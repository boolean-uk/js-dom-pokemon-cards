




//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
for (let i = 0; i < data.length; i++){
const pokemanOverall = data[i]
// name on h2
const name = pokemanOverall.name
// pictures
const img = pokemanOverall.sprites.other["official-artwork"].front_default


// attributes on list
const hp = pokemanOverall.stats[0].stat.name
const attack = pokemanOverall.stats[1].stat.name
const defence = pokemanOverall.stats[2].stat.name
const specialAttack = pokemanOverall.stats[3].stat.name
const specialDefence = pokemanOverall.stats[4].stat.name
const speed = pokemanOverall.stats[5].stat.name


//creating list
 const itemList = document.createElement('li')
 itemList.classList.add('card')

 // ul class cards
 const ul = document.querySelector('.cards')
 document.body.append(itemList)
 ul.append(itemList)
 

 console.log(ul)


 //h2
 const h2 = document.createElement('h2')

 h2.classList.add('card--title')
 itemList.append(h2)
h2.innerText = pokemanOverall.name
 //add img
 const imageAdd = document.createElement('img')
 imageAdd.classList.add('card--img')
imageAdd.setAttribute('width', 256)
imageAdd.setAttribute( 'src' , pokemanOverall.sprites.other["official-artwork"].front_default )
itemList.append(imageAdd)
//new list 
// const newList = document.createElement('ul')
// itemList.append(newList)
// newList.classList.add('card--text')
const newList = document.createElement('li')
console.log(newList)
// newList.innerText = [pokemanOverall.stats[0].stat.name, pokemanOverall.stats[1].stat.name]
for(let n = 0; n < pokemanOverall.stats.length; n++) {
    const statOne =  pokemanOverall.stats[n].stat.name
    const listStats = document.createElement('li')
    const statTwo = pokemanOverall.stats[n].base_stat
    listStats.innerText = `${statOne}:${statTwo}`
newList.append(listStats)

// itemList.append(newList)
// newList.classList.add('card--text')




}

const listText = document.createElement('ul')


listText.classList.add('card--text')

listText.append(newList)


itemList.append(listText)



}
