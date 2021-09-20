// Security, performance, edge cases
const express = require('express');

const app = express();

// const slash = (req, res) => {
//     res.send("Hello");
// };
app.get('/', (req, res) => {
    // res.send({a:1});
    // res.send(['a',2,'b']);
    // res.send({a:1, b:'ab'});
    // res.sendStatus(500);
    /*
    res.sendStatus(201); //updated successfully(created)
    res.sendStatus(400); //Front end error(Bad request)
    res.sendStatus(500); //server side error
    */
    // res.json({a:1});
    res.status(200).send("Hello");
});
// app.post('/', slash);
// app.put('/', slash);
// app.delete('/', slash);
app.get('/products', (req, res) => {
    // req.query = {
    //     firstname : "Rahul",
    //     lastname : "Kumar"
    // }
    res.send(req.query.lastname);
});
app.listen(5000);