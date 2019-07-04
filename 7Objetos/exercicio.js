// Crie um objeto com os seus dados pessoais

var dadosPessoais = {

  nome : 'Rodolfo',
  sobrenome: 'Santos',
  idade: 33 ,
  cidade : 'Rio de Janeiro'

}
 
// Crie um metodo no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

//Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas : 4,
  marca : 'Audi'
}


carro.preco = 3000;


var cachorro = {
  raca : 'labrador',
  cor : 'preto',
  idade : 10,
  latir (pessoa) {
   if(pessoa === 'homem') {
        return 'latir';
   } else {
     return 'nada';
   }
  }
}


