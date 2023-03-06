import { catchError, map, of, pipe } from "rxjs";
import { ToVirtualPage } from "../types";

/**
 * 转换为自分页的Page数据
 * @public
 */
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
