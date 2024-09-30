let userCount = 0;
let compCount = 0;

function check(button) {
  let selectedMove = button.value; // Gets the value of the button clicked
  let ranMove = Math.floor(Math.random() * 3); // Generates random number from 0-2
  let resultMessage = document.createElement("p");
  let pickedMessage = document.createElement("p");

  switch (ranMove) { // Changing random number values to move values
    case 0:
      ranMove = 'Rock';
      break;
    case 1:
      ranMove = 'Paper';
      break;
    case 2:
      ranMove = "Scissors";
      break;
  }

  pickedMessage.textContent = `You picked ${selectedMove} | The computer picked ${ranMove}`;
  document.body.appendChild(pickedMessage);

  switch (selectedMove) {
    case 'Rock':
      switch (ranMove) {
        case 'Rock':
          resultMessage.textContent = "Tie game.";
          document.body.appendChild(resultMessage); 
          break;
        case 'Paper':
          resultMessage.textContent = "The computer won this round...";
          document.body.appendChild(resultMessage);
          compCount++;
          break;
        case 'Scissors':
          resultMessage.textContent = "You won!";
          document.body.appendChild(resultMessage); 
          userCount++;
          break;
      }
      break;
    case 'Paper':
      switch (ranMove) {
        case 'Rock':
          resultMessage.textContent = "You won!";
          document.body.appendChild(resultMessage); 
          userCount++;
          break;
        case 'Paper':
          resultMessage.textContent = "Tie game.";
          document.body.appendChild(resultMessage); 
          break;
        case 'Scissors':
          resultMessage.textContent = "The computer won this round...";
          document.body.appendChild(resultMessage);
          compCount++;
          break;
      }
      break;
    case 'Scissors':
      switch (ranMove) {
        case 'Rock':
          resultMessage.textContent = "The computer won this round...";
          document.body.appendChild(resultMessage); 
          compCount++;
          break;
        case 'Paper':
          resultMessage.textContent = "You won!";
          document.body.appendChild(resultMessage); 
          userCount++;
          break;
        case 'Scissors':
          resultMessage.textContent = "Tie game.";
          document.body.appendChild(resultMessage); 
          break;
      }
      break;
  }
}