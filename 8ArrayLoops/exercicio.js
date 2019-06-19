


// Crie um array com os anos que o Brasil foi campeao 
// 1959, 1962, 1970, 1994, 2002

var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com um array utilizando um loop, para mostrar no console 
// a mensagem, 'O Brasil ganhou a copa de ${ano}'

brasilCampeao.forEach(function(ano){
console.log(`Brasil ganhou a copa de ${ano}`);
});


// interaja com o loop abaixo e pare  quando chegar em pera

var frutas = ['Banana','Maça','Pera','Uva','Melancia'];


for(var i = 0; i < frutas.length; i++){

  console.log(frutas[i]);
  if (frutas[i] ==='Pera' ) {
    break;
  }
}

// coloque a ultima fruta do array em uma variavel 
var ultimaFruta  =  frutas[frutas.length - 1];
 console.log(ultimaFruta);