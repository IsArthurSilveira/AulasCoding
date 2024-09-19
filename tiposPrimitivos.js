console.log('Atividade de Coding');

/*Primeiro Quesito*/
var nome = "Arthur";
var idade = 20;
console.log(`1° - Olá, meu nome é ${nome} e tenho ${idade} anos`);

/*Segundo Quesito*/
var nome2 = "Fernando";
var cidade = "Recife";
console.log(`2° - ${nome2} mora na cidade de ${cidade}`);

/*Terceira Quesito*/
var num1 = 3;
var num2 = 17;
let soma = num1+num2;
let sub = num1-num2;
let mult = num1*num2;
let divi= (num1/num2).toFixed(2);
console.log(`3° A) - Somando os numeros : ${num1} e ${num2} temos o número ${soma}`);
console.log(`B) - Subtraindo os numeros : ${num1} e ${num2} temos o número ${sub}`);
console.log(`C) - Multiplicando os numeros : ${num1} e ${num2} temos o número ${mult}`);
console.log(`C) - Dividindo os numeros : ${num1} e ${num2} temos o número ${divi}`);

/*Quarto Quesito*/
var base = 22;
var altura = 34;
let area = ((base*altura)/2).toFixed(2)
console.log(`4° - A área do Triangulo é : ${area}, (com base ${base} e altura ${altura})`);

/*Quinto Quesito*/
var n1 = 9;
var n2 = 5;
var n3 = 7;
let media = (n1+n2+n3)/3;
console.log(`5° - As notas do aluno foram ${n1},${n2},${n3} e a média dele é : ${media}`);

/*Sexto Quesito*/
var produto = 10000;
const valorFinal = produto - ((produto *5)/100);
console.log(`6 ° - Você comprou um Iphone16+ o valor dele é ${produto} reais`+` e `+`você também ganhou um desconto de 5% !! O valor final do iphone fica de ${valorFinal} reais`);

/*Sétimo Quesito*/

/*Oitava Quesito*/

/*Nono Quesito*/
var celsius = 37;
var fahrenheit = ((celsius * 9)/5) + 32;
console.log(`9° - A temperatura é ${celsius}°C, convertendo para Fahrenheit temos ${fahrenheit} °F`);
/*Décimo Quesito*/
var pesoKG = 58;
var alt = 1.70;
const imc = pesoKG / (alt * alt);
const imcFixed = imc.toFixed(2);
console.log(`10° - Altura : ${alt}m, Peso : ${pesoKG}kg , Valor do imc é : ${imcFixed}`);
