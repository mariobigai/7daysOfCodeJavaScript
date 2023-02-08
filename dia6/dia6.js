let hortifruti = [];
let laticinios = [];
let congelados = [];
let mercearia = [];
let padaria = [];
let acougue = [];
let outros = [];

while (true) {
    pergunta1 = prompt("Deseja adicionar uma comida a sua lista de compras? R: sim ou não\nVocê deseja excluir algum item da lista? Se sim, digite o item\n" + `Lista de compras:\nHortifruti: ${hortifruti}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nMercearia: ${mercearia}\nPadaria: ${padaria}\nAçougue: ${acougue}\nOutros: ${outros}`);
   
    if(pergunta1 == "sim"){
        pergunta2 = prompt("Qual comida deseja inserir?");

        pergunta3 = prompt("Em qual categoria se encaixa essa comida: hortifruti, laticínios, congelados, mercearia, padaria, açougue?");

        if (pergunta3 == "hortifruti") {
            hortifruti.push(pergunta2)
        }
        else if (pergunta3 == "laticínios") {
            laticinios.push(pergunta2)
        }
        else if (pergunta3 == "congelados") {
            congelados.push(pergunta2)
        }
        else if (pergunta3 == "mercearia") {
            mercearia.push(pergunta2)
        }
        else if (pergunta3 == "padaria") {
            padaria.push(pergunta2)
        }
        else if (pergunta3 == "açougue") {
            acougue.push(pergunta2)
        }
        else {
            outros.push(pergunta2)
        }
    }
    else if (pergunta1 == "não")  {
        break;
    }
    else {
        if (hortifruti.includes(pergunta1)) {
            hortifruti.splice(hortifruti.indexOf(pergunta1))
        }
        else if (laticinios.includes(pergunta1)) {
            laticinios.splice(laticinios.indexOf(pergunta1))
        }
        else if (congelados.includes(pergunta1)) {
            congelados.splice(congelados.indexOf(pergunta1))
        }
        else if (mercearia.includes(pergunta1)) {
            mercearia.splice(mercearia.indexOf(pergunta1))
        }
        else if (padaria.includes(pergunta1)) {
            padaria.splice(padaria.indexOf(pergunta1))
        }
        else if (acougue.includes(pergunta1)) {
            acougue.splice(acougue.indexOf(pergunta1))
        }
        else if (outros.includes(pergunta1)) {
            outros.splice(outros.indexOf(pergunta1))
        }
        else {
            alert("Não foi possível encontrar o item dentro da lista!")
        }
    }
}
alert(`Lista de compras:\nHortifruti: ${hortifruti}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nMercearia: ${mercearia}\nPadaria: ${padaria}\nAçougue: ${acougue}\nOutros: ${outros}`)
