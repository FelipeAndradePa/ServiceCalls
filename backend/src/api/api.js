const auth = require('../auth/auth');
const argon2 = require('argon2');

module.exports = (app, repository) => {
    
    //rota para autenticação e geração do token
    app.post('/login', async (req, res) => {

        try {
            const {email, username, password} = req.body;
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
    //rota para registro de novo usuário
    app.post('/register', async (req, res) => {

        const {email, username, company, password} = req.body;

        try {
            const hashedPassword = await argon2.hash(password);
            const result = await repository.registerUser(email, username, company, hashedPassword);
            res.status(201).json({ success: true, message: result.message});
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            res.status(500).json({ success: false, message: error.message});
        }

    })
    //rota protegida
    app.get('/auth', auth.authenticateToken, (req, res) => {

        res.json({data: 'Informações protegidas.'});
    })
}