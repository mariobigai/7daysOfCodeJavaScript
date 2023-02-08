let hortifruti = [];
let laticinios = [];
let congelados = [];
let mercearia = [];
let padaria = [];
let acougue = [];
let outros = [];

while (true) {
    pergunta1 = prompt("Deseja adicionar uma comida a sua lista de compras? R: sim ou não");
    
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
        alert("Resposta inválida!")
    }
}

alert(`Lista de compras:\n      Hortifruti: ${hortifruti}\n     Laticínios: ${laticinios}\n     Congelados: ${congelados}\n     Mercearia: ${mercearia}\n       Padaria: ${padaria}\n       Açougue: ${acougue}\n       Outros: ${outros}`)
