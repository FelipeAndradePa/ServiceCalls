const crypto = require('crypto');
const jwt = require('jsonwebtoken');

async function tokenGenerator(user) {
    const keySize = 32;
    const secretKey = crypto.randomBytes(keySize).toString('hex');

    const token = jwt.sign({user}, secretKey, {expiresIn: '1h'});

    return token;
}

async function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
  
    if (!token) return res.status(401).json({ error: 'Token ausente' });
  
    jwt.verify(token, secretKey, (err, user) => {
      if (err) return res.status(403).json({ error: 'Token inválido' });
  
      req.user = user;
      next();
    });
}

module.exports = {tokenGenerator, authenticateToken};