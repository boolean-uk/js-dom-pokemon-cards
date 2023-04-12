


console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);



const masterUl = document.querySelector("body > ul")

// const cardContent2 = document.createElement('li')
//

// masterUl.append(cardContent2)
// masterUl.append(cardContent)

masterUl.style.listStyle = 'none'

for (let i = 0; i < data.length; i++) {
  const cardContent = document.createElement('li')
  cardContent.classList.add('card', `${i}`)
  masterUl.appendChild(cardContent)
  
  const cardTitle = document.createElement('h2')
  cardTitle.classList.add('card--title')
  cardTitle.innerText = data[i]['name']
  cardContent.appendChild(cardTitle)

  const cardImg = document.createElement('img')
  cardImg.classList.add('card--img')
  cardImg.src = data[i]['sprites']['other']['official-artwork']['front_default']
  cardContent.appendChild(cardImg)
  cardImg.width = 256;

  const attrList = document.createElement('ul')
  attrList.classList.add('card--text')

  for (let j = 0; j < 6; j++) {
    const attribute = document.createElement('li')
    const statName = data[i]['stats'][j]['stat']['name']
    const statValue = data[i]['stats'][j]['base_stat']
    const statItem = `${statName.toUpperCase()}: ${statValue}`
    attribute.innerText = statItem
    attrList.appendChild(attribute)

  }
  attrList.style.listStyle = 'none'
  cardContent.appendChild(attrList)

  const versionList = document.createElement('ul')
  versionList.classList.add('card--text')

  for (let j = 0; j < data[i]['game_indices'].length; j++) {
    const versionNameItem = document.createElement('li')
    const versionName = data[i]['game_indices'][j]['version']['name']
    versionList.appendChild(versionNameItem)
    versionNameItem.innerText = versionName
  }

  const appearances = document.createElement('h4')
  appearances.innerText = 'This appears in'
  cardContent.appendChild(appearances)
  cardContent.appendChild(versionList)
}


function button() {
    let arrFilter = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i]['sprites'].length - 1; j++) {
            const objToArray = Object.values(data[j]['sprites'])
            arrFilter = objToArray.filter(elements => {
                return elements !== null;
            });
            return arrFilter
        }
    }
}



console.log(data.length)
