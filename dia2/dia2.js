const nome = prompt("Qual é o seu nome ?");
const idade = prompt("Quantos anos você tem ?");
const linguagem = prompt("Qual linguagem de programação você está estudando ?");

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`

alert(msg);

const resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (resposta == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
} 
else if (resposta == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
} 
else {
    alert("Resposta inválida")
}
