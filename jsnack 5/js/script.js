// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const num = [];

for(let i = 0; i < 6 ; i++){
    let miNum = parseInt(prompt("inserire un numero:"));
    console.log("numero da me messo= " + miNum);
    if (miNum % 2 !== 0){
        num.push(miNum);
    }
}
document.getElementById("bo").innerHTML = "i numeri inseriri sono: " + num;
console.log("i numeri inseriti sono: " + num);