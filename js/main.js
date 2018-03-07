

var cards = [
	 cardOne = {
	 	rank: "queen",
	 	suit: "hearts",
	 	cardImage: "images/queen-of-hearts.png"
	 },
	 cardTwo = {
	 	rank: "queen",
	 	suit: "diamonds",
	 	cardImage: "images/queen-of-diamonds.png"
	 },
	 cardThree = {
	 	rank: "king",
	 	suit: "hearts",
	 	cardImage: "images/king-of-hearts.png"
	 },
	 cardFour = {
	 	rank: "king",
	 	suit: "diamonds",
	 	cardImage: "images/king-of-diamonds.png"
	 }	
];
var cardsInPlay = [];

var checkForMatch = function() {
	cards.setAttribute(src, cardImage);
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
};
};
checkForMatch();

var flipCard = function() {
	this.getAttribute('data-id', 'cardId')
	// Something keeps going wrong in the line below...
	cardsInPlay.push(cards[cardId].rank);
		console.log("User flipped " + cards[cardId].rank);
if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
    	alert("You found a match!");
    } else {
    	alert("Sorry, try again")
    }

};
};
var createBoard = function() {

	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		this.setAttribute('src', 'images/back.png');
		this.setAttribute('data-id', this[i]);
		addEventListener('click', this);
		appendChild(this, 'game-board');
	};
		
};



flipCard();

	console.log("User flipped" + this.cards[cardId].rank + this.cards[cardId].cardImage);
	console.log("User flipped" + this.cards[cardId].rank + this.cards[cardId].cardImage);

createBoard();

