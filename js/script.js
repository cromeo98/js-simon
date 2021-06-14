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

var arrRandomNums = randomNumbers(diffEasy, maxRandNum, minRandNum);

alert(arrRandomNums);

//2b) richiamo la funzione creata e fisso il timer di 30 secondi
setTimeout(function userGuessNums(){
    var guessedNums = [];

    for (var i = 0; i < diffEasy; i++){
    
        var userGuess = parseInt(prompt('inserisci i numeri che ricordi'));

        if(!guessedNums.includes(userGuess) && arrRandomNums.includes(userGuess)){
            guessedNums.push(userGuess);
        }
    }

    if(!guessedNums.length){
        alert('Non hai ricordato neanche un numero!')
    } else{
        alert ('hai indovinato ' + guessedNums.length + ' numeri! Sono: ' + guessedNums);
    }
    
}, 30000);

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

//2a) creo la funzione per chiedere all'utente i 5 numeri
function userGuessNums(arrRandom, diff){
    var guessedNums = [];

    for (var i = 0; i < diff; i++){
    
        var userGuess = parseInt(prompt('inserisci i numeri che ricordi'));

        if(!guessedNums.includes(userGuess) && arrRandom.includes(userGuess)){
            guessedNums.push(userGuess);
        }
    }

    return guessedNums;
}
