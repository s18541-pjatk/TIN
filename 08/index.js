const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({extended: true}))
app.set('views', '/views');
app.set('view engine', 'pug');
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/views/form.html');
})

app.post('/formdata', (req, res) => {
    res.render(__dirname + '/views/formdata.pug', {
        title: "formdata",
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });
})

app.post('/jsondata', (req, res) => {
    res.render(__dirname + '/views/jsondata.pug', {
        title: 'jsondata',
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})