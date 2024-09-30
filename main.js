function check(button) {
  let selectedMove = button.value;
  console.log(selectedMove);
  let ranNum = Math.floor(Math.random() * 3);
  console.log(ranNum);

  // 0 is rock, 1 is paper, 2 is scissors

  switch (selectedMove) {
    case '0': // Rock
      switch (ranNum) {
        case 0:
          console.log("You tied");
          break;
        case 1:
          console.log("You lost");
          break;
        case 2:
          console.log("You won");
          break;
      }
      break;
    case '1': // Paper
      switch (ranNum) {
        case 0:
          console.log("You won");
          break;
        case 1:
          console.log("You tied");
          break;
        case 2:
          console.log("You lost");
          break;
      }
      break;
    case '2': // Scissors
      switch (ranNum) {
        case 0:
          console.log("You lost"); 
          break;
        case 1:
          console.log("You won");
          break;
        case 2:
          console.log("You tied");
          break;
      }
      break;
  }
}