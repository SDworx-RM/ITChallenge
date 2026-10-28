const express = require('express');
const config = require('./config');
const vacancies = require('./routes/vacancies');
const candidates = require('./routes/candidates');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/vacancies', vacancies);
app.use('/candidates', candidates);

app.listen(config.port, () => {
  console.log(`talent-pipeline listening on :${config.port}`);
});
