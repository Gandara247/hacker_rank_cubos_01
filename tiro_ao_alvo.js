const disparos = [0, 10, 50, 70, 80, 30];

let aprovado = 0;

for (let i = 0; i < disparos.length; i++) {
    if (disparos[i] >= 70) {
        aprovado += 1
    };
};

if (aprovado >= 3) {
    console.log(aprovado);
} else {
    console.log("ELIMINADO");
};
