let playerHand = [];
let dealerHand = [];
const deck = new Deck();

function compare(arr1, arr2) {
  let sum1 = 0;
  let sum2 = 0;
  for (var index = 0; index < arr1.length; index++) {
    sum1 += arr[index];
  }
  for (var index = 0; index < arr2.length; index++) {
    sum2 += arr[index];
  }
  /* if sum1 and sum2 less than 21, compare them and the one which is closer
  to 21 wins */

}


function countForPlayer(arr) {
  let sum = 0;
  for (var index = 0; index < arr.length; index++) {
    sum += arr[index].value;
  }
  if(sum > 21) {
    alert("Player loses");
    
  }
  console.log(sum);
}

function countForDealer(arr) {
  let sum = 0;
  for (var index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  if(sum > 21) {
    alert("Player wins");

  }
}



function initialDistribution() {
  deck.shuffle();
  playerHand.push(deck.deal());
  playerHand.push(deck.deal());
  dealerHand.push(deck.deal());
  dealerHand.push(deck.deal());
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
  playerHand.push(deck.deal());
  console.log(deck.deal());
  let PlHand = document.getElementById('playhand');
  PlHand.innerHTML = '';
  playerHand.forEach((item, index) => {
    PlHand.innerHTML += (
      `<div class="card face-${item.rank}-of-${item.suit}"> </div>`      
    )
  });
  countForPlayer(playerHand);
  
  
}



 



document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  /* deck.shuffle(); */
  console.log(deck);


  
});



/*






*/