import { Option, ToOptionPipe } from "../types";
import { from, map, mergeMap, pipe, toArray } from "rxjs";

/**
 * 转换为Option数据
 * @public
 */
export function toOption(): ToOptionPipe<string>;
/**
 * 转换为Option数据
 * @param field - 作为value和label的字段值
 * @public
 */
export function toOption(field: string): ToOptionPipe;
/**
 * 转换为Option数据
 * @param config - 指定value和label对应的字段
 * @param persist - 是否保留原有字段
 * @public
 */
export function toOption<T>(config: Option, persist?: boolean): ToOptionPipe<T>;
export function toOption<T = any>(field?: string | Option, persist = false) {
  if (typeof field === "string") {
    return pipe(
      mergeMap((x: any[]) =>
        from(x).pipe(
          map((x) => x[field]),
          map(string2Option),
          toArray()
        )
      )
    );
  } else if (typeof field === "object") {
    return pipe(
      mergeMap((x: any[]) =>
        from(x).pipe(
          map((item) => {
            if (persist) {
              return ({
                value: item[field.value],
                label: item[field.label],
                ...item
              });
            }
            return ({
              value: item[field.value],
              label: item[field.label],
            });
          }),
          toArray()
        )
      )
    );
  }
  return pipe(
    mergeMap((x: string[]) => from(x).pipe(map(string2Option), toArray()))
  );

  function string2Option(x: string) {
    return { value: x, label: x };
  }
}
