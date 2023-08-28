const caso1 = [">", ">", ">", "<", ">"]; // tem que ser iqual a 3
const caso2 = [">"];  // tem que ser iqual a 1
const caso3 = ["<"];  // tem que ser iqual a 6
const caso4 = [">", ">", ">", ">", ">", ">", ">", ">", ">"];  // tem que ser iqual a 2

const sequencia = caso4; //escolha o caso 

let index = 0;

for (let i = 0; i < sequencia.length; i++) {
    if (sequencia[i] === ">") {
        index++
        if (index > 6) {
            index = 0;
        }
        continue;
    }
    if (sequencia[i] === "<") {
        index--
        if (index < 0) {
            index = 6;
        }

        continue;
    }
}

console.log(index);