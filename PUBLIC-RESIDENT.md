# Public Resident boundary

The portfolio is a static GitHub Pages site. It is not connected to the
operator's Covert workstation.

The current public surface is intentionally read-only:

- it may explain public documentation, architecture, releases, and
  contribution paths;
- it must not access private Memory, project files, Ghost records, provider
  credentials, terminal tools, Harness, or Execution Authority;
- it must not present a placeholder response as a live Resident response.

## Future API contract

If a separately deployed public backend is added, the browser may call only a
public API such as:

```text
POST /v1/public/resident/messages
Content-Type: application/json

{
  "message": "What is Covert?",
  "conversation_id": "optional-public-session-id"
}
```

The response must be sourced only from an explicitly published documentation
index and must expose a bounded public-session identifier. It must never carry
operator session credentials or a workstation connection token.

The backend must enforce:

1. public-document retrieval only;
2. no filesystem, project-memory, terminal, Harness, Authority, or provider
   credential access;
3. rate limiting and abuse controls;
4. secret-safe logs with no raw prompts retained by default;
5. truthful unavailable/error responses when the public model or index is not
   ready.

Until those controls are deployed and independently tested, the site displays
`PUBLIC DEMO: COMING SOON` and provides a local public-guide search instead.
