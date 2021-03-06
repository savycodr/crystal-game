# Crystal Game
In this game, a random target number is assigned. The player's goal is to reach a score equal to this target number without going over. The player's score is determined by clicking on the crystals. Each crystal has a randomly assigned value. The player will only find out the crystal's value after it has been clicked. Each crystal clicked will increase the player's score by the amount of the crystal's value.  Click [HERE]( https://savycodr.github.io/crystal-game/) to play the game.

### Instructions

* Click on one of the crystals to see it's value. Your score will increase by the value of that crystal.

* The player wins if their score matches the target number. If the player's score is larger than the target, they lose.

* Once the player has won or lost, a new game will begin.

### Technology

* This application uses JQuery to dynamically update the DOM. It listens for the player to click on a crystal. It updates the screen with the player's new total. It also updates the screen with total wins and losses.

* The application generates a random number between 19-120 for the target number. It  genertates a random number between 1-12 for each crystal value.

* Utilizes a reset.css from Eric A. Meyer (meyerweb) to reset all CSS to a baseline. This was done to make the webpage look the same across all web browsers.

* This game is mobile responsive. It is fun to play on your phone or tablet.

### Credits
There is a credits page for audio and image files. It can be found at [credits](credit.html).

