function clicar(numero){
var num =document.getElementById('telaC').innerHTML
document.getElementById('telaC').innerHTML=num + numero
}

function limpar(){
    document.getElementById('telaC').innerHTML="";
}

function apagar(){
     var resultado =document.getElementById('telaC').innerHTML;
     document.getElementById('telaC').innerHTML= resultado.substring(0,resultado.length -1);
}

function calcular(){
    var igual=document.getElementById('telaC').innerHTML;
    if(igual){
    document.getElementById('telaC').innerHTML=eval(igual);
    }

}