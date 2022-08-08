import { catchError, from, map, mergeMap, of, pipe, toArray } from "rxjs";

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

export function toDesc() {
  return pipe(
    map((desc) => ({ data: desc, success: true })),
    catchError(() => of({ data: undefined, success: true }))
  );
}

export function toVirtualPage<T = any>() {
  return pipe(
    map((list: T[]) => {
      const data = list ?? [];
      const total = data.length;
      return { data, total, success: true };
    }),
    catchError(() => of({ data: [], success: true, total: 0 }))
  );
}

export function toOption() {
  return pipe(
    mergeMap((x: string[]) => from(x).pipe(map(string2Option), toArray()))
  );
  function string2Option(x: string) {
    return { value: x, label: x };
  }
}
