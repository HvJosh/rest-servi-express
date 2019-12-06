const color = require('colors');
const express = require('express');
const rutas = require('../routes/index');
const app = express();
const bodyParser = require('body-parser');
require('../server/config/config');

app.set('port', process.env.PORT);

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', rutas);

app.listen(app.get('port'), () => {
    console.log(color.green('Inicio server' + app.get('port')));
});