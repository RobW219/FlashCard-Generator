var basicCard = require("./BasicCard");
var clozeCard = require('./ClozeCard');
var inquirer = require("inquirer");

var firstCard = new basicCard("Who was the first president of the United States?", "Answer: George Washington");

var firstCloze = new clozeCard("... was the first president of the United States.", "George Washington", "George Washington was the first president of the United States.");

var secondCard = new basicCard("Who created JavaScript?", "Answer: Netscape");
var thirdCard = new basicCard("JavaScript and Java are basically the same. True or False?", "Answer: False");
var fourthCard = new basicCard("Is JavaScript dynamically typed or statically typed?", "Answer: Dynamically Typed");
var fifthCard = new basicCard("Null is an object, Yes or No?", "Yes, Null is an object. Weird, huh?");

var secondCloze = new clozeCard("... created JavaScript.", "Netscape", "Netscape created JavaScript");
var thirdCloze = new clozeCard("JavaScript was first released as ...", "Mocha", "JavaScript was first released as Mocha");
var fourthCloze = new clozeCard("It took Brendan Eich ... days to write the first version of JavaScript.", "10", "It took Brendan Eich 10 days to write the first version of JavaScript.");
var fifthCloze = new clozeCard("Undefined is not a ... word in JavaScript, Crazy!", "reserved", "Undefined is not a reserved word in JavaScript, Crazy!");

var brokenCloze = new clozeCard("This doesn't work", "oops");

inquirer.prompt([
  {
    name: "confirm",
    type: "confirm",
    message: "Do you want to play a game?"
  }
]).then(function(answers) {
	if (answers.confirm) {
		console.log("Cool let's do it!");
		playGame();
	} else {
		console.log("Well, why did you run this? Too bad, get ready, we playing!");
		playGame();
	}
});

function playGame() {
	inquirer.prompt([
		{
			name: "card1Front",
			message: firstCard.front
		},
		{
			name: "card1Back",
			message: firstCard.back
		},
		{
			name: "card2Front",
			message: secondCard.front
		},
		{
			name: "card2Back",
			message: secondCard.back
		},
		{
			name: "card3Front",
			message: thirdCard.front
		},
		{
			name: "card3Back",
			message: thirdCard.back
		},
		{
			name: "card4Front",
			message: fourthCard.front
		},
		{
			name: "card4Back",
			message: fourthCard.back
		},
		{
			name: "card5Front",
			message: fifthCard.front
		},
		{
			name: "card5Back",
			message: fifthCard.back
		},
		{
			name: "newGame",
			type: "confirm",
			message: "Great job. Do you want to step up the difficulty?"
		},
	]).then(function(answer) {
		if (answer.newGame) {
			console.log("Cool, let's do this!");
			playGame2();
		} else {
			console.log("Thanks for playing!")
		}
	}) 
};

function playGame2() {
	inquirer.prompt([
		{
			name: "cloze1Front",
			message: firstCloze.text
		},
		{
			name: "cloze1Back",
			message: firstCloze.fullText
		},
		{
			name: "cloze2Front",
			message: secondCloze.text
		},
		{
			name: "cloze2Back",
			message: secondCloze.fullText
		},
		{
			name: "cloze3Front",
			message: thirdCloze.text
		},
		{
			name: "cloze3Back",
			message: thirdCloze.fullText
		},
		{
			name: "cloze4Front",
			message: fourthCloze.text
		},
		{
			name: "cloze4Back",
			message: fourthCloze.fullText
		},
		{
			name: "cloze5Front",
			message: fifthCloze.text
		},
		{
			name: "cloze5Back",
			message: fifthCloze.fullText
		},
	]).then(function(ans) {
		console.log("Thank you and good night!")
	})
}