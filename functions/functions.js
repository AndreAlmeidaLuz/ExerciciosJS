//criar app de frases motivacionais

//declaração da funcão
function CreateFrases() {
  console.log('Estudar é bom')
  console.log('Paciência e persistencia')
  console.log('Revisão é a mãe do aprendizado')
}

//executar função
CreateFrases()

//----------------functions anonymous-----------------------

//parametros
const sum = function (number1, number2) {
  let total = number1 + number2
  return total
}

let number1 = 10
let number2 = 11

console.log(`A soma é ${sum(number1, number2)}`)
