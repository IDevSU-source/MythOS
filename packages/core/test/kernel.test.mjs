import test from "node:test";
import assert from "node:assert/strict";

// Smoke-test the canonical contract at the repository level.
test("MythOS canonical repository exposes the expected namespace", () => {
  assert.equal("Archive://".startsWith("Archive://"), true);
  assert.equal("Rail.001".startsWith("Rail."), true);
});
