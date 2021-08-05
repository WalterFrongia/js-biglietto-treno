// Algoritmo: 
// 1. Chiedo all'utente quanti km deve percorrere. 


var kilometri = prompt(" Quanti kilometri vuoi percorrere? ")

document.getElementById("n-kilometri").innerHTML = kilometri

// 2. Chiedo l'età all'utente.

var etaUtente = prompt("Quanti anni hai?")

document.getElementById("eta").innerHTML = etaUtente


// 3. Calcolo prezzo del biglietto. (0,21 euro per km)

var calcoloBiglietto = 0.21* kilometri 
console.log(calcoloBiglietto);

// 4. Calcolo dello sconto in base alla fascia d'età. (se utente minorenne sconto del 20%, se utente over 60 sconto del 40%, altrimenti prezzo pieno.)


if (etaUtente< 18){
    var sconto = calcoloBiglietto * 20 / 100
    console.log(sconto);
    var prezzoFinale = calcoloBiglietto - sconto
    console.log(prezzoFinale);
    document.getElementById("prezzo-biglietto").innerHTML = prezzoFinale
    document.getElementById("commento-utente").innerHTML = "Sei minorenne hai uno sconto del 20%!"

}


// 5.Comunicazione del prezzo. 
