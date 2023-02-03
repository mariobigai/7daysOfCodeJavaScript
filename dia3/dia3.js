// apresentação
const nome = prompt("Qual é o seu nome ?");
const idade = prompt("Quantos anos você tem ?");
const linguagem = prompt("Qual linguagem de programação você está estudando ?");

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`

alert(msg);
// fim da apresentação

let area;
let escolha;
let carreira;
let tecnologias = [];

// definição de area e escolha

let loop1 = true;
let loop2 = true;

while (loop1) {
    // área (FRONT-END ou BACK-END)
    let resposta2 = prompt(`${nome}, qual área você pretende seguir? Responda com o número 1 para FRONT-END ou 2 para BACK-END.`);    
    if (resposta2 == 1) {
        while (loop2) {
            //escolha FRONT-END
            let resposta3 = prompt(`${nome}, se você quer aprender REACT digite 1, ou se quer aprender VUE digite 2`);
            if (resposta3 == 1) {
                area = "FRONT-END";
                escolha = "REACT";
                loop2 = false;
                loop1 = false;
            }
            else if (resposta3 == 2) {
                area = "FRONT-END";
                escolha = "VUE";
                loop2 = false;
                loop1 = false;
            }
            else {
                alert("Resposta Invalida");
            }
        }
    }
    else if (resposta2 == 2) {
        while (loop2) {
            //ESCOLHA BACK-END
            let resposta3 = prompt(`${nome}, se você quer aprender C# digite 1, ou se quer aprender JAVA digite 2`);
            if (resposta3 == 1) {
                area = "BACK-END";
                escolha = "C#";
                loop2 = false;
                loop1 = false;
            }
            else if (resposta3 == 2) {
                area = "BACK-END";
                escolha = "JAVA";
                loop2 = false;
                loop1 = false;
            }
            else {
                alert("Resposta Invalida");
            }
        }
    }
    else {
        alert("Resposta Invalida");
    }    
}
// definição da carreira
console.log("Sai do LOOP1")

while(true) {
    let resposta4 = prompt(`${nome}, você com dev ${area} com ênfase em ${escolha} pretende: (1) - seguir se especializando na área escolhida ou 2 - (seguir se desenvolvendo para se tornar Fullstack.)`)
    if (resposta4 == 1) {
        alert(`Muito bem, definimos então que você será um dev específico de ${area}`);
        carreira = area
        break;
    }
   else if (resposta4 == 2) {
        alert(`Muito bem, definimos então que você será um dev FULL-STACK`);
        carreira = "FULL STACK"
        break;
    }
    else {
        alert("Resposta Invalida");
    }
}

let resposta5 = prompt(`${nome}, como dev ${carreira} quais são as tecnologias nas quais você gostaria de se especializar?`)
tecnologias.push(resposta5)

while(true) {
    let resposta6 = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se não precione 1")
    if (resposta6 == 1){
        break
    }
    else{
        tecnologias.push(resposta6)
    } 

}
console.log("Apresentação do relatório")

alert(`Muito bem ${nome} \nSua carreira dev é promissora, começando com ${linguagem} e escolhendo a area ${area} focando na carreira de ${carreira} e estudando as tecnologias:`)

for (i = 0; i < tecnologias.length; i++) {
    alert(`${tecnologias[i]}`)
}
