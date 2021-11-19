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
// Creates the entire possible combination for the cards but haven't created the cards yet.

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
//Here we identify every card has a suit and a value but they aren't assigned to each other yet.
}


class Player {
    constructor(name) {
        this.name = name;       //Tells that there will be a naming factor to this.
        this.score = 0;         //here to indicate that the starting score is 0
        this.playerDeck = [];   //begins to label this saying the player deck will be an array under Player.
    }

    addPlayerDeck(deck) {
        this.playerDeck = deck; //add's the deck that will be cut in half after being shuffled to the Player class.
    }
}

// Gives names to our two players
var player1 = new Player('Sand');
var player2 = new Player('Glass');


class Deck {
    constructor(cards = new newDeck()) {    //Stating that cards will be added to whats being called newDeck
        this.cards = cards;
    }
    get numberOfCards() {       //get is like a getter and setter from backend, gets the total number of cards they'll be
            return this.cards.length; // returns the amount as a number due to .length
    }
    shuffle() {                 //time to shuffle
        this.numberOfCards
            for (let i = this.numberOfCards - 1; i >= 0; i--) { // Tells it to count down from the total number of cards 
                const newCard = Math.floor(Math.random() * (this.numberOfCards)); //Every randomized combination of cards is added as a new card
                const oldCard = this.cards[newCard];        // states the previous turns card is overwritten by the new one to play
                this.cards[newCard] = this.cards[i];        // delcares that the new card previously discussed is i number in the cards array.
                this.cards[i] = oldCard;                    // after being declared and used that card is changed and labeled as the old card.
            }
    }
}


function newDeck() { // returns the deck by creating every combination of the cards by mapping all of the suits and then mapping all the values 
                     //onto them.
    return suits.flatMap(suit => {
        return values.map(value => {
            return new Card(suit, value); //and returns each individual card
        });
    });
}

// We begin the match
function setupMatch(player1, player2) {     //begins the match requiring two players
    const deck = new Deck();                //the deck constant for this function will be a new Deck from the class;
    deck.shuffle();                         //we actually do the implemented shuffle
    console.log(deck.cards.length);         // printed the length just to make sure all the cards are properly there.
    player1.addPlayerDeck(deck.cards.slice(0, 26));     //implements the player one deck, starting with the shuffled deck array object 0-25, 
                                                        //being the ending one actually isn't included in it
    player2.addPlayerDeck(deck.cards.slice(26)); // make sure you start where the previous one ended with the same number so it's 26-51 objects
    console.log(player1.playerDeck.length); // a test to make sure the player decks were the same size.
    console.log(player2.playerDeck.length);
}


// implement the rounds of the game and to repeat until all cards from the player decks are gone.
function roundEnd(player1, player2) {
    for (let i = 0; i < 26; i++) {  
        if (ValueMap[player1.playerDeck[i].value] > ValueMap[player2.playerDeck[i].value]) { //if the value of player 1's card from the player 
                                                                                             //deck is higher than player 2's, player 1 wins.
            console.log(`${player1.name} throws down the ${player1.playerDeck[i].value} of ${player1.playerDeck[i].suit}`);
            console.log(`${player2.name} throws down the ${player2.playerDeck[i].value} of ${player2.playerDeck[i].suit}`);
            console.log(`----------- ${player1.name} wins the round -----------`);
            player1.score += 1;
            console.log(`The current score is ${player1.score} to ${player2.score} \n`);
        } else if (ValueMap[player1.playerDeck[i].value] < ValueMap[player2.playerDeck[i].value]) { //if the value of player 1's card from the 
                                                                                             //player deck is lower than player 2's, player 2 wins.
            console.log(`${player1.name} throws down the ${player1.playerDeck[i].value} of ${player1.playerDeck[i].suit}`);
            console.log(`${player2.name} throws down the ${player2.playerDeck[i].value} of ${player2.playerDeck[i].suit}`);
            console.log(`----------- ${player2.name} wins the round -----------`);
            player2.score += 1;
            console.log(`The current score is ${player1.score} to ${player2.score} \n`);
        } else {
            console.log('----------- Yar, it be a tie -----------'); 
            console.log(`The current score is ${player1.score} to ${player2.score} \n`) ;
        }
    }
}

//end of game results
function endResults(player1, player2) {
    if (player1.score > player2.score) {
        console.log (`${player1.name} wins! Good job ye land lubber`);
    } else if (player1.score < player2.score) {
        console.log (`${player2.name} wins! Now get back to work before the Capt'n see ye`);
    } else {
        console.log('Tie Game! Well fancy ye that');
    }
}

//The calling of the three functions to actually run the game at the very end.
setupMatch(player1, player2);
roundEnd(player1, player2);
endResults(player1, player2);