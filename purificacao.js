const stringCorrompida = "*Canis %lupus )familiaris";
const arr = [stringCorrompida]
let dadosPurificados = "";
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/[^a-zA-Z0-9 .]/g, '')
    dadosPurificados = arr[i]
};

console.log(dadosPurificados);