console.log('js ok');
/*Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo*/


let number=parseInt(prompt('Scrivi un numero', ''));

if(number % 2 !== 0){
    number += 1 ;
}
console.log(number);