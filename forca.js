const palavra = "abelha"
const palpite = "a"

let quantidade = 0;

for (let i = 0; i< palavra.length; i++){
    if(palavra[i] === palpite)
    quantidade +=1
};
console.log(quantidade);