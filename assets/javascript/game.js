// File wrapped with document.ready so the html & css load first
$(document).ready(function() {

// Global Variables  -subject to change ¿maybe put inside an object?
let wins = 0
let hint;
let word;
let category;
const letterBank = [];
const lives;
const guess;

// get Elements
const showCategory = $('.category');
const getHint = $('#hint');
const showLives = $('#lives');
const showGuesses = $('#letterGY');



// User input
const guess = (document.onkeyup = function() {
    guess.text = event.key;
});

















});