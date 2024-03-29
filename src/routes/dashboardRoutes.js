const express = require('express');
const router = express.Router();
const clientesFornecedoresController = require ('../controllers/clienteFornecedorController');
router.get('/dashboard', (req, res) =>{
res.render('dashboard');
});

router.get('/clientes-fornecedores', async (req, res) => {
    try{
        const clientesFornecedores = await clientesFornecedoresController.getAllClientesFornecedores();
        res.render('clientesFornecedores/clientesFornecedores', {
            message: '',
            clientesFornecedores: clientesFornecedores
        })
    }catch{

    }
});

module.exports = router;