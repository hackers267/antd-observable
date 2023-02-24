import { catchError, map, of, pipe } from "rxjs";
import { Page, ToPage } from "../types";

export function toPage<T = any>(): ToPage<T> {
  return pipe(
    map((page: Page) => {
      const data = page.list;
      const total = page.total;
      return { success: true, total, data };
    }),
    catchError(() => of({ success: true, total: 0, data: [] }))
  );
}
