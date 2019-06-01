// File wrapped with document.ready so the html & css load first
$(document).ready(function() {

//Declaring variables
const words = ["regular", 'iregular']
let randomWord = "";
let wordLength = []
let blanks = 0;
let solvedUnsolved = [];
let wrongGuess = [];
let wins = 0;
let losses = 0;
let guessesRemaining = 9;


// Generate Word
function gameStart() {

    randomWord = words[Math.floor(Math.random() * words.length)];

    // split the individual word into separate arrays, and store in new array 
    wordLength = randomWord.split("");

    //store length of word in blanks, for later use
    const blanks = wordLength.length;

    //creating a loop to generate "_" for each letter in array stored in blanks and add them to the HTML
    for (var i = 0; i < blanks; i++) {
        solvedUnsolved.push("_");
    }
    // .innerHTML or .append?
    $(".gameBoard").innerHTML = "  " + solvedUnsolved.join("  ");

}


//Game Start --Keep at bottom of page

gameStart();

document.onkeyup = function(event) {
    
    for ( let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === event.key){
            
        }

    }

}
















});