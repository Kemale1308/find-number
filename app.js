
let userInput = prompt("Metn daxil edin");
let number = false;

for (let i = 0; i < userInput.length; i++) {

  if (userInput[i] >= 0 && userInput[i] <= 9) {
    number = true;
    break; 
  }
}


if (number) {
  console.log("Daxil etdiyiniz metnde reqem varr.");
} else {
  console.log("Daxil etdiyiniz metnde reqem yoxdur");
}

