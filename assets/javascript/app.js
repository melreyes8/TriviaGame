// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// * If the player selects the correct answer, show a screen congratulating them for choosing the right option. 
//   After a few seconds, display the next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer. 
//     Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. 
//     Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, 
//   and an option to restart the game (without reloading the page).


// GLOBAL VARIABLES

var loadPage; // ? on page load, as in $(document).ready??? 
var clock;
var timer = 30;
var correctAnswerCounter = 0;
var wrongAnswerCounter = 0;
var unansweredCounter = 0;

var quotesArray = [
    "Say Hello to little friend!", // Scarface
    "Show me the money!", // Jerry MaGuire
    "Yo, Adrian!", // Rocky
    "Hasta la vista, baby", // Terminator 2
    "There's no crying in baseball!", // A League of Their Own
    "You can't handle the truth!", // A Few Good Men
    "Houston, we have a problem.", // Apollo 13
    "You're going to need a bigger boat.", // Jaws
    "There's no place like home.", // Wizard Oz
    "May the force be with you.", // Star Wars
    "They may take our lives, but they will never take our freedom!", // Braveheart
    "I am Groot!", // Guardians of the Galaxy
    "My precious!", // Lord of the Rings
    "This is Sparta!", // 300 
    "You talkin to me?", // Taxi Driver
];

var answersArray = [
    ["Scarface", "The Godfather", "Goodfellas", "Lethal Weapon"],
    ["Friday", "Jerry MaGuire", "Casino", "Moneyball"],
    ["The Fighter", "Ali", "Rocky", "Gladiator"],
    ["The Terminator", "Terminator Salvation", "Terminator Genisys", "Terminator 2"],
    ["A League of Their Own", "Major League", "Moneyball", "The Rookie"],
    ["Erin Brockovich", "A Few Good Men", "Liar Liar", "The Firm"],
    ["Armageddon", "Space Cowboys", "Apollo 13", "The Martian"],
    ["Captain Phillips", "The Perfect Storm", "Waterworld", "Jaws"],
    ["The Wizard of Oz", "Alice in Wonderland", "Pirates of the Caribbean", "Harry Potter"],
    ["Star Trek", "Star Wars", "Interstellar", "Guardians of the Galaxy"],
    ["Troy", "King Arthur", "Braveheart", "Gladiator"],
    ["Doctor Strange", "Thor", "Avatar", "Guardians of the Galaxy"],
    ["The Lord of the Rings", "Alice in Wonderland", "Harry Potter", "Pirates of the Caribbean"],
    ["Gladiator", "300", "The Immortals", "Meet the Spartans"],
    ["Scareface", "Goodfellas", "Taxi Driver", "The Godfather"]
];

var correctAnswers = [
    "A. Scarface",
    "B. Jerry MaGuire",
    "C. Rocky",
    "D. Terminator 2",
    "A. A League of Their Own",
    "B. A Few Good Men",
    "C. Apollo 13",
    "D. Jaws",
    "A. The Wizard of Oz",
    "B. Star Wars",
    "C. Braveheart",
    "D. Guardians of the Galaxy",
    "A. The Lord of the Rings",
    "B. 300",
    "C. Taxi Driver"
];

var imageArray = new Array(); 
    imageArray[0] = "<img class='center-block' src='/assets/images/ScarfaceIMDB.jpg>";
    imageArray[1] = "<img class='center-block' src='/assets/images/JerryMaGuireIMBD.jpg>";
    imageArray[2] = "<img class='center-block' src='/assets/images/RockyIMDB.jpg>";
    imageArray[3] = "<img class='center-block' src='/assets/images/Terminator2IMDB.jpg>";
    imageArray[4] = "<img class='center-block' src='/assets/images/aLeagueOfTheirOwnIMDB.jpg>";
    imageArray[5] = "<img class='center-block' src='/assets/images/aFewGoodMenIMDB.jpg>";
    imageArray[6] = "<img class='center-block' src='/assets/images/Apollo13IMDB.jpg>";
    imageArray[7] = "<img class='center-block' src='/assets/images/JawsIMDB.jpg>";
    imageArray[8] = "<img class='center-block' src='/assets/images/TheWizardOfOzIMDB.jpg>";
    imageArray[9] = "<img class='center-block' src='/assets/images/StarWarsIMDB.jpg>";
    imageArray[10] = "<img class='center-block' src='/assets/images/BraveheartIMDB.jpg>";
    imageArray[11] = "<img class='center-block' src='/assets/images/GuardiansOfTheGalaxyIMDB.jpg>";
    imageArray[12] = "<img class='center-block' src='/assets/images/TheLordOfTheRingsIMDB.jpg>";
    imageArray[13] = "<img class='center-block' src='/assets/images/300IMDB.jpg>";
    imageArray[14] = "<img class='center-block' src='/assets/images/TaxiDriverIMDB.jpg>";


// Make the START button hide when the player clicks on it to start the game 
// and load the div container with timer, movie quotes, movie titles, and continue on...

$(document).ready(function(){

    //  var startView(){
    //         loadPage = ...
    // }


    $('#startButton').on('click', function(){
        $(this).hide();
        startGame();
    });

    // Starts the game
    function startGame(){
        $('#triviaContainer').show();
        // add more codes here
    }

    // type more codes here






    // 30 second timer per question
    function timerDiv() {
        time = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (timer === 0) {
                clearInterval(clock);
                timeoutLoss();
            }
            if (timer > 0) {
                timer--;
            }
            $("#timer").html(timer);
        }
    }

    function resetGame() {
        questionTimer = 0;
        correctAnswerCounter = 0;
        wrongAnswerCounter = 0;
        unansweredCounter = 0;
        timer = 30;
        generateQuestions();
        timerDiv();
    }



});

// Print the following:

// "Out of time!" for no response from user + timer reached 0 + show corresponding img + provide "The Correct Answer was: [answer]" 

// RESET GAME

// "Correct!" if user chose correct answer + show corresponding img

// RESET GAME

// "Nope! if user selected wrong answer + show corresponding img + provide "The Correct Answer was: [answer]" 

// AT END OF GAME

// "All done! Here is  how you did!" 
    // Correct Answers: [number]
    // Incorrect  Answers: [number]
    // Unanswered: [number]

    // <button>Start Over?</button> ...when clicked, do not reload the page, but immediately show questions and timer at 30 seconds