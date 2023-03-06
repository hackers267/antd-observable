import { map, pipe } from "rxjs";
import { PickData } from "../types";

/**
 * 提取data属性
 * @public
 */
export function pickData(): PickData {
  return pipe(map<{ data?: any }, any>((x) => x.data));
}
