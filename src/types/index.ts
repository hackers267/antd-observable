import type { Observable, ObservedValueOf, OperatorFunction } from "rxjs";

/**
 * @public
 */
export type Option = {
  value: string;
  label: string;
};
/**
 * @public
 */
export type ToOptionPipe<T = any> = OperatorFunction<
  T[],
  ObservedValueOf<Observable<Option[]>>
>;
/**
 * @public
 */
export type Page<T = any> = {
  list: T[];
  total: number;
};

/**
 * @public
 */
type PageResult<T> = { success: boolean; data: T[]; total: number };

/**
 * @public
 */
export type ToDesc<T> = OperatorFunction<T, { data?: T; success: boolean }>;
/**
 * @public
 */
export type ToPage<T> = OperatorFunction<Page<T>, PageResult<T>>;
/**
 * @public
 */
export type ToVirtualPage<T> = OperatorFunction<T[] | undefined, PageResult<T>>;
/**
 * @public
 */
export type Sum = OperatorFunction<number, number>;
/**
 * @public
 */
export type SumBy = OperatorFunction<Record<string, any>, number>;
/**
 * @public
 */
export type PickData<T = any> = OperatorFunction<{ [props: string]: T }, any>;
