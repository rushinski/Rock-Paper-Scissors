let userCount = 0;
let compCount = 0;

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

  let resultMessage = document.createElement("p");
  resultMessage.classList.add('right-message');

  let pickedMessage = document.createElement("p");
  pickedMessage.textContent = `You picked ${selectedMove} | The computer picked ${ranMove}`;
  pickedMessage.classList.add('right-message'); // Adds the class "right-message" from css (puts texts on left side of page)
  document.body.appendChild(pickedMessage);

  switch (selectedMove) {
    case 'Rock':
      switch (ranMove) {
        case 'Rock':
          resultMessage.innerHTML = "Tie game.<br>---------------";
          document.body.appendChild(resultMessage); 
          break;
        case 'Paper':
          resultMessage.innerHTML = "The computer won this round...<br>---------------";
          document.body.appendChild(resultMessage);
          compCount++;
          break;
        case 'Scissors':
          resultMessage.innerHTML = "You won!<br>---------------";
          document.body.appendChild(resultMessage); 
          userCount++;
          break;
      }
      break;
    case 'Paper':
      switch (ranMove) {
        case 'Rock':
          resultMessage.innerHTML = "You won!<br>---------------";
          document.body.appendChild(resultMessage); 
          userCount++;
          break;
        case 'Paper':
          resultMessage.innerHTML = "Tie game.<br>---------------";
          document.body.appendChild(resultMessage); 
          break;
        case 'Scissors':
          resultMessage.innerHTML = "The computer won this round...<br>---------------";
          document.body.appendChild(resultMessage);
          compCount++;
          break;
      }
      break;
    case 'Scissors':
      switch (ranMove) {
        case 'Rock':
          resultMessage.innerHTML = "The computer won this round...<br>---------------";
          document.body.appendChild(resultMessage); 
          compCount++;
          break;
        case 'Paper':
          resultMessage.innerHTML = "You won!<br>---------------";
          document.body.appendChild(resultMessage); 
          userCount++;
          break;
        case 'Scissors':
          resultMessage.innerHTML = "Tie game.<br>---------------";
          document.body.appendChild(resultMessage); 
          break;
      }
      break;
  }
}