# Architecture

```
 client ──► Azure Container App (Express API) ──► vacancy data (JSON, later PostgreSQL)
                        │
                        └──► Log Analytics
```

## Components

| Component        | Path                       | Notes                                   |
| ---------------- | -------------------------- | --------------------------------------- |
| HTTP API         | `src/server.js`            | Express, JSON only                      |
| Vacancy routes   | `src/routes/vacancies.js`  | Filter by `seniority` and `skill`       |
| Candidate routes | `src/routes/candidates.js` | `POST /candidates/match` returns top 3  |
| Matcher          | `src/services/matcher.js`  | 70% skills, 30% seniority               |
| Infrastructure   | `infra/terraform`          | Staging on Azure Container Apps         |

## Configuration

All configuration is read from environment variables (see `.env.example`).
Secrets are injected from Azure Key Vault and are never stored in the repository.
