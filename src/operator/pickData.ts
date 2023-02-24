import { map, pipe } from "rxjs";
import { PickData } from "../types";

export function pickData(): PickData {
  return pipe(map<{ data?: any }, any>((x) => x.data));
}
