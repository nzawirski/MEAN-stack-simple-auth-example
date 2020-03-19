const express = require('express')
const cors = require('cors');
const config = require('./config/config')
const db = require('./db')

const app = express();
const http = require('http').createServer(app);

const port = config.port;
app.use(express.json());
app.use(cors());

// db
db.connect().catch((e)=>console.error('Error connecting to database ' + e))

// api
app.use('/api/users', require('./controllers/user'))
app.use('/api/login', require('./controllers/login'))
app.use('/api/me', require('./controllers/me'))

// start
http.listen(port, () => {
    console.log(`Server Started on port ${port}`);
})