import { Option, ToOptionPipe } from "../types";
import { from, map, mergeMap, pipe, toArray } from "rxjs";

export function toOption(): ToOptionPipe<string>;
export function toOption(field: string): ToOptionPipe;
export function toOption<T>(config: Option): ToOptionPipe<T>;
export function toOption<T = any>(field?: string | Option) {
  if (typeof field === "string") {
    return pipe(
      mergeMap((x: any[]) =>
        from(x).pipe(
          map((x) => x[field]),
          map(string2Option),
          toArray()
        )
      )
    );
  } else if (typeof field === "object") {
    return pipe(
      mergeMap((x: any[]) =>
        from(x).pipe(
          map((item) => ({
            value: item[field.value],
            label: item[field.label],
          })),
          toArray()
        )
      )
    );
  }
  return pipe(
    mergeMap((x: string[]) => from(x).pipe(map(string2Option), toArray()))
  );

  function string2Option(x: string) {
    return { value: x, label: x };
  }
}
