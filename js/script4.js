/*Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari*/


//calcolo l'array di numeri random
let numb=20;
const numbers=[];
let r= 0;
let sum=0;
while(r < numb){
    let rndNumb=Math.floor(Math.random() *200);
    numbers.push(rndNumb);

    //sommo i numeri in posizione dispari
    if(r % 2 !== 0){
        sum +=numbers[r]
    }
  
    r++;
}
console.log(numbers)
console.log(sum)









