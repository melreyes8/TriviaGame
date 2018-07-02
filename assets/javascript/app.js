// GLOBAL VARIABLES

var questionCounter = 0; 
var selectedAnswer;  
var loadHTML;  
var clock;
var timer = 30;
var correctCounter = 0;
var wrongCounter = 0;
var unansweredCounter = 0;

var quotesArray = [
    "Say Hello to my little friend!", // Scarface
    "Show me the money!", // Jerry MaGuire
    "Yo, Adrian!", // Rocky
    "Hasta la vista, baby!", // Terminator 2
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
    "You talkin' to me?" // Taxi Driver
];

var answerArray = [
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
    ["Scarface", "Goodfellas", "Taxi Driver", "The Godfather"]
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
    imageArray[0] = "<img class='center-block' src='assets/images/ScarfaceIMDB.jpg'>";
    imageArray[1] = "<img class='center-block' src='assets/images/JerryMaGuireIMDB.jpg'>";
    imageArray[2] = "<img class='center-block' src='assets/images/RockyIMDB.jpg'>";
    imageArray[3] = "<img class='center-block' src='assets/images/Terminator2IMDB.jpg'>";
    imageArray[4] = "<img class='center-block' src='assets/images/aLeagueOfTheirOwnIMDB.jpg'>";
    imageArray[5] = "<img class='center-block' src='assets/images/aFewGoodMenIMDB.jpg'>";
    imageArray[6] = "<img class='center-block' src='assets/images/Apollo13IMDB.jpg'>";
    imageArray[7] = "<img class='center-block' src='assets/images/JawsIMDB.jpg'>";
    imageArray[8] = "<img class='center-block' src='assets/images/TheWizardOfOzIMDB.jpg'>";
    imageArray[9] = "<img class='center-block' src='assets/images/StarWarsIMDB.jpg'>";
    imageArray[10] = "<img class='center-block' src='assets/images/BraveheartIMDB.jpg'>";
    imageArray[11] = "<img class='center-block' src='assets/images/GuardiansOfTheGalaxyIMDB.jpg'>";
    imageArray[12] = "<img class='center-block' src='assets/images/TheLordOfTheRingsIMDB.jpg'>";
    imageArray[13] = "<img class='center-block' src='assets/images/300IMDB.jpg'>";
    imageArray[14] = "<img class='center-block' src='assets/images/TaxiDriverIMDB.jpg'>";

// FUNCTIONS

$(document).ready(function(){

    // Hides START button when player clicks on it to start the game, 
    // and loads the div container with timer, movie quotes, movie titles, and so forth.
    $('#startButton').on('click', function(event){
        $(this).hide();
        event.preventDefault();
        $('#triviaContainer').show();
        showQuestions();
        timerDiv();
    });

    // When player selects the correct answer, adds a point to correctCounter; otherwise, adds a point to wrongCounter
    $('body').on('click', '.answer', function(){ 
        // using Ternary operator instead of if/else statement
        selectedAnswer = $(this).text();
        selectedAnswer === correctAnswers[questionCounter] ? (
            clearInterval(clock),
            showWin()) : (
            //else
            clearInterval(clock),
            showLoss()
        )
    }); 

    // Resets the game when player clicks on the reset-button/"START OVER?" button
    $('body').on('click', '.reset-button', function(){
        resetGame();
    }); 
});      

    // Shows the movie quote to be matched to corresponding movie. Movies are listed in multiple choice from A through D. 
    function showQuestions(){
        loadHTML = "<p class='text-center'>Time Remaining: <span class='timer'>" 
        + timer + " </span><span> seconds</span></p><p id='quotes' class='text-center'><q>" 
        + quotesArray[questionCounter] + "</q></p><p class='first-answer answer'>A. " 
        + answerArray[questionCounter][0] + "</p><p class='answer'>B. " 
        + answerArray[questionCounter][1] + "</p><p class='answer'>C. " 
        + answerArray[questionCounter][2] + "</p><p class='answer'>D. " 
        + answerArray[questionCounter][3] + "</p>"; 
        $("#triviaContainer").html(loadHTML); 
    } 

    // If player didn't click on an answer and time ran out, the page will show correct answer, movie poster, and in 3 seconds moves on to next quote.
    function unansweredLoss() {
        unansweredCounter++;
        loadHTML = "<p class='text-center'>Time Remaining: <span class='timer'>" 
        + timer + "</span></p>" + "<p class='text-center'>Out of time!</p><p>The correct answer was: " 
        + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter]; 
        $("#triviaContainer").html(loadHTML);
        setTimeout(wait, 3000);
    }
    
    // Player selects the correct answer, and page confirms it is correct, shows movie poster, and in 3 seconds moves on to the next quote. 
    function showWin() {
        correctCounter++;
        loadHTML = "<p class='text-center'>Time Remaining: <span class='timer'>" 
        + timer + "</span></p>" + "<p class='text-center'>Correct!</p><p>The answer is: " 
        + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $("#triviaContainer").html(loadHTML);
        setTimeout(wait, 3000);  
    }
    
    // Player selects the wrong answer, and page confirms it is wrong, shows movie poster, and in 3 seconds moves on to the next quote. 
    function showLoss() {
        wrongCounter++;
        loadHTML = "<p class='text-center'>Time Remaining: <span class='timer'>" 
        + timer + "</span></p>" + "<p class='text-center'>Wrong!</p><p>The correct answer is: " 
        + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter]; 
        $("#triviaContainer").html(loadHTML);
        setTimeout(wait, 3000); 
    }

    // Shows all 15 quotes in a game
    function wait() {
        questionCounter < 14 ? 
        (questionCounter++,
        showQuestions(),
        timer = 30,
        timerDiv() ):
       
       (finalScreen()) 
    };

    // The timer is set to 30 seconds per question
    function timerDiv() {
        clock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (timer === 0) {
                clearInterval(clock);
                unansweredLoss();
            }
            if (timer > 0) {
                timer--;
            }
            $(".timer").html(timer);
        }
    }

    // Shows all results on the page and the option to restart the game by clicking on the reset-button/"START OVER?"    
    function finalScreen() {
        loadHTML = "<p class='text-center'>Time Remaining: <span class='timer'>" 
        + timer + "</span></p>" + "<p class='text-center'>All done! Here's how you did!" 
        + "</p>" + "<p class='summary-correct'>Correct Answers: " 
        + correctCounter + "</p>" + "<p>Wrong Answers: " 
        + wrongCounter + "</p>" + "<p>Unanswered: " 
        + unansweredCounter + "</p>" + "<p class='text-center'><a class='reset-button'>Start Over?</a></p>";
        $("#triviaContainer").html(loadHTML);
    }

    // Resets the game when the reset-button/"START OVER?" is clicked. 
    function resetGame() {
        questionCounter = 0;
        correctCounter = 0;
        wrongCounter = 0;
        unansweredCounter = 0;
        timer = 30;
        showQuestions();
        timerDiv();
    }