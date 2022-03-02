/**
   Fai inserire un numero, che chiameremo N, all'utente.
   Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
   Ogni volta che ne crei uno, stampalo a schermo.
 */

const output = document.getElementById('output');
const n = parseInt(prompt('Insert number'));

while (isNaN(n)) {
   n = parseInt(prompt('Insert number'));
}

for (i = 0; i < n; i++) {
   let array = [];
   while (array.length < 10) {
      array.push(Math.floor(Math.random() * 4528) + 4);
   }
   console.log(array);
}