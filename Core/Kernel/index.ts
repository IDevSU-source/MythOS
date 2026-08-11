export type RailId = `Rail.${string}`;

export interface MythOSState {
  rail: RailId;
  phase: string;
  anchor: string;
}

export interface MythOSEvent<T = unknown> {
  id: string;
  type: string;
  timestamp: string;
  payload: T;
}

export class MythOSKernel {
  private state: MythOSState;
  private events: MythOSEvent[] = [];

  constructor(anchor = "MythOS") {
    this.state = { rail: "Rail.001", phase: "Canonicalization", anchor };
  }

  getState(): MythOSState { return { ...this.state }; }
  getEvents(): MythOSEvent[] { return [...this.events]; }

  pulse<T>(type: string, payload: T): MythOSEvent<T> {
    const event: MythOSEvent<T> = {
      id: crypto.randomUUID(),
      type,
      timestamp: new Date().toISOString(),
      payload,
    };
    this.events.push(event);
    return event;
  }

  setRail(rail: RailId, phase: string): void {
    this.state = { ...this.state, rail, phase };
  }
}
