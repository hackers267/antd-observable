import { catchError, map, of, pipe } from "rxjs";
import { ToDesc } from "../types";

export function toDesc<T>(): ToDesc<T> {
  return pipe(
    map((desc) => ({ data: desc, success: true })),
    catchError(() => of({ data: undefined, success: true }))
  );
}
