function inverterString(string){
  let stringArray = '';
  for (i = string.length - 1; i >= 0; i--){
    stringArray += string[i]; //percorre a string de tras para frente redefinido ela.
  }
  return stringArray //retorna o resultado
}

let nome = 'Lucas Lessa Gomes';
let nomeInvertido = inverterString(nome);
console.log(nomeInvertido);