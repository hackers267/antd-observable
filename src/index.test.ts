import { sum } from "./index";

describe("sum", function () {
  it("should right", function () {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});
