const express = require('express');
//const morgan = require('morgan');
const app = express();
const path = require('path');

// settings - configuraciones
app.set('port', 4000); // set the port - setea el puerto
app.set('views', path.join(__dirname, 'views')); // set app.get
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); // es como los templates de React

// middlewares - funciones de rutas

// routes - rutas del serv
app.use(require('./routes/index'));

// static files - archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

// listening the server - escuchando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });