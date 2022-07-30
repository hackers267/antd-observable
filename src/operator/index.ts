import { catchError, map, of, pipe } from "rxjs";

type Page<T = any> = {
  list: T[];
  total: number;
};

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
export function pickData() {
  return pipe(map<{ data?: any }, any>((x) => x?.data));
}
