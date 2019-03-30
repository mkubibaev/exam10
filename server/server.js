const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const news = require('./app/news');

const app = express();
const port = 8000;

const connection = mysql.createConnection({
    'host'     : 'localhost',
    'port'     : '3306',
    'user'     : 'root',
    'password' : '55558888',
    'database' : 'exam10_murat_kubibaev',
});

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use('/news', news(connection));


connection.connect(err => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    });
});
