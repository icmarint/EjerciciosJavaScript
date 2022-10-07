function invertir(texto){
    let invertido = "";

    for(let letra of texto){
        invertido = letra + invertido;
    }

    return invertido;
}

console.log("Texto invertido: ",invertir("Isabel"));


/* Sería más fácil usar un método de JavaScript: */

function invertir2(texto){
    return texto.split("").reverse().join('');
}

console.log("Texto invertido: ",invertir2("Isabel"));