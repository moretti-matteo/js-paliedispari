// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function palindromeCheck(word) {

    wordNoSpaces = word.replace(/\s/g, '').toLowerCase();
    let palindromeWord = "";

    for (let i = wordNoSpaces.length - 1; i >= 0; i--) {
        palindromeWord += wordNoSpaces[i];
    }

    if (palindromeWord === wordNoSpaces) {
        console.log(`the word: '${word}' is palindrome`);
    } else {
        console.log(`the word: '${word}' isn't palindrome`);
    }
}

const word = prompt("Enter a word");
palindromeCheck(word);