/* SISTEMA DE GASTOS FAMILIARES
  
Crie um objeto que  possuirá 2 propriedades, ambas do tipo array:
- receitas:[]
- despesas:[]

Agora, crie uma função que irá calcular o total de receitas e despesas
e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, 
seguido do valor do saldo

*/

let familia = {
  receitas: [1130, 150, 350],
  despesas: [170, 105, 850]
}

let totalReceita = 0
let totalDespesa = 0

function Calcular() {
  for (let i = 0; i < familia.receitas.length; i++) {
    totalReceita += familia.receitas[i]
  }

  for (let i = 0; i < familia.despesas.length; i++) {
    totalDespesa += familia.despesas[i]
  }

  if (totalReceita > totalDespesa) {
    console.log(
      `Parabéns! seu saldo final é positivo! valor do saldo: ${totalReceita}`
    )
  } else if (totalReceita < totalDespesa) {
    console.log(
      `Opa, seu saldo final foi negativo! valor do prejuizo: ${totalDespesa}`
    )
  } else {
    console.log(`Você não teve saldo negativo nem positivo, resultado neutro`)
  }
}

Calcular()
