function rps(shot) {
  let options = ["rock", "paper", "scissors"];
  shot = shot ? shot.toLowerCase() : options[Math.floor(Math.random() * 3)];
  if (!options.includes(shot)) {
    return {"error": "Invalid input. Please choose either rock, paper, or scissors."};
  }
  let opponent = options[Math.floor(Math.random() * 3)];
  if (shot == opponent) {
    return {"result": "Tie", "player": shot, "opponent": opponent};
  } else if (
    (shot == "rock" && opponent == "scissors") ||
    (shot == "paper" && opponent == "rock") ||
    (shot == "scissors" && opponent == "paper")
  ) {
    return {"result": "Win", "player": shot, "opponent": opponent};
  } else {
    return {"result": "Loss", "player": shot, "opponent": opponent};
  }
}

function rpsls(shot) {
  let options = ["rock", "paper", "scissors", "lizard", "spock"];
  shot = shot ? shot.toLowerCase() : options[Math.floor(Math.random() * 5)];
  if (!options.includes(shot)) {
    return {"error": "Invalid input. Please choose either rock, paper, scissors, lizard, or spock."};
  }
  let opponent = options[Math.floor(Math.random() * 5)];
  if (shot == opponent) {
    return {"result": "Tie", "player": shot, "opponent": opponent};
  } else if (
    (shot == "rock" && (opponent == "scissors" || opponent == "lizard")) ||
    (shot == "paper" && (opponent == "rock" || opponent == "spock")) ||
    (shot == "scissors" && (opponent == "paper" || opponent == "lizard")) ||
    (shot == "lizard" && (opponent == "paper" || opponent == "spock")) ||
    (shot == "spock" && (opponent == "rock" || opponent == "scissors"))
  ) {
    return {"result": "Win", "player": shot, "opponent": opponent};
  } else {
    return {"result": "Loss", "player": shot, "opponent": opponent};
  }
}

