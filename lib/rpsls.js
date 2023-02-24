export function rps = (playerShot) => {
  const validShots = ["rock", "paper", "scissors"];

  if (!playerShot) {
    return { "player": validShots[Math.floor(Math.random() * validShots.length)] };
  }

  if (!validShots.includes(playerShot)) {
    console.error(`Error: ${playerShot} is out of range.\nValid choices are: ${validShots}`);
    return;
  }

  const opponentShot = validShots[Math.floor(Math.random() * validShots.length)];

  let result;
  if (playerShot === opponentShot) {
    result = "tie";
  } else if (
    (playerShot === "rock" && opponentShot === "scissors") ||
    (playerShot === "paper" && opponentShot === "rock") ||
    (playerShot === "scissors" && opponentShot === "paper")
  ) {
    result = "win";
  } else {
    result = "lose";
  }

  return { "player": playerShot, "opponent": opponentShot, "result": result };
};

export function rpsls = (playerShot) => {
  const validShots = ["rock", "paper", "scissors", "lizard", "spock"];

  if (!playerShot) {
    return { "player": validShots[Math.floor(Math.random() * validShots.length)] };
  }

  if (!validShots.includes(playerShot)) {
    console.error(`Error: ${playerShot} is out of range.\nValid choices are: ${validShots}`);
    return;
  }

  const opponentShot = validShots[Math.floor(Math.random() * validShots.length)];

  let result;
  if (playerShot === opponentShot) {
    result = "tie";
  } else if (
    (playerShot === "rock" && (opponentShot === "scissors" || opponentShot === "lizard")) ||
    (playerShot === "paper" && (opponentShot === "rock" || opponentShot === "spock")) ||
    (playerShot === "scissors" && (opponentShot === "paper" || opponentShot === "lizard")) ||
    (playerShot === "lizard" && (opponentShot === "paper" || opponentShot === "spock")) ||
    (playerShot === "spock" && (opponentShot === "rock" || opponentShot === "scissors"))
  ) {
    result = "win";
  } else {
    result = "lose";
  }

  return { "player": playerShot, "opponent": opponentShot, "result": result };
};
