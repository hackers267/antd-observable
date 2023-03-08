import { map, pipe } from "rxjs";
import { PickData } from "../types";

/**
 * 提取data属性
 * @public
 * @param field - 需要提取的字段 @defaultValue ’data‘
 */
export function pickData<T = any>(field: string = "data"): PickData {
  return pipe(map<{ [prop: string]: T }, T>((x) => x[field]));
}
