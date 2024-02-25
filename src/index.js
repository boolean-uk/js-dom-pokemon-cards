
console.log(data);

const taskList = document.getElementById("cards");
const content = document.getElementById("content");

function renderTask(){
    taskList.innerHTML = "";
    for(i =0; i<data.length; i++){
        const task = data[i]
        const listItem = document.createElement('h2');
        
        const listAttack = document.createElement('p');
        listAttack.setAttribute('class', 'card--text');
        listAttack.innerHTML = 'Attack: ' + task.stats[1].base_stat;

        const listSAttack = document.createElement('p');
        listSAttack.setAttribute('class', 'card--text');
        listSAttack.innerHTML = 'Special Attack: ' + task.stats[3].base_stat;

        const listDefence = document.createElement('p');
        listDefence.setAttribute('class', 'card--text');
        listDefence.innerHTML = 'Defence: ' + task.stats[2].base_stat;

        const listSDefence = document.createElement('p');
        listSDefence.setAttribute('class', 'card--text');
        listSDefence.innerHTML = 'Special Defence: ' + task.stats[4].base_stat;

        const listSpeed = document.createElement('p');
        listSpeed.setAttribute('class', 'card--text');
        listSpeed.innerHTML = 'Speed: ' + task.stats[5].base_stat;

        const listCard = document.createElement('div');
        listCard.setAttribute('class','card');

        const listHP = document.createElement('p');
        listHP.setAttribute('class', 'card--text');
        listHP.innerHTML = 'HP: ' + task.stats[0].base_stat;

        const newImage = document.createElement('img');
        newImage.setAttribute('class', 'card--img');
        newImage.setAttribute('alt', task.name);
        newImage.setAttribute('id', 'imgId' + i);
        newImage.src = task.sprites.front_default; 
        newImage.setAttribute('src-2', task.sprites.back_default);
        newImage.onclick = (function(index) {
            return function() { runCommand(index); };
        })(i);

        listItem.setAttribute('id', task.id);
        listItem.innerHTML = task.name;

        let teller = 0;
        const listGames = document.createElement('p');
        listGames.setAttribute('class', 'card--text');
        listGames.innerHTML = 'Games: '
        task.game_indices.forEach(items => {
            teller++
            if(teller%3 === 0){
                listGames.innerHTML += '\n';
            }
            listGames.innerHTML += items.version.name + ',';
        })


        listCard.appendChild(listItem);
        listCard.appendChild(newImage);
        listCard.appendChild(listHP);
        listCard.appendChild(listAttack);
        listCard.appendChild(listDefence);
        listCard.appendChild(listSAttack);
        listCard.appendChild(listDefence);
        listCard.appendChild(listSpeed);
        listCard.appendChild(listGames);
        taskList.appendChild(listCard);
        

        console.log(listItem);
    }
}

function runCommand(index) {
    let imgId = document.getElementById('imgId' + index);
    console.log('Clicked image for index: ', index);
    console.log(imgId);
    let originalSrc = imgId.getAttribute('src-3');
    let alternateSrc = imgId.getAttribute('src-2');

    if (imgId.src === alternateSrc) {
        imgId.src = originalSrc; 
    } else {
        imgId.setAttribute('src-3', imgId.src)
        imgId.src = alternateSrc;

    }
}

function main(){
    console.log("Running main");
    console.log("Data: ", data);
    renderTask();
    // for(i = 0; i< data.length; i++){
    //     content.innerHTML += data[i].name
    // }
}

console.log(data[0].name);
main();
