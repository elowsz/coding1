var nome = "eloisa";
var idade = "18";
console.log (`olá, meu nome é ${nome} e tenho ${idade} anos`)

var nome1 = "eloisa";
var cidade = "recife";
console.log (`${nome1} é de ${cidade}`)

let num1 = 1000;
let num2 = 2;
console.log (`soma = ${num1 + num2}`)

console.log (`"subtração" = ${num1 - num2}`)

console.log (`"multiplicação" = ${num1 * num2}`)

console.log (`"divisão" = ${num1 / num2}`)

let base = 20;
let altura = 10;
let area = (base * altura) / 2;
console.log("a área do triângulo é " + area);

let nota1 = 8;
let nota2 = 7;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;
console.log(`"o resultado da média é" ${media}`)

let precoOriginal = 100;
let percentualDesconto = 50;
let valorDesconto = (precoOriginal * percentualDesconto) / 100;
let precoFinal = precoOriginal - valorDesconto;
console.log (`o valor final do produto com ${percentualDesconto}% de desconto é R$ ${precoFinal}`);

let salariobruto = 5000;
let aliquota = 15;
let descontoAliquota = (salariobruto * aliquota) / 100;
let salariofinal = salariobruto - descontoAliquota;
console.log (`o salário liquido é ${salariofinal} e o imposto de renda é 750R$`);

let valorEmReal = 1000;
let taxaDeCambioUSD = 0.20;
let valorEmDolar = valorEmReal * taxaDeCambioUSD;
console.log(`o valor de ${valorEmReal} em doláres é: ${valorEmDolar}$`)

let celsius = 30;
let valorFahrenheit = (celsius * 9/5) + 32;
console.log(`o valor de ${celsius}°C em fahrenheit é: ${valorFahrenheit}°F`);

let peso = 78;
let altura1 = 1.64;
let IMC = peso / (altura1 * altura1);
let IMCformatado = IMC.toFixed(2);
console.log(`o IMC de quem tem 1.64 e pesa 78 kg é ${IMCformatado}`)

