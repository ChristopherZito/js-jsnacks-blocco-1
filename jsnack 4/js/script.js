// In un array sono contenuti i nomi degli invitati
// alla festa del grande Gatsby,
// chiedi all’utente il suo nome e
// comunicagli se può partecipare o no alla festa.


// lista invitati
const nomi = ["luca", "marco", "filippo","Luca", "Marco", "Filippo"]
// richiesta del nome
const mioNome = prompt("inserisci il tuo nome")
console.log("il nome è: " + mioNome);
// conferma invito
const text = document.getElementById("invito");
let verifica = false;
for(let i = 0; i < nomi.length && verifica == false; i++){
    if(mioNome == nomi[i]){
        verifica = true
        text.innerHTML = "invito valido"
    }else {
        text.innerHTML = "invito non valido"
    }
}