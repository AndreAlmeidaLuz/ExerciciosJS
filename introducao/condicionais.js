//------------switch-----------

let expression
switch (expression) {
  case 'a':
    //codigo
    break
  case 'b':
    //codigo
    break
  default:
    break
}
//----------------------------------

//throw
function MeuNome(name = '') {
  if (name === '') {
    throw new Error('Nome é necessário')
  }

  console.log('depois do erro')
}
try {
  MeuNome()
} catch (e) {
  console.log(e)
}
//try..catch
