# Next Agent

Fix the remaining validator-blocking deploy defect for `ITEM-0004`.

Blocking issue:
- [aurora-schema.ts](/home/sundaram/code/multi-tenant-rag-demo/infra/cdk/lib/constructs/aurora-schema.ts#L17) sends one `RDSDataService.executeStatement` request with `sql: props.sql`.
- [shared-stack.ts](/home/sundaram/code/multi-tenant-rag-demo/infra/cdk/lib/shared-stack.ts#L140) and [tenant-stack.ts](/home/sundaram/code/multi-tenant-rag-demo/infra/cdk/lib/tenant-stack.ts#L58) both pass joined multi-statement DDL blobs into that construct.
- The result is synth-successful but deploy-unsafe schema bootstrap. Replace it with a Data-API-compatible execution path that can reliably create the shared schema/tables and per-tenant schema/table/index resources during `cdk deploy --all`.

Keep intact:
- The shared/tenant/UI stack boundary is otherwise acceptable.
- The scheduler fix in [tenant-stack.ts](/home/sundaram/code/multi-tenant-rag-demo/infra/cdk/lib/tenant-stack.ts) and the self-contained Docker asset path in [ui-stack.ts](/home/sundaram/code/multi-tenant-rag-demo/infra/cdk/lib/ui-stack.ts) passed validation and should stay.
- Do not reopen root-workspace/bootstrap changes, separate backend services, or broader app-scope work.

Re-verify after fixes:
- `cd apps/web && npm run build`
- `cd infra/cdk && npm run build`
- `cd infra/cdk && npm run synth`
