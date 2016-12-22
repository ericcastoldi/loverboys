var express = require('express');

app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, '/img')));