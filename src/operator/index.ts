import {
  catchError,
  from,
  map,
  mergeMap,
  Observable,
  of,
  pipe,
  toArray,
  UnaryFunction,
} from "rxjs";

type PageResult<T> = { success: boolean; total: number; data: T[] };

type Page<T = any> = {
  list: T[];
  total: number;
};

type ToPage<T> = UnaryFunction<Observable<Page<T>>, Observable<PageResult<T>>>;
export function toPage<T>(): ToPage<T> {
  return pipe(
    map((page: Page) => {
      const data = page.list;
      const total = page.total;
      return { success: true, total, data };
    }),
    catchError(() => of({ success: true, total: 0, data: [] }))
  );
}

type PickData = UnaryFunction<Observable<{ data?: any }>, Observable<any>>;
export function pickData(): PickData {
  return pipe(map<{ data?: any }, any>((x) => x?.data));
}

type Desc<T> = { data?: T; success: boolean };
type ToDesc<T> = UnaryFunction<Observable<T>, Observable<Desc<T>>>;
export function toDesc<T>(): ToDesc<T> {
  return pipe(
    map((desc: T) => ({ data: desc, success: true })),
    catchError(() => of({ data: undefined, success: true }))
  );
}

type ToVirtualPage<T> = UnaryFunction<
  Observable<T[]>,
  Observable<PageResult<T>>
>;
export function toVirtualPage<T = any>(): ToVirtualPage<T> {
  return pipe(
    map((list: T[]) => {
      const data = list ?? [];
      const total = data.length;
      return { data, total, success: true };
    }),
    catchError(() => of({ data: [], success: true, total: 0 }))
  );
}

type Option = { value: string; label: string };
type ToOption = UnaryFunction<Observable<string[]>, Observable<Option[]>>;
export function toOption(): ToOption {
  return pipe(
    mergeMap((x: string[]) => from(x).pipe(map(string2Option), toArray()))
  );
  function string2Option(x: string) {
    return { value: x, label: x };
  }
}
