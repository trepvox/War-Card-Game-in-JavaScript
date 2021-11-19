const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds']
const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen','King']
const ValueMap = {'2' : 2,
                  '3' : 3,
                  '4' : 4,
                  '5' : 5,
                  '6' : 6,
                  '7' : 7,
                  '8' : 8,
                  '9' : 9,
                  '10' : 10,
                  'Jack' : 11,
                  'Queen' : 12,
                  'King' : 13,
                  'Ace' : 14
                }


class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    // describe() {
    //     return `The ${this.value} of ${this.suit}`;
    // }
}


class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.playerDeck = []; 
    }

    addPlayerDeck(deck) {
        this.playerDeck = deck;
    }
}


player1 = new Player('Sand');
player2 = new Player('Glass');


class Deck {
    constructor(cards = new newDeck()) {
        this.cards = cards;
    }
    get numberOfCards() {       //get is like a getter and setter from backend
            return this.cards.length; 
    }
    shuffle() {
        this.numberOfCards
            for (let i = this.numberOfCards - 1; i > 0; i--) { // Tells it to count down from the total number of cards 
                const newCard = Math.floor(Math.random() * (this.numberOfCards)); //
                const oldCard = this.cards[newCard];
                this.cards[newCard] = this.cards[i];
                this.cards[i] = oldCard;
            }
    }
    
    // dealCards() {
    //     return this.deckOfCards.pop(); //Pop pulls the last card pulled and returns that one.
    // };
}


function newDeck() {
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit, value);
        });
    });
}


function setupMatch(player1, player2) {
    const deck = new Deck();
    deck.shuffle();
    player1.addPlayerDeck(deck.cards.slice(0, 26));
    player2.addPlayerDeck(deck.cards.slice(27, deck.numberOfCards));
}



function roundEnd(player1, player2) {
    for (let i = 0; i < 27; i++) {
        if (ValueMap[player1.playerDeck[i].value] > ValueMap[player2.playerDeck[i].value]) {
            console.log(`${player1.name} throws down  the ${player1.playerDeck[i].value} of ${player1.playerDeck[i].suit}`);
            console.log(`${player2.name} throws down  the ${player2.playerDeck[i].value} of ${player2.playerDeck[i].suit}`);
            console.log(`----------- ${player1.name} wins the round -----------`);
            player1.score += 1;
            console.log(`The current score is ${player1.score} to ${player2.score} \n`);
        } else if (ValueMap[player1.playerDeck[i].value] < ValueMap[player2.playerDeck[i].value]) {
            console.log(`${player1.name} throws down  the ${player1.playerDeck[i].value} of ${player1.playerDeck[i].suit}`);
            console.log(`${player2.name} throws down  the ${player2.playerDeck[i].value} of ${player2.playerDeck[i].suit}`);
            console.log(`----------- ${player2.name} wins the round -----------`);
            player2.score += 1;
            console.log(`The current score is ${player1.score} to ${player2.score} \n`);
        } else {
            console.log('----------- Yar, it be a tie -----------');
            console.log(`The current score is ${player1.score} to ${player2.score} \n`) ;
        }
    }
}


function endResults(player1, player2) {
    if (player1.score > player2.score) {
        console.log (`${player1} wins! Good job ye land lubber`);
    } else if (player1.score < player2.score) {
        console.log (`${player2} wins! Now get back to work before the Capt'n see ye`);
    } else {
        console.log('Tie Game! Well fancy ye that');
    }
}

setupMatch(player1, player2);
roundEnd(player1, player2);
endResults(player1, player2);