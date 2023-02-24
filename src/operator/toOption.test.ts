import { of } from "rxjs";
import { toOption } from "./toOption";

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
