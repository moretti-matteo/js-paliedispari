// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//Functions
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function everOrOdd(userNumber, cpuNumber) {
    const sum = userNumber + cpuNumber;

    if (sum % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

let choice = "";
do {
    choice = prompt("choose: even or odd");

    if (choice !== "even" && choice !== "odd") {
        alert("you can enter only 'even' or 'odd'");
    }

} while (choice !== "even" && choice !== "odd");

let userNumber = 1;
do {
    userNumber = Number(prompt("enter a number from 1 to 5"));

    if (userNumber < 1 || userNumber > 5) {
        alert("you can only enter values between 1 and 5");
    } else if (isNaN(userNumber)) {
        alert("you can only enter numbers");
    }

} while (userNumber < 1 || userNumber > 5 || isNaN(userNumber));

const cpuNumber = randomNumberGenerator(1, 5);

console.log(`User number: ${userNumber} Cpu number: ${cpuNumber} Sum:${userNumber + cpuNumber}`);
if (choice === everOrOdd(userNumber, cpuNumber)) {
    console.log("You won");
} else {
    console.log("you lost");
}




