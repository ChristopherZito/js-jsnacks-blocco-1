// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// righiesta di 2 parole
let par1 = prompt("inserire una parola:");
let par2 = prompt("inserire un' altra parola:");
console.log("la prima parola è: " + par1);
console.log("la seconda parola è: " + par2);

// stampa delle 2 parole in ordine di lunghezza( corta - lunga)
const short = document.getElementById("first");
const long = document.getElementById("second");
if(par1.length > par2.length){
    short.innerHTML = "La parola più corta è: " + par2;
    long.innerHTML = "La parola più lunga è: " + par1; 
}else if(par2.length > par1.length){
    short.innerHTML = "La parola più corta è: " + par1;
    long.innerHTML = "La parola più lunga è: " + par2;
}else{
    short.innerHTML = "La parola: " + par1 + " ha steassa lunghezza di:" + par2;
}