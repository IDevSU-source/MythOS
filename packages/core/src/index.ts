export type RailId = `Rail.${string}`;

export interface MythOSEvent<T = unknown> {
  id: string;
  type: string;
  timestamp: string;
  payload: T;
}

export interface MythOSState {
  rail: RailId;
  phase: string;
  anchor: string;
  events: MythOSEvent[];
}

export interface ArchiveRecord<T = unknown> {
  path: string;
  kind: string;
  version: number;
  createdAt: string;
  data: T;
}

export class MythOSKernel {
  private state: MythOSState;

  constructor(anchor = "MythOS") {
    this.state = {
      rail: "Rail.001",
      phase: "canonicalization",
      anchor,
      events: []
    };
  }

  getState(): MythOSState {
    return structuredClone(this.state);
  }

  pulse<T>(type: string, payload: T): MythOSEvent<T> {
    const event: MythOSEvent<T> = {
      id: crypto.randomUUID(),
      type,
      timestamp: new Date().toISOString(),
      payload
    };
    this.state.events.push(event);
    return event;
  }

  setRail(rail: RailId, phase: string): void {
    this.state.rail = rail;
    this.state.phase = phase;
  }
}

export function createArchiveRecord<T>(path: string, kind: string, data: T): ArchiveRecord<T> {
  if (!path.startsWith("Archive://")) {
    throw new Error(`Archive path must begin with Archive://: ${path}`);
  }

  return {
    path,
    kind,
    version: 1,
    createdAt: new Date().toISOString(),
    data
  };
}
