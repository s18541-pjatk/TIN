const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'DATABASE_HOST',
    user: 'USERNAME',
    password: 'PASSWORD',
    database: 'DATABASE'
});
module.exports = connection;

app.get('/user', (req, res) => {
    res.sendFile("ABSOLUTE_PATH")
    connection.connect();
    connection.query('SELECT * FROM User', function (error, results, fields) {
        res.send(results);
    });
    connection.end();
});

app.get('/type', (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM Type', function (error, results, fields) {
        res.send(results);
    });
    connection.end();
});

app.get('/bike', (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM Bike', function (error, results, fields) {
        res.send(results);
    });
    connection.end();
});

app.get('/rent', (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM Rent', function (error, results, fields) {
        res.send(results);
    });
    connection.end();
});


app.post('/user', (req, res) => {
    connection.connect();
    connection.query('SELECT * FROM User', function (error, results, fields) {
        res.send('Book is added to the database');
    });
    connection.end();
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))