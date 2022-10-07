/* Dada una cadena de texto, comprobar si es un palíndromo
o no. Los palíndromos son palabras que se leen igual
aún estando invertidas. Por ejemplo: ana, bob, otto,
allivessevilla */

function palindromo(texto){
    let invertido = texto
                    .split('')
                    .reverse()
                    .join('')
                    ;
    return (invertido === texto);
}

console.log("¿Es un palindromo? " + palindromo("hello"));

