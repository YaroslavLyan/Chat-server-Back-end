const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const authRoutes = require('./routes/auth');

const { authMiddleware } = require('./middlewares/auth');

const usersRoutes = require('./routes/users');


const app = express();

app.use(cors())

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.json()); //parse json requests (doesn't work without it)



app.use(helmet());
app.use('/api/', authRoutes);
app.use('/api/', authMiddleware);




app.use('/api/users', usersRoutes);

module.exports = app;