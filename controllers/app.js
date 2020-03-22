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

//initiate conversation_questions controller
let conversation_questions = require('./controllers/conversation_questions');
app.use('/conversation_questions', conversation_questions);

//initiate neighbourhoods controller
let neighbourhoods = require('./controllers/neighbourhoods');
app.use('/neighbourhoods', neighbourhoods);

//initiate characteristics controller
let characteristics = require('./controllers/characteristics');
app.use('/characteristics', characteristics);

//initiate gathering controller
let gatherings = require('./controllers/gatherings');
app.use('/gatherings', gatherings);

//initiate story teller controller
let story_tellers = require('./controllers/story_tellers');
app.use('/story_tellers', story_tellers);

//initiate web hooks
let webhooks = require('./controllers/webhooks');
app.use('/webhooks', webhooks);

//initiate checkins controller
let checkins = require('./controllers/checkins');
app.use('/checkins', checkins);

//initiate Conversation Partners controller
let conversationPartners = require('./controllers/conversation_partners');
app.use('/conversation_partners', conversationPartners);

//initiate QR Code controller
let qrCode = require('./controllers/qr_code');
app.use('/qr_code', qrCode);

//initiate leads controller
let leads = require('./controllers/leads');
app.use('/leads', leads);

app.listen(port, function () {
    console.log('Server started');
});

module.exports = app;