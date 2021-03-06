// $('document').ready(function () {
window.addEventListener("load", function() {

    const game = {
        wins: 0,
        losses: 0,
        words: ['REGULAR', 'IRREGULAR', 'EXPIRED'],
        randomWord: "",
        wordLength: [],
        blanks: 0,
        solvedUnsolved: [],
        wrongGuess: [],
        guessesRemaining: 6,
        possibleChoices: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],

        playWord: function () {
            this.randomWord = this.words[Math.floor(Math.random() * this.words.length)];
            this.wordLength = this.randomWord.split('');
            this.blanks = this.wordLength.length;
            for (let i = 0; i < this.blanks; i++) {
                this.solvedUnsolved.push("_");
            }
            // $('#currentWord').html("  " + this.solvedUnsolved.join("  "));
            document.querySelector("#currentWord").innerText = "  " + this.solvedUnsolved.join("  ");
            console.log(this.randomWord);
            // console.log(this.wordLength);
            // console.log(this.blanks);
            // console.log(this.solvedUnsolved);
        },


        checkLetters: function (letter) {
            // Working version of function on line 64
            // Need Fix --  sends alert repeatedly forever   
            //         for (let i = 0; i < this.possibleChoices.length; i++) {
            //             let legit = false;
            //             if (this.possibleChoices[i] == letter) {
            //                 legit = true;
            //                 let correct = false;
            //                 for (let i = 0; i < this.blanks; i++) {
            //                     if (this.randomWord[i] == letter) {
            //                         correct = true;
            //                         console.log('correct!'); //seems to currently a mythical sernario
            //                     }
            //                 }
            //                 if (correct) {
            //                     for (let i = 0; i < this.blanks; i++) {
            //                         if (this.randomWord[i] == letter) {
            //                             this.solvedUnsolved[i] = letter;
            //                         }
            //                     }
            //                 }
            //                 else {
            //                     this.wrongGuess.push(letter);
            //                     this.guessesRemaining--;
            //                     console.log('wrong!')
            //                 }

            //             else {
            //                 alert('You must choose a letter in the alphebet!');
            //             }
            //         }
            //     }
            // },

            let correct = false;

            for (let i = 0; i < this.blanks; i++) {
                // console.log('running loop');
                if (this.randomWord[i] === letter) {
                    // console.log('correct should now ===true');
                    correct = true;
                    // console.log('correct!'); 
                }
            }
            if (correct) {
                for (let i = 0; i < this.blanks; i++) {
                    if (this.randomWord[i] == letter) {
                        this.solvedUnsolved[i] = letter;
                        // console.log('solvedUnsolved: ' + this.solvedUnsolved);
                        // console.log('blanks: ' + this.blanks);
                        // console.log('wordLength: ' + this.wordLength);
                    }
                }
            }
            else {
                this.wrongGuess.push(letter);
                this.guessesRemaining--;
                // console.log('wrong!')
                livesLeft();

            }
        },

        complete: function () {
            if (this.wordLength.toString() == this.solvedUnsolved.toString()) {
                // console.log('its working!')
                this.wins++;
                this.reset();
                // $("#winTracker").html(" " + this.wins);
                document.querySelector("#winTracker").innerHTML = " " + this.wins;

            } else if (this.guessesRemaining === 0) {
                this.losses++;
                this.reset();
                // $("#lossTracker").html(" " + this.losses);
                document.querySelector("#lossTracker").innerHTML = " " + this.losses;
            }

            // $("#currentWord").html("  " + this.solvedUnsolved.join(" "));
            document.querySelector("#currentWord").innerHTML = "  " + this.solvedUnsolved.join(" ");
            // $(".ball").html(" " + this.guessesRemaining);
            document.getElementsByClassName("ball").innerHTML = " " + this.guessesRemaining;
        },

        reset: function () {
            this.guessesRemaining = 6;
            this.wrongGuess = [];
            this.solvedUnsolved = [];
            this.playWord()
            resetLives()
        }
        
    }

    game.playWord()
    // console.log(game);
    document.onkeydown = function (event) {
        let guess = event.key.toUpperCase();
        game.checkLetters(guess);
        game.complete();
        // $("#letterGY").html("  " + game.wrongGuess.join(" "));
        document.querySelector("#letterGY").innerHTML = "  " + game.wrongGuess.join(" ");
        console.log(guess);
    };

    function livesLeft() {
        console.log(game.guessesRemaining)
        if (game.guessesRemaining === 5) {
            // $('#one').hide();
            document.getElementById("one").style.display = "none";
        }
        if (game.guessesRemaining === 4) {
            // $('#two').hide();
            document.getElementById("two").style.display = "none";
        }
        if (game.guessesRemaining === 3) {
            // $('#three').hide();
            document.getElementById("three").style.display = "none";
        }
        if (game.guessesRemaining === 2) {
            // $('#four').hide();       
            document.getElementById("four").style.display = "none";
        }
        if (game.guessesRemaining === 1) {
            // $('#five').hide();
            document.getElementById("five").style.display = "none";
        }
        if (game.guessesRemaining === 0) {
            // $('#six').hide();
            document.getElementById("six").style.display = "none";
        }
    }

    function resetLives() {
        document.getElementById("one").style.display = "initial";
        document.getElementById("two").style.display = "initial";
        document.getElementById("three").style.display = "initial";
        document.getElementById("four").style.display = "initial";
        document.getElementById("five").style.display = "initial";
        document.getElementById("six").style.display = "initial";
    }

}, false);



