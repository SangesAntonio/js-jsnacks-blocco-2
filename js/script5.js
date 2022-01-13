/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/



//calcolo e creazione dell'array

let lenNumb1 = Math.floor(Math.random() *15);
let lenNumb2 = Math.floor(Math.random() *15);

const array1=[];
const array2=[];

let numInside= 0;
for(let i=1; i<=lenNumb1; i++){
    numInside=Math.floor(Math.random() *50);
    array1.push(numInside);
}

for(let i=1; i<=lenNumb2; i++){
    numInside=Math.floor(Math.random() *50);
    array2.push(numInside);
}

//ciclo per rendere le due array uguali

while(array1.length !== array2.length){
    const numbFill=Math.floor(Math.random() *50 +1);

    if(array1 > array2){
        array1.push(numbFill);
    }else{
        array2.push(numbFill);
    }
}

console.log(array1);
console.log(array2);
