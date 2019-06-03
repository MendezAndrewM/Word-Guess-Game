// File wrapped with document.ready so the html & css load first
$(document).ready(function () {

    const game = {
        wins: 0,
        losses: 0,
        words: ['regular', 'irregular'],
        randomWord: "",
        wordLength: [],
        blanks: 0,
        solvedUnsolved: [],
        wrongGuess: [],
        guessesRemaining: 5,
        randomWord: function () {
            theWord = words[Math.floor(Math.random() * words.length)];
            wordLength = theWord.split('');
            const blanks = wordLength.length;
            for (var i = 0; i < blanks; i++) {
                solvedUnsolved.push("_");
            }
            $(".gameBoard").innerHTML = "  " + solvedUnsolved.join("  ");
        };
        $("#currentWord").html("  " + solvedUnsolved.join("  "););,


        checkLetters: function(letter) {
            const letterInWord = false;
            for (var i = 0; i < blanks; i++) {
                if (randomWord.theWord[i] == letter) {
                    letterInWord = true;
                }
            }
            if (letterInWord) {
                for (var i = 0; i < blanks; i++) {
                    if (randomWord.theWord[i] == letter) {
                        solvedUnsolved[i] = letter;
                    }
                }
            }
            else {
                wrongGuess.push(letter);
                guessesRemaining--;
            }
        }
        
        complete: function() {
            console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)
            if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
                wins++;
                // reset()
                //display wins on screen
                $("#winstracker").innerHTML = " " + wins;
        
                //if LOST...then alert and reset new round
            } else if (guessesRemaining === 0) {
                losses++;
                reset()
                document.getElementById("image").src = "./assets/images/try-again.png"
                document.getElementById("losstracker").innerHTML = " " + losses;
            }
            //display losses on screen && guesses remaining countdown
            document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
            document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
        }


    }

    keyup(function() {
        for (let i = 0; i < randomWord.theWord.length; i++l) {
            const guesses = String.event.key.toUpperCase;
            game.checkLetters(guesses);
            winOrLoose();//need to be built


    }



});