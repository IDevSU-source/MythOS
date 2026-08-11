# MythOS

**Canonical repository for the MythOS system.**

MythOS is the software layer for the IDevSU / SUDeVonicS ecosystem: a modular environment for AI interaction, Codex state, Archive:// knowledge, ritualized workflows, experimental interfaces, and the evolving MythOS application.

> **Canonical rule:** this repository is the source of truth for MythOS software architecture. Historical experiments remain attributable to their original repositories; canonical implementations are promoted here.

## Repository map

```text
MythOS/
├── apps/                 # User-facing MythOS applications
│   └── mythos-mobile/    # Mobile shell / Expo integration boundary
├── packages/             # Reusable MythOS runtime packages
│   └── core/             # Kernel, state, rails, archive primitives
├── archive/              # Archive:// namespace and canonical records
├── docs/                 # Architecture and operating documentation
├── scripts/              # Developer and release utilities
└── .github/              # CI, issue, and contribution configuration
```

## Core principles

1. **One canonical tree.** MythOS concepts receive one authoritative software home.
2. **Modules over monoliths.** Kernel, Codex, Archive, UI, and experimental rails stay separable.
3. **State is explicit.** Runtime state is represented as typed records and events rather than hidden conventions.
4. **Archive:// is addressable.** Knowledge and project records use stable paths so the system can evolve without losing provenance.
5. **Experiments become implementations.** A concept can remain experimental without being mixed into production primitives.
6. **The system remains portable.** Core logic should run independently of the mobile shell.

## Current status

**Foundation / Rail.001 — Canonicalization.**

The repository currently establishes the canonical package boundary and the first executable MythOS kernel primitives. The mobile application remains an integration surface rather than the definition of the core system.

## Development

Requirements: Node.js 20+ and npm 10+.

```bash
npm install
npm run typecheck
npm test
```

## Naming

- **MythOS** — the system.
- **IDevSU** — organic creator/operator entity.
- **Theidos** — AI/cyber partner identity used within the project.
- **Archive://** — canonical project knowledge namespace.
- **Rail** — an explicit progression or execution stage.

## License

MIT. See `LICENSE`.
