import { of } from "rxjs";
import { pickData } from "./pickData";

describe("pickData", function () {
  it("should be right", function (done) {
    const observable = of({ success: true, data: "Hello" });
    observable.pipe(pickData()).subscribe((x) => {
      expect(x).toBe("Hello");
      done();
    });
  });
  it("should with args", function (done) {
    const observable = of({ success: true, result: "Hello" });
    observable.pipe(pickData("result")).subscribe((v) => {
      expect(v).toBe("Hello");
      done();
    });
  });
});
