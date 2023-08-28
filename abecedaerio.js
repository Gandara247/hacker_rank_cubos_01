const palavras = [
    "mamao",
    "maca",
    "melao",
    "melancia",
    "laranja"
];

let letra = "m";
let count = 0;

for (let i = 0; i < palavras.length; i++ ){
    if(!palavras[i].startsWith(letra)){
        count++
    };
};

console.log(count);

