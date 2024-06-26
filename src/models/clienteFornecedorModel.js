const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const clienteFornecedor = sequelize.define('clientes_fornecedores',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf_cnpj:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    tipo:{
       type: DataTypes.CHAR,
        allowNull: false,
        validate:{
            isIn: [['F', 'C']]
        },
    },
    status:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    //opções do modelo
    tableName: 'clientes_fornecedores',
    timestamps: false,
});

module.exports = clienteFornecedor;