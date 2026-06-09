const { dividir } = require("./calculadora");

function testeDivisaoSimples() {
    const resultado = dividir(10, 2);

    if (resultado != 5) {
        throw new Error("teste falhou: esperando 5");
    }

    console.log("teste passou: divisao simples");
}

testeDivisaoSimples();