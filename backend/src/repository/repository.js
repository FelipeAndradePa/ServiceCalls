const database = require('../config/database');

async function newCall (name, company, email, subject, description) {

    try {
        date = getDate();
        hour = getHour();
        protocol = getProtocol();
        statusCall = 'Novo';
        const query = 'INSERT INTO chamados (protocolo, data, hora, empresa, solicitante, email, motivo, explicacao, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        conexao = await database.connect();
        await conexao.execute(query, [protocol, date, hour, company, name, email, subject, description, statusCall]);

        return {sucess: true, message: "Dados inseridos com sucesso!"};

    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        return { success: false, message: 'Erro ao inserir dados.' };
    }
}

async function getNews () {

    try {
        const query = 'SELECT * FROM chamados WHERE status = "Novo"';
        conexao = await database.connect();
        const [rows, fields] = await conexao.execute(query);

        return rows;

    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        return { success: false, message: 'Erro ao inserir dados.' };
    }
}

async function getProgress () {

    try {
        const query = 'SELECT * FROM chamados WHERE status = "Em andamento"';
        conexao = await database.connect();
        const [rows, fields] = await conexao.execute(query);

        return rows;

    } catch (error) {
        console.error('Erro ao inserir dados:', error);
        return { success: false, message: 'Erro ao inserir dados.' };
    }
}

async function getFinalized () {

    try {
        const query = 'SELECT * FROM chamados WHERE status = "Finalizado"';
        conexao = await database.connect();
        const [rows, fields] = await conexao.execute(query);

        return rows;

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

function getDate() {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Mês começa do zero
    const year = date.getFullYear();
    return `${year}/${month}/${day}`;
}

function getHour() {
    const date = new Date();
    const hour = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minutes}`;

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