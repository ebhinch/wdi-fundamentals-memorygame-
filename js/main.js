var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0]=== cardsInPlay[1]) { 
		alert("You've found a match!");
		} else{
			alert("Sorry, try again.");
		}
	} 


var flipCard = function(cardId) {

	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].suit);


	checkForMatch();
};

// In the main.js file in Sublime Text, add a function that will create the game board. Right after the flipCard function, add a new function createBoard. This function will not have any parameters.
var createBoard = function()
{
	
	//Now add each card to the board.
	//Within the createBoard function, use a for loop to loop through the cards array.
	for (var i=0; i<cards.length; i++)

	//Now use the createElement method to create an img element and store it in a variable cardElement.
	var cardElement = document.createElement(img);

	//Now use the setAttribute() method to add a src attribute for the cardElement. The src should be "images/back.png"
	cardElement.setAttribute('cardElement', 'images/back.png');

	//Now use the setAttribute() method once again to set the card's 'data-id' attribute to be the index of the current element, i (no quotes).
	//Note: data- attributes are meant to store data about an element that is not tied to a style.
	cardElement.setAttribute(data-id, cards[i]);


}

	flipCard(0);
	flipCard(2);

	





