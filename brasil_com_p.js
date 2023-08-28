const palavras = ["aveia", "manha", "ave"];

const primeiraLetra = "a";
const segundaLetra = "v";

let encontrou = false;

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].toLowerCase().startsWith(primeiraLetra)
        && palavras[i].toLowerCase().startsWith(segundaLetra, 1)) {
        nomesOutput = palavras[i];
        console.log(nomesOutput);
        encontrou = true;
    };
};
if (!encontrou) {
    console.log("NENHUMA");
};