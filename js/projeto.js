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

//let (baasicamente declarar variavel, ai inves de usar "var")= só funciona dentro da função //
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



      //array (parecido com o vetor)= conjunto de elementos// 
     
    //ex: v[]={3,4,14,2}//     
     
       function array(){

     let n = [3, 4, 5, 6, 2, 1] //variavel que igual ao conjunto de elementos//
     console.log("esse console log mostra o array completo")
     console.log(n)
     console.log("esse console log mostra o primeiro array()")
     console.log(n[0])
     console.log("esse console mostra o undenified, no caso indice 6(inexistente)" +n[6]+" .LEGAL")
  
//para ver o indice va ao console e digite array dps clique na seta do array//
//se aparecer undenified, alguma coisa deu errado//   
      n[6] = "7"
      console.log("esse console mostra o undenified, no caso indice 6(inexistente)" +n[6])
     console.log("esse mostra o array completo")
     console.log(n)
    n.push(50)//variavel.push (valor)//
    n.push(32)
    n.push(33)
    console.log("esse mostra o array completo")
    console.log(n)
   //estudar os n.//
   n.pop()
   console.log("esse mostra o array completo")
    console.log(n)
//n.push() e n.pop()//
//ex push(1,2,3,7) adciona numeros em uma pilha 7,1,2,3//
//pop ele tira o ultimo valor da pilha //
//splice() remove um numero da pilha, o lugar onde o valor estava ficara 






}


function objeto(){
    let carrinho_de_compras = []
   // let nome= "arroz"//
    //let preco = 9.99//
    //let marca = "tio joão"//
    //quero juntar tudo em um so, transformamos em objeto//
    let produto = {

         nome_prod: "arroz",
         preco_prod: 9.99,
         marca_prod: "tio joão"

    }

    carrinho_de_compras.push(produto);
   
    let produto2 = {

        nome_prod: "feijão",
        preco_prod: 7.35,
        marca_prod: "namorado"

   }



   carrinho_de_compras.push(produto2);


   
     console.log(carrinho_de_compras)
     console.log(carrinho_de_compras[0])
    }