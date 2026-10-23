const express = require('express');
const vacancies = require('../../data/vacancies.json');
const { rankVacancies } = require('../services/matcher');

const router = express.Router();
const SENIORITY = ['junior', 'medior', 'senior'];

function validate(body) {
  const errors = [];
  if (!body || typeof body !== 'object') return ['Body must be a JSON object'];
  if (!body.name) errors.push('name is required');
  if (!SENIORITY.includes(body.seniority)) {
    errors.push(`seniority must be one of: ${SENIORITY.join(', ')}`);
  }
  if (!Array.isArray(body.skills)) errors.push('skills must be an array');
  return errors;
}

router.post('/match', (req, res) => {
  const errors = validate(req.body);
  if (errors.length) {
    return res.status(422).json({ errors });
  }

  const ranked = rankVacancies(req.body, vacancies).slice(0, 3);
  res.json({
    data: ranked.map(({ vacancy, score }) => ({
      id: vacancy.id,
      title: vacancy.title,
      score,
    })),
  });
});

module.exports = router;
