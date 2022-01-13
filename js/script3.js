/*Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
Javascript - JS
JSnack 3*/
console.log('ok js')

const invitati=[]
const name1=['antonio', 'andrea', 'nico', 'danilo', 'matteo', 'adriano', 'angelo', 'garibaldi'];

const surname1=['bellini','Andreotti','Berlusconi', 'Giacometti','cortese','sanges','Albertozzi'];


while( invitati.length < 3){

    const rndName=Math.floor(Math.random( ) * name1.length);
    const rndSurname=Math.floor(Math.random( ) * surname1.length);
    
    const nameInvites=name1[rndName];
    const surnameInvites=surname1[rndSurname];
    const fintoInvitato =`${nameInvites} ${surnameInvites}`;

    if(!invitati.includes(fintoInvitato)){
        invitati.push(fintoInvitato);

    }
}

console.log(invitati);

