/*
function clickSurLeTitre(){
    alert("Ceci est un message d'alerte");
    const monElementParent = document.getElementById("game-grid");

    //Première façon :
    //monElementParent.innerHTML+="<div><h1>titre</h1></div>";

    //Deuxième façon :
    const monNouvelElement = document.createElement("div");
    monNouvelElement.innerHTML="2ème façon";
    monElementParent.innerHTML="";
    monNouvelElement.classlist.add("container");
    monElementParent.appendChild(monNouvelElement);
}
*/


function creatGameGrid(){
    let gameGrid = document.getElementById("game-grid");
    let emojis = ["😍", "🙂", "🫡", "✈️", "🌍", "🎥", "📧", "📈", "😍", "📈", "🌍", "📧", "🫡", "🎥", "✈️", "🙂" ];
for(let i = 0; i <= 15 ; i++){
    let newDiv = document.createElement("div");
    newDiv.id = "items";
    newDiv.innerHTML = emojis[i];
    newDiv.onclick= function(e) {
        e.target.classList.remove("transparent");
        
    };
    newDiv.classList.add("transparent");
    gameGrid.appendChild(newDiv);
    }
}


function initialisation(){
    const monElementParent = document.getElementById("game-grid");
    console.innerHTML(monElementParent);
    monElementParent.innerHTML="";
    console.log("Message");
}

initialisation();


let firstCardFlip = null;
let secondCardFlip = null;

secondCardFlip() = null

function checkForMatch(){

}