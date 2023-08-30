var anoNascimento =prompt("informe seu ano de nascimento");

while(anoNascimento >=2023){
   alert("informe seu ano  de nascimento corretamente")
anoNascimento =prompt("informe seu ano de nascimento!");
}


var anoAtual = prompt("qual é o nome atual?")

var idadeFinal= anoNascimento-anoAtual;

alert("idade é "+idadeFinal);

var primeiroNumero = prompt("informe o primeiro número");
var sinal = prompt("informe o sinal da sua conta");

while(sinal!='-'&&sinal!='+'&&sinal!='/'&&sianl!='*'){
  alert("por favor informe um sinal valido")
  var sinal = prompt("informe o sinal da sua conta");
}  

primeiroNumero=parseInt('primeiroNumero');
segundoNumero=parseInt('segundoNumero');

var segundoNumero= prompt("informe o segundo numero");

var resultadoFinal=0;
if(sinal=='+'){
resultadoFinal=primeiroNumero+segundoNumero;  
}else if(sinal =='-'){
  primeiroNumero-segundoNumero;
}else if(sinal =='/')
{}
  resultadoFinal= primeiroNumero/segundoNumero;

else if(sinal =='*'){
  resultadoFinal=primeiroNumero*segundoNumero;}
alert('o resultado final é'+resultadoFinal);








