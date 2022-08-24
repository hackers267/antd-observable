import { pipe, reduce } from "rxjs";

export function sum() {
  return pipe(reduce<number, number>((acc, cur) => acc + cur, 0));
}
