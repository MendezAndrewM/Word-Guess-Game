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
        guessesRemaining: 6,

        playWord: function () {
            this.randomWord = this.words[Math.floor(Math.random() * this.words.length)];
            wordLength = this.randomWord.split('');
            blanks = wordLength.length;
            for (let i = 0; i < blanks; i++) {
                this.solvedUnsolved.push("_");
            }
            $("#currentWord").html("  " + this.solvedUnsolved.join("  "));
            console.log(this.randomWord);
            console.log(this.wordLength);
            console.log(this.blanks);
            console.log(this.solvedUnsolved);
        },

        checkLetters: function (letter) {
            let correct = false;
            for (let i = 0; i < this.blanks; i++) {
                if (this.randomWord[i] == letter) {
                    correct = true;
                }
            }
            if (correct) {
                for (let i = 0; i < blanks; i++) {
                    if (this.randomWord[i] == letter) {
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

            } else if (this.guessesRemaining === 0) {
                this.losses++;
                this.reset();
                $("#losstracker").html(" " + this.losses);
            }
            
            $("#currentWord").html("  " + this.solvedUnsolved.join(" "));
            $("#lives").html(" " + this.guessesRemaining);
        },


        reset: function () {
            this.guessesRemaining = 6;
            this.wrongGuess = [];
            this.solvedUnsolved = [];
            this.randomWord()
        }


    }

    game.playWord()

    $(document).keyup(function () {
            let guesses = event.key.toUpperCase();
            game.checkLetters(guesses);
            game.complete();
            $("#letterGY").html("  " + game.wrongGuess.join(" "));
            console.log(guesses);
    });


});