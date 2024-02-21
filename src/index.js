
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

        const newImage = document.createElement('img')
        newImage.setAttribute('class', 'card--img')
        newImage.setAttribute('alt', task.name)
        newImage.src = task.sprites.front_default

        listItem.setAttribute('id',task.id);
        listItem.innerHTML = task.name;

        
        listCard.appendChild(listItem);
        listCard.appendChild(newImage);
        listCard.appendChild(listHP);
        listCard.appendChild(listAttack);
        listCard.appendChild(listDefence);
        listCard.appendChild(listSAttack);
        listCard.appendChild(listDefence);
        listCard.appendChild(listSpeed);
        taskList.appendChild(listCard)
        console.log(listItem);
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
