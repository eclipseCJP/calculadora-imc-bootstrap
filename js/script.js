function getAltura(){

    let h=document.getElementById("altura").value
    let altura=parseFloat(h)
    return altura
    //console.log("altura "+altura)

}

function getPeso(){

    let p=document.getElementById("peso").value
    let peso=parseFloat(p)
    return peso
    //console.log("peso "+peso)

}

function resultadoCalculo(){
    
    let resultado = getPeso() / Math.pow(getAltura(),2) 
    let imc=parseFloat( resultado.toFixed(2) )
    //console.log(imc)
    return imc
}

function classificacaoIMC(){

//let emoji=document.getElementById("emoji")
let imc = resultadoCalculo()

let muitoAbaixoDoPeso = imc < 17
let abaixoDoPeso = imc >= 17   && imc <= 18.49 
let pesoNormal   = imc >= 18.5 && imc <= 24.99 
let acimaDoPeso  = imc >= 25   && imc <= 29.99 
let obesidade1   = imc >= 30   && imc <= 34.99 
let obesidade2   = imc >=35    && imc <= 39.99
let obesidade3   = imc > 40

    if(muitoAbaixoDoPeso){
       // emoji.src='img/muitoBaixoPeso.jpg'
       
        return imc
    }else if(abaixoDoPeso){
       // emoji.src='img/baixoPeso.jpg'
       
        return imc
    }else if(pesoNormal){
      //  emoji.src='img/normal.jpg'
     
        return imc
    }else if(acimaDoPeso){
      //  emoji.src='img/sobrepeso.jpg'
      
        return imc
    }else if(obesidade1){
      //  emoji.src='img/obesidade1.jpg'
      
        return imc
    }else if(obesidade2){
      //  emoji.src='img/obesidade2.jpg'
      
        return imc
    }else if(obesidade3){
      //  emoji.src='img/obesidade3.jpg'
      
        return imc
    }else{
        console.log("nenhuma metrica")
    }
}

function exibir(){

    let display=document.getElementById("display")
    display.innerHTML=`imc =  ${classificacaoIMC()}`
    //console.log(calculo())

    
}