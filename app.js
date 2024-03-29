const express = require('express');
const sequelize = require('./src/config/database');
const app = express();
const path = require('path');
const { dashBoardRoutes } = require('./src/routes');
const cookieParser = require('cookie-parser');

// Rota para direcionar para  a raiz
app.get('/', (req, res) => {
    console.log("Bem-vindo ao controle de estoque");
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'src', 'views'));
app.use(dashBoardRoutes);

const PORT = 3001;
app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})