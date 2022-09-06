//Escreva um código que receba três valores: 

let idade = Number(prompt("Qual sua idade?"))
let terminouEnsinoMedio = confirm("Você terminou o Ensino médio?")
let cursandoAlgumaFaculdade = confirm("Você está cursando alguma faculdade?")

//Crie um `if` para cada variável, se a pessoa tem 18 anos ou mais:
// Crie um `if` que imprima que a afirmacão é verdadeira,
// um `else` para imprimir que a afirmacão não é verdadeira.

if(idade >=18){
    console.log("Você é maior de idade!")
} else {
    console.log("Você é menor de idade!")
}

//Crie um `if` para cada variável, se a pessoa terminou o ensino médio:
//Crie um `if` que imprima que a afirmacão é verdadeira,
//um `else` para imprimir que a afirmacão não é verdadeira.

if(terminouEnsinoMedio === true){
    console.log("Você terminou o ensino médio!")
} else{ 
    console.log("Você não terminou o ensino médio!")

}

//Crie um `if` para cada variável, se a pessoa NÃO está cursando alguma faculdade:
// Crie um `if` que imprima que a afirmacão é verdadeira,
// um `else` para imprimir que a afirmacão não é verdadeira.

if(cursandoAlgumaFaculdade === false){
    console.log("Não está cursando faculdade!")
} else{ 
    console.log("Você stá cursando faculdade!")
}



