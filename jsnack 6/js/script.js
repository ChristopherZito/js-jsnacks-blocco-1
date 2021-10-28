// Genera un array di 50 numeri random.
// Nell’array non devono esserci doppioni.

// creazione array
const conta = [];

//creo 50 valori e li inserisco nell'array
for(let i = 0; i <  50 ; i++){
    let num = Math.floor(Math.random() * 100) + 1;
    console.log("numero generato = " + num);
    conta.push(num)
}
console.log("numeri attuali nell'array: " + conta);

//provo a confrontare i numeri dell'array con i numeri nell'array stesso
let verifica = false;
for(let i = 0; i < conta.length  && verifica == false; i++){
    let num = [...conta];
    console.log("numero creato nel secondo for = " + num);
    if(num == conta[i]){
        conta.slice(1),conta[i];
        let numNew = Math.floor(Math.random() * 100) + 1;
        console.log("numero generato = " + num);
        conta.push(numNew)
    }else {
        verifica = true;
    }
}

// inserimento in-page
const text = document.getElementById("list");
text.innerHTML +=" numeri nell'array: " + conta;
console.log("numeri dell'array da mostrare: " + conta);
