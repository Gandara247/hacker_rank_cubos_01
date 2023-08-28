const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

let menor = notas[0];
let maior = notas[0];
let notas02 = 0

for (let i = 0; i < notas.length; i++) {
    notas02 += notas[i]
    if (notas[i] > maior) {
        maior = notas[i]
    };

    if (notas[i] < menor) {
        menor = notas[i]
    };
}
let notaFinal = (notas02 - (maior + menor))/ ((notas.length)-2)
console.log(notaFinal);