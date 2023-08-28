## HackerRank

  

### índice

[[01- Purificação]]  

[[02- Abecedário]]  

[[03- Cinco ou mais, um é grátis]]  

[[04- Carrossel]]  

[[05-Perda mínima]]  

[[06- Brasil com "P"]]  

[[07-Tiro ao Alvo]]  

[[08- Brazilian Storm]]  

[[09- Forca]]  

[[10-Pontos no campeonato]]  

  

  

### 01- Purificação

Você e seus amigos estavam fazendo um projeto da faculdade e encontraram um banco de dados com nomes científicos de animais que poderia ajudá-los, porém os dados estavam corrompidos.

O seu dever é criar um script para purificar esses dados e utilizá-los em seu trabalho.

A purificação consiste em retirar os caracteres especiais contidos no nome como exemplificado abaixo:

  

| Dado corrompido | Dado purificado |
| --- | --- |
| \*Canis %lupus )familiaris | Canis lupus familiaris |
| Felis) silvestris \*catus& | Felis silvestris catus |
| $Ailuropoda@ melanoleuca! | Ailuropoda melanoleuca |

  

**Input Format**

A entrada será sempre uma string representando um nome corrompido com alguns dos seguintes caracteres !@#$%&\*().

**Output Format**

A saída deverá ser sempre uma string representando o nome purificado sem os seguinte caracteres especiais !@#$%&\*().

  

### My answer:

```
const stringCorrompida = "*Canis %lupus )familiaris";
const arr = [stringCorrompida]
let dadosPurificados = "";
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/[^a-zA-Z0-9 .]/g, '')
    dadosPurificados = arr[i]
};

console.log(dadosPurificados);

```

  

### 02- Abecedário

Uma brincadeira muito comum entre crianças é o ABC. Nessa brincadeira, uma letra é sorteada a cada rodada e cada criança que está brincando deve escrever uma palavra de uma determinada categoria que comece com a letra que foi sorteada.

Por exemplo, caso a letra sorteada seja a letra "M" e o tema seja "frutas" as crianças podem falar coisas como:

- melancia
- melão
- maçã
- mamão

e todas as respostas acima estariam corretas, pois começam com a letra M. Porém caso uma criança falasse "Laranja", por exemplo, essa criança teria perdido. O seu papel é fazer um programa que calcule quantas crianças perderam na rodada.

**Input Format**

A entrada terá sempre duas variáveis:

- `letra`, que contém a letra que foi sorteada para essa rodada (sempre minúscula e sem acentos)
- `palavras`, que será sempre um array de strings contendo as palavras que cada uma das crianças escreveu (sempre minúsculas e sem acento)

**Output Format**

Imprima na tela apenas um número inteiro contendo a quantidade de crianças que PERDERAM nessa rodada.

**Sample Input 0**

```
[
  {
    "letra": "m",
    "palavras": [
      "mamao",
      "maca",
      "melao",
      "melancia",
      "laranja"
    ]
  }
]

```

**Sample Output 0**

```
1

```

  

### My answer:

```
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

```

  

### 03- Cinco ou mais, um é grátis

Uma loja que está com um estoque muito grande acumulado resolveu fazer uma promoção para que os clientes levem mais produtos.

Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!

Para que essa promoção funcionasse, foi necessário fazer uma atualização no software do caixa para que fosse possível calcular o valor correto que o cliente deve pagar.

Você ficou com essa tarefa.

**Input Format**

A entrada será sempre um array contendo apenas números inteiros e positivos representando o valor de cada um dos produtos (em centavos).

**Output Format**

Imprima na tela apenas um número que representa o total que deve ser pago pelo cliente (aplicando a promoção quando fizer sentido, claro).

**Sample Input 0**

```
100 500 100 200 50

```

**Sample Output 0**

```
900

```

**Sample Input 1**

```
100 100 100 50

```

**Sample Output 1**

```
350

```

  

### My answer:

```
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

```

  

### 04- Carrossel

  

Em tecnologia, um carrossel é uma sequência de imagens num site que pode mudar conforme o usuário aperta botões para a direita (>) ou para a esquerda (<), como na imagem abaixo:

