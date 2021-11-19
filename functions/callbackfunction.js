//callback function
function MyName(name) {
  console.log('antes da calback')
  name()
  console.log('apos a calback')
}

//passando uma função de arrow function para dentro da função:
MyName(() => {
  console.log('estou em uma  callback')
})
