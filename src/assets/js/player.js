class Player {
    constructor(initialCards, bet) {
        this.bet = bet; //this will be the bet that the dealer can collect
        this.playerHand = initialCards;
    }

    receiveCards(card) {
        this.playerHand.push(card);
    }

    collectBet() {
        
    }
    
}