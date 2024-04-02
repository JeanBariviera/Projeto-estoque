const clienteFornecedorModel = require('../models/clienteFornecedorModel');

const getAllClientesFornecedores = async (req, res) => {
    try {
        const clientes_fornecedores = await clienteFornecedorModel.findAll();
        return clientes_fornecedores;
    } catch (error) {
        throw new Error('Erro ao obter clientes fornecedores: ' + error.message);
    }
};

module.exports = getAllClientesFornecedores;