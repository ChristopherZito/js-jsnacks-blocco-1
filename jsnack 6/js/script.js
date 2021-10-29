// Genera un array di 50 numeri random.
// Nell’array non devono esserci doppioni.

// creazione array
const conta = [];

//creo 50 valori e li inserisco nell'array
while(conta.length < 50){
    //generazione numero
    const num = Math.floor(Math.random() * 200) + 1;
    console.log("numero generato = " + num);
    
    let verifica = false;

    for(let i = 0; i < conta.length; i++){
        if(num === conta[i]){
            verifica = true;
        }
    }

    if(verifica == false){
        conta.push(num);
    }

//prova di verificca

    // if(conta.length < 50 && ){
    //    let numex = parseInt(prompt("inserire un numero a mano"));
    //     conta.push(numex);
    //     console.log("numeri generati a mano = " + numex);
    // } 
}



// inserimento in-page
const text = document.getElementById("list");
text.innerHTML +=" numeri nell'array: " + conta;
console.log("numeri dell'array da mostrare: " + conta);
