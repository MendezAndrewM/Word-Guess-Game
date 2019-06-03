// File wrapped with document.ready so the html & css load first
$(document).ready(function () {

    const game = {
        wins: 0,
        losses: 0,
        words: ['REGULAR', 'IRREGULAR'],
        randomWord: "",
        wordLength: [],
        blanks: 0,
        solvedUnsolved: [],
        wrongGuess: [],
        guessesRemaining: 5,

        randomWord: function () {
            theWord = this.words[Math.floor(Math.random() * this.words.length)];
            wordLength = theWord.split('');
            blanks = wordLength.length;
            for (let i = 0; i < blanks; i++) {
                this.solvedUnsolved.push("_");
            }
            $("#currentWord").html("  " + this.solvedUnsolved.join("  "));
        },
        // $("#currentWord").html("  " + solvedUnsolved.join("  "););,


        reset: function () {
            this.guessesRemaining = 5;
            this.wrongGuess = [];
            this.solvedUnsolved = [];
            this.randomWord()
        },


        checkLetters: function (letter) {
            const correct = false;
            for (let i = 0; i < this.blanks; i++) {
                if (this.randomWord.theWord[i] == letter) {
                    correct = true;
                }
            }
            if (correct) {
                for (let i = 0; i < blanks; i++) {
                    if (this.randomWord.theWord[i] == letter) {
                        this.solvedUnsolved[i] = letter;
                    }
                }
            }
            else {
                this.wrongGuess.push(letter);
                this.guessesRemaining--;
            }
        },

        complete: function () {
            console.log("wins:" + this.wins + "| losses:" + this.losses + "| guesses left:" + this.guessesRemaining)
            if (this.wordLength.toString() == this.solvedUnsolved.toString()) {
                this.wins++;
                this.reset();
                $("#winstracker").html(" " + this.wins); //Need to add Wins and Losses to HTML

                //if LOST...then alert and reset new round
            } else if (this.guessesRemaining === 0) {
                this.losses++;
                this.reset();
                // $("image").src = "./assets/images/try-again.png"
                $("#losstracker").html(" " + this.losses);
            }
            //display losses on screen && guesses remaining countdown
            $("currentword").innerHTML = "  " + this.solvedUnsolved.join(" ");
            $("guessesremaining").innerHTML = " " + this.guessesRemaining;
        }


    }

    game.randomWord()

    $(document).keyup(function () {
            const guesses = toString(event.key).toUpperCase();
            game.checkLetters(guesses);
            game.complete();
            $("#letterGY").html("  " + this.wrongGuess.join(" "));
    });


});