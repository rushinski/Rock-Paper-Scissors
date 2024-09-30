var userCount = 0;
var compCount = 0;

// Creates score message
let scoreboard = document.createElement("p");
scoreboard.textContent = `Your Score is : ${userCount} | The Computer's Score is : ${compCount}`;
scoreboard.classList.add('text');
document.body.appendChild(scoreboard);

// Creates result message
let resultMessage = document.createElement("p");
resultMessage.classList.add('text');
document.body.appendChild(resultMessage);

// Creates picked message
let pickedMessage = document.createElement("p");
pickedMessage.classList.add('text');
document.body.appendChild(pickedMessage);

function check(button) {
  let selectedMove = button.value; // Gets the value of the button clicked
  let ranMove = Math.floor(Math.random() * 3); // Generates random number from 0-2

  switch (ranMove) { // Changing random number values to move values
    case 0:
      ranMove = 'Rock';
      break;
    case 1:
      ranMove = 'Paper';
      break;
    case 2:
      ranMove = 'Scissors';
      break;
  }

  pickedMessage.textContent = `You picked ${selectedMove} | The computer picked ${ranMove}`; // Gets picked elements for that round

  // Logic
  switch (selectedMove) {
    case 'Rock':
      switch (ranMove) {
        case 'Rock':
          resultMessage.innerHTML = "Tie game.";
          break;
        case 'Paper':
          resultMessage.innerHTML = "The computer won this round...";
          compCount++;
          break;
        case 'Scissors':
          resultMessage.innerHTML = "You won!";
          userCount++;
          break;
      }
      break;
    case 'Paper':
      switch (ranMove) {
        case 'Rock':
          resultMessage.innerHTML = "You won!";
          userCount++;
          break;
        case 'Paper':
          resultMessage.innerHTML = "Tie game.";
          break;
        case 'Scissors':
          resultMessage.innerHTML = "The computer won this round...";
          compCount++;
          break;
      }
      break;
    case 'Scissors':
      switch (ranMove) {
        case 'Rock':
          resultMessage.innerHTML = "The computer won this round...";
          compCount++;
          break;
        case 'Paper':
          resultMessage.innerHTML = "You won!";
          userCount++;
          break;
        case 'Scissors':
          resultMessage.innerHTML = "Tie game.";
          break;
      }
      break;
  }

  scoreboard.textContent = `Your Score is : ${userCount} | The Computer's Score is : ${compCount}`; // Updates Scores
}