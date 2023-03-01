let numeros = [1, 2, 3, 4, 5];
let total = soma(numeros);
console.log(total); // Deveria imprimir 15

function soma(numeros){
    var soma = 0
    for(let ini in numeros){
        soma+=numeros[ini]
    } return soma
}

