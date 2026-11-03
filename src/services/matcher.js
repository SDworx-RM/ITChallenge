const SENIORITY = ['junior', 'medior', 'senior'];

// Core skills matter more than an exact seniority match.
const SKILL_WEIGHT = 0.7;
const SENIORITY_WEIGHT = 0.3;

/**
 * Score a candidate against a vacancy. Returns a number between 0 and 100.
 */
function scoreCandidate(candidate, vacancy) {
  const candidateSkills = new Set(candidate.skills.map((s) => s.toLowerCase()));
  const matched = vacancy.skills.filter((s) => candidateSkills.has(s));
  const skillScore = matched.length / vacancy.skills.length;

  const gap = Math.abs(
    SENIORITY.indexOf(candidate.seniority) - SENIORITY.indexOf(vacancy.seniority)
  );
  const seniorityScore = 1 - gap / (SENIORITY.length - 1);

  return Math.round((skillScore * SKILL_WEIGHT + seniorityScore * SENIORITY_WEIGHT) * 100);
}

function rankVacancies(candidate, vacancies) {
  return vacancies
    .map((vacancy) => ({ vacancy, score: scoreCandidate(candidate, vacancy) }))
    .sort((a, b) => b.score - a.score);
}

module.exports = { scoreCandidate, rankVacancies };
