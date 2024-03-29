const clienteFornecedorModel = require('../models/clienteFornecedorModel');

const getAllClientesFornecedores = async (req, res) => {
    const clientes_fornecedores = await clienteFornecedorModel.findAll();
    return clientes_fornecedores;
};
module.exports = ( getAllClientesFornecedores );