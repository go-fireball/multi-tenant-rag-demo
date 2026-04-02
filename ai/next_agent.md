# Next Agent

`SENIOR_JUDGMENTAL_ENGINEER` should perform closeout judgment for `ITEM-0005` and the current backlog state.

- `ITEM-0005` is closed in the backlog based on accepted local validation evidence.
- Do not reopen engineering by default. Only route back if the written evidence contains a concrete contradiction.
- Treat the following as locally proven:
  - `cd apps/web && npm run build`
  - `cd infra/cdk && npm run synth`
  - runtime `TENANT_ID` controls server behavior on the built app
  - cross-user/session/file ownership checks fail closed
  - upload plus attachment-aware follow-up chat works, including a later turn with no `fileIds`
  - the assistant limitation path persists `citations: []` instead of fake grounded citations
- Treat the following as still unproven external gaps unless exercised against real infrastructure:
  - real `cdk deploy --all`
  - real multi-tenant AWS deployments with isolated Bedrock KB/Agent resources
  - real grounded KB answers with source citations from tenant documents
  - live Secrets Manager, Aurora, S3, and Google OAuth behavior in AWS
