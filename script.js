let playerOneTurn = true
let gameBoard = [ 
    "0", "1", "2", 
    "3", "4", "5", 
    "6", "7", "8",]

console.log(playerOneTurn)

let square = document.querySelectorAll('.square');
console.log(square)

square.forEach(box => { 
    box.addEventListener("click", handleClickEvent);
})


function handleClickEvent (event){
    console.log(event.target);
  if(playerOneTurn) {
      event.target.innerText="X"
      gameBoard[event.target.id] = "X"
      playerOneTurn=!playerOneTurn
  }
   else{
       event.target.innerText="O"
       gameBoard[event.target.id] = "O"
       playerOneTurn=!playerOneTurn 
   }
   checkWinner();
//    console.log(gameBoard);
}
function checkWinner(){
    if(gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") {
        console.log("Player One Wins!");
    }

}

// square.forEach(element => console.log( `clicked ${element}`))
//This is the event listener
// square.addEventListener("click", handleClickEvent);
// // variable holding the `querySelectorAll` for the squares

// forEach loop on the vaßriable 
//   Add the event listener inside the loop
