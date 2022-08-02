let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let addItem = "Sim";
let item;
let categoria;

while (addItem == "Sim" || addItem == "sim") {
    addItem = prompt("Deseja adicionar uma comida na sua lista de compras? Responda: Sim ou Não");
    if (addItem == "Sim" || addItem == "sim") {
        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa? frutas, laticínios, congelados, doces");
        if (categoria == "Frutas" || categoria == "frutas") {
            frutas.push(comida)
        } else if (categoria == "Laticinios" || categoria == "laticinios") {
            laticinios.push(comida);
        } else if (categoria == "Congelados" || categoria == "congelados") {
            congelados.push(comida);
        } else if (categoria == "Doces" || categoria == "doces") {
            doces.push(comida);
        }
    } else if (addItem == "Não" || addItem == "não") {
        alert(
            `Frutas: ${frutas}
            Laticinios: ${laticinios}
            Congelados: ${congelados}
            Doces: ${doces}`
        );
    }
}