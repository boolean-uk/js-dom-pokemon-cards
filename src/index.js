// //NAME
// console.log(data[0].name)
// //HP
// console.log(data[0].stats[0].base_stat)
// //ATTACK
// console.log(data[0].stats[1].base_stat)
// //DEFENSE
// console.log(data[0].stats[2].base_stat)
// //SPECIAL ATTACK
// console.log(data[0].stats[3].base_stat)
// //SPECIAL DEFENSE
// console.log(data[0].stats[4].base_stat)
// //SPEED
// console.log(data[0].stats[5].base_stat)



let ulContainer = document.querySelector('.cards')
// console.log(data.length)


//TEST SETTING UP FIRST LETTER AS CAPITAL
// let some = "text"

// let start = some.slice(0, 1).toUpperCase()

// let end = some.slice(1)

// console.log(start + end)


function contentCreator() {
    // data.forEach(item => {

    //     //     //NAME
    //     let namStat = item.name
    //     let beginChar = namStat.slice(0, 1).toUpperCase()
    //     let endChar = namStat.slice(1)

    //     let newName = beginChar + endChar
    //     //HP
    //     let hpStat = item.stats[0].base_stat
    //     //ATTACK
    //     let attStat = item.stats[1].base_stat
    //     //DEFENSE
    //     let defStat = item.stats[2].base_stat
    //     //SPECIAL ATTACK
    //     let saStat = item.stats[3].base_stat
    //     //SPECIAL DEFENSE
    //     let sdStat = item.stats[4].base_stat
    //     //SPEED
    //     let speStat = item.stats[5].base_stat

    //     let imgStat = item.sprites.other.dream_world.front_default

    //     // console.log(imgStat)

    //     let creLi = document.createElement('li')
    //     creLi.classList.add('card')

    //     let crehead = document.createElement('h2')
    //     crehead.classList.add('card--title')
    //     crehead.innerText = newName
    //     creLi.append(crehead)


    //     let creImg = document.createElement('img')
    //     creImg.classList.add('card--img')
    //     creImg.setAttribute("src", imgStat)
    //     creLi.append(creImg)


    //     let creUl = document.createElement('ul')
    //     creUl.classList.add('card--title')
    //     creLi.append(creUl)

    //     let creli1 = document.createElement('li')
    //     let creli2 = document.createElement('li')
    //     let creli3 = document.createElement('li')
    //     let creli4 = document.createElement('li')
    //     let creli5 = document.createElement('li')
    //     let creli6 = document.createElement('li')

    //     creli1.innerHTML = `<li>HP: ${hpStat}</li>`
    //     creli2.innerHTML = `<li>HP: ${attStat}</li>`
    //     creli3.innerHTML = `<li>HP: ${defStat}</li>`
    //     creli4.innerHTML = `<li>HP: ${saStat}</li>`
    //     creli5.innerHTML = `<li>HP: ${sdStat}</li>`
    //     creli6.innerHTML = `<li>HP: ${speStat}</li>`

    //     creUl.append(creli1)
    //     creUl.append(creli2)
    //     creUl.append(creli3)
    //     creUl.append(creli4)
    //     creUl.append(creli5)
    //     creUl.append(creli6)

    //     ulContainer.append(creLi)


    // });

    //FIXED FOR LOOP 

    for (let i = 0; i < data.length; i++) {

        //NAME
        let namStat = data[i].name
        let beginChar = namStat.slice(0, 1).toUpperCase()
        let endChar = namStat.slice(1)

        let newName = beginChar + endChar

        //HP
        let hpStat = data[i].stats[0].base_stat
        //ATTACK
        let attStat = data[i].stats[1].base_stat
        //DEFENSE
        let defStat = data[i].stats[2].base_stat
        //SPECIAL ATTACK
        let saStat = data[i].stats[3].base_stat
        //SPECIAL DEFENSE
        let sdStat = data[i].stats[4].base_stat
        //SPEED
        let speStat = data[i].stats[5].base_stat
        //IMG
        let imgStat = data[i].sprites.other["official-artwork"].front_default



        /* Codes below are used to get the data for the extensions*/

        let togImg1 = data[i].sprites.other.dream_world.front_default
        let togImg2 = data[i].sprites.other["official-artwork"].front_default

        let togArray = [togImg1, togImg2]

        let randomArrayPicker = Math.random()

        if (randomArrayPicker < 0.5) {
            randomArrayPicker = 0
        } else {
            randomArrayPicker = 1
        }

        let endImg = togArray[randomArrayPicker]


        // console.log(togArray)


        let getGameOne = data[i].sprites.versions["generation-i"]
        let getGameTwo = data[i].sprites.versions["generation-ii"]
        let getGameThree = data[i].sprites.versions["generation-iii"]
        let getGameFour = data[i].sprites.versions["generation-iv"]
        let getGameFive = data[i].sprites.versions["generation-v"]

        let game1 = Object.keys(getGameOne)[0]
        let game2 = Object.keys(getGameTwo)[0]
        let game3 = Object.keys(getGameThree)[0]
        let game4 = Object.keys(getGameFour)[0]
        let game5 = Object.keys(getGameFive)[0]



        /*--------------------------------------------------------------------------------------- */

        /*
        ## Extended Requirements
        - Add an extra section to each card that contains information about which games each pokemon appeared in.
       
        >>>>  I met this requirement by adding an extra h3 and ul>li elements under the let variable below
      
        - See if you can find a way to toggle between the different images of each card! (this is a hard one! You might want to use google...)

        >>>> I met this requirement by randomly choosing between the 2 pictures that are provided with the data file. I got the image 

        */
        let listItemContent = `
            <li class="card">
                 <h2 class="card--title">${newName}</h2>
                    <img
                        width="256"
                        class="card--img"
                        src="${endImg}"
                    />
                 <ul class="card--text">
                    <li>HP: ${hpStat}</li>
                    <li>ATTACK: ${attStat}</li>
                    <li>DEFENSE: ${defStat}</li>
                    <li>SPECIAL-ATTACK: ${saStat}</li>
                    <li>SPECIAL-DEFENSE: ${sdStat}</li>
                    <li>SPEED: ${speStat}</li>
                </ul>



                <h3>5 games this pokemon starred in</h3>
                <ul class="card--text">
                  <li>${game1}</li>
                  <li>${game2}</li>
                  <li>${game3}</li>
                  <li>${game4}</li>
                  <li>${game5}</li>
                </ul>
                


                
             </li>
            `
        ulContainer.innerHTML += listItemContent



    }







}

contentCreator()