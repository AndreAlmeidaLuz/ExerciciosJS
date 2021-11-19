//transformando string em numero
let texto = '123'
console.log(Number(texto))
//transformando numero em String
let numero = 321
console.log(String(numero))

//---------------------------------------------------------------------

//contar quantos caracteres tem uma palavras
let word = 'paralelepipedo'
console.log(word.length)
// contar quantos digitos tem um numero
let number = '012345'
console.log(String(number).length)

//-----------------------------------------------------------------------

//transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula
let valor = 195.3400001238
console.log(valor.toFixed(2).replace('.', ','))

//------------------------------------------------------------------------------

//Transforme letras minusculas em maiusculas
let palavra = 'Programar é bom'
console.log(palavra.toUpperCase())
//Transforme letras maiusculas em minusculas
console.log(palavra.toLowerCase())

//-------------------------------------------------------------------------------

//Separe um texto que contenha espaço em um novo array onde cada texto é uma posição do array
let frase = 'Eu quero viver o amor'
let array = frase.split(' ')
console.log(array)
//Transforme o array em um texto onde eram espaço agora será _'
console.log(array.join('_'))

//---------------------------------------------------------------------------------

//Verificar se no texto possui a palavra Amor
let phrase = 'Eu quero viver o '
console.log(phrase.includes('amor'))

//----------------------------------------------------------------------------------

//Criar array com construtor
let myVector = new Array('a', 'b', 'c')
console.log(myVector)

//------------------------------------------------------------------------------------

//Contar qts elementos possui no array
console.log(['a', 'b', 'c'].length)

//------------------------------------------------------------------------------------

//Transformar uma cadeida de caracteres em elementos de um array
let text = 'manipulacao'
console.log(Array.from(text))

//--------------------------------------------------------------------------------------
let techs = ['html', 'css', 'javascript']
//adicionar um item do array no fim
techs.push('nodejs')
//adicionar no começo
techs.unshift('sql')
//remover do fim
techs.pop()
//remover do começo
techs.shift()
//pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))
//remover um ou mais itens em qualquer posição do array
techs.splice(1, 2)
//encontrar a posição de um elemento do array
let index = techs.indexOf('css')

console.log(techs)
