// When the user enters in text into the text area and then clicks the create button, 
// create a new card element in the DOM. You decide the height/width of the card.
var createCardButton = document.getElementById("create-button");
var numberOfCards = 0;
var cardText = []
var cardInput = "";
var cardOutput = document.getElementById('card-output');

function captureInput() {
	var cardInput = document.getElementById('card-text').value;
	console.log("cardInput", cardInput);
	cardOutput.innerHTML = cardInput;
	console.log("cardOutput", cardOutput);
}

function createCard() {
	numberOfCards++;
	console.log(numberOfCards);
	console.log("cardInput", cardInput);

}

function populateDiv() {
	planetHolderDiv.innerHTML = "";
	for ( i = 0 ; i < planets.length ; i++ ) {
		var newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox-${i}">`;
		newPlanet += `<div class="planetName hidden">  ${meatPrices[i].name} </div>`;
		newPlanet += `<img class="planetImage" src="${meatPrices[i].url}">`;
		newPlanet += `</div>`
		planetHolderDiv.innerHTML += newPlanet;
	}
}


// When the user clicks the Delete button, the containing card, and no other cards, should 
// then be removed from the DOM. Not just made invisible, actually removed from the DOM.

createCardButton.addEventListener("click", getThisPartyStarted);

function getThisPartyStarted() {
	captureInput();
	createCard();
}