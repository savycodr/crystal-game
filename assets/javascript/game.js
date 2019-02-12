// Here we keep track of wins
var numWins = 0;
// Here we keep track of losses
var numLosses = 0;

// target number is a random number between 19-120
var targetNumber = Math.floor((Math.random() * (120-19)) + 19);

// Here we set the "number-to-guess" header to match the "targetNumber".
$("#number-to-guess").text(targetNumber);

// Here we created a counter, we'll be using this to track the user's total.
var counter = 0;

$(".crystal-image").on("click", function() {

    // get the data-crystalvalue attribute for the clicked image
    var crystalValue = $(this).attr("data-crystalvalue");

    // set the data-crystalvalue for the clicked image if it hasn't  been set yet
    if( crystalValue === "")
    {
      // target number is a random number between 1-12
      crystalValue = Math.floor((Math.random() * 12) + 1);
      crystalValue = parseInt(crystalValue);
      $(this).attr("data-crystalvalue", crystalValue);
    }


    // We'll then increment the counter each time by the randomly selected number.
    // If the number is 11, then users can win. (11 + 11 + 11 + 11 + 11 = 55)
    // If the number is 10, then there is no way for the user to win. (10 + 10 + 10 + 10 + 10 = 60)
    counter += parseInt(crystalValue);
    $("#count").html("Your Count Is At: " + counter);


    // Here we created some logic to "check" if the click counter matches the targetNumber.
    // Remember, this click event will be triggered with each click.
    // With each click the counter will increase by 10 and be re-evaluated against target.
    if (counter === targetNumber) {
      numWins++;
      $("#wins").html("Wins: " + numWins);
      // If the numbers match we'll celebrate the user's win.
      alert("You win!");
      clearValues();
      }
      // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
      else if (counter >= targetNumber) {
        numLosses++;
        $("#losses").html("Losses: " + numLosses);
        // Then they are alerted with a loss.
        alert("You lose!!");
        clearValues();
    }

  });

// Clear the items for a new game
function clearValues()
{
  // reset the target number
  // target number is a random number between 19-120
  targetNumber = Math.floor((Math.random() * (120-19)) + 19);
  // Here we set the "number-to-guess" header to match the "targetNumber".
  $("#number-to-guess").text(targetNumber);

  // reset the counter
  counter=0;
  $("#count").html("Your Count Is At: " + counter);
  
  // This implicitly work on all crystal-imag classes
  $(".crystal-image").attr("data-crystalvalue", "")

}

