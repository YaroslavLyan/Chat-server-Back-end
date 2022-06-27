
const server = require('./server');

const PORT = process.env.PORT || 3006;

require('./chat-server');

async function start() {
    try {
      server.listen(PORT, () => {
        console.log(`Starting server on port ${PORT}`);
      });//listening to the server
    } catch (e) {
      console.log(e);
    }
  }
  
  start();

