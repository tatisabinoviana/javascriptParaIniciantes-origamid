// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 34;
var idadeCarlinhos = 38;
var idadeUilma = 34;
var idadeDani = 29;

// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
if (minhaIdade > idadeUilma) {
  console.log('É maior');
} else if (minhaIdade < idadeUilma) {
  console.log('É menor');
} else if (minhaIdade === idadeUilma) {
  console.log('É igual');
} else {
  console.log('Deu erro');
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - ' ' && 5 - 2;
// 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log('Brasil maior que a China');
} else if (brasil < china) {
  console.log('Brasil menor que a China');
} else if (brasil === china) {
  console.log('Brasil igual a China');
} else {
  console.log('Deu errado, nem brasil nem china');
}

// O que irá aparecer no console?
if ('Gato' === 'gato' && 5 > 2) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if ('Gato' === 'gato' || 5 > 2) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
