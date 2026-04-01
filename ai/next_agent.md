# Next Agent

Active item: `ITEM-0001` remains the repo baseline scaffold and is now ready for implementation.

Implementation brief:
- Use `ai/goal.yaml`, `ai/prd.yaml`, and `ai/decision-lock.yaml` as the source of truth. Ignore generic defaults that conflict with them.
- Scaffold a root `npm` workspace with shared TypeScript/base config and two packages only: `apps/web` and `infra/cdk`.
- In `apps/web`, create the minimal Nuxt 4 baseline needed to prove the app boots with TypeScript and supports future `server/api` growth. Keep routes and UI intentionally skeletal.
- In `infra/cdk`, create placeholder CDK app/stack wiring that reflects the target shared-vs-tenant stack split without attempting real AWS resource implementation yet.
- Keep all naming and layout future-proof for the PoC architecture: one application image, per-tenant deployment config, and server routes as the only backend surface.

Out of bounds for this item:
- No separate API service or alternate backend runtime.
- No Aurora client, schema, or migration work.
- No Bedrock agent/KB integration.
- No upload flow, session persistence, auth implementation, or streaming chat feature logic.
- No production-grade ECS, networking, secrets, or database provisioning detail beyond placeholder stack structure.

Definition of a good result:
- The repo installs as a workspace from the root.
- `apps/web` and `infra/cdk` both exist with coherent TypeScript scaffolding.
- Future items can add chat routes, data access, and AWS resources without revisiting the repo layout or core stack choices.
