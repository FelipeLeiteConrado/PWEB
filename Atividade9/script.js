function maior(a, b, c) {
    return Math.max(a, b, c);
}

function crescente(a, b, c) {
    let numeros = [a, b, c];

    numeros.sort((x, y) => x - y);

    return numeros;
}

function palindromo(texto) {
    texto = texto.toUpperCase().replace(/\s/g, "");

    let invertido = texto.split("").reverse().join("");

    return texto === invertido ? "É um palíndromo" : "Não é um palíndromo";
}

function subconjunto(palavra1, palavra2) {
    if (!palavra1 || !palavra2) {
        return "erro";
    }

    if (palavra1.includes(palavra2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

function diaSemana(data) {
    let dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    let dataInformada = new Date(data);

    return dias[dataInformada.getDay()];
}

function exercicio1() {
    let a = Number(prompt("Digite o primeiro número:"));
    let b = Number(prompt("Digite o segundo número:"));
    let c = Number(prompt("Digite o terceiro número:"));

    alert("O maior número é: " + maior(a, b, c));
}

function exercicio2() {
    let a = Number(prompt("Digite o primeiro número:"));
    let b = Number(prompt("Digite o segundo número:"));
    let c = Number(prompt("Digite o terceiro número:"));

    alert("Ordem crescente: " + crescente(a, b, c));
}

function exercicio3() {
    let texto = prompt("Digite uma palavra ou frase:");

    alert(palindromo(texto) ? "É um palíndromo!" : "Não é um palíndromo!");
}

function exercicio4() {
    let palavra1 = prompt("Digite a primeira palavra:");
    let palavra2 = prompt("Digite a segunda palavra:");

    alert(subconjunto(palavra1, palavra2));
}

function exercicio5() {
    let data = prompt("Digite uma data (AAAA-MM-DD):");

    alert("Dia da semana: " + diaSemana(data));
}