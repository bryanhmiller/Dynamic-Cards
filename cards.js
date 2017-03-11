// When the user enters in text into the text area and then clicks the create button, 
// create a new card element in the DOM. You decide the height/width of the card.
var createCardButton = document.getElementById("create-button");
var cardHolderDiv = document.getElementById("card-holder");
var cardText = []
var cardInput = "";
var i = 0;
var unpinCard = document.getElementById("card-holder");
// var cardOutput = document.getElementById('card-output');

function captureInput() {
	var cardInput = document.getElementById('card-text').value;
	console.log("cardInput", cardInput);
	// cardOutput.innerHTML = cardInput;
	// console.log("cardOutput", cardOutput);
	cardText.push(cardInput);
	console.log("cardText", cardText); 
	createCard();
}

cardHolderDiv.innerHTML = "";
function createCard(cardInput) {
	var newCard = "";
	newCard += `<div class="card-parent" id="cardBox-${i}">`;
	newCard += `<div class="pin-holder">`;
	newCard += `<img class="pin" src="http://cliparts.co/cliparts/gTe/5GX/gTe5GXRKc.jpg">`;
	newCard += `</div>`;
	newCard += `<div class="cards">  ${cardText[i]}`;
	newCard += `</div>`;
	newCard += `</div>`;
	cardHolderDiv.innerHTML += newCard;
	i++; 
}

function deleteCard(event) {
	if(event.target.className === "pin") {
		for (var q=0; q<event.path.length; q++) {
			if(event.path[q].className === "card-parent") {
				var cardToDelete = event.path[q];
				console.log("cardToDelete", cardToDelete);
				unpinCard.removeChild(cardToDelete);
			}
		}
	}	
}
// When the user clicks the Delete button, the containing card, and no other cards, should 
// then be removed from the DOM. Not just made invisible, actually removed from the DOM.

createCardButton.addEventListener("click", getThisPartyStarted);
unpinCard.addEventListener("click", deleteCard);

function getThisPartyStarted() {
	captureInput();
}