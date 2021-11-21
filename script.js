
document.querySelector("#qtd").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarPreco()
})

function atualizarPreco(){
    const qtd = document.querySelector("#qtd").value
    const prazo = document.querySelector("#prazo").value

    let preco = qtd * 80;
    let taxaUrgencia = 1 - prazo*0.2;
    preco *= 1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}

document.querySelector(".inicio").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);