const numero_input = document.getElementById("numero_input")
const resultado = document.getElementById("resultado")
//const numero0 = numero_input.value

const numeros = {

    "guarda_numeros": [0]
}

function main(){
    const numero_input = document.getElementById("numero_input")
    
    const numero = Number(numero_input.value)
    
    console.log(numero)
    
    return {
        numero
    }
}

const calculadora = main()



function somar(numero1){
    
    numero1 = numero1.value
    if(calculadora.numero === "0"){
        
        const numero2 = calculadora.numero + numero1
        resultado_(numero2)
    }
    else{
        const numero2 = Number(numeros.guarda_numeros[numeros.guarda_numeros.length -1]) + Number(numero1)
        console.log(numero2)
        resultado_(numero2)
    }
    

    

}

function subtrair(numero1){

    numero1 = numero1.value
    if(calculadora.numero === "0"){

        const numero2 = calculadora.numero + numero1
        resultado_(numero2)
    }
    else{
        const numero2 = Number(numeros.guarda_numeros[numeros.guarda_numeros.length -1]) - Number(numero1)
        console.log(numero2)
        resultado_(numero2)
    }
    


}

2

function multiplicar(numero){
    numero = numero.value
    if(numeros.guarda_numeros == numeros.guarda_numeros[0]){

        const numero2 = Number(numero)
        resultado_(numero2)
        
    }
    else{
        const numero2 = Number(numeros.guarda_numeros[numeros.guarda_numeros.length -1]) * Number(numero)
        console.log(numero2)
        resultado_(numero2)
    }
    
    

}
function dividir(numero){
    numero = numero.value
    if(numeros.guarda_numeros == numeros.guarda_numeros[0]){

        const numero2 = Number(numero)
        resultado_(numero2)
        
    }
    else{
        const numero2 = Number(numeros.guarda_numeros[numeros.guarda_numeros.length -1]) / Number(numero)
        console.log(numero2)
        resultado_(numero2)
    }
    
    

}

    

function resultado_(numero){

    numeros.guarda_numeros.push(numero)
    resultado.innerHTML = `${numeros.guarda_numeros[numeros.guarda_numeros.length -1]}`
    numero_input.value = ``
    

}
function zerar(){
    numeros.guarda_numeros = [0]
    resultado.innerHTML = `${numeros.guarda_numeros[numeros.guarda_numeros.length -1]}`
    numero_input.value = `0`
    
}
