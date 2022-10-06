document.addEventListener('DOMContentLoaded', () => {

    let quadrados = document.querySelectorAll(".quadrado")

    quadrados.forEach((quadrado) => {
        quadrado.addEventListener('click', handleClick)
    });

})

function handleClick(event) {
    let quadrado = event.target
    let position = quadrado.id

    if (handleMove(position)) {
        setTimeout(() => {
            alert("Fim de Jogo!")
        }, 10)

    }

    attQuadrados()
}

function attQuadrados() {
    let quadrados = document.querySelectorAll(".quadrado")

    quadrados.forEach((quadrado) => {
        let position = quadrado.id
        let player = board[position]


        if (player != '') {
            quadrado.innerHTML = `<div class='${player}'></div>`
        }
    })

}

// Poderia ser feito assim:
// attQuadrados(position)

// function attQuadrados(position){
//     let quadrado = document.getElementById(position.toString())
//     let player = board[position]
//     quadrado.innerHTML = `<div class='${player}'></div>`
// }