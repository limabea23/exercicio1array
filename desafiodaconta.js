let frase = "eu te amo, harry styles!";
let letras = frase.split("");
let vogais = letras.filter((letras) =>["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"].includes (letras.toLowerCase()));

console.log("texto:", frase);
console.log("número total de vogais:", vogais.length);
console.log("vogais encontradas:", vogais);