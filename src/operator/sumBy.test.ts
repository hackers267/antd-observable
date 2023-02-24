import { from } from "rxjs";
import { sumBy } from "./sumBy";

describe("sumBy", function () {
  it("should be right", function () {
    const observable = from([
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
    ]);
    observable.pipe(sumBy("value")).subscribe((x) => {
      expect(x).toBe(10);
    });
  });
});
