const sequelize = require('./index');
const { DataTypes } = require('sequelize');

const Ticket = sequelize.define('Ticket', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    solicitante: {
        type: DataTypes.STRING,
        allowNull: false
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    motivo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    explicacao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    protocolo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tickets', // Nome da tabela existente
    timestamps: true, // Se as colunas createdAt e updatedAt existem
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Ticket