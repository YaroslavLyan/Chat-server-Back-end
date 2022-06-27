# Chat-server and client for Morse code communication - Back-end

## Test task - writing a chat server for communication in Morse code. Implementation features:
- messages to the client are entered and displayed only using the Morse code
- communication is only possible between 2 chat subscribers
- communication is possible only between authorized users
- to send a message in the client, you need to specify the name of the recipient and the message
- delimited access level
- the server should not store the history of correspondence
- user management page (add / ban / remove)

## Used:
- Node.js
- Express
- websocket
- DB PostgreSQL
- Knex