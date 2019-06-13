// Crie um objeto com os seus dados pessoais

var dadosPessoais = {

  nome : 'Rodolfo',
  sobrenome: 'Santos',
  idade: 33 ,
  cidade : 'Rio de Janeiro'

}
 
// Crie um metodo no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomeCompleto = function() {
  return `${nome} ${sobrenome}`;
}