import { pipe, reduce } from "rxjs";
import { Sum } from "../types";

export function sum(): Sum {
  return pipe(reduce<number, number>((acc, cur) => acc + cur, 0));
}
