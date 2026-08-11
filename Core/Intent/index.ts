export interface Intent {
  name: string;
  source?: string;
  payload?: unknown;
}

export const intent = (name: string, payload?: unknown): Intent => ({ name, payload });
