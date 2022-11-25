var possuiGraduacao = true;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log('É verdadeiro');
  var x = 10;
  console.log(x);
} else if (possuiDoutorado) {
  console.log('Possui doutorado');
} else {
  console.log('não possui nada');
}

var nome = '10kg' / 10;

if (nome) {
  console.log(nome);
} else {
  console.log('Nome não existe');
}

if (!!possuiGraduacao) {
  console.log('Não possui graduação');
}

var x = '10';
console.log(x !== 10);
