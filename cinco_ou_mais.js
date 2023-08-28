const precos = [100, 500, 100];

let pagar = 0;

if (precos.length >= 5) {
    let menor = precos[0];
    for (let i = 1; i < precos.length; i++) {
        if (precos[i] < menor) {
            menor = precos[i];
        }
    }
    for (let i = 0; i < precos.length; i++) {
        pagar += precos[i];
    }
    pagar -= menor;
} else {
    for (let i = 0; i < precos.length; i++) {
        pagar += precos[i]
    }
}

console.log(pagar);

