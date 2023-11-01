import { catchError, map, of, pipe } from "rxjs";
import { Page, ToPage } from "../types";

/**
 * 转换为Page数据
 * @public
 */
export function toPage<T = any>(): ToPage<T> {
  return pipe(
    map((page: Page) => {
      const { list: data, total, ...rest } = page;
      return { success: true, total, data, ...rest };
    }),
    catchError(() => of({ success: true, total: 0, data: [] }))
  );
}
