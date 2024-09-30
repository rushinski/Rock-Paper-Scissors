let userCount = 0;
let compCount = 0;

function check(button) {
  let selectedMove = button.value;
  let ranNum = Math.floor(Math.random() * 3);
  let resultMessage = document.createElement("p");


  // 0 is rock, 1 is paper, 2 is scissors

  switch (selectedMove) {
    case '0': // Rock
      switch (ranNum) {
        case 0:
          resultMessage.textContent = "Tie game.";
          document.body.appendChild(resultMessage); 
          break;
        case 1:
          resultMessage.textContent = "The computer won this round!";
          document.body.appendChild(resultMessage);
          compCount++;
          break;
        case 2:
          resultMessage.textContent = "You won!";
          document.body.appendChild(resultMessage); 
          userCount++;
          break;
      }
      break;
    case '1': // Paper
      switch (ranNum) {
        case 0:
          resultMessage.textContent = "You won!";
          document.body.appendChild(resultMessage); 
          userCount++;
          break;
        case 1:
          resultMessage.textContent = "Tie game.";
          document.body.appendChild(resultMessage); 
          break;
        case 2:
          resultMessage.textContent = "The computer won this round...";
          document.body.appendChild(resultMessage);
          compCount++;
          break;
      }
      break;
    case '2': // Scissors
      switch (ranNum) {
        case 0:
          resultMessage.textContent = "The computer won this round...";
          document.body.appendChild(resultMessage); 
          compCount++;
          break;
        case 1:
          resultMessage.textContent = "You won!";
          document.body.appendChild(resultMessage); 
          userCount++;
          break;
        case 2:
          resultMessage.textContent = "Tie game.";
          document.body.appendChild(resultMessage); 
          break;
      }
      break;
  }
}