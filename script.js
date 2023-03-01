var botaoadd = window.document.querySelector("input#add"), 
    botaof = window.document.querySelector("input#fim"),
    resetdom = document.querySelector("input#reset"),
    caixadom = window.document.querySelector("textarea#txt")
botaoadd.addEventListener('click', clickadd)
botaof.addEventListener('click', clickfim)
resetdom.addEventListener('click', reset)
var caixa = []

function clickadd(){
    let numdom = window.document.querySelector("input#num")    
    num = Number(numdom.value)
 

    if(numdom.value.length == 0){
        alert("[ERRO] É preciso digitar um valor entre 1 e 100!")
    } else if(num < 1 || num > 100){
        alert("[ERRO] O valor digitado não é valido, deve estar entre 1 e 100!")
    } else if(caixa.length == 0 ) {  
        caixa.push(num) 
        caixadom.innerHTML = ''
        caixadom.innerHTML += `Você digitou: ${num} \n`
    } else if(caixa.length > 0 ) { 
         if(numduplicado(num) != -1 ) { 
            alert("[ERRO] Este valor já foi digitado. Tente outro número de 1 a 100!")
        } else if(numduplicado(num) == -1){
            caixa.push(num)
            caixadom.innerHTML += `Você digitou: ${num} \n`
            
           // for(let ini in caixa){
                //caixadom.innerHTML += `A posição ${ini} tem o valor ${caixa[ini]} \n`
       // }
        }        
    } 
}

function numduplicado(num){

    for(let ini in caixa){
        validador = caixa.indexOf(num)
    } 
    return validador 
}

function clickfim(){
    window.alert('Ola3')
}

function reset(){
    caixadom.innerHTML = ''
    caixa = []
}