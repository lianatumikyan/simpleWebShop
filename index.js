const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const confog = require('./config/database');
const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(confog.uri, { useMongoClient: true })
    .then(() => console.log('connected to db'))
    .catch(err => console.error('could not connect to db'));

app.use(express.static(__dirname + '/client/dist/'));
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(3030, ()=>{
    console.log('listening on port 3030');
});