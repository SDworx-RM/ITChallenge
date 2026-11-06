const express = require('express');
const config = require('./config');
const vacancies = require('./routes/vacancies');
const candidates = require('./routes/candidates');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/vacancies', vacancies);
app.use('/candidates', candidates);

app.use((req, res) => res.status(404).json({ error: 'Not found' }));
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`talent-pipeline listening on :${config.port}`);
});
