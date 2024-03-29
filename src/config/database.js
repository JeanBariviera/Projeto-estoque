const { Sequelize } = require('sequelize');

//configurar a conexão com a base de dados
const sequelize = new Sequelize('controle_estoque', 'postgres', 'POSTGRE', {
    host:'localhost',
    dialect: 'postgres',
    logging: false,
    pool:{
        mas: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

//Testando a conexão 
async function testeConnection(){
    try{
       await sequelize.authenticate();
console.log('Conexão estabelecida com sucesso!')
    }catch(error){
        console.error('Erro ao conectar ao banco de dados: ', error)
    }
}

testeConnection();

module.exports = sequelize;