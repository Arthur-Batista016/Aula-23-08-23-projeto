//function <<nome da função>> (){}
//
//dommodol//




function login(){
     var email = document.getElementById("frmemail").value //mostra o valor no console//
    var password = document.getElementById("frmpassword").value
    console.log(email)
console.log(password)

if(email == "login" && password == "123456" ) {
    alert("login realizado com sucesso")
}
else{alert("login incorreto")}

}



function somar(){

    var n1 = parseInt(prompt("digite um numero"))//para converter para int 'parse int' e o oq vc deseja//
 var n2 = parseInt(prompt("digite o segundo numero"))
console.log(typeof(n1))//console.log(typeof()) devolve o tipo de varivael//
console.log(typeof(n2)) 

var resultado = n1 + n2

console.log(resultado)
//abre o console e mostra algo//

//tipos int double e float//

//tipos de var ?? boolean true false//


}



function subtrair(){

    var n1 = parseInt(prompt("digite um numero"))
 var n2 = parseInt(prompt("digite o segundo numero"))
console.log(typeof(n1))
console.log(typeof(n2)) 
var resultado = n1 - n2

console.log(resultado)







}


function multiplicar(){

    var n1 = parseInt(prompt("digite um numero"))
 var n2 = parseInt(prompt("digite o segundo numero"))
console.log(typeof(n1))
console.log(typeof(n2)) 
var resultado = n1 * n2

console.log(resultado)







}


function dividir(){

    var n1 = parseInt(prompt("digite um numero"))
 var n2 = parseInt(prompt("digite o segundo numero"))
console.log(typeof(n1))
console.log(typeof(n2)) 

if(n2==0){

console.log('não é possivel dividir por zero')

return


}



var resultado = n1 / n2

console.log(resultado)






}


function quadrado(){

    var n1 = parseInt(prompt("digite um numero"))
console.log(typeof(n1))
var resultado = (n1*n1)

console.log(resultado)







}




function cubo(){

    var n1 = parseInt(prompt("digite um numero"))
console.log(typeof(n1))
var resultado = (n1*n1*n1)

console.log(resultado)



}


function raiz(){

    var n1 = parseInt(prompt("digite um numero"))
console.log(typeof(n1))
var resultado = (Math.sqrt(n1))//raiz quadrada

console.log(resultado)

}




function raiz3(){

    var n1 = parseInt(prompt("digite um numero"))
console.log(typeof(n1))
var resultado = Math.pow(n1, 1/3);//calcula a raiz cubica usando exponenciacao//

console.log(resultado)

}







///fazer o elevado///



//var=________// //nao usamos mais!!!//

//let = só funciona dentro da função //
//ou//
//const = constante, o valor nao pode ser alterado, usar quando nao for alterar valores//


//getelementbyid: pega o elemento pelo id//



function groselia(){

    const nome = document.getElementById("frmNOME").value     ///valor///
    console.log(nome)
    document.getElementById("exibenome").innerHTML= nome
    
}
  

function listar(){
    
    let produto = document.getElementById("frmproduto").value 
  let li = document.createElement("li")
    
  li.innerHTML = produto

  document.getElementById("produto").appendChild(li)

  console.log(produto)


}


//var = variavel//
 //maniupular o DOM
 //document object model//


 
     //inner html/// // estudar, tudo q estiver dentro de uma tag pode ser alterada///




     ///criar uma função que adicione, em uma lista, um nome de um produto///



     //array =  let[]/////