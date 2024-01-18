const { authenticateToken } = require("../auth/auth");

module.exports = (app, repository) => {
    //rota para geração do token
    app.post('/login', (req, res) => {
        const {username, password} = req.body;

        //trazer os dados do banco de dados
        if(username == 'usuario' && password == 'hashpassword') {
            const token = tokenGenerator(username);

            res.json({ token });
        } else {
            res.status(401).json({error: 'Credenciais inválidas.'});
        }
    })
    //rota protegida
    app.get('/data', authenticateToken, (req, res) => {
        res.json
    })
}