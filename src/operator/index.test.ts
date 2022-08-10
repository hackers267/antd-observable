import { of, throwError } from "rxjs";
import { pickData, toDesc, toOption, toPage, toVirtualPage } from "./index";

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
  it("with error", function () {
    throwError(() => new Error("Something wrong"))
      .pipe(toVirtualPage())
      .subscribe((x) => {
        expect(x).toStrictEqual({ success: true, total: 0, data: [] });
      });
  });
});

describe("toOption", function () {
  it("should be right", function () {
    const strings = ["a", "b"];
    of(strings)
      .pipe(toOption())
      .subscribe((x) => {
        expect(x).toStrictEqual([
          { value: "a", label: "a" },
          { value: "b", label: "b" },
        ]);
      });
  });

  it("with string param", function () {
    const list = [{ name: "a" }, { name: "b" }];
    of(list)
      .pipe(toOption("name"))
      .subscribe((x) => {
        expect(x).toStrictEqual([
          { value: "a", label: "a" },
          { value: "b", label: "b" },
        ]);
      });
  });

  it("with object param", function () {
    const list = [
      { id: 1, name: "JS" },
      { id: 2, name: "Java" },
    ];
    of(list)
      .pipe(toOption({ value: "id", label: "name" }))
      .subscribe((x) => {
        expect(x).toStrictEqual([
          { value: 1, label: "JS" },
          { value: 2, label: "Java" },
        ]);
      });
  });
});
