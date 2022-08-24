import { toDesc } from "./toDesc";
import { of, throwError } from "rxjs";

describe("toDesc", function () {
  it("should be right", function (done) {
    of({})
      .pipe(toDesc())
      .subscribe((x) => {
        expect(x).toStrictEqual({ data: {}, success: true });
        done();
      });
  });
  it("with error", function (done) {
    throwError(() => new Error())
      .pipe(toDesc())
      .subscribe((x) => {
        expect(x).toStrictEqual({ data: undefined, success: true });
        done();
      });
  });
});
