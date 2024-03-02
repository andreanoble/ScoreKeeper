p1Display = document.querySelector("#p1Score");
p2Display = document.querySelector("#p2Score");
winningScore = document.querySelector("#winningScore");
p1Button = document.querySelector("#p1Button");
p2Button = document.querySelector("#p2Button");
resetButton = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;
let winScore = 2;

//listen for winning score
winningScore.addEventListener("change", function () {
  winScore = parseInt(winningScore.value);
});

//Listen for score button clicks
p1Button.addEventListener("click", function () {
  p1Score++;
  p1Display.textContent = p1Score;
  if (p1Score === winScore) {
    //end game
    endGame(p1Display, p2Display);
  }
});

p2Button.addEventListener("click", function () {
  p2Score++;
  p2Display.textContent = p2Score;
  if (p2Score === winScore) {
    //end game
    endGame(p2Display, p1Display);
  }
});

//end game, disable player buttons,
//change the color of winning score to green and losing score to red
function endGame(winPlayer, losePlayer) {
  p1Button.disabled = true;
  p2Button.disabled = true;
  winPlayer.style.color = "green";
  losePlayer.style.color = "red";
}

resetButton.addEventListener("click", function () {
  //reset scores to 0 in black, enable payer buttons, and winning score
  p1Button.disabled = false;
  p2Button.disabled = false;
  p1Display.style.color = "black";
  p2Display.style.color = "black";
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  winningScore.value = "";
  p1Score = 0;
  p2Score = 0;
  winScore = 2;
});
