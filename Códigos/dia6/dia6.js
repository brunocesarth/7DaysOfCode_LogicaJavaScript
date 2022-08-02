let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let addItem = "Sim";
let item;
let categoria;
let removeItem;
let posicao;

while (addItem != "Não" || addItem != "Não") {
    addItem = prompt("Deseja adicionar ou remover uma comida na sua lista de compras? Responda: 'Sim' ou 'Não', para adicionar ou responda 'Remover' para remover");
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
            ` Frutas: ${frutas}\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`
        )
    } else if (addItem == "Remover" || addItem == "remover") {
        removeItem = prompt(
            ` Frutas: ${frutas}\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`
        );

        if (frutas.includes(removeItem)) {
            posicao = frutas.indexOf(removeItem);
            frutas.splice(frutas.indexOf(posicao), 1);
            alert(
                ` Frutas: ${frutas}\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`
            );
        } else if (laticinios.includes(removeItem)) {
            posicao = laticinios.includes(removeItem);
            laticinios.splice(laticinios.indexOf(posicao), 1);
            alert(
                ` Frutas: ${frutas}\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`
            );
        } else if (congelados.includes(removeItem)) {
            posicao = congelados.indexOf(removeItem);
            congelados.splice(congelados.indexOf(posicao), 1);
            alert(
                ` Frutas: ${frutas}\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`
            );
        } else if (doces.includes(removeItem)) {
            posicao = doces.indexOf(removeItem);
            doces.splice(doces.indexOf(posicao), 1);
            alert(
                ` Frutas: ${frutas}\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`
            );
        } else {
            alert("O item não existe na lista");
            alert(
                ` Frutas: ${frutas}\n Laticinios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`
            );
        }
    }
}
