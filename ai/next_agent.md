# Next Agent

Active item: `ITEM-0001` is unblocked and ready for implementation.

Required scope for ENGINEER:
- Implement only what fits inside the current engineer contract: scaffold `apps/web` and `infra/cdk`, plus any app-local config files that live inside those directories.
- Build a minimal Nuxt 4 baseline in `apps/web` and placeholder CDK app/stack wiring in `infra/cdk`.
- Keep the stack aligned with the project sources: Nuxt 4 + Nitro server routes, TypeScript, AWS CDK, shared/tenant separation.

Explicitly out of scope in this slice:
- Any root-level `package.json`, lockfile, root `tsconfig`, or other workspace bootstrap files
- Separate backend services, Lambda app logic, chat behavior, uploads, Aurora integration, Bedrock integration, auth implementation, or production-hardening work

Execution note:
- The human already chose `rescope_item_0001`; do not reopen the root-workspace conflict unless a new constraint appears that cannot be solved inside `apps/**` and `infra/**`.
