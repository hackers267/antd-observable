import { catchError, map, of, pipe } from "rxjs";

export function toVirtualPage<T = any>() {
  return pipe(
    map((list?: T[]) => {
      const data = list ?? [];
      const total = data.length;
      return { data, total, success: true };
    }),
    catchError(() => of({ data: [], success: true, total: 0 }))
  );
}
