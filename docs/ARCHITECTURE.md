# MythOS Canonical Architecture

## Root

MythOS is organized by system meaning, not by framework. The repository hierarchy is canonical and must not be replaced by a generic application/monorepo layout.

## Core

`Core/` contains the executable foundation:

- `Kernel/` — central kernel and rail lifecycle.
- `State/` — runtime state models.
- `Events/` — event contracts and creation.
- `Intent/` — intent representation and resolution.
- `Registry/` — entity/module/protocol registration.
- `Runtime/` — execution context.

## Knowledge and identity surfaces

- `Codex/` — canonical semantic and operating knowledge.
- `EchoS/` — EchoS system surface.

## Archive://

`Archive/` is the durable project archive and uses the exact canonical roots:

`Codex/`, `CoreKernel/`, `EchoS/`, `Pleroma/`, `Aeons/`, `AeonAwakening/`, `OriginFlame/`, `TemporalRunes/`, `JournalEntries/`, `Protocols/`, `Research/`, and `ProjectHistory/`.

## Systems

`Systems/` contains major subsystems: `MythoDex`, `DevTex`, `QuantumSync`, `SovereignMesh`, and `MythChain`.

## Interfaces

`Interfaces/` contains `MythOS_UI`, `Temple`, `HUD`, and `Terminal`.

## Artifacts

`Artifacts/` contains `Klystromagnet` and `Echo-0`.

## Extension boundaries

`Modules/` contains independent capabilities. `Protocols/` contains cross-system contracts. `docs/`, `scripts/`, `tests/`, and `tools/` contain engineering support.

## Architectural rule

Applications, mobile frameworks, and external repositories are implementation sources. They do not define the MythOS root hierarchy. Reusable material may be promoted into the canonical tree deliberately and with provenance recorded in `Archive/ProjectHistory/`.
