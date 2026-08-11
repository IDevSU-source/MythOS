export interface MythOSEvent<T = unknown> {
  id: string;
  type: string;
  timestamp: string;
  payload: T;
}

export const createEvent = <T>(type: string, payload: T): MythOSEvent<T> => ({
  id: crypto.randomUUID(),
  type,
  timestamp: new Date().toISOString(),
  payload,
});
