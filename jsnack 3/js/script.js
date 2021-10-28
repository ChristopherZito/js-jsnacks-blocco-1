// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// richiesta di 10 numeri

const numsom = [];
for(let i = 0; i < 10; i++){
    let num = parseInt(prompt("inserire un numero"));
    numsom.push(num);
    console.log(num);
}
console.log( "i numeri presenti sono: " + numsom.length);

// stampa dei numeri
const before = document.getElementById("numsom");
const after = document.getElementById("somma");

for(let i = 0; i < numsom.length; i++){
    before.innerHTML += " num"+ (i + 1) + " = " + numsom[i];
}
// somma dei numeri
let fine = 0;
for(let i = 0;i < numsom.length; i++){
    fine += numsom[i];
    console.log("il risultato è: " + fine);   
}
// stampa numero finale
after.innerHTML = fine