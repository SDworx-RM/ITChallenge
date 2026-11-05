# talent-pipeline

Internal matching API for the IT recruitment team. It scores candidates
against open vacancies in DevOps, software development and cyber security.

## Getting started

```bash
npm install
npm run dev
```

The API runs on `http://localhost:3000`.

## Docker

```bash
cp .env.example .env
docker compose up --build
```

## API

| Method | Path                | Description                         |
| ------ | ------------------- | ----------------------------------- |
| GET    | `/health`           | Liveness check                      |
| GET    | `/vacancies`        | List vacancies (`?seniority=&skill=`) |
| GET    | `/vacancies/:id`    | Vacancy details                     |
| POST   | `/candidates/match` | Top 3 vacancies for a candidate     |

See [docs/architecture.md](docs/architecture.md) for the bigger picture.
