const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const keySize = 32;
const secretKey = crypto.randomBytes(keySize).toString('hex');

function tokenGenerator(user) {
    return jwt.sign({user}, secretKey, {expiresIn: '1h'});
}

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token) return res.status(401).json({ error: 'Token ausente' });
  
    jwt.verify(token, secretKey, (err, user) => {
      if (err) return res.status(403).json({ error: 'Token inválido' });
  
      req.user = user;
      next();
    });
}

module.exports = {tokenGenerator, authenticateToken};