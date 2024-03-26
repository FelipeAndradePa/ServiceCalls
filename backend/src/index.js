require("dotenv-safe").config();

const auth = require('./auth/auth.js');
const api = require('./api/api.js');
const server = require('./server/server.js');
const repository = require('./repository/repository.js');

try {
    server.start(api, repository);
    console.log('Server is up and running at ' + process.env.PORT);
}
catch(error) {
    console.error(error);
    console.log("erro")
}

