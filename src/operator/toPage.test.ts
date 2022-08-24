import { of, throwError } from "rxjs";
import { toPage } from "./toPage";

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
