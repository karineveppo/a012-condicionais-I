//Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" 
//e guarde o valor da resposta em uma const `nacionalidade`:

const nacionalidade = prompt("Escreva aqui sua nacionalidade") 

//Crie uma estrutura de `if/else if/else` 
//que verifique se a nacionalidade guardada na const `nacionalidade` 
//é igual a cada uma das nacionalidades acima, e caso seja, 
//imprima a nacionalidade no console:

if (nacionalidade === "brasileira" ){
    console.log("nacionalidade encontrada")

} else if(nacionalidade === "argentina" ){
    console.log("nacionalidade encontrada")

}else if (nacionalidade === "uruguaia"){
    console.log("nacionalidade encontrada")

} else if (nacionalidade === "chilena"){
     console.log("nacionalidade encontrada")

} else if (nacionalidade === "colombiana"){
     console.log("nacionalidade encontrada")

} else {
     console.log("nacionalidade não encontrada!")}

//O último `else` deve imprimir "nacionalidade não encontrada" 
//caso o valor de `nacionalidade` não corresponda a nenhum dos valores.