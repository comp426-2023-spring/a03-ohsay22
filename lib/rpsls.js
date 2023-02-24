
function rpsls(shot) {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];

  const opp = choices[Math.floor(Math.random() * choices.length)];

  // Determine the winner of the game
  let result;
  if (shot === opp) {
    result = "It's a tie!";
  } else if (
    (shot === "rock" && (opp === "scissors" || opp === "lizard")) ||
    (shot === "paper" && (opp === "rock" || opp === "spock")) ||
    (shot === "scissors" && (opp === "paper" || opp === "lizard")) ||
    (shot === "lizard" && (opp === "paper" || opp === "spock")) ||
    (shot === "spock" && (opp === "rock" || opp === "scissors"))
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  return `You chose ${shot}, computer chose ${opp}. ${result}`;
}

function rps(shot) {
  // Define a list of valid choices
  const choices = ["rock", "paper", "scissors"];

  const opp = choices[Math.floor(Math.random() * choices.length)];

  let result;
  if (shot === opp) {
    result = "It's a tie!";
  } else if (
    (shot === "rock" && opp === "scissors") ||
    (shot === "paper" && opp === "rock") ||
    (shot === "scissors" && opp === "paper")
  ) {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }
  
  return `You chose ${playerChoice}, computer chose ${opp}. ${result}`;
}
