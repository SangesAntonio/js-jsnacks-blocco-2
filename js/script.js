console.log('js ok');
/*Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.*/

let result= 0
for(let i = 0; i < 5; i++){
    const numbers=parseInt(prompt('Inserisci un numero', '5'))
    result +=numbers
}
console.log(result)


//while
let i= 1;
let sum = 0;

while(i <= 5 ){

    const numbers=parseInt(prompt('Inserisci un numero', '5'));
    
    sum +=numbers;
    i++;
}

console.log(sum)