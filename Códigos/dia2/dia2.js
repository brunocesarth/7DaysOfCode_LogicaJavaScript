const nome = prompt("Qual seu nome?");
const idade = prompt("Quantos anos você tem?");
const lingProg = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${lingProg}`);

const alternativa = prompt(`Você gosta de estudar ${lingProg}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if (alternativa == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.');
} else if (alternativa == 2) {
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
} else {
    alert('Sua resposta está fora do solicitado, até logo!');
};
