import { create, all } from 'mathjs'

const math = create(all)


function calcularLogaritmo() {

    const numero = parseFloat(prompt("Digite um número para calcular o logaritmo:"))

    if (isNaN(numero) || numero <= 0) {
        console.log("Por favor, insira um número válido maior que zero.")
        return
    }

    const logaritmoNatural = math.log(numero)

    const logaritmoBase10 = math.log10(numero)

    console.log(`Logaritmo natural de ${numero}: ${logaritmoNatural}`)
    console.log(`Logaritmo na base 10 de ${numero}: ${logaritmoBase10}`)
}

calcularLogaritmo()