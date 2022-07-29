import { of } from "rxjs";
import { pickData } from "./index";

describe("pickData", function () {
  it("should be right", function () {
    const observable = of({ success: true, data: "Hello" });
    observable.pipe(pickData()).subscribe((x) => {
      expect(x).toBe("Hello");
    });
  });
});
