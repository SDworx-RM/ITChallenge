const test = require('node:test');
const assert = require('node:assert/strict');
const { scoreCandidate, rankVacancies } = require('../src/services/matcher');
const vacancies = require('../data/vacancies.json');

const devops = {
  name: 'Test Candidate',
  seniority: 'medior',
  skills: ['Kubernetes', 'Terraform', 'Azure', 'Bash'],
};

test('scores a strong DevOps match highly', () => {
  const vacancy = vacancies.find((v) => v.id === 'VAC-1042');
  assert.ok(scoreCandidate(devops, vacancy) >= 80);
});

test('ranks the DevOps vacancy first for a DevOps candidate', () => {
  const [best] = rankVacancies(devops, vacancies);
  assert.equal(best.vacancy.id, 'VAC-1042');
});
