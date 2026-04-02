# Next Agent

`ITEM-0004` remains active as a narrow revise pass for ENGINEER.

- Do not reopen stack design. Preserve the accepted SharedStack/TenantStack/UIStack split, the ordered-statement Aurora custom resource, the scheduler approach, and the container-asset UI deploy path.
- Fix only the shared Aurora `app` schema in [shared-stack.ts](/home/sundaram/code/multi-tenant-rag-demo/infra/cdk/lib/shared-stack.ts) so it matches the existing Nuxt persistence contract in [chat-store.ts](/home/sundaram/code/multi-tenant-rag-demo/apps/web/server/utils/chat-store.ts).
- Required DDL alignment:
  - `app.sessions`: primary key column `id`
  - `app.messages`: `id`, `tenant_id`, `session_id`, `user_id`, `role`, `content`, `citations`, `attached_files`, `created_at`
  - `app.session_files`: include both `storage_bucket` and `storage_key`
  - keep compatible foreign keys and tenant/user ownership fields
- Do not change the app contract in `apps/web` to match the bad DDL.
- Re-run `cd apps/web && npm run build` and `cd infra/cdk && npm run synth` before handing to `VALIDATOR`.
