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
// dit zijn de mogelijke woorden die geraden kunnen worden 
let place;
let input;
let foutChecker = 0;
let foutCheckBoolean = true;
let solution = [];
//bepaalde variable die we nodig hebben 
const randomInt = Math.floor(Math.random() * words.length+1);
const wordToGuess = words[randomInt].toLowerCase();
const wordToGuessArray = wordToGuess.split('');
//dit zorgt er voor dat er eeb random woord gekozen word uit de array en dat dit naar kleine leters omgezet wordt
//ook vervangt je de string naaar een array om zo de plaats van de letters te bepalen 
const start = document.getElementById('input');
const first = document.getElementById('hangman1');
const second = document.getElementById('hangman2');
const third = document.getElementById('hangman3');
const fourth = document.getElementById('hangman4');
const fifth = document.getElementById('hangman5');
const sixth = document.getElementById('hangman6');
const seventh = document.getElementById('hangman7');
const eighth = document.getElementById('hangman8');
const ninth = document.getElementById('hangman9');
//hierbij haal je informatie op van de site om deze later in het programma aantepassen 
for(let j = 0; j < wordToGuess.length; j++ ){
    solution.push('');
}
//dit genereed de solution array om je woord mee te makken 
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
//hierbij start je het spel door op enter te duwen en stopt hij met spelen na 9 pogingen alleen bij het herladen van de pagina kan je dan opnieuw spelen
function playGame(){
    for(let i = 0; i < wordToGuess.length; i++){
        if(wordToGuessArray[i] == input){
            place = i;
            solution[place] = input;
        }else if(wordToGuessArray.includes(input)){
            console.log('juist')
        }else{
            foutChecker = foutChecker+1;
        }
//hierbij wordt gekeken of de letter aanwezig is in het te raden woord en als het juist is ingevuld 
//en bij een fout wordt er een foutchecker geincrimenteerd om het aantal pogingen te beperken
        if(foutChecker == 8){
            first.style.display = 'block';
        }
        if(foutChecker == 16){
            first.style.display = 'none';
            second.style.display = 'block';
        }
        if(foutChecker == 24){
            second.style.display = 'none';
            third.style.display = 'block'
        }
        if(foutChecker == 32){
            third.style.display = 'none';
            fourth.style.display = 'block'
        }
        if(foutChecker == 40){
            fourth.style.display = 'none';
            fifth.style.display = 'block'
        }
        if(foutChecker == 48){
            fifth.style.display = 'none';
            sixth.style.display = 'block'
        }
        if(foutChecker == 56){
            sixth.style.display = 'none';
            seventh.style.display = 'block'
        }
        if(foutChecker == 64){
            seventh.style.display = 'none';
            eighth.style.display = 'block'
        }
        if(foutChecker == 72){
            eighth.style.display = 'none';
            ninth.style.display = 'block'
        }  
// dit zorgt voor de display van het hangmannetje
    }
    if(foutChecker == 72){
        foutCheckBoolean = false;
    }
//hierdoor wordt het spel gestopt na 9 pogingen 
let displayWord = solution.join()
const display = document.getElementById('wordToDisplay');
display.textContent = displayWord;
}
// dit is het verloop van het spel 





