import { of, throwError } from "rxjs";
import { pickData, toPage } from "./index";

describe("pickData", function () {
  it("should be right", function () {
    const observable = of({ success: true, data: "Hello" });
    observable.pipe(pickData()).subscribe((x) => {
      expect(x).toBe("Hello");
    });
  });
});

describe("toPage", function () {
  it("should be right", function () {
    const observable = of({ list: [], total: 34 });
    observable.pipe(toPage()).subscribe((x) => {
      expect(x).toStrictEqual({ total: 34, data: [], success: true });
    });
  });
  it("should be with error", function () {
    const observable = throwError(() => {
      return new Error("Something is wrong!");
    });
    observable.pipe(toPage()).subscribe((x) => {
      expect(x).toStrictEqual({ total: 0, data: [], success: true });
    });
  });
});
