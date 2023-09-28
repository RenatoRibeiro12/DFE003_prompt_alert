// Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.

const numero = prompt("Informe um Numero: ");
const dobro = numero * 2;
alert("o numero informado foi: "+ dobro);

//Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom. 

const valorConta = prompt("informe o valor do Jantar: ");
const valorContaFormatado = parseInt(valorConta);
const taxaAtendimento = 0.05;
const valorTotalJantar = (valorContaFormatado * taxaAtendimento) + valorContaFormatado;
alert("o valor total do jantar é R$ "+valorTotalJantar);

//Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente. 

const valorTotalConta = prompt("Qual valor total da conta R$?");
const valorTotalContaFormatado = parseInt(valorTotalConta);
const amigos = prompt("Quantos amigos vão pagar a conta ?");
const amigosFormatado = parseInt(amigos);
const divisao = valorTotalContaFormatado / amigosFormatado;
alert("o valor a ser pago por cada amigo é de: R$"+ divisao+" Reais");
