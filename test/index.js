import assert from "power-assert";
import index from "../src";
import PinkNoiseSource from "../src/PinkNoiseSource";

describe("index", () => {
  it("exports", () => {
    assert(index === PinkNoiseSource);
  });
});
