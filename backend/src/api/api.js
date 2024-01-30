const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const auth = require('../auth/auth');

module.exports = (app, repository) => {

    
    //rota para geração do token
    app.post('/login', (req, res) => {
        const {username, password} = req.body;

        //trazer os dados do banco de dados
        if(username == 'usuario' && password == 'hash') {

            const token = auth.tokenGenerator(username);
            res.json({ token });
            console.info(token);
        } else {
            res.status(401).json({error: 'Credenciais inválidas.'});
        }
    })
    //rota protegida
    app.get('/auth', auth.authenticateToken, (req, res) => {
        res.json({data: 'Informações protegidas.'});
    })
}