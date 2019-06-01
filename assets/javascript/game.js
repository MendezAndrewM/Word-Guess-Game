// File wrapped with document.ready so the html & css load first
$(document).ready(function() {

//VARIABLES
const words = ["regular", 'iregular']

//Empty variables to store values later
let randomWord = "";
let letterLength = []
let blanks = 0;
let blanksAndCorrect = [];
let wrongGuess = [];

//Counter Variables
let wins = 0;
let losses = 0;
let guessesRemaining = 9;



function Game() {
    //computer generates random word from words array
    randomWord = words[Math.floor(Math.random() * words.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord);
    console.log(blanks);
    console.log(blanksAndCorrect);
}














});