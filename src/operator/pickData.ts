import { map, pipe } from "rxjs";

export function pickData() {
  return pipe(map<{ data?: any }, any>((x) => x?.data));
}
