import { catchError, map, of, pipe } from "rxjs";
import { Page } from "../types";

export function toPage() {
  return pipe(
    map((page: Page) => {
      const data = page.list;
      const total = page.total;
      return { success: true, total, data };
    }),
    catchError(() => of({ success: true, total: 0, data: [] }))
  );
}
