let secretNumber = 37;
let attemps = 0;
let guessedCorrectly = false;

while(attemps < 5){
    let input = prompt("enter number(1-100");

    if (input === null){
        console.log(`game canceled`)
        break;
    }

    let guess = Number(input);

    if(input === "" || isNaN(guess)){
        console.log(`invalid input try again`);
        continue;
    }

    attemps++ ;

    if(guess > secretNumber){
        console.log(`Guess ${attemps}: ${guess} >>> To high`);
    }
    else if(guess < secretNumber){
        console.log(`Guess ${attemps}: ${guess} >>> To low`);
    }
    else{
        console.log(`Guess ${attemps}: ${guess} >>> Correct.`);
        guessedCorrectly = true;
        break;
    }
}

if (!guessedCorrectly && attempts === 5) {
  console.log(`Game over! The secret number was ${secretNumber}.`);
}