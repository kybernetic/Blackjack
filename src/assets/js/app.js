let playerHand = [];
let dealerHand = [];
const deck = new Deck();


function count(arr) {
  let sum = 0;
  for (var index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  if(sum > 21) {
    
  }
}

function initialDistribution() {
  playerHand.push(deck.cards.pop());
  playerHand.push(deck.cards.pop());
  dealerHand.push(deck.cards.pop());
  dealerHand.push(deck.cards.pop());
  let PlHand = document.getElementById('playhand');
  PlHand.innerHTML = '';
  playerHand.forEach((item, index) => {
    PlHand.innerHTML += (
      `<div class="card face-${item.rank}-of-${item.suit}"> </div>`      
    )
  });
  let DlHand = document.getElementById('dealhand');
  DlHand.innerHTML = '';
  dealerHand.forEach((item, index) => {
    DlHand.innerHTML += (
      `<div class="card face-${item.rank}-of-${item.suit}"> </div>`     
    )
  })
}

function distribution() {
  playerHand.push(deck.cards.pop());
  dealerHand.push(deck.cards.pop());
  let PlHand = document.getElementById('playhand');
  PlHand.innerHTML = '';
  playerHand.forEach((item, index) => {
    PlHand.innerHTML += (
      `<div class="card face-${item.rank}-of-${item.suit}"> </div>`      
    )
  });
  let DlHand = document.getElementById('dealhand');
  DlHand.innerHTML = '';
  dealerHand.forEach((item, index) => {
    DlHand.innerHTML += (
      `<div class="card face-${item.rank}-of-${item.suit}"> </div>`     
    )
  })
}

}



 



document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  deck.shuffle();
  console.log(deck);

  const player = new Player()
  const dealer = new Player()
});



/*






*/