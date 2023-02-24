import { of, throwError } from "rxjs";
import { toVirtualPage } from "./toVirtualPage";

describe("toVirtualPage", function () {
  it("should be right", function () {
    of(["hello", "world"])
      .pipe(toVirtualPage())
      .subscribe((x) => {
        expect(x).toStrictEqual({
          success: true,
          total: 2,
          data: ["hello", "world"],
        });
      });
  });
  it("should undefined", function () {
    of(undefined)
      .pipe(toVirtualPage())
      .subscribe((x) => {
        expect(x).toStrictEqual({
          success: true,
          total: 0,
          data: [],
        });
      });
  });
  it("with error", function () {
    throwError(() => new Error("Something wrong"))
      .pipe(toVirtualPage())
      .subscribe((x) => {
        expect(x).toStrictEqual({ success: true, total: 0, data: [] });
      });
  });
});