![](https://i.imgur.com/8ubTDdU.jpg)

No time de desenvolvimento que você está trabalhando, você ficou responsável por programar este carrossel, que, neste caso, não passa automaticamente. Ou seja, a imagem só muda se o usuário clicar nos botões para a direita (>) ou para a esquerda (<).

Cada imagem é um item de um array. O carrossel de vocês tem 7 imagens, o que significa que elas ficam guardadas nos índices de 0 a 6 de um array.

Você deverá calcular qual é o índice da imagem que deve ser exibida a depender da quantidade de cliques que tenham sido dados nos botões da direita ou da esquerda.

Naturalmente, cada clique no botão da direita avança uma imagem, enquanto cada clique no da esquerda volta uma imagem.

Caso o usuário esteja na última imagem e clique na direita, ele volta para a primeira.

Caso o usuário esteja na primeira imagem e clique na esquerda, ele volta para a última.

A sequência de cliques feitos pelo usuário é uma informação que lhe é passada através de uma string que pode conter apenas os caracteres `>` e `<`.

Por exemplo, o string `>>><>` indica que o usuário apertou 3 vezes para a direita, depois uma vez para a esquerda, depois mais uma vez para a direita. Como o carrossel sempre começa na imagem primeira imagem, que é a de índice 0, isso significa que ele foi do índice 0 até o índice 3, voltou para o 2 e foi novamente para o 3. Por isso, neste exemplo o seu programa deveria imprimir o número 3 na tela.

**Input Format**

A entrada será sempre uma única variável `sequencia` que guarda sempre uma sequencia de caracteres `>` ou `<` indicando os cliques do usuário.

**Output Format**

A saída deverá ser sempre um número inteiro positivo entre 0 e 6 que indica o índice da imagem que estará sendo exibida na tela após o usuário fazer todos os cliques descritos na sequência.

**Sample Input 0**

```
[">", ">", ">", "<", ">"]

```

**Sample Output 0**

```
3

```

**Sample Input 1**

```
[">"]

```

**Sample Output 1**

```
1

```

**Sample Input 2**

```
["<"]

```

**Sample Output 2**

```
6

```

**Sample Input 3**

```
[">", ">", ">",">", ">", ">",">", ">", ">"]

```

**Sample Output 3**

```
2

```

  

### My answer:

```
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

```

  

### 05-Perda mínima

  

Letícia tem um gráfico de preços projetados para uma casa nos próximos anos. Ela deve comprar a casa em um ano e vendê-la em outro, e deve fazê-lo com prejuízo. Ela quer minimizar suas perdas financeiras.

Por exemplo, a casa é avaliada em **preço = \[20, 15, 8, 2, 12\]** nos próximos 5 anos. Ela pode comprar a casa em qualquer ano, mas deve revendê-la com prejuízo em um dos anos seguintes. Sua perda mínima seria incorrida comprando no 2º ano em **preço\[1\] = 15** e revendendo no 5º ano em **preço\[4\] = 12**.

Encontre e imprima a quantidade mínima de dinheiro que Letícia deve perder se comprar a casa e revendê-la nos próximos anos.

**Input Format**

A entrada será sempre um array de inteiros de tamanho variado contendo o preço da casa nos próximos anos.

**Output Format**

A saída sempre será um inteiro representando a perda mínima que Letícia terá.

**Sample Input 0**

```
5 10 3

```

**Sample Output 0**

```
2

```

**Explanation 0**

Letícia compra a casa no 1º ano em **preço = 5** e revende no 3º ano em **preço = 3** resultando em uma perda de **5 - 3 = 2**.

**Sample Input 1**

```
30 10 54 76 1 4 35

```

**Sample Output 1**

```
6

```

**Explanation 1**

Letícia compra a casa no 2º ano em **preço = 10** e revende no 6º ano em **preço = 4** resultando em uma perca de **10 - 4 = 6**.

### My answer:

```
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

```

  

### 06- Brasil com "P"

  

Brasil com "P" é uma música bastante famosa, em que todas as palavras da música inteira começam com a letra "P".

GOG, o compositor desta música, decidiu dar um próximo passo nesse estilo e fazer músicas em que todas as palavras comecem sempre com as mesmas duas primeiras letras. Contudo ele ainda não decidiu quais duas primeiras letras serão essas. Como está com um pequeno bloqueio no seu processo criativo ele decidiu analisar várias combinações e analisar as palavras que surgem para cada par de letras, e escolher o par a depender das palavras que surjam.

Como apenas olhar no dicionário estava sendo bastante lento e entediante, ele te contratou para fazer um programa que, dado um par de letras qualquer, imprima na tela as palavras que começam com essas duas primeiras letras.

**Input Format**

A entrada será sempre composta por três variáveis:

- `palavras`: que será sempre um array de strings, contendo palavras que servem como base para a sua busca. As palavras sao sempre com todas as letras minusculas e sem acentos
- `primeiraLetra`: que será sempre um string contendo apenas um caractere (minúsculo), que deve ser a primeira letra das palavras
- `segundaLetra`: que será sempre um string contendo apenas um caractere (minúsculo), que deve ser a segunda letra das palavras

**Output Format**

Você deve imprimir na tela as palavras contidas no array de palavras que tem como primeira letra a `primeiraLetra` fornecida na entrada e a segunda letra a `segundaLetra` fornecida na entrada. Imprima uma palavra em cada linha.

Caso não nenhuma palavra do array de `palavras` atenda aos requisitos, imprima na tela `NENHUMA`.

**Sample Input 0**

```
{
  "primeiraLetra": "c",
  "segundaLetra": "v",
  "palavras": [
    "aveia",
    "manha",
    "ave"
  ]
}

```

**Sample Output 0**

```
NENHUMA

```

**Sample Input 1**

```
{
  "primeiraLetra": "a",
  "segundaLetra": "v",
  "palavras": [
    "aveia",
    "manha",
    "ave"
  ]
}

```

**Sample Output 1**

```
aveia
ave

```

  

### My answer:

```
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

```

  

### 07-Tiro ao Alvo

  

Numa competição de tiro ao alvo, cada competidor pode fazer uma certa quantidade de disparos. A cada disparo é atribuida uma pontuação que vai de 0 a 100. Para que o competidor seja aprovado para a próxima fase, ele precisa ter pelo menos 3 disparos com pontuação acima de 70 pontos.

**Input Format**

A entrada do problema será sempre um array de números chamado `disparos`, que contém a pontuação de cada disparo.

**Output Format**

Caso o competidor seja aprovado, imprima na tela a quantidade de disparos acima de 70 pontos. Caso o competidor seja eliminado, imprima apenas a mensagem `ELIMINADO`

**Sample Input 0**

```
0 10 50 70 80 30

```

**Sample Output 0**

```
ELIMINADO

```

**Explanation 0**

Como o competidor só acertou um tiro acima de 70 pontos, ele foi eliminado.

**Sample Input 1**

```
0 50 90 80 100 80 40

```

**Sample Output 1**

```
4

```

**Explanation 1**

O competidor conseguiu 4 tiros acima de 70 pontos: 90, 80, 100 e 80 novamente.

  

### My answer:

```
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

```

  

### 08- Brazilian Storm

  

Numa competição de surf, cada manobra de cada atleta é julgada por vários juízes, de modo que cada um deles dá uma nota. Para calcular a nota final da manobra, descarta-se a maior e a menor nota e calcula-se a média aritimética das restantes.

Seu papel é desenvolver a parte do software que calcula a nota final de uma manobra a partir das notas dadas por cada juíz.

**Input Format**

A entrada do problema será sempre um array de números chamado `notas`, que contém as notas dadas por cada um dos juízes.

**Output Format**

Você deve imprimir na tela a nota final da manobra, que é a média das notas que não foram descartadas.

**Sample Input 0**

```
100 100 100 20 50 30 14 100 100 100

```

**Sample Output 0**

```
75

```

**Explanation 0**

Uma nota 100 e uma 14 são descartadas. A média das restantes é 75.

**Sample Input 1**

```
100 100 100 50

```

**Sample Output 1**

```
100

```

**Explanation 1**

Uma nota 100 e uma 50 são descartadas, sobrando duas notas 100. A média dessas duas notas é, naturalmente, 100.

  

### My answer:

```
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

```

  

### 09- Forca

Você está desenvolvendo um jogo da forca para a sua empresa. No jogo da forca, o usuário tem que descobrir qual é a palavra que está "escondida" escolhendo letras que ele acredita que está contida nessa palavra.

Seu papel como desenvolvedor(a) é fazer a parte do código que, ao receber a letra palpite do usuário e a palavra escondida, retornará a quantidade de acertos obtidos pelo usuário nesse palpite.

**Input Format**

A entrada será sempre duas strings: o palpite feito pelo jogador e a palavra a ser descoberta. O palpite será sempre apenas um caractere minúsculo e sem acento. A palavra será sempre composta apenas por caracteres minúsculos e sem acento.

**Output Format**

A saída sempre será a quantidade de acertos do palpite.

**Sample Input 0**

```
a abelha

```

**Sample Output 0**

```
2

```

**Explanation 0**

A quantidade de vezes que o palpite **a** do jogador aparece na palavra **abelha** é 2.

  

### My answer:

```
const palavra = "abelha"
const palpite = "a"

let quantidade = 0;

for (let i = 0; i< palavra.length; i++){
    if(palavra[i] === palpite)
    quantidade +=1
};
console.log(quantidade);

```

  

### 10-Pontos no campeonato

  

Num campeonato de futebol, um time joga várias partidas ao longo do ano e vai somando pontos de acordo com seu resultado em cada partida. Um time ganha:

- 3 pontos quando vence uma partida
- 1 ponto quando empata uma partida
- nenhum ponto quando perde uma partida

Você está trabalhando no setor de TI de um clube de futebol que deseja fazer várias simulações de desempenho a depender do seu resultado em cada jogo.

Para facilitar esse trabalho, você deve desenvolver o programa que calcula a pontuação final do clube a depender desses resultados em cada partida.

**Input Format**

A entrada será sempre composta por apenas uma variável `resultados` que é um array contendo as várias strings, que definem qual foi o resultado do time em cada partida

Cada item desse array é sempre do tipo string, contendo uma das opções abaixo:

- `V`, que representa que o time venceu essa partida
- `E`, que representa que o time empatou essa partida
- `D`, que representa que o time perdeu essa partida

**Output Format**

Imprima na tela apenas um número representando a quantidade de pontos ganhos pelo time na competição.

**Sample Input 0**

```
[
  "V",
  "E",
  "V",
  "E"
]

```

**Sample Output 0**

```
8

```

**Explanation 0**

Como o time teve 2 vitórias (2x3) e dois empates (2x1), ele fica com 8 pontos (6+2).

  

### my answer:

```
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

```