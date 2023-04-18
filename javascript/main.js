const words = [
    "Scramble",
    "Culinary",
    "Mushroom",
    "Laundry",
    "Festival",
    "Elevation",
    "Surmount",
    "Obsidian",
    "Stagnant",
    "Campaign",
    "Alluring",
    "Prototype",
    "Accurate",
    "Incision",
    "Momentum",
    "Scorpion",
    "Ephemera",
    "Quandary",
    "Diversity",
    "Pinstrip",
    "Spirited"
  ];
let place;
const randomInt = Math.floor(Math.random() * words.length+1);
const wordToGuess = words[randomInt].toLowerCase();
const wordToGuessArray = wordToGuess.split('');
console.log(wordToGuess)
let input;
const start = document.getElementById('input');
let foutChecker = 0;
let foutCheckBoolean = true;
let solution = [];
//-----------------------------------------------------------------
for(let j = 0; j < wordToGuess.length; j++ ){
    solution.push('');
}
//-----------------------------------------------------------------------------

start.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      input = document.getElementById('input').value;
      if(foutCheckBoolean){
        playGame()
      }else{
        console.log('you lost')
      }
    }
});

function playGame(){
    for(let i = 0; i < wordToGuess.length; i++){
        if(wordToGuessArray[i] == input){
            place = i;
            solution[place] = input;
        }else if(wordToGuessArray.includes(input)){
            console.log('juist')
        }else{
            foutChecker = foutChecker+1;
            console.log(foutChecker)
        }
    }
    if(foutChecker == 72){
        foutCheckBoolean = false;
    }
    console.log(solution)
}





