let playerHand = [];
let dealerHand = [];
const deck = new Deck();

function compare(playerHand, dealerHand) {
  let sum1 = 0;
  let sum2 = 0;
  for (var index = 0; index < playerHand.length; index++) {
    sum1 += playerHand[index].value;
  }
  for (var index = 0; index < dealerHand.length; index++) {
    sum2 += dealerHand[index].value;
  }
  if(sum1 > sum2) {
    alert("Player wins");
  } else {
    alert("Player loses");
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
  
}

function countForDealer(arr) {
  let sum = 0;
  for (var index = 0; index < arr.length; index++) {
    sum += arr[index].value;
  }
  if(sum <= 17) {
    alert("Dealer gets a new card");
  } else if (sum > 17 && sum < 21) {
    compare(playerHand, dealerHand); /* finish to write the compare func */
  } else if (sum > 21) {
    alert("The player wins");
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

function playerDistribution() {
  playerHand.push(deck.deal());
  
  let PlHand = document.getElementById('playhand');
  PlHand.innerHTML = '';
  playerHand.forEach((item, index) => {
    PlHand.innerHTML += (
      `<div class="card face-${item.rank}-of-${item.suit}"> </div>`      
    )
  });
  countForPlayer(playerHand); 
  
}

function dealerDistribution() {
  dealerHand.push(deck.deal());
  let DlHand = document.getElementById('dealhand');
  DlHand.innerHTML = '';
  dealerHand.forEach((item, index) => {
    DlHand.innerHTML += (
      `<div class="card face-${item.rank}-of-${item.suit}"> </div>`     
    )
  });
  countForDealer(dealerHand); /* modify it for both 17 and 21 */.0
}

/* place the dealerDistribution function inside a bigger function which
includes counting (both for 21 and for the first comparison between
the two arrays) */
 



document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  /* deck.shuffle(); */
  console.log(deck);


  
});



/*






*/