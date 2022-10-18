// use a for loop to create element to contain all details of the card
for (const element of data) {
    // card has already been defined in the html, use "cards" to 
    //create a class within to hold all the data and img. make
    //this an unordered list to hold the stats and img
    const cards = document.querySelector("ul");
    //declare a const of liItem within the document
    const liItem = document.createElement("li");
    //set liItem to be within card
    liItem.setAttribute("class", "card");
    // use const h2 to display the card title. This has been aligned in 
    // the css. use create element to enable this specified tag within the document.
    const h2 = document.createElement("h2");
    // use setAttribute to assign the tag designated in the html
    h2.setAttribute("class", "card--title");
    //declare a const for the images we will use with the name declared in the html 
    const img = document.createElement("img");
    img.setAttribute("class", "card--img");



}

// create an unordered list for the stat text that will go on card
// const pokestats = document.createElement("ul");
// pokestats.setAttribute("class", "card--text");
// const liHp = document.createElement("li");
// const liAtt = document.createElement("li");
// const liDef = document.createElement("li");
// const liSpecAtt = document.createElement("li");
// const liSpecDef = document.createElement("li");
// const liSpeed = document.createElement("li");

