/*Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
Javascript - JS
JSnack 3*/
console.log('ok js')

const name1=['antonio', 'andrea', 'nico', 'danilo', 'matteo', 'adriano', 'angelo', 'garibaldi'];

const surname=['bellini','Andreotti','Berlusconi', 'Giacometti','cortese','sanges','Albertozzi'];

const invitati=[]



while( invitati.length < 3){

    const rndName=Math.floor(Math.random() * surname.lenght);
    const rndSurname=Math.Floor(Math.random() * surname.length);
    
    const nameInvites=name1[rndName];
    const surnameInvites=surname[rndSurname];

    const fintoInvitato=`${nameInvites} ${surnameInvites}`
    invitati.push(fintoInvitato);
}

console.log(invitati)

