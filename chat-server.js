const {WebSocketServer} = require('ws');
const server = require('./server');
const wss = new WebSocketServer({ server, path: '/ws' });

wss.on('connection', function connection(ws) {

  ws.on('message', function message(data) {
    const obj = JSON.parse(data)
    
    if (obj.status === 'auth') {
      ws.id = obj.id;
    }else if (obj.status === 'message') {
      const arrClients = wss.clients;
      for (let item of arrClients) {
        if (item.id == obj.to) {
          item.send(JSON.stringify(obj))
        }        
      };
    };

  });

});







module.exports = wss;