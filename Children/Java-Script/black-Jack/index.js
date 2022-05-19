let cardsEle = document.getElementById("cards-ele");

let msgEle = document.getElementById("msg-ele");
let message = "";

let sumEle = document.getElementById("sum-ele");
let cards = [];
let sum = 0;

let button = document.getElementById("button");

let playerI = document.getElementById("player-I");
let player = {
    NAME: "Player",
    chips: 250
};
playerI.textContent = player.NAME + ": $" + player.chips;

let hasBlackJack = false;
let isDead = true;


function getRandomCard() {
    let rand = Math.floor(Math.random() * 13) + 1;

    if (rand > 10) { return 10; }
    else if (rand === 1) { return 11; }
    else { return rand; }
}

function startGame() {
    if (player.chips < 25) {
        message = "You lost all your money, I'll give you 250, try again.";
        player.chips = 250;
        msgEle.textContent = message;
        startGame();
    }
    isDead = false;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    
    renderGame();
}

function renderGame() {
    cardsEle.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEle.textContent += cards[i] + " ";
    }
    
    sumEle.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
        player.chips += 100;
    } else {
        message = "You're out of the game!";
        isDead = true;
        player.chips -= 25;
    }
    msgEle.textContent = message;
}

function newCard() {
    if (!isDead && !hasBlackJack && player.chips >= 25) {
        let anotherCard = getRandomCard();
        sum += anotherCard;
        cards.push(anotherCard);
        console.log(cards);
        renderGame();
    }
}