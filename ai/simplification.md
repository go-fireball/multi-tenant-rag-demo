# Simplification Guidance

1. Prefer straightforward modular monolith structures.
2. Keep interfaces small and explicit.
3. Add abstractions only when repeated pain is proven.
4. Preserve existing business behavior unless requirements say otherwise.
5. Bias toward maintainability over novelty.
6. For `ITEM-0001`, create only the minimum repo baseline: root workspace, `apps/web`, `infra/cdk`, and shared TypeScript config.
7. Use the simplest workspace tooling that works out of the box in this empty repo; prefer `npm` workspaces over adding extra orchestration.
8. Nuxt server routes are the backend boundary for this PoC; do not scaffold a second service, RPC layer, or Lambda app runtime.
9. CDK code in this slice should prove stack shape and tenant/shared separation only; placeholders are correct, real AWS resource wiring is premature here.
10. Authentication, Aurora access, Bedrock calls, uploads, streaming chat behavior, and production deployment polish all belong to later items, not this scaffold.
