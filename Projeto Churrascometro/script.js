let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let refri = RefriPP(duracao);

    let qtdTotalCarne = adultos * carnePP(duracao) + (criancas * carnePP(duracao) / 2);
    let qtdTotalCerveja = adultos * cervejaPP(duracao);
    let qtdTotalRefri = adultos * RefriPP(duracao) + (criancas * RefriPP(duracao) / 2);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalRefri / 2000)} Refri 2L.</p>`


}

function carnePP(duracao) {

    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {

    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function RefriPP(duracao) {

    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}