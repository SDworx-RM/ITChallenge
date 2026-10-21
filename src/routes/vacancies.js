const express = require('express');
const vacancies = require('../../data/vacancies.json');

const router = express.Router();

router.get('/', (req, res) => {
  const { seniority, skill } = req.query;

  let result = vacancies;
  if (seniority) {
    result = result.filter((v) => v.seniority === seniority);
  }
  if (skill) {
    result = result.filter((v) => v.skills.includes(String(skill).toLowerCase()));
  }

  res.json({ data: result, total: result.length });
});

router.get('/:id', (req, res) => {
  const vacancy = vacancies.find((v) => v.id === req.params.id);
  if (!vacancy) {
    return res.status(404).json({ error: 'Vacancy not found' });
  }
  res.json({ data: vacancy });
});

module.exports = router;
