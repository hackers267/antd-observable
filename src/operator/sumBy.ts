import { map, pipe } from "rxjs";
import { sum } from "./sum";
import { SumBy } from "../types";

export function sumBy(key: string): SumBy {
  return pipe(
    map<Record<string, any>, number>((x) => x[key]),
    sum()
  );
}
