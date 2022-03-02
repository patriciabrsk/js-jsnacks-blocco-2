/**
 *
 *
    Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
    Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
 *
 */

let emptyArray = [];
let sum = 0;

while (sum < 200) {
    emptyArray.push(parseInt(prompt('Insert number:')));

    sum += emptyArray[emptyArray.length - 1];

    console.log('Sum is: ', sum);
}
// console.log(emptyArray);

