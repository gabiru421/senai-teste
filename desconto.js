const aplicarDesconto = (valorProduto, porcentagemDesconto) => {

    if (porcentagemDesconto > 100 || porcentagemDesconto < 0) {
        throw new Error("Desconto inválido");
    }

    const valorDesconto = valorProduto * (porcentagemDesconto / 100);

    return valorProduto - valorDesconto;
};

module.exports = { aplicarDesconto };