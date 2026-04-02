# Next Agent

`ITEM-0005` stays with `ENGINEER` for a narrow revise pass.

- Keep the accepted session/upload isolation logic and the accepted SharedStack/TenantStack/UIStack CDK shape intact.
- Fix the concrete acceptance defect in [chat-assistant.ts](/home/sundaram/code/multi-tenant-rag-demo/apps/web/server/utils/chat-assistant.ts): the local seam currently fabricates a grounded-looking stub response and synthetic citation for arbitrary questions instead of returning a limitation message when no real KB grounding exists.
- Preserve the POST-streaming contract in [chat.post.ts](/home/sundaram/code/multi-tenant-rag-demo/apps/web/server/api/chat.post.ts) and the persistence contract in [chat-store.ts](/home/sundaram/code/multi-tenant-rag-demo/apps/web/server/utils/chat-store.ts).
- Engineer exit criteria:
  - ungrounded/no-evidence chat returns an explicit limitation response rather than a fake grounded answer
  - limitation path does not emit synthetic citations
  - `cd apps/web && npm run build` passes
  - live local check demonstrates the revised no-relevant-content response over POST `/api/chat`
