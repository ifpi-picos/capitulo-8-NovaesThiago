export function soma(a, b) {
    return a + b
}

export function subtracao(a, b) {
    return a - b
}

export function multiplicacao(a, b) {
    return a * b
}

export function divisao(a, b) {
    if (b === 0) {
        console.log("Divisão por zero não é permitida.")
    }
    return a / b
}

export function exponenciacao(base, expoente) {
    return Math.pow(base, expoente)
}