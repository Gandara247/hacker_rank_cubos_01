const resultados = ["V", "E", "V", "E"];

let vitoria = 0;
let empate = 0;
let derrota = 0;

for (let i = 0; i < resultados.length; i++) {
    if (resultados[i] === "V") {
        vitoria += 1
    };
    if (resultados[i] === "E") {
        empate += 1
    };
    if (resultados[i] === "D") {
        derrota = 0
    }
};

let pontos = (vitoria * 3) + empate + derrota

console.log(pontos);