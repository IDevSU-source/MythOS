# MythOS Architecture

## Canonical layers

### 1. Core Kernel
Owns identity, rails, events, state transitions, and shared contracts.

### 2. Archive
Owns durable knowledge and provenance under the `Archive://` namespace.

### 3. Codex
Owns structured operating knowledge, protocols, and semantic definitions that can be consumed by the runtime.

### 4. Modules
Own independent capabilities such as interfaces, synchronization, experimental devices, and integrations.

### 5. Applications
Provide concrete user-facing shells. The current mobile application lineage is `MythOS-HackTheWorld`; it is an application source, not the canonical system root.

## Migration rule

Material from `IDevSU-source/MythOS-HackTheWorld` is treated as an upstream application lineage. Promote reusable architecture and content into this repository deliberately; do not copy the entire application tree into the kernel.

The prior application established terminal-style onboarding, a dashboard, chapter map/reader, checkpoints, lexicon, devlogs, profile, XP, badges, streaks, and mobile UI conventions. These become migration targets for the canonical application layer.

## Rail model

A Rail is a named progression stage. Rail identifiers are stable and human-readable. A Rail may contain multiple phases and events.

The first canonical rail is:

`Rail.001 — Canonicalization`

## Design constraint

MythOS should be able to evolve from a mobile application into a broader operating environment without coupling the kernel to Expo, React Native, Android, or any single UI runtime.
