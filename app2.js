p1Display = document.querySelector("#p1Score");
p2Display = document.querySelector("#p2Score");
winningScore = document.querySelector("#winningScore");
p1Button = document.querySelector("#p1Button");
p2Button = document.querySelector("#p2Button");
resetButton = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;

//listen for winning score
winningScore.addEventListener("change", function () {
  winScore = winningScore.value;
});

//Listen for score button clicks
p1Button.addEventListener("click", function () {
  p1Score++;
  p1Display.textContent = p1Score;
  if (p1Score === winScore) {
    //end game
  }
});

p2Button.addEventListener("click", function () {
  p2Score++;
  p2Display.textContent = p2Score;
  if (p2Score === winScore) {
    //end game
  }
});

resetButton.addEventListener("click", function () {
  //reset scores to 0 in black, enable payer buttons, and winning score
});

//end game, disable player buttons,
//change the color of winning score to green and losing score to red
function endGame() {}
