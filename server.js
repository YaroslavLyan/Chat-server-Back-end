const { createServer } = require("http");
const app = require('./app');

const server = createServer(app);



module.exports = server;