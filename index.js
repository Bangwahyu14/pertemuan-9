const express = require('express');
const connectDatabase = require('./config/db');


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

async function startServer() {
    await connectDatabase();
    app.listen(port, () => {
        console.log( `server running at http://localhost:${PORT}`);
    });
    
}

startServer();