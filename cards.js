// When the user enters in text into the text area and then clicks the create button, 
// create a new card element in the DOM. You decide the height/width of the card.
var createCardButton = document.getElementById("create-button");
var cardHolderDiv = document.getElementById("card-holder");
var cardText = []
var cardInput = "";
var cardOutput = document.getElementById('card-output');

function captureInput() {
	var cardInput = document.getElementById('card-text').value;
	console.log("cardInput", cardInput);
	cardOutput.innerHTML = cardInput;
	console.log("cardOutput", cardOutput);
	cardText.push(cardInput);
	console.log("cardText", cardText); 
}
	cardHolderDiv.innerHTML = "";

function createCard(cardInput) {
	for ( i = 0 ; i < cardText.length ; i++ ) {
		var newCard = "";
		newCard += `<div class="card-parent" id="cardBox-${i}">`;
		newCard += `<div class="cards">  ${cardText[i]} </div>`;
		newCard += `</div>`
		cardHolderDiv.innerHTML += newCard;
	}
}


// When the user clicks the Delete button, the containing card, and no other cards, should 
// then be removed from the DOM. Not just made invisible, actually removed from the DOM.

createCardButton.addEventListener("click", getThisPartyStarted);

function getThisPartyStarted() {
	captureInput();
	createCard();
}