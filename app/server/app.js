const express = require('express');

const app = express();

const serverRenderer = require('../dist-server/').serverRenderer;

app.get(/\.(js|css|map|ico)$/, express.static('dist'));
app.use(serverRenderer());
//app.get('/*', serverRenderer());

module.exports = app;
