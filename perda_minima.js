const precos = [5, 10, 3];

let menorPrejuizo = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
        const preco1 = precos[i]
        const preco2 = precos[j]
        const prejuizo = preco1 - preco2

        if (prejuizo > 0) {
            if (prejuizo < menorPrejuizo) {

                menorPrejuizo = prejuizo
            }
        }
    }       
}

console.log(menorPrejuizo);