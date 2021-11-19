function Pessoa(name) {
  this.name = name
  this.andar = function () {
    return this.name + ' está andando'
  }
}
const pessoa1 = new Pessoa('André')
const pessoa2 = new Pessoa('Ruan')

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa1.andar())
console.log(pessoa2.andar())
