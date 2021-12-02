let shuffle = document.getElementById("wheel-spin");
let pokemonImage = document.getElementById("pokemon-image");
let pokemonNames = ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"];
let leftButton = document.getElementById("left-button");
let middleButton = document.getElementById("middle-button");
let rightButton = document.getElementById("right-button");
let guessStatement = document.getElementById("statement")
var pokemon = ''

function shuffler(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

checkClick = (button) => {
    if (button.innerHTML == pokemon){
        return "You know your pokemon!"
    } else {
        return "You picked the wrong pokemon"
    }
} 

function getNewPokemon(){
    pokemon = pokemonNames[Math.floor(Math.random()*pokemonNames.length)]; //Gets correct pokemon as a string
    let buttonAssignment = pokemonNames.filter((word)=>word != pokemon); //Get an array of the rest of the pokemon
    console.log(buttonAssignment) 
    shuffler(buttonAssignment) //Shuffle the rest of the pokemon so it's in a random order
    console.log(buttonAssignment)

    //Decide which button will be correct
    let x = Math.floor(Math.random()*3);
    console.log(x)
    switch (x){
        case 0:
            leftButton.innerHTML = pokemon;
            middleButton.innerHTML = buttonAssignment[0];
            rightButton.innerHTML = buttonAssignment[1];
            break;
        case 1:
            leftButton.innerHTML = buttonAssignment[0];
            middleButton.innerHTML = pokemon;
            rightButton.innerHTML = buttonAssignment[1];
            break;
        case 2:
            leftButton.innerHTML = buttonAssignment[0];
            middleButton.innerHTML = buttonAssignment[1];
            rightButton.innerHTML = pokemon;
            break;
    }

    pokemonImage.src = "public/images/"+pokemon.toLowerCase()+".png"; //Change the pokemon shown to the correct pokemon
    guessStatement.innerHTML = "Who's that Pokemon?" 
    
}

shuffle.addEventListener('click', getNewPokemon)

leftButton.addEventListener('click', () => {
    if (leftButton.innerHTML == pokemon){
        guessStatement.innerHTML = "You know your pokemon!"
    } else {
        guessStatement.innerHTML = "You picked the wrong pokemon"
    }
})

rightButton.addEventListener('click', () => {
    if (rightButton.innerHTML == pokemon){
        guessStatement.innerHTML = "You know your pokemon!"
    } else {
        guessStatement.innerHTML = "You picked the wrong pokemon"
    }
})

middleButton.addEventListener('click', () => {
    if (middleButton.innerHTML == pokemon){
        guessStatement.innerHTML = "You know your pokemon!"
    } else {
        guessStatement.innerHTML = "You picked the wrong pokemon"
    }
})