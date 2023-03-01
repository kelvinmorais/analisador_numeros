var botaoadd = window.document.querySelector("input#add"), 
    botaof = window.document.querySelector("input#fim")
botaoadd.addEventListener('click', clickadicionar)
botaof.addEventListener('click', clickfim)



function clickadicionar(){
    window.document.innerText = 'teste'
    window.alert('teste')
}

/*
function clickadicionar(){
    console.log('testes')
    var numdom = window.document.querySelector("input#num"),
        caixadom = window.document.querySelector("textarea#txt")
        num = Number(numdom)
        caixa = []
    
    if(numdom.length == 0){
        console.log("[ERRO] É preciso digitar um valor entre 1 e 100!")
    } else if(num < 1 || num > 100){
        console.log("[ERRO] O valor digitado não é valido, deve estar entre 1 e 100!")
    } else if(num - analisarcaixa(num) == num ) {  
        caixa.push(num) //Adiciona no indice da caixa um valor
        caixadom.innerText = `Você digitou: ${num}`
    } else {
        console.log("[ERRO] Este valor já foi digitado. Tente outro número de 1 a 100!")
    }


function analisarcaixa(num){
    for(let c = 0 ; c < arrayb.length ; c++){
        var validador = 0
        if(num == arrayb[c]){
            validador++
        }
    } 
    return validador 
}


}

function clickfim(){
    let res = window.document.querySelector("p#res") 

}
*/