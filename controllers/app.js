const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/configuration');
const app = express();
const port = process.env.PORT || 3000;


//default GET request
app.get(['/', '/index.html'], function (req, res) {
    res.send(`TheGathering API is up Env: ${process.env.NODE_ENV}`);
});

app.set('port', port);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser());

//initiate user controller
let users = require('./controllers/users');
app.use('/users', users);


//initiate web hooks
let webhooks = require('./controllers/webhooks');
app.use('/webhooks', webhooks);



app.listen(port, function () {
    console.log('Server started');
});

module.exports = app;