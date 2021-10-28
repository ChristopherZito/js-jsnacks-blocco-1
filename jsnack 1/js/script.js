// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// richiesta di 2 numeri dall'utente
let num1 = parseInt(prompt("Inserire un numero:"));
let num2 = parseInt(prompt("Inserire un numero:"));

console.log ("il primo numero è: " + num1);
console.log("il secondo numero è: " + num2);

let desk = document.getElementById("ris");
// confronto per dire qual è il più grande
if(num1 > num2){
    desk.innerHTML = "il numero più grande è: " + num1;
}else if(num2 > num1){
    desk.innerHTML = "il numero più grande è: " + num2;
}else {
    desk.innerHTML = `i numeri ${num1} e ${num2} hanno stesso valore`;
}