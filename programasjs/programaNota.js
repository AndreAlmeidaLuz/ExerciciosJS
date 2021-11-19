/*CRIE UM ALGORITMO QUE TRANSFORME as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* 90 para cima  - A
* Entre 80 e 89 - B
* Entre 70 e 79 - C
* Entre 60 e 69 - D
* Menor que 60 - f

*/

function Calculo(nota) {
  if (nota >= 90 && nota <= 100) {
    nota = 'A'
    console.log(nota)
  } else if (nota >= 80 && nota <= 89) {
    nota = 'B'
    console.log(nota)
  } else if (nota >= 70 && nota <= 79) {
    nota = 'C'
    console.log(nota)
  } else if (nota >= 60 && nota <= 69) {
    nota = 'D'
    console.log(nota)
  } else if (nota <= 60) {
    nota = 'F'
    console.log(nota)
  } else {
    console.log('Nota invalida!')
  }
}

Calculo(90)
Calculo(80)
Calculo(70)
Calculo(60)
Calculo(50)
Calculo(1001)
