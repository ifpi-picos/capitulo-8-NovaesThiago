import convert from 'convert4'

function converterDiasEmMinutos(dias) {
    return convert(dias).from('days').to('minutes')
}

function converterGigabytesEmBytes(gigabytes) {
    return convert(gigabytes).from('gigabytes').to('bytes')
}

function main() {
    const dias = parseFloat(prompt("Digite o número de dias para converter em minutos:"))
    if (isNaN(dias)) {
        console.log("Por favor, insira um número válido.")
        return
    }
    const minutos = converterDiasEmMinutos(dias)
    console.log(`${dias} dias são ${minutos} minutos.`)

    const gigabytes = parseFloat(prompt("Digite o número de gigabytes para converter em bytes:"))
    if (isNaN(gigabytes)) {
        console.log("Por favor, insira um número válido.")
        return
    }
    const bytes = converterGigabytesEmBytes(gigabytes)
    console.log(`${gigabytes} gigabytes são ${bytes} bytes.`)
}

main()