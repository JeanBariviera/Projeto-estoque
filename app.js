const express = require('express');
const app = express();

// Rota para direcionar para a raiz
app.get('/', (req, res) => {
    console.log("Bem-vindo ao controle de estoque");
})

const PORT = 3001;
app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})