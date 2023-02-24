import { catchError, map, of, pipe } from "rxjs";
import { ToVirtualPage } from "../types";

export function toVirtualPage<T = any>(): ToVirtualPage<T> {
  return pipe(
    map((list?: T[]) => {
      const data = list ?? [];
      const total = data.length;
      return { data, total, success: true };
    }),
    catchError(() => of({ data: [], success: true, total: 0 }))
  );
}
