// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.
//1b) richiamo la funzione creata all'interno dell'alert
var diffEasy = 5;
var maxRandNum = 100;
var minRandNum = 1;

alert(randomNumbers(diffEasy, maxRandNum, minRandNum));

//********* functions */
//1a) creo una funzione che ritorni 5 numeri random (array)
function randomNumbers (diff, max, min){
    var arrRandNums = [];

    while(arrRandNums.length < diff){

        var randNum = Math.floor(Math.random() * (max - min)) + min;

        if(!arrRandNums.includes(randNum)){
            arrRandNums.push(randNum);
        }
    }

    return arrRandNums;
}

