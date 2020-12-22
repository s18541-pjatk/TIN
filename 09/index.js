const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
const { check, validationResult } = require('express-validator');

app.post('/9a', [check('number1').isNumeric(), check('number2').isNumeric()], (req, res) => {

    if (!validationResult(req).isEmpty()) {
        res.status(400);
        res.json({ error: "Bad Request!" });
    }
    else if (req.body.operator === '+') {
        res.status(200);
        res.json({ result: (parseInt(req.body.number1)+parseInt(req.body.number2)) });
    } else if (req.body.operator === '-') {
        res.status(200);
        res.json({ result: (parseInt(req.body.number1)-parseInt(req.body.number2)) });
    } else if (req.body.operator === '*') {
        res.status(200);
        res.json({ result: (parseInt(req.body.number1)*parseInt(req.body.number2)) });
    } else if (req.body.operator === '/') {
        res.status(200);
        res.json({ result: (parseInt(req.body.number1)/parseInt(req.body.number2)) });
    } else {
        res.status(400);
        res.json({ error: "Bad Request!" });
    }

});

app.get("/9b", function(req, res) {
    res.status(200);
    res.sendFile(__dirname + "/index.html");
});

app.post("/9b", function(req, res) {

    if (!req.body) {
        res.status(400);
        res.json({ error: "Bad Request!" });
    }
    res.json(req.body);

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})