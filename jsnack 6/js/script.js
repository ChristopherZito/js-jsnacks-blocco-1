// Genera un array di 50 numeri random.
// Nell’array non devono esserci doppioni.

// creazione array
const conta = [];


let num = Math.floor(Math.random() * 10) + 1;
conta.push(num)
console.log("numero uscito = " + num); 
let found = false;
for(let i = 0; i < 10 && found == false; i++){
    if(num == conta[i]){
        found == true;
        conta.push(num)
        console.log("numero caricato = " + num);
        num = Math.floor(Math.random() * 10) + 1;
        console.log("numero ricreato = " + num);
    }/* else {
        num = Math.floor(Math.random() * 10) + 1;
        console.log("numero else = " + num);
    } */
}


// inserimento in-page
const text = document.getElementById("list");
text.innerHTML +="numeri nell'array: " + conta;
console.log("numeri nell'array: " + conta);
