var nome = 'Rodolfo';
var idade = 33;
var possuiFaculdade = true;


var preco = 5;
var totalComprado = 5;
var totalPreco = totalComprado * preco;


var sobrenome = 'Luiz' , cidade = 'Rio de Janeiro';

console.log(nome,idade, possuiFaculdade, totalPreco);
console.log(sobrenome, cidade);

// Hoisting

console.log('Indefinido por conta do Hoisting: ' +  nameHoisting);
var nameHoisting = 'Guilherme';

var nameHoisting2 = 'Atribuiu valor';
console.log('Atribuiu valor por conta do hoisting: ' + nameHoisting2);