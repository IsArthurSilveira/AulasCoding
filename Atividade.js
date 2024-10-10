const prompt=require('prompt-sync')();

// PEGAR O NOME E A IDADE E EXIBIR
let  nome = prompt('Digite seu nome: ');
let idade = parseInt(prompt('Digite sua idade: '));
console.log(`Seu nome é ${nome} e você tem ${idade} anos`);
console.log('Seu nome é :'+nome+' e você tem '+idade+' anos');

// PEGAR NOME E CIDADE
let cidade = prompt('Digite a cidade onde você mora: ');
console.log(`${nome} mora em  ${cidade}`);
console.log(nome + 'mora em '+cidade);

// OPERAÇÕES MATEMÁTICAS
let numero1 = parseInt(prompt('Digite o primeiro número: '));
let numero2 = parseInt(prompt('Digite o segundo número: '));
const soma = numero1+ numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2.toFixed(2);
const divisao = numero1 / numero2.toFixed(2);
console.log(`A soma é ${soma}`);
console.log(`A subtração é ${subtracao}`);
console.log(`A multiplicação é ${multiplicacao}`);
console.log(`A Divisão ${divisao}`);

// Calcular area do triangulo
let base = parseInt(prompt('Digite a base do triângulo: '));
let altura = parseInt(prompt('Digite a altura do triângulo: '));
const area = ((base * altura) / 2).toFixed(2);
console.log(`A base do triangulo é : ${base}`);
console.log(`A altura do triangulo é : ${altura}`);
console.log(`A área do triangulo é : ${area}`);

// Calcular a media de 3 notas
let nota1 = parseInt(prompt('Digite a primeira nota: '));
let nota2 = parseInt(prompt('Digite a segunda nota: '));
let nota3 = parseInt(prompt('Digite a terceira nota: '));
const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
console.log(`A média das notas é : ${media}`);

// PRODUTO COM DESCONTO 
let produto = parseInt(prompt('Digite o valor do produto: '));
const desconto = 0.5;
let valorDesconto = produto * desconto;
let valorFinal = produto - valorDesconto;
console.log(`O desconto é de ${valorDesconto} e o valor final é de ${valorFinal}`);

// Quando voce sabe que vai mudar o valor da variavel, use o let
// Quando voce sabe que não vai mudar o valor da variavel, use o const
// Quando voce não sabe se vai mudar o valor da variavel, use o var

// CALCULAR O IMPOSTO DE RENDA

const salario = 1000;
console.log(`Você está isento de pagar imposto de renda`);

const salario2 = 2500;
const impostoRenda2 = 0.075;
const Deducao1 = 169.44;
const salarioLiquido2 = salario2 * impostoRenda2 - Deducao1;
console.log(`O salario liquido é ${salarioLiquido2}`);

const salario3 = 3500;
const impostoRenda3 = 0.15;
const Deducao3 = 381.44
const salarioLiquido3 = salario3 * impostoRenda3 - Deducao3;
console.log(`O salario liquido é ${salarioLiquido3}`);

const salario4 = 4000;
const impostoRenda4 = 0.225;
const Deducao4 = 662.77
const salarioLiquido4 = salario4 * impostoRenda4 - Deducao4;
console.log(`O salario liquido é ${salarioLiquido4}`);

// Conversor de Moedas
let ValorReal = parseInt(prompt('Digite o valor em reais: '));
const cotacaoDolar = 5.50;
let ValorDolar = ValorReal/cotacaoDolar;
console.log(`O valor em dolar é ${ValorDolar}`);

// dolar em real
let valorDolar2 = parseInt(prompt('Digite o valor em dolar: '));
const cotacaoReal = 5.50;
let valorReal2 = valorDolar2 * cotacaoReal;
console.log(`O valor em real é ${valorReal2}`);

// Conversor de temperatura
let celsius = parseInt(prompt('Digite a temperatura em Celsius: '));
const fahrenheit = ((celsius * 9) / 5) + 32;
console.log(`A temperatura em Fahrenheit é ${fahrenheit}°F`);

// IMC e mostrar o imc
const peso = 70;
const altura2 = 1.75;
const imc = peso / (altura2 * altura2).toFixed(2);
console.log(`O IMC é ${imc}`);

