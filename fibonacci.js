let numeroAtual = 1;
let numeroAnterior = 0;
let numeroTemp;

numeroInformado = 900;

let tentativas = 1;

for (i = 0; i <= tentativas; i++) {
  console.log(numeroAtual);
  numeroTemp = numeroAtual;
  numeroAtual = numeroAtual + numeroAnterior;
  numeroAnterior = numeroTemp;

  if (numeroAtual == numeroInformado){
    break
  }else if (numeroAtual > numeroInformado){
    break
  }else{
    tentativas++;
  }
}  

if (numeroAtual == numeroInformado){
  console.log(`O numero informado faz parte da sequencia de Fibonacci: ${numeroAtual}.`);
}else{
  console.log("o numero informado não faz parte da sequencia de fibonacci.");
}