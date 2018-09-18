

//Variables
let pOne;
let pTwo;
let cpu;
let pOneScore = 0;
let pTwoScore = 0;
let cpuScore = 0;
let playerOneChoice;
let playerTwoChoice;
let computerChoice;

//DOM variables
//let pOneScore_span = document.getElementById("user-score");
//let pTwoScore_span = document.getElementById("user2-score");
let cpuScore_span = document.getElementById("user2-score");
let scoreBoard_div = document.querySelector("scoreBoard");
let resultP = document.querySelector(".result > p");
//let rockDiv = document.getElementById("rock");
//let paperDiv = document.getElementById("paper");
//let scissorsDiv = document.getElementById("scissors");

//Starts Doc
$(document).ready(function () {

    //Randomize CPU Selection

    function getComputerChoice() {
        let choices = ['r', 'p', 's'];
        let randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];

    }

    //Convert letter selected into corresponding word
    function convertWord(letter) {
        if (letter === "r") return " The Rock";
        if (letter === "p") return "Paperboy";
        return "Edward Scissorhands";

    }

    //adds score to player or computer depending on who wins
    
    function win(playerOneChoice, computerChoice) {
        
        pOneScore++;
        $("#user-score").html(pOneScore);
        $(".result").html(convertWord(playerOneChoice) + " beats " + convertWord(computerChoice) + ". Player 1 Wins!");
       
    }

    function loss(playerOneChoice, computerChoice) {
        
        cpuScore++;
        $("#user2-score").html(cpuScore);
        $(".result").html(convertWord(playerOneChoice) + " loses to " + convertWord(computerChoice) + ". The Computer Wins!");
        
    }

    function tie(playerOneChoice, computerChoice) {
        $(".result").html(convertWord(playerOneChoice) + " ties with " + convertWord(computerChoice) + ". It's a draw!");
    }

    //compares answer and determines winner

    function HvC(playerOneChoice) {
        let computerChoice = getComputerChoice();
        switch (playerOneChoice + computerChoice) {
            case "rs":
            case "pr":
            case "sp":
                win(playerOneChoice, computerChoice);
                break;
            case "rp":
            case "ps":
            case "sr":
                loss(playerOneChoice, computerChoice);
                break;
            case "rr":
            case "pp":
            case "ss":
                tie(playerOneChoice, computerChoice);
                break;

        }
    }

    
    //click functions on selections
    function main() {
        $("#r").click(function () {
            HvC("r");

        })
        $("#p").click(function () {
            HvC("p");

        })
        $("#s").click(function () {
            HvC("s");

        })
    }

    main();

    //Unable to get this function to work

    function checkScore(pOneScore, cpuScore){
        if (pOneScore >= 5) {
            $("#winner").html("THE HUMAN HAS DEFEATED THE MACHINE!");
            $("#titleBtn").show();
            $("#resetBtn").show();

        }
        if (cpuScore >= 5) {
            $("#winner").html("THE HUMAN HAS BEEN CRUSHED BY THE MACHINE!");
            $("#titleBtn").show();
            $("#resetBtn").show();
        }
    }
    checkScore();
});
