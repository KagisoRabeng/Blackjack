let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let message = ""

//fetch elements using element ID
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")

function getRandomCard() {
    return 5
}
//calls the renderGame function to start the game
function startGame() {
    renderGame()
}

//start game button
function renderGame() {

    cardsEl.textContent = "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        
    }

    sumEl.textContent = "Sum :" + sum

    if (sum <= 20) {
       message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

     //New card button
function newCard() {
    //console.log("Drawing new card")
    let nextCard = getRandomCard()
    sum += nextCard
    
    renderGame()
}