
var express = require('express'),
    app = express(),
    root = './src';

app.use(express.static(root));
app.listen(process.env.PORT || 3700);
