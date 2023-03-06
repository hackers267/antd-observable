import { pipe, reduce } from "rxjs";
import { Sum } from "../types";

/**
 * 求和
 * @public
 */
export function sum(): Sum {
  return pipe(reduce<number, number>((acc, cur) => acc + cur, 0));
}
