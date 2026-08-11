export interface RuntimeState {
  rail: `Rail.${string}`;
  phase: string;
  anchor: string;
  activeIntent?: string;
}

export const initialState = (anchor = "MythOS"): RuntimeState => ({
  rail: "Rail.001",
  phase: "Canonicalization",
  anchor,
});
