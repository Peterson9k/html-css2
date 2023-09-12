function teste(){

const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const resultado = document.querySelector('#resultado');
const aoQuadrado = document.querySelector('#aoQuadrado')
const resultado2 = document.querySelector('#resultado2')
input1.addEventListener('input', atualizarResultado);
input2.addEventListener('input', atualizarResultado);

function atualizarResultado() {
  const valor1 = Number(input1.value * aoQuadrado.value);
  const total2 = valor1
  resultado2.textContent = total2
  const valor2 = Number(input2.value);
  const total = valor1 * valor2;
  resultado.textContent = total;
} }teste()
 