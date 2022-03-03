/**
 *
 *
    Crea due tag div con due id diversi:
    un div avrà il testo colorato di rosso mentre l'altro di verde.
    Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
    Se sono pari li stampo nell'div "rosso",
    se sono dispari li stampo nell'div "verde".
 *
 */

function isEvenOrOdd(number) {
    const green = document.getElementById('green-text');
    const red = document.getElementById('red-text');

    // const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] % 2 === 0) {
            return true;
            // red.innerHTML += `<p class="text-danger">${arrayNumbers[i]}</p>`;
        } else {
            return false;
            // green.innerHTML += `<p class="text-success">${arrayNumbers[i]}</p>`;
        }
    }
}
