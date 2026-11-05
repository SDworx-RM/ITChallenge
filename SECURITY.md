# Security policy

## Reporting a vulnerability

Please do not open a public issue. Report vulnerabilities to the SecOps team
through the internal security channel.

## Secrets

- Never commit secrets, tokens or keys. Use `.env` locally and Key Vault elsewhere.
- If a secret was committed, rotate it immediately: removing it in a later
  commit does **not** remove it from the git history.
