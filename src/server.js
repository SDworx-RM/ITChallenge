const express = require('express');
const vacancies = require('./routes/vacancies');
const candidates = require('./routes/candidates');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/vacancies', vacancies);
app.use('/candidates', candidates);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`talent-pipeline listening on :${port}`);
});
