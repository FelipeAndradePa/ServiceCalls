const database = require('../config/database');
const Ticket = require('../models/ticket');
const sequelize = require('../models');

async function newCall (newTicket) {

    const t = await sequelize.transaction();

    try {
        const solicitante = newTicket.name;
        const empresa = newTicket.company;
        const email = newTicket.email;
        const motivo = newTicket.subject;
        const explicacao = newTicket.description;
        protocolo = getProtocol();
        status = 'Novo';
        const ticket = await Ticket.create({ solicitante, empresa, email, motivo, explicacao, protocolo, status }, { t });

        await t.commit();
        // MELHORAR O TRATAMENTO DA RESPOSTA
        return ticket;

    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        return { success: false, message: 'Erro ao inserir dados.' };
    }
}

async function getNews () {

    try {
        const newsTickets = await Ticket.findAll({ where: { status: 'Novo'}});
        
        return newsTickets;

    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        return { success: false, message: 'Erro ao inserir dados.' };
    }
}

async function getProgress () {

    try {
        const progressTickets = await Ticket.findAll({ where: { status: 'Em Andamento'}});
        
        return progressTickets;

    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        return { success: false, message: 'Erro ao inserir dados.' };
    }
}

async function getFinalized () {

    try {
        const finalizedTickets = await Ticket.findAll({ where: { status: 'Finalizados'}});
        
        return finalizedTickets;

    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        return { success: false, message: 'Erro ao inserir dados.' };
    }
}

async function registerUser (email, username, company, password) {

    try {
        const query = 'INSERT INTO usuarios (nome, email, empresa, hashSenha) VALUES (?, ?, ?, ?)';
        conexao = await database.connect();
        await conexao.execute(query, [username, email, company, password]);

        return {sucess: true, message: "Dados inseridos com sucesso!"};
    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        return { success: false, message: 'Erro ao inserir dados.' };
    }

}

async function getUser (email, username) {

    try {
        const query = 'SELECT nome, hashSenha, empresa FROM usuarios WHERE nome=? AND email=?';
        conexao = await database.connect();
        const [result, fields] = await conexao.execute(query, [username, email]);

        return result;

    } catch (error) {
        console.error('Erro ao selecionar os dados do usuário:', error);
        return { success: false, message: 'Erro ao selecionar os dados do usuários.' };
    }

}

function getProtocol() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mês começa do zero
    const year = date.getFullYear().toString().substr(-2); // Pegar os dois últimos dígitos do ano
    const hour = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${day}${month}${year}${hour}${minutes}${seconds}`;
}

async function alterState(protocol, newState) {

    try {
        const query = 'UPDATE chamados SET status = ? WHERE protocolo = ?';
        conexao = await database.connect();
        await conexao.execute(query, [newState, protocol]);

        return {sucess: true, message: "Dados alterados com sucesso!"};

    } catch (error) {
        console.error('Erro ao alterar o status do chamado.', error);
        return { success: false, message: 'Erro ao alterar o status do chamado.' };
    }
}

module.exports = {registerUser, getUser, newCall, getNews, getProgress, getFinalized, alterState}