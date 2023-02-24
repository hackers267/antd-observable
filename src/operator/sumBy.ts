import { map, pipe } from "rxjs";
import { sum } from "./sum";

export function sumBy(key: string) {
  return pipe(
    map<Record<string, any>, number>((x) => x[key]),
    sum()
  );
}
