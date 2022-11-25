function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(2));

// Ao criar uma função, você pode definir parâmetros.

// Ao executar uma função, você pode passar argumentos.

function mostraConsole() {
  console.log('Oi');
}

addEventListener('click', mostraConsole);

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Por favor, preencha um número';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));

var totalPaises = 193;

function faltaVisitar(paisesVisitados) {
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}
