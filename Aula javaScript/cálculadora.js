var numeroInicial = prompt('informe o primeiro número...');

var sinal = prompt('informe o sinal da sua operação...');

while(sinal != '-' && sinal != '+' && sinal != '/' && sinal != '*'){
    alert('Por favor informe um sinal válido!');
     sinal = prompt('informe o sinal da sua operação...');
}


var numeroFinal = prompt('informe o número final...');

//Funções para converter para número uma string.

numeroInicial = parseInt(numeroInicial);
numeroFinal = parseInt(numeroFinal);

var resultadoFinal = 0;

if(sinal == '+'){
    resultadoFinal = numeroInicial + numeroFinal;
}else if(sinal == '-'){
    resultadoFinal = numeroInicial - numeroFinal;
}else if(sinal == '/'){
    resultadoFinal = numeroInicial / numeroFinal;
}else if(sinal == '*'){
    resultadoFinal = numeroInicial * numeroFinal;
}

alert('o resultado final é: '+ resultadoFinal);