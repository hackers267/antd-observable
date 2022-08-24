import { from } from "rxjs";
import { sum } from "./sum";

describe("sum", function () {
  it("should be right", function (done) {
    from([1, 2, 3, 4])
      .pipe(sum())
      .subscribe((x) => {
        expect(x).toBe(10);
        done();
      });
  });
});
