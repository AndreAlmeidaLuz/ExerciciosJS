// 01- Declare uma variavel de nome weight
//let weight

//02 - Que tipo de dado é a variável acima?
//console.log(typeof weight)

/* 03- Declare uma variável e atribua valores para cada um dos dados:
   - name:String
   - age: Number
   - starts: Number(Float)
   - isSubscribed: Boolean
*/
//let name = 'André'
//let age = 23
//let starts = 4.8
//let isSubscribed = true

//04 A variavel abaixo é de que tipo de dado?
//let student =
//R: Objeto

//4.1 Atribua a ela as mesmas propriedade e valores do exercicio 3.

let student = {
  name: 'André',
  age: 23,
  weight: 82,
  isSubscribed: true
}

//console.log(
// `${sudent.name} de idade ${sudent.age} pesa aproximadamente ${sudent.weight} Quilos`
//)

//----------vetores --------------//
let students = []

students = [student]
//console.log(students)

//coloque no console log o valor da posição 0 do vetor
//console.log(students[0])

//criando outro objeto estudante

let Andreus = {
  name: 'Meloso',
  age: 21,
  weight: 76,
  isSubscribed: true
}
//adicionando no array
students = [student, Andreus]

console.log(students)
