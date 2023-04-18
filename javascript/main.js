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
    "Spirited",
    "Ambrosia",
    "Thriving",
    "Integrity",
    "Jovially",
    "Converge",
    "Lavender",
    "Abrogate",
    "Scathing",
    "Satchels",
    "Artifice",
    "Authenticate",
    "Eucalypt",
    "Luminary",
    "Forestry",
    "Discordant",
    "Radiance",
    "Equipped",
    "Impunity",
    "Torridly",
    "Debility",
    "Parchment",
    "Ancestor",
    "Euphoria",
    "Squeezed",
    "Addicted",
    "Inscribe",
    "Scarcefy",
    "Reproach",
    "Amalgams",
    "Adversity",
    "Dexterity",
    "Malinger",
    "Definite",
    "Juxtapose",
    "Cravings",
    "Pugilist",
    "Conquest",
    "Prophesy",
    "Latitude",
    "Obligate",
    "Marauder",
    "Tantamount",
    "Tropical",
    "Eclectic",
    "Gregarious",
    "Infernal",
    "Lullaby",
    "Mentally",
    "Outspoken",
    "Profound",
    "Sapphire",
    "Sporadic",
    "Ultimatum",
    "Zestfully",
    "Abhorrent",
    "Asymmetry",
    "Blossoms",
    "Coalesce",
    "Demolish",
    "Fledging",
    "Hydrangea",
    "Immerse",
    "Liberate",
    "Nonpluss",
    "Opulence",
    "Parsnips",
    "Reclusive",
    "Succinct",
    "Talisman",
    "Universe",
    "Windsurf",
    "Adherence",
    "Ballroom",
    "Cavalier",
    "Decadent",
    "Enshrine",
    "Foothill",
    "Heritage"
  ];
// dit zijn de mogelijke woorden die geraden kunnen worden 
let place;
let input;
let foutChecker = 0;
let foutCheckBoolean = true;
let solution = [];
let guessesArray = [];
//bepaalde variable die we nodig hebben 
const randomInt = Math.floor(Math.random() * words.length);
const wordToGuess = words[randomInt].toLowerCase();
const wordToGuessArray = wordToGuess.split('');
//dit zorgt er voor dat er eeb random woord gekozen word uit de array en dat dit naar kleine leters omgezet wordt
//ook vervangt je de string naaar een array om zo de plaats van de letters te bepalen 
const start = document.getElementById('input');
const hangman = document.getElementById('hangman');
const refresh = document.getElementById('refresh');
//hierbij haal je informatie op van de site om deze later in het programma aantepassen 
for(let j = 0; j < wordToGuess.length; j++ ){
    solution.push('');
}
//dit genereed de solution array om je woord mee te makken 
refresh.addEventListener("click", function(){
    location.reload();
})
//dit is om het spel opnieuw te spellen
start.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      input = document.getElementById('input').value;
      guessesArray.push(input);
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
        }
    }
//hierbij wordt gekeken of de letter aanwezig is in het te raden woord en als het juist is ingevuld 
    if(!wordToGuessArray.includes(input)){
     foutChecker = foutChecker+1;
    }  
//en bij een fout wordt er een foutchecker geincrimenteerd om het aantal pogingen te beperken
console.log(hangman)
        if(foutChecker == 1){
            hangman.setAttribute('src', 'img/1.png');
        }
        if(foutChecker == 2){
            hangman.setAttribute('src', 'img/2.png');
        }
        if(foutChecker == 3){
            hangman.setAttribute('src', 'img/3.png');
        }
        if(foutChecker == 4){
            hangman.setAttribute('src', 'img/4.png');
        }
        if(foutChecker == 5){
            hangman.setAttribute('src', 'img/5.png');
        }
        if(foutChecker == 6){
            hangman.setAttribute('src', 'img/6.png');
        }
        if(foutChecker == 7){
            hangman.setAttribute('src', 'img/7.png');
        }
        if(foutChecker == 8){
            hangman.setAttribute('src', 'img/8.png');
        }
        if(foutChecker == 9){
            hangman.setAttribute('src', 'img/9.png');
        }  
// dit zorgt voor de display van het hangmannetje
    if(foutChecker == 9){
        foutCheckBoolean = false;
    }
//hierdoor wordt het spel gestopt na 9 pogingen 
let wordToDisplay= solution.join()
let guesses = guessesArray.join();
const displayLeters = document.getElementById('lettersToDisplay');
const displayWord = document.getElementById('wordToDisplay');
guesses = guesses.replace(/,/g, " ");
wordToDisplay = wordToDisplay.replace(/,/g, "-");
displayWord.textContent = wordToDisplay;
displayLeters.textContent = guesses;
}
// dit is het verloop van het spel 





