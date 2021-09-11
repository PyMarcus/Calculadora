function hi(){
  document.getElementById("visor").value = "Olá, amigo"
  setTimeout(() => {
    document.getElementById("visor").value = "0"

  }, 3000);
}
var vetor = []


function clicks(escolha){
    boleano = true
      setTimeout(() => {}, 1);
        if(escolha == "c"){
          document.getElementById("visor").value = '0'
          for(i = 0; i <= vetor.length + 1; i++){
            vetor.pop()
          }
        }
        if(escolha == "soma"){
          document.getElementById("visor").value += " + "
          vetor.push('+')

        }
        if(escolha == "divisao"){
          document.getElementById("visor").value += " / "
          vetor.push('/')

        }
        if(escolha == "x"){
          document.getElementById("visor").value += " x "
          vetor.push('x')

        }
        if(escolha == "7"){
          document.getElementById("visor").value += "7"
          vetor.push('7')

        }
        if(escolha == "8"){
          document.getElementById("visor").value += "8"
          vetor.push('8')

        }
        if(escolha == "9"){
          document.getElementById("visor").value += "9"
          vetor.push('9')

        }
        if(escolha == "-"){
          document.getElementById("visor").value += " - "
          vetor.push('-')

        }
        if(escolha == "4"){
          document.getElementById("visor").value += "4"
          vetor.push('4')

        }
        if(escolha == "5"){
          document.getElementById("visor").value += "5"
          vetor.push('5')

        }
        if(escolha == "6"){
          document.getElementById("visor").value += "6"
          vetor.push('6')
        }
        if(escolha == "1"){
          document.getElementById("visor").value += "1"
          vetor.push('1')

        }
        if(escolha == "2"){
          document.getElementById("visor").value += "2"
          vetor.push('2')

        }
        if(escolha == "3"){
          document.getElementById("visor").value += "3"
          vetor.push('3')

        }
        if(escolha == "="){
          document.getElementById("visor").value += " = "
          calculo()
        }
        if(escolha == "0"){
          document.getElementById("visor").value += "0"
          vetor.push('0')

        }
        if(escolha == "."){
          setTimeout(() => {}, 1);
          document.getElementById("visor").value += "."
          vetor.push('.')
        }



}
function calculo(){
  console.log(vetor)
  i = 0
  k = vetor.length - 1
  var contaMais = '';
  var contaMais2 = '';
  var soma;
  contasoma = 0
  //----------------------------soma---------------------------
  for(j = 0; j < vetor.length; j++){
    if(vetor[j] == '+'){
      contasoma ++
    }
  }
  if(contasoma >= 1){
    while(vetor[i] != '+'){
      contaMais += vetor[i]
      i++
    }
    while(vetor[k] != '+'){
      contaMais2 += vetor[k]
      k--
    }
    console.log(contaMais)
    console.log(contaMais2)
    soma = parseFloat(contaMais) + parseFloat(contaMais2)
    console.log(soma)
    document.getElementById('visor').value = soma
  }
  contasoma = 0
//-------------------------------------------------------------

 //----------------------------subtração---------------------------
 for(j = 0; j < vetor.length; j++){
  if(vetor[j] == '-'){
    contasoma ++
  }
}
if(contasoma >= 1){
  while(vetor[i] != '-'){
    contaMais += vetor[i]
    i++
  }
  while(vetor[k] != '-'){
    contaMais2 += vetor[k]
    k--
  }
  console.log(contaMais)
  console.log(contaMais2)
  soma = parseFloat(contaMais) - parseFloat(contaMais2)
  console.log(soma)
  document.getElementById('visor').value = soma
}
//-------------------------------------------------------------
 contasoma = 0
 //----------------------------multiplicação---------------------------
 for(j = 0; j < vetor.length; j++){
  if(vetor[j] == 'x'){
    contasoma ++
  }
}
if(contasoma >= 1){
  while(vetor[i] != 'x'){
    contaMais += vetor[i]
    i++
  }
  while(vetor[k] != 'x'){
    contaMais2 += vetor[k]
    k--
  }
  console.log(contaMais)
  console.log(contaMais2)
  soma = parseFloat(contaMais) * parseFloat(contaMais2)
  console.log(soma)
  document.getElementById('visor').value = soma
}
//-------------------------------------------------------------

contasoma =0
 //----------------------------divisão---------------------------
 for(j = 0; j < vetor.length; j++){
  if(vetor[j] == '/'){
    contasoma ++
  }
}
if(contasoma >= 1){
  while(vetor[i] != '/'){
    contaMais += vetor[i]
    i++
  }
  while(vetor[k] != '/'){
    contaMais2 += vetor[k]
    k--
  }
  console.log(contaMais)
  console.log(contaMais2)
  soma = parseFloat(contaMais) / parseFloat(contaMais2)
  console.log(soma)
  document.getElementById('visor').value = soma
}
//-------------------------------------------------------------
contasoma=0

}

