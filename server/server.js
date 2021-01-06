
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./config/config');


app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.get('/usuario', function(req, resp) {
  resp.json('get Usuario');
});

app.post('/usuario', function(req, resp) {
  let body = req.body;

  if(body.nombre === undefined) {
    resp.status(400).json({
      ok: false,
      mensaje: 'El nombre es necesario'
    });

  } else {
    resp.json({
      persona: body
    });
  }
});

app.put('/usuario/:id', function(req, resp) {
  let id = req.params.id
  resp.json({
    id
  });
});

app.delete('/usuario', function(req, resp) {
  resp.json('delete Usuario');
});


app.listen(process.env.PORT, () => {
  console.log('Escuchando desde el puerto 3000');
});
