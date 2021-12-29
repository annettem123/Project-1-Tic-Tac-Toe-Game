let playerOneTurn = true // Data variable to track is "Whose turn is it?" which will be done using playerOneTurn and is to Boolean using true. 
let gameBoard = [ 
    "0", "1", "2", 
    "3", "4", "5", 
    "6", "7", "8",]  // gameBoard is an array of elements because we are using multiple, similar items; namely, letters as strings:  "X"s and "O"s. An event listener cannot be added to an array. So, first, we move through the array, then we add an event listener to it.

// console.log(playerOneTurn) // used this console.log to check if playerOneTurn worked. If it prints true, then it works.

let counter = 0 //declare variable to count clicks to determine whether a tie occurs

let square = document.querySelectorAll('.square'); //Document Object Model ("DOM") The DOM has nodes and querySelectAll goes to the document and grabs all of the divs with a class of square.
// console.log(square) used to check if class of square is grabbed from HTMM

square.forEach(box => {  // used .forEach to add functionality to 
    box.addEventListener("click", handleClickEvent);//An event Listener is set up such that if any of the boxes (or squares/spaces) are clicked, the handleClickEvent function takes place. The first argument is "click", and the second argument is the callback function for our event handler.
})
    
function handleClickEvent (event){ //Defines function handleClickEvent. This holds the logic of what happens when one clicks on a square.  We want playerOneTurn to display X and switch turns and display O when it is not playOneTurn.
    console.log(event.target); //Parameter "event.target" is used to get the element that we are clicking into. When one clicks on a square, the element will print. One sees the individual element, i.e., id="8" or id="0", etc.  Now we can actually grab the element to add something to it or show something into it.
  if(playerOneTurn) {          //Having variable name in () and not having anything to compare it to is okay because it is a Boolean, and therefore, it is automatically checking to see if it is true (implicitly, it automatically checks to see if it is true. It is ok if one does put if playerOneTurn = true, but not necessary).
    //   event.target.innerText = ""
      event.target.innerText===''//playerOneTurn may only click on squares that are empty.
      event.target.innerText="X" //What is happening: you click on a square,
      gameBoard[event.target.id] = "X" //and it is asking, "Is it playerOneTurn"? If it is, we are going to put an "X" in that square that playerOneTurn clicked on.
      playerOneTurn=!playerOneTurn //Here, is where we change the turn from playerOneTurn to be player two's Turn by making boolean false by using =! 
      
    }
    else{
        event.target.innerText===''//Player Two may only click on a square that is blank.
        event.target.innerText="O"//When the turn changes from playerOneTurn to player Two's turn, 
        gameBoard[event.target.id] = "O"//and it knows that since it is not playerOneTurn", it therefore must be player Two's Turn and once player Two clicks on a square, it will put an "O" into that square.
        playerOneTurn=!playerOneTurn //Then, it will evaluate whether playerOneTurn or opponent wins by going through the function checkWinner below.
    }
    counter++
   checkWinner();
   if(counter >= 9){  //add conditional that if there have been 9 clicks of squares, then there is a tie
    alert('Game is Tied') // This is the message that is displayed that shows there is a tie.
    counter = 0
   }
//    console.log(gameBoard);
}
 
function checkWinner(){
    if(gameBoard[0] === "X" && gameBoard[1] === "X" && gameBoard[2] === "X") { //checks if Player One selected 3 squares in a row in Row 1
        alert("Player One Wins!");
        counter = 0
    }
    if(gameBoard[3] === "X" && gameBoard[4] === "X" && gameBoard[5] === "X") { //checks if Player One selected 3 squares in a row in Row 2
        alert("Player One Wins!");
    }
    if(gameBoard[6] === "X" && gameBoard[7] === "X" && gameBoard[8] === "X") { //checks if Player One selected 3 squares in a row in Row 3
        alert("Player One Wins!");
    } 
    if(gameBoard[0] === "X" && gameBoard[3] === "X" && gameBoard[6] === "X") { //checks if Player One selected 3 squares in a row in Column 1
        alert("Player One Wins!");
    }
    if(gameBoard[1] === "X" && gameBoard[4] === "X" && gameBoard[7] === "X") { //checks if Player One selected 3 squares in a row in Column 2
        alert("Player One Wins!");
    }
    if(gameBoard[2] === "X" && gameBoard[5] === "X" && gameBoard[8] === "X") { //checks if Player One selected 3 squares in a row in Column 3
        alert("Player One Wins!");
    }
    if(gameBoard[6] === "X" && gameBoard[4] === "X" && gameBoard[2] === "X") { //checks if Player One selected 3 squares in a diagonal row (Colum 1, Row 3 to Column 3, Row 1)
        alert("Player One Wins!");
    }
    if(gameBoard[0] === "X" && gameBoard[4] === "X" && gameBoard[8] === "X") { //checks if Player One selected 3 squares in a diagonal row (Colum 1, Row 1 to Column 3, Row 3)
        alert("Player One Wins!");
    }
    if(gameBoard[0] === "O" && gameBoard[1] === "O" && gameBoard[2] === "O") { //checks if Player Two selected 3 squares in a row in Row 1
        alert("Player Two Wins!");
    }
    if(gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") { //checks if Player Two selected 3 squares in a row in Row 2
        alert("Player Two Wins!");
    }
    if(gameBoard[3] === "O" && gameBoard[4] === "O" && gameBoard[5] === "O") { //checks if Player Two selected 3 squares in a row in Row 3
        alert("Player Two Wins!");
    }
    if(gameBoard[0] === "O" && gameBoard[3] === "O" && gameBoard[6] === "O") { //checks if Player Two selected 3 squares in a row in Column 1
        alert("Player Two Wins!");
    }
    if(gameBoard[1] === "O" && gameBoard[4] === "O" && gameBoard[7] === "O") { //checks if Player Two selected 3 squares in a row in Column 1
        alert("Player Two Wins!");
    }
    if(gameBoard[2] === "O" && gameBoard[5] === "O" && gameBoard[8] === "O") { //checks if Player Two selected 3 squares in a row in Column 1
        alert("Player Two Wins!");
    }   
    if(gameBoard[6] === "O" && gameBoard[7] === "O" && gameBoard[8] === "O") {
        alert("Player Two Wins!");
    }
    if(gameBoard[6] === "O" && gameBoard[4] === "O" && gameBoard[2] === "O") { //checks if Player Two selected 3 squares in a diagonal row (Colum 1, Row 3 to Column 3, Row 1)
        alert("Player Two Wins!");
    }
    if(gameBoard[0] === "O" && gameBoard[4] === "O" && gameBoard[8] === "O") { //checks if Player Two selected 3 squares in a diagonal row (Colum 1, Row 1 to Column 3, Row 3)
        alert("Player Two Wins!");
    }
 }
