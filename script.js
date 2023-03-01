var botaoadd = window.document.querySelector("input#add"), 
    botaof = window.document.querySelector("input#fim"),
    resetdom = document.querySelector("input#reset"),
    caixadom = window.document.querySelector("textarea#txt"),
    caixa = [],
    finish = 0,
    res1 = document.querySelector("p#res-qtd"),
    res2 = document.querySelector("p#res-maior"),
    res3 = document.querySelector("p#res-menor"),
    res4 = document.querySelector("p#res-soma"),
    res5 = document.querySelector("p#res-media")
botaoadd.addEventListener('click', clickadd)
botaof.addEventListener('click', clickfim)
resetdom.addEventListener('click', reset)

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
   if(finish > 0){
        alert('Reset para poder analisar novos números')
    } else if (finish == 0) {
        caixa.sort() //ordenador
    let qtdnum = caixa.length, //contador de número
        maiorn = caixa[qtdnum-1], //maior valor
        menorn = caixa[0], //menor valor
        //soma = soma(caixa) //soma
        media = soma(caixa) / qtdnum

    res1.innerHTML = `Você digitou ${qtdnum} número \n`
    res2.innerHTML = `O maior valor digitado, foi o número ${maiorn} \n`
    res3.innerHTML = `O menor valor digitado, foi o número ${menorn} \n`
    res4.innerHTML = `A soma dos valores digitados é : ${soma(caixa)} \n`
    res5.innerHTML = `A média dos valores digitados é: ${media} \n`
    finish++
    }
    
}

function reset(){
    caixadom.innerHTML = ''
    caixa = []
    finish = 0
    res1.innerHTML = ''
    res2.innerHTML = ''
    res3.innerHTML = ''
    res4.innerHTML = ''
    res5.innerHTML = ''
}

function soma(caixa){
    var soma = 0
    for(let ini in caixa){
        soma+=caixa[ini]
    } return soma
}
