export interface RegistryEntry {
  id: string;
  kind: string;
  path: string;
}

export class Registry {
  private entries = new Map<string, RegistryEntry>();
  register(entry: RegistryEntry): void { this.entries.set(entry.id, entry); }
  get(id: string): RegistryEntry | undefined { return this.entries.get(id); }
  all(): RegistryEntry[] { return [...this.entries.values()]; }
}
