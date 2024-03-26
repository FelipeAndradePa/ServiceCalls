const database = require('../config/database');

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

module.exports = {registerUser, getUser}