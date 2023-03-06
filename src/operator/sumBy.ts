import { map, pipe } from "rxjs";
import { sum } from "./sum";
import { SumBy } from "../types";

/**
 * 根据提供的key求和
 * @public
 * @param key - 需要求和的key
 */
export function sumBy(key: string): SumBy {
  return pipe(
    map<Record<string, any>, number>((x) => x[key]),
    sum()
  );
}
