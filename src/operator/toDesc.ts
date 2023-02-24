import { catchError, map, of, pipe } from "rxjs";

export function toDesc() {
  return pipe(
    map((desc) => ({ data: desc, success: true })),
    catchError(() => of({ data: undefined, success: true }))
  );
}
