const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Site rodando em http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.render('../views/login');
});

app.get('/cadastrar-se', (req, res) => {
  res.render('../views/cadastrar-se');
});

app.get('/home', (req, res) => {
  res.render('../views/home');
});

app.get('/perfil', (req, res) => {
  res.render('../views/perfil');
});

app.get('/fazer-aporte', (req, res) => {
  res.render('../views/fazer-aporte');
});

app.get('/fazer-resgate', (req, res) => {
  res.render('../views/fazer-resgate');
});

app.get('/comprar-criptomoeda', (req, res) => {
  res.render('../views/comprar-criptomoeda');
});

app.get('/vender-criptomoeda', (req, res) => {
  res.render('../views/vender-criptomoeda');
});