Technologies Used:

https://wireframe.cc/
github.com
terminal/CLI
Git
Visual Studio
Dev Tools
HTML
CSS
Javascript
Netlify.com

user stories:

User stories should roughly follow this paradigm: "As a 'role', I can 'capability' so that 'receive benefit'". 
Once you have an idea of a Minimal Viable Product  (MVP) version, you can start to think about ways you can scaffold your project up from there. Categories of different levels of features can include those that are not in your MVP. Think of these as bronze, silver, and gold features.

- Users can see a line over winning 3 squares to assist regarding accessibility purposes

- Users who are visually impaired can hear sound when playing.

- Users can enjoy the “look and feel” of the game to enhance one’s experience of playing the game.

- Users can read “How the Game Works” on page 1 of app

- Users can see score after every game

-  Users can start a new game

- Users can reset the score

- Users can play each other online 


wireframe:


how game works: 

Welcome to The Game. Tic-tac-toe is a game for two players; namely, X and O, who take turns marking the boxes in a 3×3 grid. The player who succeeds in placing three of his/her marks in a vertical, horizontal or diagonal row first wins the game; otherwise, the game is a draw.  To start the game, Player 1 can mark any of the 9 spaces. Then, Player 2 can mark one of the remaining 8 spaces and so on. The game continues until all the spaces are marked or one of the players win.


pseudocode:

Pseudocoding proves that we have identified the problem, understand it conceptually, and have broken it down into small steps that we can follow.

PROGRAM Keep Track of Xs and Os on a 3 x 3 Grid


PROGRAM Keep Track of Player One’s Turn;
  IF (Player One puts an X into a square, then it is time to switch players from Player One to Player Two (or Not Player One)
      
      ELSE it is Player Two’s Turn (or Not Player One)

  ENDIF;

END.


PROGRAM Check to Determine if There is a Winner;
  IF (Player One puts an X into 3 squares in a row, either vertically, horizontally, or diagonally before Player Two does, then Player One wins.
      
      ELSE Player Two (or not Player One) puts an O into 3 squares in a row, either vertically, horizontally, or diagonally before Player One does, then Player Two wins.
 
  ENDIF;

END.


Planning Steps and story about development process and problem-solving strategy:

Prepare for Stand Ups:

1. What have you done?
created a new repo in git hub
forked and cloned code from new repo in git hub to Projects Directory
created new files index.html, styles.css, script.js, and README.md inside of Projects Directory
review my past notes and documentation from lessons
create wireframe
create user stories
write some pseudocode
in HTML, create 9 divs
reviewed digital games (player 1 player 2)
review lessons of code to determine which are applicable
completed logic for playing the game

MVP Requirements:

render a game board in the browser
switch turns between X and O
include separate HTML / CSS / Javascript files
stick with KISS (Keep it Simple Stupid) and DRY (Don't Repeat Yourself)
use JavaScript for DOM manipulation
deploy your game online 
use semantic markup for HTML and CSS
have well-format and well-commented code

2. What will you do today?

in JS, 
1) work on logic for game tie using counter; and
2) edit code to include "alert" to display Player One Wins, Player Two Wins, or Game is a Tie 

Link Tic-Tac-Toe documents:

add some styling and link styles.css to index.html
add some JS and link script.js to index.html

3. What barriers might you encounter today?

using the right code and syntax

if stuck: 1) google; 2) post ? on slack or ask another student; 3) create an issue and ask instructor

4. How close to MVP (Minimum Viable Product)?

   95% complete

5. Unsolved Problems which would be fixed in future iterations:

    
 event.target.innerText===''//playerOneTurn may only click on squares that are empty.