console.log("I am here.");
// When the user enters in text into the text area and then clicks the create button, 
// create a new card element in the DOM. You decide the height/width of the card.
var createCardButton = document.getElementById("create-button");
createCardButton.addEventListener("click", createCard);

function createCard() {
	console.log("Button Works!");
}

// When the user clicks the Delete button, the containing card, and no other cards, should 
// then be removed from the DOM. Not just made invisible, actually removed from the DOM.