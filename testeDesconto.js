const {aplicarDesconto} = require('./desconto')

console.log("Iniciando teste de desconto...\n")

//caminho feliz :)

try {
    const resultado = aplicarDesconto(100, 20);

    if (resultado !== 80) {
        throw new Error(`Esperava 80, recebeu ${resultado}`);
    }

    console.log("Teste 1 (Caminho Feliz): Desconto de 20% aplicado corretamente.");

} catch (error) {
    console.error(" Teste 1 Falhou:", error.message);
}


//caminho 2 desc maior que 100

try {
    aplicarDesconto(100, 110);

    console.error("Teste 2 Falhou: A função permitiu um desconto maior que 100%.");
} catch (error) {
    if (error.message === "Desconto inválido") {
        console.log("Teste 2 (Exceção): Erro de desconto > 100% capturado corretamente.");
    } else {
        console.error("Teste 2 Falhou por motivo incorreto:", error.message);
    }
}

//cenario 3 desc negativo

try {
    aplicarDesconto(100, -10);

    console.error("Teste 3 Falhou: A função permitiu um desconto negativo.");
} catch (error) {
    if (error.message === "Desconto inválido") {
        console.log("Teste 3 (Exceção): Erro de desconto negativo capturado corretamente.");
    } else {
        console.error("Teste 3 Falhou por motivo incorreto:", error.message);
    }
}