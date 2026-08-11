import { MythOSKernel } from "../Kernel/index.js";

export interface RuntimeContext {
  kernel: MythOSKernel;
}

export const createRuntime = (anchor = "MythOS"): RuntimeContext => ({
  kernel: new MythOSKernel(anchor),
});
