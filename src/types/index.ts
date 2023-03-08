import type { Observable, ObservedValueOf, OperatorFunction } from "rxjs";

/**
 * Option类型
 * @public
 */
export type Option = {
  value: string;
  label: string;
};
/**
 * ToOptionPipe类型
 * @public
 */
export type ToOptionPipe<T = any> = OperatorFunction<
  T[],
  ObservedValueOf<Observable<Option[]>>
>;
/**
 * Page类型
 * @public
 */
export type Page<T = any> = {
  list: T[];
  total: number;
};

/**
 * Page的返回结果类型
 * @public
 */
type PageResult<T> = { success: boolean; data: T[]; total: number };

/**
 * ToDesc函数的返回值类型
 * @public
 */
export type ToDesc<T> = OperatorFunction<T, { data?: T; success: boolean }>;
/**
 * ToPage函数的返回值类型
 * @public
 */
export type ToPage<T> = OperatorFunction<Page<T>, PageResult<T>>;
/**
 * ToVirtualPage函数的返回值类型
 * @public
 */
export type ToVirtualPage<T> = OperatorFunction<T[] | undefined, PageResult<T>>;
/**
 * Sum函数的返回值类型
 * @public
 */
export type Sum = OperatorFunction<number, number>;
/**
 * SumBy函数的返回值类型
 * @public
 */
export type SumBy = OperatorFunction<Record<string, any>, number>;
/**
 * PickData函数的返回值类型
 * @public
 */
export type PickData<T = any> = OperatorFunction<{ [props: string]: T }, any>;
