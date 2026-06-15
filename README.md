# SalvoriuS Portfolio

Foundation workspace for a prerendered Angular portfolio and a minimal Spring Boot contact API.

## Requirements

- Node.js >=24.15.0 <25
- pnpm 11.6.0
- Java 17
- Maven 3.9.6 or newer

## Quality checks

```text
pnpm --dir apps/web check
mvn -f apps/contact-api/pom.xml verify
```

The current slice contains foundation routes, health probes, tests, and infrastructure skeletons only.
