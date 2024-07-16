const auth = require('../auth/auth');
const argon2 = require('argon2');

module.exports = (app, repository) => {
    
    // rota para autenticação e geração do token
    app.post('/login', async (req, res) => {

        try {
            const { email, username, password } = req.body;
            result = await repository.getUser(email, username);
    
            usernameInput = result[0].nome;
            passwordInput = result[0].hashSenha;
            const psw = await argon2.verify(passwordInput, password);

            if(username == usernameInput && psw) {
                const token = auth.tokenGenerator(username);
                res.json({ token });
                console.info(token);
            } else {
                res.status(401).json({error: 'Credenciais inválidas.'});
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            res.status(500).json({ success: false, message: error.message});
        }
    })
    // rota para registro de novo usuário
    app.post('/register', async (req, res) => {

        const { email, username, company, password } = req.body;

        try {
            const hashedPassword = await argon2.hash(password);
            const result = await repository.registerUser(email, username, company, hashedPassword);
            res.status(201).json({ success: true, message: result.message});
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            res.status(500).json({ success: false, message: error.message});
        }

    })
    // rota protegida
    app.get('/auth', auth.authenticateToken, (req, res) => {

        res.json({data: 'Informações protegidas.'});
    })
    // rota para envio de um novo chamado
    app.post('/new', async (req, res) => {

        const { name, company, email, subject, description } = req.body;

        try {
            const result = await repository.newCall(name, company, email, subject, description);
            res.status(201).json({ success: true, message: result.message});
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            res.status(500).json({ success: false, message: error.message});
        }

    })
    // rota para carregar a tabela de novos chamados
    app.get('/new', async (req, res) => {
        try {
            const result = await repository.getNews();
            res.status(200).json({ success: true, data: result });
        } catch (error) {
            console.error('Erro ao acessar o banco de dados:', error);
            res.status(500).json({ success: false, message: error.message});
        }
    })
    app.get('/progress', async (req, res) => {
        try {
            const result = await repository.getProgress();
            res.status(200).json({ success: true, data: result });
        } catch (error) {
            console.error('Erro ao acessar o banco de dados:', error);
            res.status(500).json({ success: false, message: error.message});
        }
    })
    app.get('/finalized', async (req, res) => {
        try {
            const result = await repository.getFinalized();
            res.status(200).json({ success: true, data: result });
        } catch (error) {
            console.error('Erro ao acessar o banco de dados:', error);
            res.status(500).json({ success: false, message: error.message});
        }
    })
    app.patch('/alterState/:protocol', async (req, res) => {
        try {
            const protocol = req.params.protocol;
            const newState = req.body.newState;
            console.info(protocol);
            console.info(newState);
            const result = await repository.alterState(protocol, newState);
            res.status(200).json({success: true, data: result});
        } catch (error) {
            console.error('Erro ao acessar o banco de dados:', error);
            res.status(500).json({ success: false, message: error.message});
        }
    })
}