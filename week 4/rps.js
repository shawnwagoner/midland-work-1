const buttons = document.querySelectorAll(".pick");
const cpuPick = document.getElementById("CPU");
const player = document.getElementById("user");
const games= { game:1, tied:0, lost:0, won:0,};

buttons.forEach((btn) =>{
  btn.addEventListener("click", playerpick)
;});

function playerpick(e) {
  let comp = cpuChoice();
  let user = e.target.value;
  cpuPick.innerText = `The CPU picked: ${comp}`;
  player.innerText = `Your pick was: ${user}`;

  if (user === comp) {
    gameResult("tied");
  }else if(
    (user === "rock" && comp ==="paper") ||
    (user === "paper" && comp === "scissors") ||
    (user === "scissors" && comp === "rock")){
      gameResult("lost");
    }else{
      gameResult("won");
    }
}
 function cpuChoice() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function gameResult(results) {
  games.game++;
  document.getElementById("game").innerText = games.game;
  document.getElementById("results").innerText = `You ${results}`;
  games[results]++;
  document.getElementById(results).innerText= games[results];
}