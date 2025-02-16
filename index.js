let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")

//calls the renderGame function to start the game
function startGame() {
    renderGame()
}

//start game button
function renderGame() {

    sumEl.textContent = "Sum :" + sum
    cardsEl.textContent = "Cards: " + firstCard + "+" + secondCard

    if (sum <= 20) {
       message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

    messageEl.textContent = message
}

     //New card button
function newCard() {
    //console.log("Drawing new card")
    let nextCard = 6
    sum += nextCard
    
    renderGame()
}