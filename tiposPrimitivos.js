const PromptSync = require("prompt-sync");
const prompt = require("prompt-sync")();

console.log('Atividade de Coding');
// 1 questão
console.log('Vamos começar fazendo seu cadastro');
const nome = prompt("Digite seu nome : ");
const idade = parseInt(prompt("Digite sua idade : "));
console.log(`Seu nome é ${nome} e você tem ${idade} anos`);
// 2 questão
let cidade = prompt("Digite a cidade onde você mora: ");
console.log(` ${nome} mora na cidade de ${cidade}`);
// 3  questão
console.log("Agora vamos fazer algumas operações matemáticas");
let num1 = parseFloat(prompt("Digite um numero : "));
let num2 = parseFloat(prompt ("Digite outro numero : "));
const soma = num1+num2;
const sub = num1-num2;
const mult = num1*num2;
const divi= (num1/num2).toFixed(2);
console.log(`3° A) - Somando os numeros : ${num1} e ${num2} temos o número ${soma}`);
console.log(`B) - Subtraindo os numeros : ${num1} e ${num2} temos o número ${sub}`);
console.log(`C) - Multiplicando os numeros : ${num1} e ${num2} temos o número ${mult}`);
console.log(`C) - Dividindo os numeros : ${num1} e ${num2} temos o número ${divi}`);
// 4 questão
console.log("Agora vamos calcular a área de um Triangulo");
let base = parseFloat(prompt("Digite o valor da base do Triangulo : "));
let altura = parseFloat(prompt("Digite o valor da altura do Triangulo : "));
const area = ((base*altura)/2).toFixed(2)
console.log(`A área do Triangulo é : ${area}, (com base ${base} e altura ${altura})`);
// 5 questão
console.log("Agora vamos calcular a sua média como aluno");
while(true){
    let n1 = parseFloat(prompt("Digite a primeira nota : "));
    let n2 = parseFloat(prompt("Digite a segunda nota : "));
    let n3 = parseFloat(prompt("Digite a terceira nota : "));
    if(n1>10 || n2>10 || n3>10){
        console.log("Digite notas válidas, de 0 a 10");
    }else{
        let media = ((n1+n2+n3)/3).toFixed(2);
        console.log(`As notas do aluno foram ${n1},${n2},${n3} e a média dele é : ${media}`);
        if(media>=7){console.log("Você foi aprovado");}
        else{console.log("Você foi reprovado, pois a média é menor que 7");}
        break;
    }
}
// 6 questão
let produto = parseFloat(prompt("Digite o valor do produto : "));
let desconto = 0.2;
const  valorDesconto = produto * desconto;
const  valorFinal = produto - valorDesconto;
console.log(`O valor do desconto é R$${valorDesconto} e o valor final do produto é R$${valorFinal}`);
// 7 questão
console.log("Vamos calcular o seu imposto de renda");
let salario = parseFloat(prompt("Digite o valor do seu salário : "));
let ir = 0;
if(salario<=1903.98){
    console.log("Você está isento de pagar imposto de renda");
}
else if(salario<=2826.65){
    ir = (salario*0.075)-142.80;
    console.log(`Você deve pagar R$${ir} de imposto de renda`);
}
else if(salario<=3751.05){
    ir = (salario*0.15)-354.80;
    console.log(`Você deve pagar R$${ir} de imposto de renda`);
}
else if(salario<=4664.68){
    ir = (salario*0.225)-636.13;
    console.log(`Você deve pagar R$${ir} de imposto de renda`);
}
else{
    ir = (salario*0.275)-869.36;
    console.log(`Você deve pagar R$${ir} de imposto de renda`);
}
// 8 questão
let valorDolar = parseFloat(prompt("Digite o valor em dólar : "));
let cotacao = 5.25;
let valorReal = valorDolar * cotacao;
console.log(`O valor em dólar é $${valorDolar} e convertendo para real temos R$${valorReal}`);
// 9 questão
var celsius = 37;
var fahrenheit = ((celsius * 9)/5) + 32;
console.log(`9° - A temperatura é ${celsius}°C, convertendo para Fahrenheit temos ${fahrenheit} °F`);
// 10 questão
var pesoKG = 58;
var alt = 1.70;
const imc = pesoKG / (alt * alt);
const imcFixed = imc.toFixed(2);
console.log(`10° - Altura : ${alt}m, Peso : ${pesoKG}kg , Valor do imc é : ${imcFixed}`);