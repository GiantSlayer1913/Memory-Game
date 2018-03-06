

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
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
};
};
checkForMatch();

var flipCard = function(cardId) {
	// Something keeps going wrong in the line below...
	cardsInPlay.push(cards[cardId].rank)
		console.log("User flipped " + cards[cardId].rank);
if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
    	alert("You found a match!");
    } else {
    	alert("Sorry, try again")
    }

};
};
flipCard();
flipCard(0);
	console.log("User flipped" + this.cards[cardId].rank + this.cards[cardId].cardImage)
flipCard(2);
	console.log("User flipped" + this.cards[cardId].rank + this.cards[cardId].cardImage)


