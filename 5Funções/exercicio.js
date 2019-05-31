//Crie uma função para verificar se um vaor é thruthy 

function isThruthy(dado) {
    return !!dado; // basta utilizar o operador 
}


// Crie uma função matemática que retorne o perímetro do quadrado 

function isEven() {

  var  modulo = numero % 2;

  if (modulo === 0) {
   return true;
  } else {
      return false;
  }

}

// Crie uma função que retorne o tipo de dado passado no argumento

function tipoDeDado(dado) {
   return typeof dado;
}


// addEventListener é uma função nativa do JavaScript o primeiro parametro é o evento 
// que ocorre e o segundo o callback, utilize essa função para mostrar no console o seu nome
// completo quando o evento 'scroll' ocorrer

addEventListener('scroll', function(){
    console.log('Rodolfo Santos');
})  
